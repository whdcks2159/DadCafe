'use client';

import { useState, useCallback } from 'react';
import { RefreshCw, Check } from 'lucide-react';
import { upsertUserProfile } from '@/lib/firebase/firestore';
import { useAuth } from '@/context/AuthContext';

// 랜덤 닉네임 재료
const ADJECTIVES = ['든든한', '다정한', '따뜻한', '씩씩한', '멋진', '용감한', '부지런한', '행복한', '웃긴', '진지한'];
const NOUNS = ['아빠', '대디', '파파', '아빠'];
const NATURE = ['파란하늘', '초록숲', '맑은바람', '따뜻한봄', '별빛', '달빛', '노을빛'];

function generateNickname(): string {
  const roll = Math.random();
  if (roll < 0.5) {
    const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    return adj + noun;
  } else {
    const nat = NATURE[Math.floor(Math.random() * NATURE.length)];
    return nat + '아빠';
  }
}

interface Props {
  onComplete: () => void;
}

export default function NicknameSetupModal({ onComplete }: Props) {
  const { user, refreshProfile } = useAuth();
  const [nickname, setNickname] = useState(generateNickname);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const shuffle = useCallback(() => {
    setNickname(generateNickname());
    setError('');
  }, []);

  const handleChange = (v: string) => {
    setNickname(v);
    setError('');
  };

  const handleSubmit = async () => {
    const trimmed = nickname.trim();
    if (!trimmed) { setError('닉네임을 입력해주세요.'); return; }
    if (trimmed.length > 10) { setError('10자 이내로 입력해주세요.'); return; }
    if (!/^[가-힣a-zA-Z0-9]+$/.test(trimmed)) { setError('한글, 영문, 숫자만 사용할 수 있어요.'); return; }
    if (!user) return;

    setLoading(true);
    try {
      await upsertUserProfile({
        uid: user.uid,
        nickname: trimmed,
        nicknameManuallySet: true,
      });
      await refreshProfile();
      onComplete();
    } catch {
      setError('저장에 실패했어요. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center">
      {/* 배경 */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* 모달 */}
      <div className="relative w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl px-6 pt-8 pb-10 mx-auto shadow-2xl">
        {/* 핸들 */}
        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-6 sm:hidden" />

        <h2 className="font-black text-xl text-slate-800 mb-1">닉네임을 설정해요</h2>
        <p className="text-sm text-slate-400 mb-6">
          커뮤니티와 일기에서 이 이름으로 노출돼요.
          <br />아기 이름을 등록하면 자동으로 바뀌기도 해요.
        </p>

        {/* 입력 + 새로고침 */}
        <div className="flex gap-2 mb-2">
          <input
            value={nickname}
            onChange={(e) => handleChange(e.target.value)}
            maxLength={10}
            placeholder="닉네임 입력"
            className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition"
          />
          <button
            onClick={shuffle}
            className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors flex-shrink-0"
            aria-label="다른 닉네임 추천"
          >
            <RefreshCw size={16} className="text-slate-400" />
          </button>
        </div>

        {/* 에러 */}
        {error && <p className="text-xs text-red-500 mb-3">{error}</p>}

        {/* 추천 예시 칩 */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {['지우아빠', '준서대디', '따뜻한아빠', '파란하늘아빠'].map((ex) => (
            <button
              key={ex}
              onClick={() => handleChange(ex)}
              className="text-xs px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full hover:bg-brand-50 hover:text-brand-600 transition-colors"
            >
              {ex}
            </button>
          ))}
        </div>

        {/* 시작하기 */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-brand-500 text-white font-black py-3.5 rounded-2xl hover:bg-brand-600 active:scale-[0.98] transition-all disabled:opacity-60"
        >
          {loading ? '저장 중...' : (
            <>
              <Check size={16} />
              이 닉네임으로 시작할게요
            </>
          )}
        </button>
      </div>
    </div>
  );
}
