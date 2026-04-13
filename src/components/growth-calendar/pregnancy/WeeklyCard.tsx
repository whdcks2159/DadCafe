'use client';

import { useState } from 'react';
import { getWeekInfo } from '@/data/pregnancyWeeks';
import type { WeeklyLog } from '@/types';
import RecordBottomSheet from '@/components/growth-calendar/shared/RecordBottomSheet';
import { useGrowthCalendar } from '@/context/GrowthCalendarContext';

interface WeeklyCardProps {
  weekNumber: number;
  log: WeeklyLog | undefined;
}

export default function WeeklyCard({ weekNumber, log }: WeeklyCardProps) {
  const { saveWeeklyLog } = useGrowthCalendar();
  const [sheetOpen, setSheetOpen] = useState(false);

  const info = getWeekInfo(weekNumber);
  const hasRecord = !!(log?.memo || (log?.milestones?.length ?? 0) > 0);

  async function handleSave(data: { memo: string; milestones: string[] }) {
    await saveWeeklyLog(weekNumber, data);
  }

  return (
    <>
      <div
        className={`rounded-2xl p-4 mb-3 border transition-colors ${
          hasRecord
            ? 'bg-white border-slate-200'
            : 'bg-slate-50 border-slate-100'
        }`}
      >
        <div className="flex items-start gap-3">
          {/* 타임라인 도트 */}
          <div className="flex flex-col items-center pt-0.5">
            <div
              className={`w-3 h-3 rounded-full flex-shrink-0 ${
                hasRecord ? 'bg-brand-500' : 'bg-slate-300'
              }`}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800 text-sm">{weekNumber}주차</span>
                <span className="text-xs text-slate-400">{info.fruit}</span>
              </div>
              <button
                onClick={() => setSheetOpen(true)}
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  hasRecord
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-500 bg-slate-100'
                }`}
              >
                {hasRecord ? '수정' : '기록'}
              </button>
            </div>

            {hasRecord ? (
              <>
                {log?.memo && (
                  <p className="text-sm text-slate-600 line-clamp-2 mb-2">{log.memo}</p>
                )}
                {log?.milestones && log.milestones.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {log.milestones.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 bg-brand-50 text-brand-600 rounded-full text-xs"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}
                {(log?.checklistDone?.length ?? 0) > 0 && (
                  <div className="mt-1.5 text-xs text-slate-400">
                    할 일 {log!.checklistDone.length}/{info.checklistItems.length} 완료
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-slate-400">기록이 없어요. 한 줄이라도 남겨보세요.</p>
            )}
          </div>
        </div>
      </div>

      {sheetOpen && (
        <RecordBottomSheet
          mode="pregnancy"
          periodLabel={`${weekNumber}주차`}
          initialMemo={log?.memo ?? ''}
          initialMilestones={log?.milestones ?? []}
          onSave={handleSave}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </>
  );
}
