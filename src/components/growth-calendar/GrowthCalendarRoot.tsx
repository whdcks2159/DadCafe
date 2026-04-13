'use client';

import { useBaby } from '@/context/BabyContext';
import { useGrowthCalendar } from '@/context/GrowthCalendarContext';
import PregnancyHeroCard from './pregnancy/PregnancyHeroCard';
import WeeklyCard from './pregnancy/WeeklyCard';
import BabyHeroCard from './baby/BabyHeroCard';
import MonthlyCard from './baby/MonthlyCard';
import GrowthMiniChart from './baby/GrowthMiniChart';

export default function GrowthCalendarRoot() {
  const { activeBaby } = useBaby();
  const { mode, currentPeriod, weeklyLogs, monthlyLogs, isLoading } = useGrowthCalendar();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
        <div className="text-sm text-slate-400">불러오는 중...</div>
      </div>
    );
  }

  if (mode === 'pregnancy') {
    const logsMap = Object.fromEntries(weeklyLogs.map((l) => [l.weekNumber, l]));
    // 현재 주차부터 4주까지 (출생일 이전) 역순으로 보여줌
    const pastWeeks = Array.from(
      { length: Math.max(0, currentPeriod - 1) },
      (_, i) => currentPeriod - 1 - i
    );

    return (
      <div>
        <PregnancyHeroCard
          currentWeek={currentPeriod}
          babyName={activeBaby?.name}
          log={logsMap[currentPeriod]}
        />

        {pastWeeks.length > 0 && (
          <div className="relative">
            {/* 타임라인 선 */}
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-slate-200 z-0" />

            <div className="text-xs font-medium text-slate-400 mb-3 pl-1">지난 기록</div>
            {pastWeeks.map((week) => (
              <WeeklyCard key={week} weekNumber={week} log={logsMap[week]} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (mode === 'baby') {
    const logsMap = Object.fromEntries(monthlyLogs.map((l) => [l.monthNumber, l]));
    const pastMonths = Array.from(
      { length: Math.max(0, currentPeriod) },
      (_, i) => currentPeriod - i - 1
    );

    return (
      <div>
        <BabyHeroCard
          currentMonth={currentPeriod}
          babyName={activeBaby?.name}
          log={logsMap[currentPeriod]}
        />

        <GrowthMiniChart logs={monthlyLogs} currentMonth={currentPeriod} />

        {pastMonths.length > 0 && (
          <div className="relative">
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-slate-200 z-0" />

            <div className="text-xs font-medium text-slate-400 mb-3 pl-1">지난 기록</div>
            {pastMonths.map((month) => (
              <MonthlyCard key={month} monthNumber={month} log={logsMap[month]} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}
