'use client';

import { useState, useRef, useEffect } from 'react';
import TopHeader from '@/components/layout/TopHeader';
import { Send, Bot, User, Sparkles, ChevronRight } from 'lucide-react';

type StageOption = { label: string; value: string };
const STAGE_OPTIONS: StageOption[] = [
  { label: '임신 준비 중', value: '임신 준비 중' },
  { label: '난임 치료 중', value: '난임 치료 중' },
  { label: '임신 중 (주차 입력)', value: '임신 중' },
  { label: '출산 직후 (0~3개월)', value: '출산 직후' },
  { label: '영아기 (4~24개월)', value: '영아기' },
];

const QUICK_QUESTIONS = [
  '임신 8주, 남편이 지금 해야 할 것 알려줘',
  '난임 6개월째인데 남편으로서 뭘 더 해야 할까?',
  '아내 입덧이 너무 심한데 내가 어떻게 도와야 해?',
  '출산휴가 20일 어떻게 활용해야 해?',
  '신생아 수면 교육 어떻게 시작해?',
  '배우자 산후우울증 증상, 남편이 할 수 있는 게 뭐야?',
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AiGuidePage() {
  const [stage, setStage] = useState('');
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (q: string) => {
    if (!q.trim() || loading) return;
    const userMsg = q.trim();
    setQuestion('');
    setStarted(true);
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMsg, stage }),
      });

      if (!res.ok) {
        const err = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: err.error ?? '오류가 발생했습니다.' },
        ]);
        return;
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';
      let buffer = '';
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const data = line.slice(6).trim();
            try {
              const parsed = JSON.parse(data);
              if (parsed.type === 'content_block_delta' && parsed.delta?.type === 'text_delta') {
                assistantText += parsed.delta.text;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { role: 'assistant', content: assistantText };
                  return updated;
                });
              } else if (parsed.type === 'message_stop') {
                break;
              }
            } catch {}
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: '네트워크 오류가 발생했습니다. 다시 시도해주세요.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <TopHeader title="AI 맞춤 플랜" />

      {!started ? (
        /* ── 인트로 화면 ── */
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {/* 헤더 */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-brand-700 to-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Bot size={32} className="text-white" />
            </div>
            <h1 className="font-black text-xl text-slate-800 mb-1">파파플랜 AI</h1>
            <p className="text-sm text-slate-500 leading-relaxed">
              지금 상황을 알려주면<br />
              아빠가 해야 할 것을 맞춤으로 알려드립니다
            </p>
          </div>

          {/* 단계 선택 */}
          <div className="mb-5">
            <p className="text-xs font-black text-slate-500 mb-2">지금 단계를 선택하세요 (선택)</p>
            <div className="flex flex-wrap gap-2">
              {STAGE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setStage(stage === opt.value ? '' : opt.value)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                    stage === opt.value
                      ? 'bg-brand-500 text-white'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 빠른 질문 */}
          <div className="mb-6">
            <p className="text-xs font-black text-slate-500 mb-2">이런 것들을 물어볼 수 있어요</p>
            <div className="space-y-2">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="w-full flex items-center gap-2 bg-white border border-slate-100 rounded-xl px-3 py-2.5 text-left hover:border-brand-200 hover:bg-brand-50 transition-all active:scale-[0.99]"
                >
                  <Sparkles size={13} className="text-brand-400 flex-shrink-0" />
                  <p className="text-sm text-slate-700 flex-1">{q}</p>
                  <ChevronRight size={14} className="text-slate-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* ── 대화 화면 ── */
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {/* 아바타 */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'assistant'
                  ? 'bg-gradient-to-br from-brand-700 to-brand-500'
                  : 'bg-slate-200'
              }`}>
                {msg.role === 'assistant'
                  ? <Bot size={16} className="text-white" />
                  : <User size={16} className="text-slate-500" />
                }
              </div>
              {/* 말풍선 */}
              <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === 'assistant'
                  ? 'bg-white border border-slate-100 text-slate-800'
                  : 'bg-brand-500 text-white'
              }`}>
                {msg.content || (loading && i === messages.length - 1 ? (
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                ) : '')}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      )}

      {/* 입력창 */}
      <div className="px-4 py-3 bg-white border-t border-slate-100">
        <div className="flex items-center gap-2 bg-slate-50 rounded-2xl px-4 py-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(question)}
            placeholder="지금 상황을 자유롭게 물어보세요"
            className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
            disabled={loading}
          />
          <button
            onClick={() => sendMessage(question)}
            disabled={!question.trim() || loading}
            className="w-8 h-8 bg-brand-500 rounded-xl flex items-center justify-center disabled:opacity-30 transition-opacity active:scale-90"
          >
            <Send size={15} className="text-white" />
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-400 mt-1.5">
          AI 답변은 참고용입니다. 의학적 판단은 전문의와 상담하세요.
        </p>
      </div>
    </div>
  );
}
