'use client';

import type { MonthlyLog } from '@/types';

interface GrowthMiniChartProps {
  logs: MonthlyLog[];
  currentMonth: number;
}

export default function GrowthMiniChart({ logs, currentMonth }: GrowthMiniChartProps) {
  const withHeight = logs
    .filter((l) => l.heightCm)
    .sort((a, b) => a.monthNumber - b.monthNumber)
    .slice(-6); // 최근 6개월

  const withWeight = logs
    .filter((l) => l.weightKg)
    .sort((a, b) => a.monthNumber - b.monthNumber)
    .slice(-6);

  if (withHeight.length < 2 && withWeight.length < 2) return null;

  const maxHeight = Math.max(...withHeight.map((l) => l.heightCm!));
  const maxWeight = Math.max(...withWeight.map((l) => l.weightKg!));

  return (
    <div className="bg-white rounded-2xl p-4 mb-4 border border-slate-100">
      <div className="text-sm font-bold text-slate-700 mb-3">성장 기록</div>

      {withHeight.length >= 2 && (
        <div className="mb-3">
          <div className="text-xs text-slate-400 mb-1.5">키 (cm)</div>
          <div className="flex items-end gap-1.5 h-14">
            {withHeight.map((log) => {
              const barHeight = Math.round((log.heightCm! / maxHeight) * 100);
              const isLatest = log.monthNumber === withHeight[withHeight.length - 1].monthNumber;
              return (
                <div key={log.monthNumber} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="text-xs text-slate-400 font-medium">{log.heightCm}</div>
                  <div
                    className={`w-full rounded-t-md transition-all ${
                      isLatest ? 'bg-green-500' : 'bg-green-200'
                    }`}
                    style={{ height: `${barHeight}%` }}
                  />
                  <div className="text-xs text-slate-300">{log.monthNumber}m</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {withWeight.length >= 2 && (
        <div>
          <div className="text-xs text-slate-400 mb-1.5">몸무게 (kg)</div>
          <div className="flex items-end gap-1.5 h-14">
            {withWeight.map((log) => {
              const barHeight = Math.round((log.weightKg! / maxWeight) * 100);
              const isLatest = log.monthNumber === withWeight[withWeight.length - 1].monthNumber;
              return (
                <div key={log.monthNumber} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="text-xs text-slate-400 font-medium">{log.weightKg}</div>
                  <div
                    className={`w-full rounded-t-md transition-all ${
                      isLatest ? 'bg-brand-500' : 'bg-brand-200'
                    }`}
                    style={{ height: `${barHeight}%` }}
                  />
                  <div className="text-xs text-slate-300">{log.monthNumber}m</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
