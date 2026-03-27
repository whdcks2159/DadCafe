'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { getBabies, getActiveBabyId, setActiveBabyId } from '@/lib/firebase/firestore';
import type { Baby } from '@/types';

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
    setLoading(true);
    try {
      const [fetched, activeId] = await Promise.all([
        getBabies(user.uid),
        getActiveBabyId(user.uid),
      ]);
      setBabies(fetched);
      // activeId 없으면 첫 번째 아이로 자동 설정
      setActiveBabyIdState(activeId ?? fetched[0]?.id ?? null);
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
  };

  const activeBaby = babies.find((b) => b.id === activeBabyId) ?? babies[0] ?? null;

  return (
    <BabyContext.Provider value={{ babies, activeBaby, loading, setActiveBaby, refreshBabies }}>
      {children}
    </BabyContext.Provider>
  );
}

export const useBaby = () => useContext(BabyContext);
