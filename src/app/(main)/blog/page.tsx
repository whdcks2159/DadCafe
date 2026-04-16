import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogPosts';
import TopHeader from '@/components/layout/TopHeader';

export const metadata: Metadata = {
  title: '블로그 — 아빠 육아 아티클',
  description: '신생아 황달, 아빠 산후우울증, 임신 중 아빠 역할 등 예비아빠·초보아빠를 위한 심층 육아 아티클 모음',
  openGraph: {
    title: '파파플랜 블로그 — 아빠 육아 아티클',
    description: '예비아빠·초보아빠를 위한 심층 육아 아티클',
  },
};

const CATEGORY_COLOR: Record<string, string> = {
  '신생아 건강': 'bg-blue-100 text-blue-700',
  '아빠 심리':   'bg-violet-100 text-violet-700',
  '출산 준비':   'bg-emerald-100 text-emerald-700',
  '임신 가이드': 'bg-rose-100 text-rose-700',
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

export default function BlogPage() {
  const posts = BLOG_POSTS.slice().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="min-h-screen bg-white">
      <TopHeader title="블로그" />

      <div className="px-5 py-6">
        <h1 className="text-xl font-black text-neutral-900 mb-1">아빠 육아 아티클</h1>
        <p className="text-sm text-neutral-500 mb-6">
          임신·출산·육아의 모든 순간, 아빠 시각에서 깊이 있게 다룹니다.
        </p>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-neutral-100 rounded-2xl p-5 hover:border-brand-200 hover:bg-brand-50/30 transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${CATEGORY_COLOR[post.category] ?? 'bg-neutral-100 text-neutral-700'}`}
                >
                  {post.category}
                </span>
                <span className="text-[10px] text-neutral-400">{post.readingMinutes}분 읽기</span>
              </div>
              <h2 className="font-black text-sm text-neutral-900 mb-1 leading-snug">
                {post.title}
              </h2>
              <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                {post.description}
              </p>
              <p className="text-[10px] text-neutral-400 mt-2">{formatDate(post.publishedAt)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
