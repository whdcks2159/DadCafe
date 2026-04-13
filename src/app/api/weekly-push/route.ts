import { NextResponse } from 'next/server';
import { adminDb, adminMessaging } from '@/lib/firebase/admin';
import { getWeekInfo, calcCurrentWeek } from '@/data/pregnancyWeeks';

// Vercel Cron: 매주 월요일 오전 9시 KST (= 0 0 * * 1 UTC)

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const today = new Date().toISOString().split('T')[0];

  try {
    // 1. 임신 중인 아기 전체 조회 (collection group)
    const babiesSnap = await adminDb
      .collectionGroup('babies')
      .where('status', '==', 'pregnant')
      .get();

    if (babiesSnap.empty) return NextResponse.json({ sent: 0 });

    // 2. uid → dueDate 매핑 (첫 번째 임신 아기만)
    const uidDueDateMap = new Map<string, string>();
    for (const docSnap of babiesSnap.docs) {
      const data = docSnap.data();
      if (!data.dueDate) continue;
      const uid = docSnap.ref.parent.parent?.id;
      if (uid && !uidDueDateMap.has(uid)) {
        uidDueDateMap.set(uid, data.dueDate as string);
      }
    }

    if (uidDueDateMap.size === 0) return NextResponse.json({ sent: 0 });

    // 3. 각 uid의 fcmToken 조회 (getAll 배치)
    const uids = Array.from(uidDueDateMap.keys());
    const userRefs = uids.map((uid) => adminDb.collection('users').doc(uid));
    const userDocs = await adminDb.getAll(...userRefs);

    // 4. token + week 목록 구성
    const entries: { token: string; week: number }[] = [];
    for (const userDoc of userDocs) {
      if (!userDoc.exists) continue;
      const fcmToken = userDoc.data()?.fcmToken as string | undefined;
      if (!fcmToken) continue;
      const dueDate = uidDueDateMap.get(userDoc.id);
      if (!dueDate) continue;
      entries.push({ token: fcmToken, week: calcCurrentWeek(dueDate) });
    }

    if (entries.length === 0) return NextResponse.json({ sent: 0, message: 'no tokens' });

    // 5. 주차별 그룹핑 → FCM 발송
    const weekGroups = new Map<number, string[]>();
    for (const { token, week } of entries) {
      const list = weekGroups.get(week) ?? [];
      list.push(token);
      weekGroups.set(week, list);
    }

    let totalSent = 0;
    const failures: { week: number; failCount: number }[] = [];

    for (const [week, tokenList] of Array.from(weekGroups.entries())) {
      const info = getWeekInfo(week);
      const title = `${week}주차 아빠 할 일`;
      const body = `아기가 ${info.sizeLabel}이에요. ${info.dadTip}`;

      // sendEachForMulticast 최대 500개 단위
      for (let i = 0; i < tokenList.length; i += 500) {
        const batch = tokenList.slice(i, i + 500);
        const result = await adminMessaging.sendEachForMulticast({
          tokens: batch,
          notification: { title, body },
          data: { href: '/growth-calendar', week: String(week), title, body },
          webpush: {
            notification: {
              title,
              body,
              icon: '/icons/icon-192x192.png',
              badge: '/icons/icon-72x72.png',
            },
            fcmOptions: { link: 'https://dadcafe.vercel.app/growth-calendar' },
          },
        });
        totalSent += result.successCount;
        if (result.failureCount > 0) failures.push({ week, failCount: result.failureCount });
      }
    }

    // 6. 실패 로깅 (Cron 10초 타임아웃 고려 — best-effort)
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
