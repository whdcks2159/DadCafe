'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { getBabies, getActiveBabyId, setActiveBabyId } from '@/lib/firebase/firestore';
import type { Baby } from '@/types';

const CACHE_KEY = 'papaplan_babies_cache';

function readCache(uid: string): { babies: Baby[]; activeId: string | null } | null {
  try {
    const raw = localStorage.getItem(`${CACHE_KEY}_${uid}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Date 필드 복원
    parsed.babies = parsed.babies.map((b: Baby) => ({
      ...b,
      createdAt: new Date(b.createdAt),
      updatedAt: new Date(b.updatedAt),
    }));
    return parsed;
  } catch { return null; }
}

function writeCache(uid: string, babies: Baby[], activeId: string | null) {
  try {
    localStorage.setItem(`${CACHE_KEY}_${uid}`, JSON.stringify({ babies, activeId }));
  } catch { /* 무음 */ }
}

interface BabyContextValue {
  babies: Baby[];
  activeBaby: Baby | null;
  loading: boolean;
  setActiveBaby: (babyId: string) => Promise<void>;
  refreshBabies: () => Promise<void>;
}

const BabyContext = createContext<BabyContextValue>({
  babies: [],
  activeBaby: null,
  loading: true,
  setActiveBaby: async () => {},
  refreshBabies: async () => {},
});

export function BabyProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [babies, setBabies] = useState<Baby[]>([]);
  const [activeBabyId, setActiveBabyIdState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshBabies = useCallback(async () => {
    if (!user) {
      setBabies([]);
      setActiveBabyIdState(null);
      setLoading(false);
      return;
    }

    // 캐시 있으면 즉시 노출 (D-day 한 박자 지연 방지)
    const cached = readCache(user.uid);
    if (cached) {
      setBabies(cached.babies);
      setActiveBabyIdState(cached.activeId);
      setLoading(false);
    }

    try {
      const [fetched, activeId] = await Promise.all([
        getBabies(user.uid),
        getActiveBabyId(user.uid),
      ]);
      const resolvedId = activeId ?? fetched[0]?.id ?? null;
      setBabies(fetched);
      setActiveBabyIdState(resolvedId);
      writeCache(user.uid, fetched, resolvedId);
    } catch {
      // Firebase 미초기화 등 에러 시 무음 처리
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    refreshBabies();
  }, [refreshBabies]);

  const setActiveBaby = async (babyId: string) => {
    if (!user) return;
    setActiveBabyIdState(babyId);
    await setActiveBabyId(user.uid, babyId);
    // 캐시도 즉시 업데이트
    writeCache(user.uid, babies, babyId);
  };

  const activeBaby = babies.find((b) => b.id === activeBabyId) ?? babies[0] ?? null;

  return (
    <BabyContext.Provider value={{ babies, activeBaby, loading, setActiveBaby, refreshBabies }}>
      {children}
    </BabyContext.Provider>
  );
}

export const useBaby = () => useContext(BabyContext);
