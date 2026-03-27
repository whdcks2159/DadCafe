'use client';

import { useState } from 'react';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import { useAuth } from '@/context/AuthContext';
import { useBaby } from '@/context/BabyContext';
import { deleteBaby } from '@/lib/firebase/firestore';
import { getBabyAgeLabel, getBabyDisplayName } from '@/lib/baby';
import { CheckCircle2, Trash2, Plus, Baby, Heart } from 'lucide-react';

export default function BabyManagePage() {
  const { user } = useAuth();
  const { babies, activeBaby, setActiveBaby, refreshBabies } = useBaby();
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDelete = async (babyId: string) => {
    if (!user || !confirm('이 아이 정보를 삭제할까요?')) return;
    setDeleting(babyId);
    try {
      await deleteBaby(user.uid, babyId);
      await refreshBabies();
    } finally {
      setDeleting(null);
    }
  };

  const statusLabel = (status: string) =>
    status === 'pregnant' ? '임신 중' : '출생 후';

  const StatusIcon = ({ status }: { status: string }) =>
    status === 'pregnant'
      ? <Heart size={22} className="text-rose-400" />
      : <Baby size={22} className="text-brand-400" />;

  return (
    <>
      <TopHeader title="아이 관리" showBack />

      <div className="px-4 pt-5 pb-10 space-y-4">

        {/* 아이 목록 */}
        {babies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-pastel-blue rounded-full flex items-center justify-center mb-4">
              <Baby size={28} className="text-brand-400" />
            </div>
            <p className="font-bold text-slate-700 mb-1">등록된 아이가 없어요</p>
            <p className="text-sm text-slate-400">아이를 등록하면 맞춤 가이드를 받을 수 있어요.</p>
          </div>
        ) : (
          babies.map((baby) => {
            const isActive = activeBaby?.id === baby.id;
            return (
              <div
                key={baby.id}
                className={`bg-white rounded-3xl border-2 p-4 transition-all ${
                  isActive ? 'border-brand-300 shadow-warm' : 'border-warm-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* 아이콘 */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-brand-100' : 'bg-warm-100'
                  }`}>
                    <StatusIcon status={baby.status} />
                  </div>

                  {/* 정보 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-black text-slate-800">{getBabyDisplayName(baby)}</p>
                      {isActive && (
                        <span className="text-[10px] bg-brand-500 text-white font-bold px-2 py-0.5 rounded-full">
                          현재
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {statusLabel(baby.status)} · {getBabyAgeLabel(baby)}
                    </p>
                  </div>

                  {/* 액션 */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {!isActive && (
                      <button
                        onClick={() => setActiveBaby(baby.id)}
                        className="flex items-center gap-1 text-xs text-brand-500 font-bold bg-brand-50 px-3 py-1.5 rounded-full border border-brand-200 hover:bg-brand-100 transition-colors"
                      >
                        <CheckCircle2 size={13} />
                        선택
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(baby.id)}
                      disabled={deleting === baby.id}
                      className="p-2 rounded-xl text-slate-300 hover:text-red-400 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* 아이 추가 버튼 */}
        <Link
          href="/baby/register"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-3xl border-2 border-dashed border-brand-200 text-brand-500 font-bold text-sm hover:bg-brand-50 transition-colors"
        >
          <Plus size={18} />
          아이 추가하기
        </Link>

      </div>
    </>
  );
}
