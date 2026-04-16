'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, ChevronRight, ArrowRight, Clock } from 'lucide-react';
import Fuse from 'fuse.js';
import {
  buildSearchIndex,
  normalizeQuery,
  POPULAR_KEYWORDS,
  type SearchItem,
} from '@/data/searchIndex';

const fuse = new Fuse(buildSearchIndex(), {
  keys: [
    { name: 'titleKo', weight: 0.5 },
    { name: 'summaryKo', weight: 0.3 },
    { name: 'keywords', weight: 0.2 },
  ],
  threshold: 0.45,
  includeScore: true,
  minMatchCharLength: 1,
  useExtendedSearch: false,
});

const HISTORY_KEY = 'papaplan_search_history';
const MAX_HISTORY = 8;

function loadHistory(): string[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history: string[]) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch {}
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHistory(loadHistory());
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  const addToHistory = useCallback((q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setHistory((prev) => {
      const deduped = [trimmed, ...prev.filter((h) => h !== trimmed)].slice(0, MAX_HISTORY);
      saveHistory(deduped);
      return deduped;
    });
  }, []);

  const removeFromHistory = (item: string) => {
    setHistory((prev) => {
      const next = prev.filter((h) => h !== item);
      saveHistory(next);
      return next;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    saveHistory([]);
  };

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const normalized = normalizeQuery(q);
    const raw = fuse.search(normalized, { limit: 7 });
    setResults(raw.map((r) => r.item));
  }, []);

  const handleChip = (kw: string) => {
    handleSearch(kw);
    inputRef.current?.focus();
  };

  const handleResultClick = () => {
    addToHistory(query);
    onClose();
  };

  if (!isOpen) return null;

  const hasResults = results.length > 0;
  const isSearching = query.trim().length > 0;
  const suggestedWhenEmpty = POPULAR_KEYWORDS.filter((k) => k !== query).slice(0, 6);

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white">
      {/* ── 검색 입력 헤더 ── */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-100 bg-white">
        <Search size={18} className="text-neutral-400 flex-shrink-0" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="지금 상황을 입력하세요  (예: 울음, 열, 안 자요)"
          className="flex-1 text-[15px] text-neutral-900 placeholder:text-neutral-400 outline-none bg-transparent caret-brand-500"
        />
        {query.length > 0 && (
          <button
            onClick={() => handleSearch('')}
            className="p-1 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="지우기"
          >
            <X size={16} className="text-neutral-400" />
          </button>
        )}
        <button
          onClick={onClose}
          className="text-sm text-neutral-500 px-2 py-1 rounded-lg hover:bg-neutral-100 transition-colors ml-1 flex-shrink-0"
        >
          취소
        </button>
      </div>

      {/* ── 스크롤 영역 ── */}
      <div className="flex-1 overflow-y-auto">
        {/* 입력 전: 최근 검색 + 추천 키워드 칩 */}
        {!isSearching && (
          <div className="px-4 pt-5 space-y-5">
            {/* 최근 검색 */}
            {history.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                    최근 검색
                  </p>
                  <button
                    onClick={clearHistory}
                    className="text-[11px] text-neutral-400 hover:text-neutral-600 transition-colors"
                  >
                    전체 삭제
                  </button>
                </div>
                <div className="space-y-1">
                  {history.map((h) => (
                    <div key={h} className="flex items-center gap-2 group">
                      <button
                        onClick={() => handleChip(h)}
                        className="flex items-center gap-2.5 flex-1 py-2 text-left"
                      >
                        <Clock size={13} className="text-neutral-400 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{h}</span>
                      </button>
                      <button
                        onClick={() => removeFromHistory(h)}
                        className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full hover:bg-neutral-100"
                        aria-label="삭제"
                      >
                        <X size={12} className="text-neutral-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 추천 키워드 */}
            <div>
              <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
                아빠들이 자주 찾는 상황
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_KEYWORDS.map((kw) => (
                  <button
                    key={kw}
                    onClick={() => handleChip(kw)}
                    className="px-3.5 py-1.5 bg-neutral-50 hover:bg-brand-50 text-neutral-700 hover:text-brand-600 text-sm rounded-full border border-neutral-200 hover:border-brand-200 transition-colors"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 검색 결과 있음 */}
        {isSearching && hasResults && (
          <div className="px-4 pt-4 pb-6 space-y-3">
            <p className="text-[11px] text-neutral-400">
              <span className="font-bold text-neutral-700">&ldquo;{query}&rdquo;</span> 관련 가이드{' '}
              {results.length}개
            </p>
            {results.map((item) => (
              <SearchResultCard key={item.id} item={item} onClose={handleResultClick} />
            ))}

          </div>
        )}

        {/* 검색 결과 없음 */}
        {isSearching && !hasResults && (
          <div className="px-4 pt-12 pb-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
              <Search size={24} className="text-neutral-400" />
            </div>
            <p className="font-bold text-neutral-900 mb-1">딱 맞는 가이드가 없네요.</p>
            <p className="text-sm text-neutral-400 mb-6">혹시 이걸 찾으셨나요?</p>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {suggestedWhenEmpty.map((kw) => (
                <button
                  key={kw}
                  onClick={() => handleChip(kw)}
                  className="px-3.5 py-1.5 bg-neutral-50 text-neutral-700 text-sm rounded-full border border-neutral-200 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors"
                >
                  {kw}
                </button>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

/* ── 결과 카드 ── */
function SearchResultCard({
  item,
  onClose,
}: {
  item: SearchItem;
  onClose: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="flex flex-col bg-white border border-neutral-100 rounded-2xl p-4 shadow-sm active:bg-neutral-50 hover:border-brand-200 transition-colors"
    >
      {/* 태그 + 제목 */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex-1">
          <span className="inline-block text-[10px] font-bold text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full mb-1.5">
            {item.tagLabel}
          </span>
          <h3 className="font-bold text-neutral-900 text-sm leading-snug">{item.titleKo}</h3>
        </div>
        <ChevronRight size={16} className="text-neutral-400 flex-shrink-0 mt-1" />
      </div>

      {/* 행동 스텝 미리보기 */}
      {item.previewSteps.length > 0 && (
        <div className="space-y-1.5 mb-3">
          {item.previewSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-600 text-[9px] font-black flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-xs text-neutral-700 leading-relaxed">{step}</span>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-brand-500 font-semibold">지금 바로 할 수 있어요 →</p>
    </Link>
  );
}
