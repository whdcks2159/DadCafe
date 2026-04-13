import { NextResponse } from 'next/server';
import { adminDb, adminMessaging } from '@/lib/firebase/admin';
import { getWeekInfo, calcCurrentWeek } from '@/data/pregnancyWeeks';

// Vercel Cron: 매주 월요일 오전 9시 KST (= 0 0 * * 1 UTC)

// 예방접종 일정 (출생 후 D+N일 기준, 7일 이내 도래 시 알림)
const VACCINATION_SCHEDULE = [
  { day: 30,  title: '1개월 예방접종',  body: 'B형간염 2차 맞을 시기예요. 소아과 예약 확인하세요.' },
  { day: 60,  title: '2개월 예방접종',  body: 'DTaP·폴리오·Hib·폐렴구균 1차 맞을 시기예요.' },
  { day: 90,  title: '3개월 예방접종',  body: 'DTaP·폴리오·Hib·폐렴구균 2차 맞을 시기예요.' },
  { day: 120, title: '4개월 예방접종',  body: 'DTaP·폴리오·Hib·폐렴구균 3차 맞을 시기예요.' },
  { day: 180, title: '6개월 예방접종',  body: 'DTaP·폴리오·B형간염 3차 맞을 시기예요.' },
  { day: 270, title: '9개월 건강검진',  body: '9개월 영유아 건강검진 대상이에요. 보건소·소아과 예약하세요.' },
  { day: 365, title: '12개월 예방접종', body: 'MMR·수두·Hib 4차 맞을 시기예요. 돌잔치도 준비하세요!' },
  { day: 548, title: '18개월 예방접종', body: 'DTaP 5차·A형간염 2차 맞을 시기예요.' },
  { day: 730, title: '24개월 건강검진', body: '24개월 영유아 건강검진 시기예요. 언어·운동 발달 체크하세요.' },
];

function getUpcomingVaccination(birthDate: string): { title: string; body: string } | null {
  const birth = new Date(birthDate);
  const today = new Date();
  const daysSinceBirth = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));

  // 이번 주 내(0~7일 후)에 도래하는 일정 확인
  for (const schedule of VACCINATION_SCHEDULE) {
    const daysUntil = schedule.day - daysSinceBirth;
    if (daysUntil >= 0 && daysUntil <= 7) {
      return { title: schedule.title, body: schedule.body };
    }
  }
  return null;
}

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const today = new Date().toISOString().split('T')[0];

  try {
    // 1. 임신 중 + 출생 후 아기 전체 조회
    const babiesSnap = await adminDb.collectionGroup('babies').get();

    if (babiesSnap.empty) return NextResponse.json({ sent: 0 });

    // 2. uid → baby 매핑 (uid당 첫 번째 아기만)
    const uidBabyMap = new Map<string, { status: string; dueDate?: string; birthDate?: string }>();
    for (const docSnap of babiesSnap.docs) {
      const data = docSnap.data();
      const uid = docSnap.ref.parent.parent?.id;
      if (!uid || uidBabyMap.has(uid)) continue;
      if (data.status === 'pregnant' && data.dueDate) {
        uidBabyMap.set(uid, { status: 'pregnant', dueDate: data.dueDate as string });
      } else if (data.status === 'born' && data.birthDate) {
        uidBabyMap.set(uid, { status: 'born', birthDate: data.birthDate as string });
      }
    }

    if (uidBabyMap.size === 0) return NextResponse.json({ sent: 0 });

    // 3. FCM 토큰 일괄 조회
    const uids = Array.from(uidBabyMap.keys());
    const userRefs = uids.map((uid) => adminDb.collection('users').doc(uid));
    const userDocs = await adminDb.getAll(...userRefs);

    // 4. 발송 목록 구성
    interface PushEntry {
      token: string;
      title: string;
      body: string;
      href: string;
    }
    const entries: PushEntry[] = [];

    for (const userDoc of userDocs) {
      if (!userDoc.exists) continue;
      const fcmToken = userDoc.data()?.fcmToken as string | undefined;
      if (!fcmToken) continue;

      const baby = uidBabyMap.get(userDoc.id);
      if (!baby) continue;

      if (baby.status === 'pregnant' && baby.dueDate) {
        const week = calcCurrentWeek(baby.dueDate);
        const info = getWeekInfo(week);
        entries.push({
          token: fcmToken,
          title: `${week}주차 아빠 할 일`,
          body: `아기가 ${info.sizeLabel}이에요. ${info.dadTip}`,
          href: '/growth-calendar',
        });
      } else if (baby.status === 'born' && baby.birthDate) {
        const upcoming = getUpcomingVaccination(baby.birthDate);
        if (!upcoming) continue; // 이번 주 예방접종 없으면 발송 안 함
        entries.push({
          token: fcmToken,
          title: upcoming.title,
          body: upcoming.body,
          href: '/growth-calendar',
        });
      }
    }

    if (entries.length === 0) return NextResponse.json({ sent: 0, message: 'no push targets this week' });

    // 5. FCM 발송 (500개 단위 배치)
    let totalSent = 0;
    const failures: { title: string; failCount: number }[] = [];

    for (let i = 0; i < entries.length; i += 500) {
      const batch = entries.slice(i, i + 500);
      const result = await adminMessaging.sendEachForMulticast({
        tokens: batch.map((e) => e.token),
        notification: { title: batch[0].title, body: batch[0].body },
        webpush: {
          notification: {
            icon: '/icons/icon-192x192.png',
            badge: '/icons/icon-72x72.png',
          },
          fcmOptions: { link: 'https://dadcafe.vercel.app/growth-calendar' },
        },
      });
      totalSent += result.successCount;
      if (result.failureCount > 0) {
        failures.push({ title: batch[0].title, failCount: result.failureCount });
      }
    }

    // 6. 실패 로깅 (best-effort)
    if (failures.length > 0) {
      adminDb.collection('push_failures').doc(today).set(
        { date: today, failures, createdAt: new Date().toISOString() },
        { merge: true }
      ).catch(() => {});
    }

    return NextResponse.json({ sent: totalSent, failures, date: today });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    adminDb.collection('push_failures').doc(today).set(
      { date: today, error: message, createdAt: new Date().toISOString() },
      { merge: true }
    ).catch(() => {});
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
