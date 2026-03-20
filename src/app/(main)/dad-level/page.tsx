'use client';

import { useState } from 'react';
import TopHeader from '@/components/layout/TopHeader';
import { QUIZ_QUESTIONS, QUIZ_RESULTS, calculateDadLevel } from '@/data/dadLevelQuiz';
import { useAuth } from '@/context/AuthContext';
import { upsertUserProfile } from '@/lib/firebase/firestore';
import { ChevronRight, RotateCcw } from 'lucide-react';
import type { DadLevel } from '@/types';

type Phase = 'intro' | 'quiz' | 'result';

export default function DadLevelPage() {
  const { user } = useAuth();
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<DadLevel | null>(null);

  const selectAnswer = (questionId: string, score: number) => {
    const next = { ...answers, [questionId]: score };
    setAnswers(next);
    if (currentQ + 1 >= QUIZ_QUESTIONS.length) {
      const level = calculateDadLevel(next);
      setResult(level);
      if (user) {
        upsertUserProfile({ uid: user.uid, dadLevel: level });
      }
      setPhase('result');
    } else {
      setCurrentQ((c) => c + 1);
    }
  };

  const reset = () => {
    setPhase('intro');
    setCurrentQ(0);
    setAnswers({});
    setResult(null);
  };

  const progress = ((currentQ) / QUIZ_QUESTIONS.length) * 100;

  if (phase === 'intro') {
    return (
      <>
        <TopHeader title="아빠 레벨 테스트" />
        <div className="px-5 py-10 flex flex-col items-center text-center">
          <span className="text-7xl mb-5">🧪</span>
          <h1 className="text-2xl font-black text-slate-800 mb-3">
            나는 어떤 아빠일까?
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            7가지 질문으로 현재 당신의 육아 준비 수준을 알아보세요.<br />
            솔직하게 답할수록 도움이 됩니다.
          </p>
          <div className="w-full space-y-3 mb-8 text-left">
            {['준비 중인 아빠 🌱', '준비된 아빠 💪', '베테랑 아빠 ⭐'].map((level) => (
              <div key={level} className="flex items-center gap-3 bg-slate-50 rounded-2xl px-4 py-3">
                <span className="text-sm font-bold text-slate-700">{level}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPhase('quiz')}
            className="w-full bg-brand-500 text-white font-black py-4 rounded-2xl text-lg flex items-center justify-center gap-2 hover:bg-brand-600 transition-colors active:scale-[0.98]"
          >
            테스트 시작 <ChevronRight size={20} />
          </button>
        </div>
      </>
    );
  }

  if (phase === 'quiz') {
    const question = QUIZ_QUESTIONS[currentQ];
    return (
      <>
        <TopHeader title={`질문 ${currentQ + 1} / ${QUIZ_QUESTIONS.length}`} />
        {/* Progress */}
        <div className="h-1.5 bg-slate-100">
          <div
            className="h-full bg-brand-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="px-5 py-8">
          <p className="text-xs font-bold text-brand-500 mb-3">Q{currentQ + 1}</p>
          <h2 className="text-lg font-black text-slate-800 mb-8 leading-snug">
            {question.questionKo}
          </h2>
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => selectAnswer(question.id, option.score)}
                className="w-full text-left bg-white border-2 border-slate-200 rounded-2xl px-4 py-4 text-sm font-medium text-slate-700 hover:border-brand-400 hover:bg-brand-50 transition-all active:scale-[0.98]"
              >
                {option.textKo}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (phase === 'result' && result) {
    const res = QUIZ_RESULTS[result];
    return (
      <>
        <TopHeader title="결과" />
        <div className="px-5 py-10 flex flex-col items-center text-center">
          <div className="text-8xl mb-4 animate-pop">{res.badgeEmoji}</div>
          <p className="text-xs font-bold text-brand-500 mb-2 uppercase tracking-wide">
            나의 아빠 레벨
          </p>
          <h1 className="text-2xl font-black text-slate-800 mb-3">{res.titleKo}</h1>
          <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-xs">
            {res.descriptionKo}
          </p>

          <div className="w-full bg-slate-50 rounded-2xl p-4 mb-6 text-left">
            <p className="text-xs font-bold text-slate-500 mb-3">추천 행동</p>
            <ul className="space-y-2">
              {res.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-brand-500 font-black">{i + 1}.</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {!user && (
            <p className="text-xs text-slate-400 mb-4">
              로그인하면 결과가 프로필에 저장됩니다.
            </p>
          )}

          <button
            onClick={reset}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700"
          >
            <RotateCcw size={14} /> 다시 테스트하기
          </button>
        </div>
      </>
    );
  }

  return null;
}
