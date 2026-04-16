'use client';

import { useState } from 'react';
import { getMonthInfo } from '@/data/babyMonths';
import type { MonthlyLog } from '@/types';
import RecordBottomSheet from '@/components/growth-calendar/shared/RecordBottomSheet';
import { useGrowthCalendar } from '@/context/GrowthCalendarContext';

interface MonthlyCardProps {
  monthNumber: number;
  log: MonthlyLog | undefined;
}

export default function MonthlyCard({ monthNumber, log }: MonthlyCardProps) {
  const { saveMonthlyLog } = useGrowthCalendar();
  const [sheetOpen, setSheetOpen] = useState(false);

  const info = getMonthInfo(monthNumber);
  const hasRecord = !!(
    log?.memo ||
    (log?.milestones?.length ?? 0) > 0 ||
    log?.heightCm ||
    log?.weightKg
  );

  async function handleSave(data: {
    memo: string;
    milestones: string[];
    heightCm?: number | null;
    weightKg?: number | null;
    photoUrls?: string[];
  }) {
    await saveMonthlyLog(monthNumber, data);
  }

  return (
    <>
      <div
        className={`rounded-2xl p-4 mb-3 border transition-colors ${
          hasRecord ? 'bg-white border-neutral-200' : 'bg-neutral-50 border-neutral-100'
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center pt-0.5">
            <div
              className={`w-3 h-3 rounded-full flex-shrink-0 ${
                hasRecord ? 'bg-green-500' : 'bg-neutral-400'
              }`}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900 text-sm">{info.ageLabel}</span>
                {(log?.heightCm || log?.weightKg) && (
                  <span className="text-xs text-neutral-400">
                    {log.heightCm && `${log.heightCm}cm`}
                    {log.heightCm && log.weightKg && ' · '}
                    {log.weightKg && `${log.weightKg}kg`}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSheetOpen(true)}
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  hasRecord
                    ? 'text-green-700 bg-green-50'
                    : 'text-neutral-500 bg-neutral-100'
                }`}
              >
                {hasRecord ? '수정' : '기록'}
              </button>
            </div>

            {hasRecord ? (
              <>
                {log?.photoUrls && log.photoUrls.length > 0 && (
                  <div className="flex gap-1.5 mb-2">
                    {log.photoUrls.slice(0, 3).map((url) => (
                      <img
                        key={url}
                        src={url}
                        alt=""
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                    ))}
                  </div>
                )}
                {log?.memo && (
                  <p className="text-sm text-neutral-700 line-clamp-2 mb-2">{log.memo}</p>
                )}
                {log?.milestones && log.milestones.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {log.milestones.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-neutral-400">기록이 없어요.</p>
            )}
          </div>
        </div>
      </div>

      {sheetOpen && (
        <RecordBottomSheet
          mode="baby"
          periodLabel={info.ageLabel}
          periodNumber={monthNumber}
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
