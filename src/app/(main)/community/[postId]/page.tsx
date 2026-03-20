'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import TopHeader from '@/components/layout/TopHeader';
import { useAuth } from '@/context/AuthContext';
import { getPost, getComments, addComment, toggleLike, isLiked } from '@/lib/firebase/firestore';
import { Heart, MessageCircle, Send, Clock } from 'lucide-react';
import type { Post, Comment } from '@/types';

function formatDate(d: Date) {
  return d.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export default function PostDetailPage() {
  const params = useParams<{ postId: string }>();
  const { user, userProfile } = useAuth();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(0);

  useEffect(() => {
    getPost(params.postId).then((p) => {
      if (p) {
        setPost(p);
        setLocalLikeCount(p.likeCount);
      }
    });
    getComments(params.postId).then(setComments);
    if (user) {
      isLiked(user.uid, params.postId).then(setLiked);
    }
  }, [params.postId, user]);

  const handleLike = async () => {
    if (!user || !post) return;
    const nowLiked = await toggleLike(user.uid, post.id);
    setLiked(nowLiked);
    setLocalLikeCount((c) => c + (nowLiked ? 1 : -1));
  };

  const handleComment = async () => {
    if (!user || !commentText.trim() || !post) return;
    const id = await addComment({
      postId: post.id,
      authorUid: user.uid,
      authorName: userProfile?.displayName ?? user.displayName ?? '아빠',
      authorPhotoURL: user.photoURL,
      bodyKo: commentText.trim(),
    });
    setComments((prev) => [
      ...prev,
      {
        id,
        postId: post.id,
        authorUid: user.uid,
        authorName: userProfile?.displayName ?? user.displayName ?? '아빠',
        authorPhotoURL: user.photoURL,
        bodyKo: commentText.trim(),
        createdAt: new Date(),
      },
    ]);
    setCommentText('');
  };

  if (!post) {
    return (
      <>
        <TopHeader title="" showBack />
        <div className="flex items-center justify-center h-40">
          <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </>
    );
  }

  return (
    <>
      <TopHeader title="커뮤니티" showBack />

      {/* Post */}
      <div className="px-5 py-5 border-b border-slate-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-sm font-bold text-brand-600">
            {post.authorName[0]}
          </div>
          <div>
            <p className="text-sm font-bold text-slate-700">{post.authorName}</p>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <Clock size={10} /> {formatDate(post.createdAt)}
            </p>
          </div>
        </div>

        <h1 className="font-black text-lg text-slate-800 mb-2">{post.titleKo}</h1>
        <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{post.bodyKo}</p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Like */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${
              liked ? 'text-red-500' : 'text-slate-400 hover:text-red-400'
            }`}
          >
            <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
            {localLikeCount}
          </button>
          <span className="flex items-center gap-1.5 text-sm text-slate-400">
            <MessageCircle size={18} />
            {comments.length}
          </span>
        </div>
      </div>

      {/* Comments */}
      <div className="px-5 py-4 space-y-4 pb-28">
        <p className="text-xs font-bold text-slate-400">댓글 {comments.length}개</p>
        {comments.map((c) => (
          <div key={c.id} className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 flex-shrink-0">
              {c.authorName[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <p className="text-xs font-bold text-slate-700">{c.authorName}</p>
                <p className="text-[10px] text-slate-400">{formatDate(c.createdAt)}</p>
              </div>
              <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{c.bodyKo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      {user && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="댓글 입력..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleComment()}
              className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <button
              onClick={handleComment}
              disabled={!commentText.trim()}
              className="w-9 h-9 bg-brand-500 rounded-full flex items-center justify-center disabled:opacity-40"
            >
              <Send size={16} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
