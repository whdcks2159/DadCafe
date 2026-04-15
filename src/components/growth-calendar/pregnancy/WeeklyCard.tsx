'use client';

import { useState } from 'react';
import { getWeekInfo } from '@/data/pregnancyWeeks';
import type { WeeklyLog } from '@/types';
import RecordBottomSheet from '@/components/growth-calendar/shared/RecordBottomSheet';
import { useGrowthCalendar } from '@/context/GrowthCalendarContext';
import FruitIcon from '@/components/FruitIcon';

interface WeeklyCardProps {
  weekNumber: number;
  log: WeeklyLog | undefined;
}

export default function WeeklyCard({ weekNumber, log }: WeeklyCardProps) {
  const { saveWeeklyLog } = useGrowthCalendar();
  const [sheetOpen, setSheetOpen] = useState(false);

  const info = getWeekInfo(weekNumber);
  const hasRecord = !!(log?.memo || (log?.milestones?.length ?? 0) > 0);

  async function handleSave(data: { memo: string; milestones: string[]; photoUrls?: string[] }) {
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
                <FruitIcon fruit={info.fruit} size={22} className="flex-shrink-0" />
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
                {/* 사진 썸네일 */}
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
          periodNumber={weekNumber}
          initialMemo={log?.memo ?? ''}
          initialMilestones={log?.milestones ?? []}
          initialPhotoUrls={log?.photoUrls ?? []}
          onSave={handleSave}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </>
  );
}
