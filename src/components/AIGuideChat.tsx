'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

interface AIGuideChatProps {
  stage?: string;
}

export default function AIGuideChat({ stage }: AIGuideChatProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const question = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: question }]);
    setLoading(true);

    try {
      const res = await fetch('/api/ai-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, stage }),
      });

      if (!res.ok) {
        const err = await res.json();
        setMessages((prev) => [...prev, { role: 'ai', text: err.error ?? '오류가 발생했습니다.' }]);
        setLoading(false);
        return;
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let aiText = '';
      setMessages((prev) => [...prev, { role: 'ai', text: '' }]);

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        // Parse SSE
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.type === 'content_block_delta' && data.delta?.text) {
                aiText += data.delta.text;
                setMessages((prev) => [
                  ...prev.slice(0, -1),
                  { role: 'ai', text: aiText },
                ]);
              }
            } catch {}
          }
        }
      }
    } catch {
      setMessages((prev) => [...prev, { role: 'ai', text: '연결 오류가 발생했습니다.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-4 w-14 h-14 bg-brand-500 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-600 transition-all active:scale-95 z-40"
      >
        <Bot size={24} className="text-white" />
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-md bg-white rounded-t-3xl shadow-2xl flex flex-col h-[70vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-black text-sm text-slate-800">대디 AI</p>
                  <p className="text-[10px] text-slate-400">육아 질문을 물어보세요</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)}>
                <X size={20} className="text-slate-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <span className="text-4xl block mb-2">💬</span>
                  <p className="text-sm text-slate-500">
                    입덧, 출산 준비, 육아 고민 등<br />
                    무엇이든 물어보세요.
                  </p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-brand-500 text-white rounded-br-sm'
                        : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                    }`}
                  >
                    {msg.text || (loading && i === messages.length - 1 ? '...' : '')}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-slate-100 safe-bottom">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="질문을 입력하세요..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1 bg-slate-50 rounded-full px-4 py-2.5 text-sm focus:outline-none"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center disabled:opacity-40"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
