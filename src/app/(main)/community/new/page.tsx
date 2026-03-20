'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TopHeader from '@/components/layout/TopHeader';
import { useAuth } from '@/context/AuthContext';
import { createPost } from '@/lib/firebase/firestore';
import { Send } from 'lucide-react';

const AVAILABLE_TAGS = ['임신 전', '임신 중', '신생아', '영아기', '입덧', '수면', '수유', '분만', '산후', '체크리스트'];

export default function NewPostPage() {
  const { user, userProfile } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  if (!user) {
    router.push('/profile');
    return null;
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag].slice(0, 3)
    );
  };

  const handleSubmit = async () => {
    if (!title.trim() || !body.trim()) return;
    setSubmitting(true);
    try {
      await createPost({
        authorUid: user.uid,
        authorName: userProfile?.displayName ?? user.displayName ?? '아빠',
        authorPhotoURL: user.photoURL,
        titleKo: title.trim(),
        bodyKo: body.trim(),
        tags: selectedTags,
      });
      router.push('/community');
    } catch (e) {
      alert('오류가 발생했습니다. 다시 시도해주세요.');
      setSubmitting(false);
    }
  };

  return (
    <>
      <TopHeader
        title="글쓰기"
        showBack
        right={
          <button
            onClick={handleSubmit}
            disabled={!title.trim() || !body.trim() || submitting}
            className="flex items-center gap-1.5 bg-brand-500 text-white text-sm font-bold px-3 py-1.5 rounded-xl disabled:opacity-40"
          >
            <Send size={14} />
            올리기
          </button>
        }
      />

      <div className="px-4 py-5 space-y-4">
        <div>
          <label className="text-xs font-bold text-slate-500 mb-1.5 block">제목</label>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={60}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 transition-colors"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-slate-500 mb-1.5 block">내용</label>
          <textarea
            placeholder="아빠들과 경험을 나눠보세요..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={8}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-400 transition-colors resize-none"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-slate-500 mb-1.5 block">
            태그 선택 (최대 3개)
          </label>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
