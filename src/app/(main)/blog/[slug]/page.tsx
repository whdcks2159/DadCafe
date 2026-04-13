import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getAllBlogSlugs, BLOG_POSTS } from '@/data/blogPosts';
import TopHeader from '@/components/layout/TopHeader';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['파파플랜'],
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

/** 간단한 마크다운 렌더러 — ## 헤딩과 단락만 처리 */
function renderContent(content: string) {
  const blocks = content.split('\n\n').filter(Boolean);
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-base font-black text-neutral-900 mt-8 mb-2 leading-snug">
          {block.replace('## ', '')}
        </h2>
      );
    }
    return (
      <p key={i} className="text-sm text-neutral-700 leading-relaxed mb-4">
        {block}
      </p>
    );
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Organization', name: '파파플랜', url: 'https://dadcafe.vercel.app' },
    publisher: {
      '@type': 'Organization',
      name: '파파플랜',
      logo: { '@type': 'ImageObject', url: 'https://dadcafe.vercel.app/icons/icon-192x192.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://dadcafe.vercel.app/blog/${post.slug}` },
    inLanguage: 'ko-KR',
    keywords: ['아빠 육아', post.category, '파파플랜'],
  };

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TopHeader title="블로그" />

      <article className="px-5 py-6 max-w-2xl">
        {/* 카테고리 + 읽기 시간 */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full">
            {post.category}
          </span>
          <span className="text-[10px] text-neutral-400">{post.readingMinutes}분 읽기</span>
        </div>

        {/* 제목 */}
        <h1 className="text-xl font-black text-neutral-900 leading-tight mb-3">
          {post.title}
        </h1>

        {/* 설명 */}
        <p className="text-sm text-neutral-500 leading-relaxed mb-4 pb-4 border-b border-slate-100">
          {post.description}
        </p>

        {/* 날짜 */}
        <p className="text-xs text-neutral-400 mb-6">
          파파플랜 · {formatDate(post.publishedAt)}
        </p>

        {/* 본문 */}
        <div>{renderContent(post.content)}</div>

        {/* 면책 고지 */}
        <div className="mt-10 p-4 bg-slate-50 rounded-2xl">
          <p className="text-xs text-neutral-500 leading-relaxed">
            본 아티클은 일반적인 참고 정보를 제공하며 의학적 진단·처방을 대체하지 않습니다.
            건강 관련 문제는 반드시 전문 의료진과 상담하시기 바랍니다.
          </p>
        </div>
      </article>

      {/* 관련 글 */}
      {related.length > 0 && (
        <section className="px-5 pb-8">
          <p className="text-xs font-bold text-neutral-400 tracking-wide mb-3">관련 아티클</p>
          <div className="space-y-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="flex flex-col gap-1 p-4 border border-slate-100 rounded-2xl hover:border-brand-200 hover:bg-brand-50/30 transition-all active:scale-[0.98]"
              >
                <p className="font-bold text-sm text-neutral-900 leading-snug">{p.title}</p>
                <p className="text-xs text-neutral-500 line-clamp-1">{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 블로그 목록으로 */}
      <div className="px-5 pb-8">
        <Link
          href="/blog"
          className="block text-center py-3 border border-brand-200 text-brand-500 text-sm font-bold rounded-2xl hover:bg-brand-50 transition-colors"
        >
          블로그 목록 보기
        </Link>
      </div>
    </div>
  );
}
