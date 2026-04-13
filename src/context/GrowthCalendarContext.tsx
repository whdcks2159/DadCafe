'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useBaby } from '@/context/BabyContext';
import { useAuth } from '@/context/AuthContext';
import type { WeeklyLog, MonthlyLog } from '@/types';
import {
  getWeeklyLogs,
  getMonthlyLogs,
  upsertWeeklyLog,
  upsertMonthlyLog,
} from '@/lib/firebase/firestore';
import { calcCurrentWeek } from '@/data/pregnancyWeeks';
import { calcCurrentMonth } from '@/data/babyMonths';

export type CalendarMode = 'pregnancy' | 'baby' | null;

interface GrowthCalendarContextValue {
  mode: CalendarMode;
  currentPeriod: number; // week number or month number
  weeklyLogs: WeeklyLog[];
  monthlyLogs: MonthlyLog[];
  isLoading: boolean;
  saveWeeklyLog: (
    weekNumber: number,
    data: Partial<Omit<WeeklyLog, 'weekNumber' | 'createdAt' | 'updatedAt'>>
  ) => Promise<void>;
  saveMonthlyLog: (
    monthNumber: number,
    data: Partial<Omit<MonthlyLog, 'monthNumber' | 'createdAt' | 'updatedAt'>>
  ) => Promise<void>;
  refresh: () => Promise<void>;
}

const GrowthCalendarContext = createContext<GrowthCalendarContextValue | null>(null);

export function GrowthCalendarProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { activeBaby } = useBaby();

  const [weeklyLogs, setWeeklyLogs] = useState<WeeklyLog[]>([]);
  const [monthlyLogs, setMonthlyLogs] = useState<MonthlyLog[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const mode: CalendarMode = activeBaby
    ? activeBaby.status === 'pregnant'
      ? 'pregnancy'
      : 'baby'
    : null;

  const currentPeriod = activeBaby
    ? activeBaby.status === 'pregnant' && activeBaby.dueDate
      ? calcCurrentWeek(activeBaby.dueDate)
      : activeBaby.birthDate
      ? calcCurrentMonth(activeBaby.birthDate)
      : 0
    : 0;

  const refresh = useCallback(async () => {
    if (!user || !activeBaby) return;
    setIsLoading(true);
    try {
      if (activeBaby.status === 'pregnant') {
        const logs = await getWeeklyLogs(user.uid, activeBaby.id);
        setWeeklyLogs(logs);
      } else {
        const logs = await getMonthlyLogs(user.uid, activeBaby.id);
        setMonthlyLogs(logs);
      }
    } catch (e) {
      console.error('GrowthCalendar fetch error', e);
    } finally {
      setIsLoading(false);
    }
  }, [user, activeBaby]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const saveWeeklyLog = useCallback(
    async (
      weekNumber: number,
      data: Partial<Omit<WeeklyLog, 'weekNumber' | 'createdAt' | 'updatedAt'>>
    ) => {
      if (!user || !activeBaby) return;
      await upsertWeeklyLog(user.uid, activeBaby.id, weekNumber, data);
      await refresh();
    },
    [user, activeBaby, refresh]
  );

  const saveMonthlyLog = useCallback(
    async (
      monthNumber: number,
      data: Partial<Omit<MonthlyLog, 'monthNumber' | 'createdAt' | 'updatedAt'>>
    ) => {
      if (!user || !activeBaby) return;
      await upsertMonthlyLog(user.uid, activeBaby.id, monthNumber, data);
      await refresh();
    },
    [user, activeBaby, refresh]
  );

  return (
    <GrowthCalendarContext.Provider
      value={{
        mode,
        currentPeriod,
        weeklyLogs,
        monthlyLogs,
        isLoading,
        saveWeeklyLog,
        saveMonthlyLog,
        refresh,
      }}
    >
      {children}
    </GrowthCalendarContext.Provider>
  );
}

export function useGrowthCalendar() {
  const ctx = useContext(GrowthCalendarContext);
  if (!ctx) throw new Error('useGrowthCalendar must be used inside GrowthCalendarProvider');
  return ctx;
}
