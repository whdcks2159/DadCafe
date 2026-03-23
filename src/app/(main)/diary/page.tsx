'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import { useAuth } from '@/context/AuthContext';
import { getDiaryEntries } from '@/lib/firebase/firestore';
import type { DiaryEntry } from '@/types';
import { Plus, BookHeart, ChevronRight, Camera, Video, Sparkles } from 'lucide-react';

const EMOTION_LABELS: Record<string, string> = {
  love: '사랑스러워', proud: '뿌듯해', tired: '지쳐',
  worried: '걱정돼', happy: '행복해', grateful: '감사해',
};

const ACTION_LABELS: Record<string, string> = {
  feeding: '수유', bath: '목욕', walk: '산책', play: '놀이',
  hospital: '병원', sleep: '재우기', milestone: '첫 순간',
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}월 ${d.getDate()}일`;
}

function getMonthKey(dateStr: string) {
  return dateStr.slice(0, 7); // YYYY-MM
}

function formatMonthKey(key: string) {
  const [y, m] = key.split('-');
  return `${y}년 ${parseInt(m)}월`;
}

function getOneMonthAgoDate() {
  const d = new Date();
  d.setMonth(d.getMonth() - 1);
  return d.toISOString().slice(0, 10);
}

export default function DiaryPage() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    getDiaryEntries(user.uid).then((data) => {
      setEntries(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [user]);

  const oneMonthAgo = getOneMonthAgoDate();
  const retrospective = entries.filter((e) => e.date === oneMonthAgo);

  // Group by month
  const grouped = entries.reduce<Record<string, DiaryEntry[]>>((acc, entry) => {
    const key = getMonthKey(entry.date);
    if (!acc[key]) acc[key] = [];
    acc[key].push(entry);
    return acc;
  }, {});

  const monthKeys = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader title="육아일기" />

      {/* 한 달 전 오늘 */}
      {retrospective.length > 0 && (
        <div className="px-4 pt-4">
          <div className="bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-100 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-amber-500" />
              <p className="text-xs font-black text-amber-700">한 달 전 오늘</p>
            </div>
            {retrospective.map((entry) => (
              <Link key={entry.id} href={`/diary/${entry.id}`} className="block">
                <p className="text-sm text-slate-700 line-clamp-2">{entry.text}</p>
                <p className="text-xs text-slate-400 mt-1">{entry.emotions.map((e) => EMOTION_LABELS[e]).join(' ')}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 일기 목록 */}
      <div className="flex-1 px-4 py-4 space-y-6">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-20">
            <BookHeart size={48} className="text-slate-200 mx-auto mb-3" />
            <p className="font-bold text-slate-400 mb-1">아직 일기가 없어요</p>
            <p className="text-sm text-slate-400 mb-5">오늘의 육아 순간을 기록해보세요</p>
            <Link
              href="/diary/new"
              className="inline-flex items-center gap-2 bg-brand-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl"
            >
              <Plus size={16} /> 첫 일기 쓰기
            </Link>
          </div>
        ) : (
          monthKeys.map((monthKey) => (
            <div key={monthKey}>
              <p className="text-xs font-black text-slate-400 mb-3">{formatMonthKey(monthKey)}</p>
              <div className="space-y-2">
                {grouped[monthKey].map((entry) => (
                  <Link
                    key={entry.id}
                    href={`/diary/${entry.id}`}
                    className="flex items-start gap-3 bg-white border border-slate-100 rounded-2xl p-4 hover:border-brand-200 transition-all active:scale-[0.99]"
                  >
                    {/* 미디어 썸네일 or 날짜 */}
                    {entry.mediaList[0] ? (
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 relative">
                        {entry.mediaList[0].type === 'photo' ? (
                          <img src={entry.mediaList[0].url} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-800">
                            <Video size={20} className="text-white" />
                          </div>
                        )}
                        {entry.mediaList.length > 1 && (
                          <div className="absolute bottom-1 right-1 bg-black/50 rounded px-1 text-[9px] text-white font-bold">
                            +{entry.mediaList.length - 1}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-brand-50 flex-shrink-0 flex flex-col items-center justify-center">
                        <p className="text-lg font-black text-brand-500 leading-none">
                          {new Date(entry.date).getDate()}
                        </p>
                        <p className="text-[9px] text-brand-400 font-bold">
                          {['일','월','화','수','목','금','토'][new Date(entry.date).getDay()]}
                        </p>
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-bold text-slate-400">{formatDate(entry.date)}</p>
                        {entry.mediaList[0] && (
                          <span className="flex items-center gap-0.5">
                            {entry.mediaList.some((m) => m.type === 'photo') && <Camera size={11} className="text-slate-300" />}
                            {entry.mediaList.some((m) => m.type === 'video') && <Video size={11} className="text-slate-300" />}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-700 line-clamp-2 leading-snug">{entry.text}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {entry.emotions.slice(0, 3).map((e) => (
                          <span key={e} className="text-[10px] bg-slate-50 text-slate-500 px-1.5 py-0.5 rounded-full">
                            {EMOTION_LABELS[e] ?? e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-slate-300 mt-1 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* FAB */}
      <Link
        href="/diary/new"
        className="fixed bottom-20 right-5 md:bottom-8 w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center shadow-lg hover:bg-brand-600 transition-colors active:scale-95 z-40"
      >
        <Plus size={24} className="text-white" />
      </Link>
    </div>
  );
}
