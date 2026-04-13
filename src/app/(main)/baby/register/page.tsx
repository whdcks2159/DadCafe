'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TopHeader from '@/components/layout/TopHeader';
import { useAuth } from '@/context/AuthContext';
import { useBaby } from '@/context/BabyContext';
import { createBaby, setActiveBabyId, upsertUserProfile } from '@/lib/firebase/firestore';
import FcmPermissionModal from '@/components/FcmPermissionModal';
import { Baby, CircleDot, Heart } from 'lucide-react';
import type { BabyStatus } from '@/types';

export default function BabyRegisterPage() {
  const router = useRouter();
  const { user, userProfile, refreshProfile } = useAuth();
  const { refreshBabies } = useBaby();

  const [status, setStatus] = useState<BabyStatus | null>(null);
  const [date, setDate]     = useState('');
  const [name, setName]     = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError]   = useState('');
  const [showFcmModal, setShowFcmModal] = useState(false);

  const canSubmit = status !== null && date !== '';

  const handleSubmit = async () => {
    if (!user || !canSubmit) return;
    setError('');
    setSaving(true);
    try {
      const babyData = {
        status,
        name: name.trim() || undefined,
        ...(status === 'pregnant' ? { dueDate: date }  : {}),
        ...(status === 'born'     ? { birthDate: date } : {}),
      };
      const babyId = await createBaby(user.uid, babyData);
      await setActiveBabyId(user.uid, babyId);
      await refreshBabies();

      // 아기 이름 있고, 닉네임을 직접 수정한 적 없으면 자동완성
      const babyName = name.trim();
      if (babyName && !userProfile?.nicknameManuallySet) {
        await upsertUserProfile({
          uid: user.uid,
          nickname: `${babyName}아빠`,
          nicknameManuallySet: false,
        });
        await refreshProfile();
      }

      // FCM 알림 권유 (임신 중 / 출생 후 모두)
      setShowFcmModal(true);
    } catch {
      setError('저장 중 오류가 발생했어요. 다시 시도해주세요.');
    } finally {
      setSaving(false);
    }
  };

  /* 날짜 범위: 오늘 기준 ±2년 */
  const today = new Date().toISOString().split('T')[0];
  const twoYearsAgo  = new Date(Date.now() - 730 * 86400000).toISOString().split('T')[0];
  const twoYearsLater = new Date(Date.now() + 730 * 86400000).toISOString().split('T')[0];

  return (
    <>
      {showFcmModal && user && (
        <FcmPermissionModal uid={user.uid} babyStatus={status ?? 'pregnant'} onClose={() => router.push('/')} />
      )}
      <TopHeader title="아이 등록" showBack />

      <div className="px-5 pt-6 pb-10 space-y-8">

        {/* 안내 */}
        <div className="flex items-center gap-3 bg-pastel-blue rounded-3xl p-4 border border-blue-100">
          <div className="w-10 h-10 bg-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Baby size={20} className="text-brand-500" />
          </div>
          <div>
            <p className="font-bold text-sm text-slate-800">아이를 등록해요</p>
            <p className="text-xs text-slate-500 mt-0.5">등록 후 맞춤 가이드와 D-day를 확인할 수 있어요.</p>
          </div>
        </div>

        {/* STEP 1: 상태 선택 */}
        <div className="space-y-3">
          <p className="text-xs font-bold text-slate-400 tracking-wide">STEP 1 · 현재 상태</p>
          <div className="grid grid-cols-2 gap-3">
            {([
              { value: 'pregnant', icon: Heart, label: '임신 중',  desc: '출산 예정일이 있어요' },
              { value: 'born',     icon: Baby,  label: '출생 후',  desc: '아이가 태어났어요' },
            ] as const).map(({ value, icon: Icon, label, desc }) => (
              <button
                key={value}
                onClick={() => { setStatus(value); setDate(''); }}
                className={`flex flex-col items-center gap-2 p-5 rounded-3xl border-2 transition-all ${
                  status === value
                    ? 'border-brand-500 bg-brand-50 shadow-warm'
                    : 'border-warm-200 bg-white hover:border-brand-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${status === value ? 'bg-brand-100' : 'bg-warm-100'}`}>
                  <Icon size={24} className={status === value ? 'text-brand-500' : 'text-slate-400'} />
                </div>
                <p className={`font-bold text-sm ${status === value ? 'text-brand-600' : 'text-slate-700'}`}>
                  {label}
                </p>
                <p className="text-[11px] text-slate-400 text-center leading-tight">{desc}</p>
                {status === value && (
                  <CircleDot size={16} className="text-brand-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 2: 날짜 입력 */}
        {status && (
          <div className="space-y-3 animate-fade-in-up">
            <p className="text-xs font-bold text-slate-400 tracking-wide">
              STEP 2 · {status === 'pregnant' ? '출산 예정일' : '출생일'}
            </p>
            <div className="bg-white rounded-3xl border-2 border-warm-200 p-4">
              <label className="block text-xs text-slate-400 mb-2 font-medium">
                {status === 'pregnant' ? '예정일을 선택해주세요' : '태어난 날짜를 선택해주세요'}
              </label>
              <input
                type="date"
                value={date}
                min={status === 'born' ? twoYearsAgo : today}
                max={status === 'pregnant' ? twoYearsLater : today}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-base font-bold text-slate-800 bg-transparent focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* STEP 3: 이름 입력 (선택) */}
        {status && date && (
          <div className="space-y-3 animate-fade-in-up">
            <p className="text-xs font-bold text-slate-400 tracking-wide">
              STEP 3 · 아이 이름 <span className="font-normal text-slate-300">(선택)</span>
            </p>
            <div className="bg-white rounded-3xl border-2 border-warm-200 p-4 focus-within:border-brand-300 transition-colors">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="우리 아기"
                maxLength={10}
                className="w-full text-base text-slate-800 bg-transparent focus:outline-none placeholder:text-slate-300"
              />
            </div>
            <p className="text-xs text-slate-400 px-1">
              입력하지 않으면 "우리 아기"로 표시돼요.
            </p>
          </div>
        )}

        {/* 에러 메시지 */}
        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        {/* 등록 버튼 */}
        <button
          onClick={handleSubmit}
          disabled={!canSubmit || saving}
          className={`w-full py-4 rounded-3xl font-black text-base transition-all ${
            canSubmit && !saving
              ? 'bg-gradient-to-r from-brand-500 to-sky-400 text-white shadow-warm active:scale-[0.98]'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          {saving ? '등록 중...' : '아이 등록하기'}
        </button>

      </div>
    </>
  );
}
