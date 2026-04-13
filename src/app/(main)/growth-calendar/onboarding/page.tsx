'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useBaby } from '@/context/BabyContext';
import { createBaby } from '@/lib/firebase/firestore';
import FcmPermissionModal from '@/components/FcmPermissionModal';

type Step = 'name' | 'status' | 'date';

export default function GrowthCalendarOnboarding() {
  const router = useRouter();
  const { user } = useAuth();
  const { refreshBabies } = useBaby();

  const [step, setStep] = useState<Step>('name');
  const [babyName, setBabyName] = useState('');
  const [status, setStatus] = useState<'pregnant' | 'born' | null>(null);
  const [dateValue, setDateValue] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showFcmModal, setShowFcmModal] = useState(false);

  const today = new Date().toISOString().slice(0, 10);

  // 출산 예정일 기본값: 오늘 + 20주
  const defaultDueDate = new Date(Date.now() + 20 * 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  async function handleComplete() {
    if (!user || !status || !dateValue) return;
    setIsSaving(true);
    try {
      await createBaby(user.uid, {
        name: babyName.trim() || undefined,
        status,
        dueDate: status === 'pregnant' ? dateValue : undefined,
        birthDate: status === 'born' ? dateValue : undefined,
      });
      await refreshBabies();
      if (status === 'pregnant') {
        setShowFcmModal(true);
      } else {
        router.push('/growth-calendar');
      }
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <>
      {showFcmModal && user && (
        <FcmPermissionModal uid={user.uid} onClose={() => router.push('/growth-calendar')} />
      )}
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full">

        {/* 진행 표시 */}
        <div className="flex gap-1.5 mb-10">
          {(['name', 'status', 'date'] as Step[]).map((s, i) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                ['name', 'status', 'date'].indexOf(step) >= i
                  ? 'bg-brand-500'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>

        {/* Step 1: 아기 이름 (태명) */}
        {step === 'name' && (
          <div>
            <div className="text-2xl font-black text-slate-900 mb-2">
              아기에게 태명이나 이름을 지어줄게요
            </div>
            <div className="text-sm text-slate-500 mb-8">
              나중에 언제든 바꿀 수 있어요
            </div>
            <input
              type="text"
              placeholder="예: 콩이, 민준이, 아기"
              value={babyName}
              onChange={(e) => setBabyName(e.target.value)}
              maxLength={10}
              className="w-full border-2 border-slate-200 focus:border-brand-500 rounded-2xl px-4 py-3.5 text-base outline-none mb-8"
              autoFocus
            />
            <button
              onClick={() => setStep('status')}
              className="w-full bg-brand-500 text-white font-bold py-4 rounded-2xl text-base"
            >
              다음
            </button>
            <button
              onClick={() => setStep('status')}
              className="w-full text-slate-400 text-sm py-3 mt-2"
            >
              건너뛰기
            </button>
          </div>
        )}

        {/* Step 2: 임신 중 / 태어남 */}
        {step === 'status' && (
          <div>
            <div className="text-2xl font-black text-slate-900 mb-2">
              {babyName ? `${babyName}는` : '아기는'} 지금 어디에 있나요?
            </div>
            <div className="text-sm text-slate-500 mb-8">
              상황에 맞는 기록을 보여드릴게요
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={() => setStatus('pregnant')}
                className={`w-full py-5 rounded-2xl border-2 text-left px-5 transition-colors ${
                  status === 'pregnant'
                    ? 'border-brand-500 bg-brand-50'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="font-bold text-slate-900 text-base">아직 뱃속에 있어요</div>
                <div className="text-sm text-slate-500 mt-0.5">임신 주차별 기록</div>
              </button>
              <button
                onClick={() => setStatus('born')}
                className={`w-full py-5 rounded-2xl border-2 text-left px-5 transition-colors ${
                  status === 'born'
                    ? 'border-brand-500 bg-brand-50'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="font-bold text-slate-900 text-base">이미 태어났어요</div>
                <div className="text-sm text-slate-500 mt-0.5">개월별 성장 기록</div>
              </button>
            </div>

            <button
              disabled={!status}
              onClick={() => setStep('date')}
              className="w-full bg-brand-500 text-white font-bold py-4 rounded-2xl text-base disabled:opacity-40"
            >
              다음
            </button>
          </div>
        )}

        {/* Step 3: 날짜 입력 */}
        {step === 'date' && (
          <div>
            <div className="text-2xl font-black text-slate-900 mb-2">
              {status === 'pregnant' ? '출산 예정일을 알려주세요' : '생일을 알려주세요'}
            </div>
            <div className="text-sm text-slate-500 mb-8">
              {status === 'pregnant'
                ? '정확하지 않아도 괜찮아요. 나중에 수정할 수 있어요'
                : '주수 대신 개월 수로 기록을 관리해요'}
            </div>

            <div className="mb-8">
              <label className="text-xs font-medium text-slate-500 mb-2 block">
                {status === 'pregnant' ? '출산 예정일' : '생일'}
              </label>
              <input
                type="date"
                value={dateValue || (status === 'pregnant' ? defaultDueDate : today)}
                onChange={(e) => setDateValue(e.target.value)}
                max={status === 'born' ? today : undefined}
                className="w-full border-2 border-slate-200 focus:border-brand-500 rounded-2xl px-4 py-3.5 text-base outline-none"
              />
            </div>

            <button
              disabled={isSaving || (!dateValue && status === 'born')}
              onClick={() => {
                if (!dateValue) setDateValue(status === 'pregnant' ? defaultDueDate : today);
                handleComplete();
              }}
              className="w-full bg-brand-500 text-white font-bold py-4 rounded-2xl text-base disabled:opacity-40"
            >
              {isSaving ? '저장 중...' : '성장 캘린더 시작하기'}
            </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
