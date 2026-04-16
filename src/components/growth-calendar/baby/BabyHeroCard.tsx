'use client';

import { useState } from 'react';
import { getMonthInfo } from '@/data/babyMonths';
import type { MonthlyLog } from '@/types';
import RecordBottomSheet from '@/components/growth-calendar/shared/RecordBottomSheet';
import { useGrowthCalendar } from '@/context/GrowthCalendarContext';

interface BabyHeroCardProps {
  currentMonth: number;
  babyName?: string;
  log: MonthlyLog | undefined;
}

export default function BabyHeroCard({ currentMonth, babyName, log }: BabyHeroCardProps) {
  const { saveMonthlyLog } = useGrowthCalendar();
  const [sheetOpen, setSheetOpen] = useState(false);

  const info = getMonthInfo(currentMonth);

  async function handleSave(data: {
    memo: string;
    milestones: string[];
    heightCm?: number | null;
    weightKg?: number | null;
    photoUrls?: string[];
  }) {
    await saveMonthlyLog(currentMonth, data);
  }

  return (
    <>
      <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-5 mb-4 border border-green-100">
        {/* 헤더 */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-xs font-medium text-green-600 mb-0.5">우리 아기</div>
            <h2 className="text-2xl font-black text-neutral-900">
              {info.ageLabel}
            </h2>
            {babyName && (
              <div className="text-sm text-neutral-500 mt-0.5">{babyName}의 {currentMonth}번째 달</div>
            )}
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-green-600">{currentMonth}</div>
            <div className="text-xs text-neutral-400">개월</div>
          </div>
        </div>

        {/* 성장 수치 */}
        {(log?.heightCm || log?.weightKg) ? (
          <div className="bg-white rounded-2xl px-4 py-3 mb-4 flex items-center justify-around">
            <div className="text-center">
              <div className="text-xs text-neutral-400 mb-0.5">키</div>
              <div className="text-xl font-black text-neutral-900">
                {log.heightCm ? `${log.heightCm}` : '-'}
                <span className="text-xs font-normal text-neutral-400 ml-0.5">cm</span>
              </div>
            </div>
            <div className="w-px h-8 bg-neutral-100" />
            <div className="text-center">
              <div className="text-xs text-neutral-400 mb-0.5">몸무게</div>
              <div className="text-xl font-black text-neutral-900">
                {log.weightKg ? `${log.weightKg}` : '-'}
                <span className="text-xs font-normal text-neutral-400 ml-0.5">kg</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl px-4 py-3 mb-4">
            <div className="text-sm text-neutral-400 text-center">
              키와 몸무게를 기록해보세요
            </div>
          </div>
        )}

        {/* 발달 팁 */}
        <div className="bg-white rounded-2xl px-4 py-3 mb-4">
          <div className="text-xs font-medium text-green-700 mb-0.5">이 시기 발달</div>
          <div className="text-sm text-neutral-700">{info.developmentTip}</div>
        </div>

        {/* 아빠 팁 */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 mb-4">
          <div className="text-xs font-medium text-amber-700 mb-0.5">아빠 역할</div>
          <div className="text-sm text-amber-900">{info.dadTip}</div>
        </div>

        {/* 마일스톤 힌트 */}
        <div className="mb-4">
          <div className="text-xs font-medium text-neutral-500 mb-1.5">
            이 시기 마일스톤
          </div>
          <div className="flex flex-wrap gap-1.5">
            {info.milestoneHints.map((hint) => (
              <span
                key={hint}
                className="px-2.5 py-1 bg-white border border-neutral-200 text-neutral-500 rounded-full text-xs"
              >
                {hint}
              </span>
            ))}
          </div>
        </div>

        {/* 사진 썸네일 */}
        {log?.photoUrls && log.photoUrls.length > 0 && (
          <div className="flex gap-2 mb-3">
            {log.photoUrls.slice(0, 3).map((url) => (
              <img
                key={url}
                src={url}
                alt="이번 달 사진"
                className="w-16 h-16 rounded-xl object-cover"
              />
            ))}
          </div>
        )}

        {/* 기록 버튼 */}
        <button
          onClick={() => setSheetOpen(true)}
          className="w-full bg-green-600 text-white font-bold py-3 rounded-2xl text-sm"
        >
          {log?.memo || log?.heightCm ? '기록 수정하기' : '이번 달 기록 남기기'}
        </button>

        {/* 기존 메모 */}
        {log?.memo && (
          <div className="mt-3 px-3 py-2.5 bg-white rounded-xl">
            <div className="text-xs text-neutral-400 mb-0.5">남긴 기록</div>
            <div className="text-sm text-neutral-700 line-clamp-2">{log.memo}</div>
          </div>
        )}

        {/* 마일스톤 태그 */}
        {log?.milestones && log.milestones.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {log.milestones.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
              >
                {m}
              </span>
            ))}
          </div>
        )}
      </div>

      {sheetOpen && (
        <RecordBottomSheet
          mode="baby"
          periodLabel={info.ageLabel}
          periodNumber={currentMonth}
          initialMemo={log?.memo ?? ''}
          initialMilestones={log?.milestones ?? []}
          initialHeightCm={log?.heightCm ?? null}
          initialWeightKg={log?.weightKg ?? null}
          initialPhotoUrls={log?.photoUrls ?? []}
          onSave={handleSave}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </>
  );
}
