'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import TopHeader from '@/components/layout/TopHeader';
import { useAuth } from '@/context/AuthContext';
import { getDiaryEntry, deleteDiaryEntry } from '@/lib/firebase/firestore';
import type { DiaryEntry } from '@/types';
import { Trash2, Sparkles, ChevronLeft, ChevronRight, Video, Loader2 } from 'lucide-react';

const EMOTION_LABELS: Record<string, string> = {
  love: '사랑스러워', proud: '뿌듯해', tired: '지쳐',
  worried: '걱정돼', happy: '행복해', grateful: '감사해',
};

const ACTION_LABELS: Record<string, string> = {
  feeding: '수유', bath: '목욕', walk: '산책', play: '놀이',
  sleep: '재우기', hospital: '병원', milestone: '첫 순간',
};

function formatFullDate(dateStr: string) {
  const d = new Date(dateStr);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${days[d.getDay()]})`;
}

export default function DiaryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { user } = useAuth();

  const [entry, setEntry] = useState<DiaryEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [mediaIdx, setMediaIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [summarizing, setSummarizing] = useState(false);
  const [summary, setSummary] = useState('');

  useEffect(() => {
    if (!user || !id) return;
    getDiaryEntry(user.uid, id).then((data) => {
      setEntry(data);
      if (data?.aiSummary) setSummary(data.aiSummary);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [user, id]);

  const handleDelete = async () => {
    if (!user || !entry || !confirm('이 일기를 삭제할까요?')) return;
    setDeleting(true);
    try {
      await deleteDiaryEntry(user.uid, entry.id);
      router.push('/diary');
    } catch {
      alert('삭제에 실패했습니다.');
      setDeleting(false);
    }
  };

  const handleAiSummary = async () => {
    if (!entry) return;
    setSummarizing(true);
    try {
      const res = await fetch('/api/diary-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          entries: [{ date: entry.date, text: entry.text, emotions: entry.emotions, actions: entry.actions }],
          babyAgeMonths: entry.babyAgeMonths,
        }),
      });
      const data = await res.json();
      setSummary(data.summary ?? '');
    } catch {
      alert('AI 요약 생성에 실패했습니다.');
    } finally {
      setSummarizing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <p className="text-slate-400">일기를 찾을 수 없습니다.</p>
        <button onClick={() => router.push('/diary')} className="text-brand-500 text-sm font-bold">
          목록으로
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader
        title={formatFullDate(entry.date)}
        showBack
        right={
          <button onClick={handleDelete} disabled={deleting} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
            {deleting ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
          </button>
        }
      />

      {/* 미디어 캐러셀 */}
      {entry.mediaList.length > 0 && (
        <div className="relative bg-slate-900 aspect-square">
          {entry.mediaList[mediaIdx].type === 'photo' ? (
            <img
              src={entry.mediaList[mediaIdx].url}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={entry.mediaList[mediaIdx].url}
              controls
              className="w-full h-full object-contain"
            />
          )}
          {entry.mediaList.length > 1 && (
            <>
              {mediaIdx > 0 && (
                <button
                  onClick={() => setMediaIdx((i) => i - 1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center"
                >
                  <ChevronLeft size={18} className="text-white" />
                </button>
              )}
              {mediaIdx < entry.mediaList.length - 1 && (
                <button
                  onClick={() => setMediaIdx((i) => i + 1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center"
                >
                  <ChevronRight size={18} className="text-white" />
                </button>
              )}
              {/* 인디케이터 */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
                {entry.mediaList.map((m, i) => (
                  <button
                    key={i}
                    onClick={() => setMediaIdx(i)}
                    className={`rounded-full transition-all ${i === mediaIdx ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
              {/* 타입 배지 */}
              {entry.mediaList[mediaIdx].type === 'video' && (
                <div className="absolute top-3 right-3 bg-black/50 rounded-lg px-2 py-1 flex items-center gap-1">
                  <Video size={11} className="text-white" />
                  <span className="text-[10px] text-white font-bold">동영상</span>
                </div>
              )}
            </>
          )}
        </div>
      )}

      <div className="px-5 py-5 space-y-5">
        {/* 개월 수 */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-black bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full">
            생후 {entry.babyAgeMonths}개월
          </span>
        </div>

        {/* 감정 */}
        {entry.emotions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {entry.emotions.map((e) => (
              <span key={e} className="text-sm bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
                {EMOTION_LABELS[e] ?? e}
              </span>
            ))}
          </div>
        )}

        {/* 활동 */}
        {entry.actions.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.actions.map((a) => (
              <span key={a} className="text-xs bg-slate-800 text-white px-2.5 py-1 rounded-full">
                {ACTION_LABELS[a] ?? a}
              </span>
            ))}
          </div>
        )}

        {/* 본문 */}
        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{entry.text}</p>

        {/* AI 요약 */}
        {summary ? (
          <div className="bg-gradient-to-br from-brand-50 to-blue-50 border border-brand-100 rounded-2xl p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <Sparkles size={13} className="text-brand-500" />
              <p className="text-xs font-black text-brand-600">AI 하루 요약</p>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{summary}</p>
          </div>
        ) : (
          <button
            onClick={handleAiSummary}
            disabled={summarizing}
            className="w-full flex items-center justify-center gap-2 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3 text-sm font-bold text-slate-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 transition-all disabled:opacity-50"
          >
            {summarizing ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <Sparkles size={15} className="text-brand-400" />
            )}
            {summarizing ? 'AI가 요약 중...' : 'AI로 하루 요약하기'}
          </button>
        )}
      </div>
    </div>
  );
}
