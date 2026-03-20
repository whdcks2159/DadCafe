'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TopHeader from '@/components/layout/TopHeader';
import { useAuth } from '@/context/AuthContext';
import { getPosts } from '@/lib/firebase/firestore';
import { Heart, MessageCircle, Plus, Clock } from 'lucide-react';
import type { Post } from '@/types';

function formatDate(d: Date) {
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return '방금 전';
  if (mins < 60) return `${mins}분 전`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}시간 전`;
  return `${Math.floor(hours / 24)}일 전`;
}

// Mock posts for when Firebase isn't configured
const MOCK_POSTS: Post[] = [
  {
    id: '1',
    authorUid: 'mock1',
    authorName: '초보아빠김씨',
    authorPhotoURL: null,
    titleKo: '입덧하는 아내 위해 처음으로 요리 했어요',
    bodyKo: '평생 라면도 못 끓이던 제가 오늘 죽을 끓였습니다. 아내가 맛있다고 해줬는데 눈물 날 뻔했네요...',
    tags: ['pregnancy', '입덧'],
    likeCount: 47,
    commentCount: 12,
    createdAt: new Date(Date.now() - 3600000 * 2),
  },
  {
    id: '2',
    authorUid: 'mock2',
    authorName: '신생아아빠',
    authorPhotoURL: null,
    titleKo: '기저귀 12번 갈았습니다 (자랑)',
    bodyKo: '오늘 아내 재우고 혼자 야간 담당 했는데 기저귀만 12번 간 것 같아요. 생각보다 할 만하더라고요.',
    tags: ['newborn', '기저귀'],
    likeCount: 89,
    commentCount: 23,
    createdAt: new Date(Date.now() - 3600000 * 5),
  },
  {
    id: '3',
    authorUid: 'mock3',
    authorName: '아빠되기준비중',
    authorPhotoURL: null,
    titleKo: '산전 교육 다녀왔습니다 — 강추해요',
    bodyKo: '보건소 산전 교육 무료인거 몰랐어요. 분만 영상도 보고 신생아 목욕도 연습했는데 정말 도움됐습니다.',
    tags: ['pregnant', '산전교육'],
    likeCount: 34,
    commentCount: 8,
    createdAt: new Date(Date.now() - 3600000 * 24),
  },
];

export default function CommunityPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);

  useEffect(() => {
    getPosts(20)
      .then(({ posts: fetched }) => {
        if (fetched.length > 0) setPosts(fetched);
      })
      .catch(() => {/* use mock data */});
  }, []);

  return (
    <>
      <TopHeader
        title="아빠 커뮤니티"
        right={
          user && (
            <Link
              href="/community/new"
              className="flex items-center gap-1 bg-brand-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl"
            >
              <Plus size={14} /> 글쓰기
            </Link>
          )
        }
      />

      <div className="px-4 py-4 space-y-3">
        <p className="text-xs text-slate-400 font-medium">최신 글 {posts.length}개</p>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/community/${post.id}`}
            className="block bg-white rounded-2xl border border-slate-100 p-4 hover:border-brand-200 hover:shadow-sm transition-all"
          >
            {/* Author */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center text-xs font-bold text-brand-600">
                {post.authorName[0]}
              </div>
              <span className="text-xs text-slate-500">{post.authorName}</span>
              <span className="text-xs text-slate-300 ml-auto flex items-center gap-1">
                <Clock size={10} />
                {formatDate(post.createdAt)}
              </span>
            </div>

            {/* Content */}
            <p className="font-bold text-slate-800 text-sm mb-1">{post.titleKo}</p>
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{post.bodyKo}</p>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-3 mt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Heart size={12} /> {post.likeCount}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={12} /> {post.commentCount}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {!user && (
        <div className="mx-4 mt-2 mb-6 bg-slate-50 rounded-2xl p-4 text-center">
          <p className="text-sm text-slate-600 mb-3">
            글을 쓰려면 로그인이 필요해요
          </p>
          <Link href="/profile" className="inline-block bg-brand-500 text-white text-sm font-bold px-4 py-2 rounded-xl">
            로그인하기
          </Link>
        </div>
      )}
    </>
  );
}
