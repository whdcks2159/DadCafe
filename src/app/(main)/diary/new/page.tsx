'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import TopHeader from '@/components/layout/TopHeader';
import { useAuth } from '@/context/AuthContext';
import { createDiaryEntry } from '@/lib/firebase/firestore';
import { uploadDiaryMedia } from '@/lib/firebase/storage';
import type { DiaryEmotion, DiaryAction, DiaryMedia } from '@/types';
import { Camera, Video, X, Loader2, CheckCircle2 } from 'lucide-react';

const EMOTIONS: { value: DiaryEmotion; emoji: string; label: string }[] = [
  { value: 'love',     emoji: '❤️',  label: '사랑스러워' },
  { value: 'proud',    emoji: '🏆', label: '뿌듯해' },
  { value: 'happy',    emoji: '😄', label: '행복해' },
  { value: 'grateful', emoji: '🙏', label: '감사해' },
  { value: 'tired',    emoji: '😴', label: '지쳐' },
  { value: 'worried',  emoji: '😟', label: '걱정돼' },
];

const ACTIONS: { value: DiaryAction; label: string }[] = [
  { value: 'feeding',   label: '🍼 수유' },
  { value: 'bath',      label: '🛁 목욕' },
  { value: 'walk',      label: '🚶 산책' },
  { value: 'play',      label: '🎮 놀이' },
  { value: 'sleep',     label: '😴 재우기' },
  { value: 'hospital',  label: '🏥 병원' },
  { value: 'milestone', label: '⭐ 첫 순간' },
];

const MAX_PHOTOS = 10;
const MAX_VIDEOS = 2;
const MAX_PHOTO_MB = 5;
const MAX_VIDEO_MB = 50;

interface MediaPreview {
  file: File;
  previewUrl: string;
  type: 'photo' | 'video';
  uploading?: boolean;
  uploaded?: DiaryMedia;
  error?: string;
}

export default function NewDiaryPage() {
  const router = useRouter();
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [babyAgeMonths, setBabyAgeMonths] = useState(0);
  const [text, setText] = useState('');
  const [emotions, setEmotions] = useState<DiaryEmotion[]>([]);
  const [actions, setActions] = useState<DiaryAction[]>([]);
  const [mediaPreviews, setMediaPreviews] = useState<MediaPreview[]>([]);
  const [saving, setSaving] = useState(false);

  const toggleEmotion = (v: DiaryEmotion) =>
    setEmotions((prev) => prev.includes(v) ? prev.filter((e) => e !== v) : [...prev, v]);

  const toggleAction = (v: DiaryAction) =>
    setActions((prev) => prev.includes(v) ? prev.filter((a) => a !== v) : [...prev, v]);

  const photoCount = mediaPreviews.filter((m) => m.type === 'photo').length;
  const videoCount = mediaPreviews.filter((m) => m.type === 'video').length;

  const handleFiles = async (files: FileList | null, type: 'photo' | 'video') => {
    if (!files || !user) return;
    const arr = Array.from(files);

    for (const file of arr) {
      const maxMB = type === 'photo' ? MAX_PHOTO_MB : MAX_VIDEO_MB;
      if (file.size > maxMB * 1024 * 1024) {
        alert(`${type === 'photo' ? '사진' : '동영상'}은 ${maxMB}MB 이하만 가능합니다.`);
        continue;
      }
      if (type === 'photo' && photoCount >= MAX_PHOTOS) {
        alert(`사진은 최대 ${MAX_PHOTOS}장까지 추가할 수 있습니다.`);
        break;
      }
      if (type === 'video' && videoCount >= MAX_VIDEOS) {
        alert(`동영상은 최대 ${MAX_VIDEOS}개까지 추가할 수 있습니다.`);
        break;
      }

      const previewUrl = URL.createObjectURL(file);
      const preview: MediaPreview = { file, previewUrl, type, uploading: true };
      setMediaPreviews((prev) => [...prev, preview]);

      try {
        const uploaded = await uploadDiaryMedia(user.uid, file);
        setMediaPreviews((prev) =>
          prev.map((p) => p.previewUrl === previewUrl ? { ...p, uploading: false, uploaded } : p)
        );
      } catch {
        setMediaPreviews((prev) =>
          prev.map((p) => p.previewUrl === previewUrl ? { ...p, uploading: false, error: '업로드 실패' } : p)
        );
      }
    }
  };

  const removeMedia = (previewUrl: string) => {
    setMediaPreviews((prev) => {
      const item = prev.find((p) => p.previewUrl === previewUrl);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((p) => p.previewUrl !== previewUrl);
    });
  };

  const handleSave = async () => {
    if (!user || !text.trim()) return;
    setSaving(true);
    try {
      const mediaList = mediaPreviews
        .filter((p) => p.uploaded)
        .map((p) => p.uploaded!);

      await createDiaryEntry(user.uid, {
        date,
        babyAgeMonths,
        text: text.trim(),
        emotions,
        actions,
        mediaList,
      });
      router.push('/diary');
    } catch {
      alert('저장에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setSaving(false);
    }
  };

  const hasUploading = mediaPreviews.some((p) => p.uploading);
  const canSave = text.trim().length > 0 && !saving && !hasUploading;

  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader title="일기 쓰기" showBack />

      <div className="flex-1 px-5 py-5 space-y-6">

        {/* 날짜 + 개월 수 */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-xs font-black text-slate-500 block mb-1.5">날짜</label>
            <input
              type="date"
              value={date}
              max={today}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-300"
            />
          </div>
          <div className="w-28">
            <label className="text-xs font-black text-slate-500 block mb-1.5">아이 개월 수</label>
            <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5">
              <button
                onClick={() => setBabyAgeMonths((v) => Math.max(0, v - 1))}
                className="w-5 h-5 flex items-center justify-center text-slate-500 font-black rounded"
              >−</button>
              <span className="flex-1 text-center text-sm font-bold text-slate-800">{babyAgeMonths}개월</span>
              <button
                onClick={() => setBabyAgeMonths((v) => Math.min(36, v + 1))}
                className="w-5 h-5 flex items-center justify-center text-slate-500 font-black rounded"
              >+</button>
            </div>
          </div>
        </div>

        {/* 오늘 어땠어? */}
        <div>
          <label className="text-xs font-black text-slate-500 block mb-1.5">오늘 어떤 감정이었어요?</label>
          <div className="flex flex-wrap gap-2">
            {EMOTIONS.map(({ value, emoji, label }) => (
              <button
                key={value}
                onClick={() => toggleEmotion(value)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  emotions.includes(value)
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                <span>{emoji}</span> {label}
              </button>
            ))}
          </div>
        </div>

        {/* 뭘 했어? */}
        <div>
          <label className="text-xs font-black text-slate-500 block mb-1.5">오늘 뭘 했어요?</label>
          <div className="flex flex-wrap gap-2">
            {ACTIONS.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => toggleAction(value)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  actions.includes(value)
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 일기 본문 */}
        <div>
          <label className="text-xs font-black text-slate-500 block mb-1.5">오늘을 기록해주세요</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="아이와의 특별한 순간, 느낀 감정, 기억하고 싶은 것들을 자유롭게 써주세요..."
            rows={5}
            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-300 resize-none leading-relaxed"
          />
          <p className="text-right text-[10px] text-slate-400 mt-1">{text.length}자</p>
        </div>

        {/* 미디어 첨부 */}
        <div>
          <label className="text-xs font-black text-slate-500 block mb-2">사진 / 동영상 첨부</label>

          <div className="flex gap-2 mb-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={photoCount >= MAX_PHOTOS}
              className="flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-200 disabled:opacity-40 transition-colors"
            >
              <Camera size={14} /> 사진 ({photoCount}/{MAX_PHOTOS})
            </button>
            <button
              onClick={() => videoInputRef.current?.click()}
              disabled={videoCount >= MAX_VIDEOS}
              className="flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-2 rounded-xl hover:bg-slate-200 disabled:opacity-40 transition-colors"
            >
              <Video size={14} /> 동영상 ({videoCount}/{MAX_VIDEOS})
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files, 'photo')}
          />
          <input
            ref={videoInputRef}
            type="file"
            accept="video/*"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files, 'video')}
          />

          {mediaPreviews.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {mediaPreviews.map((p) => (
                <div key={p.previewUrl} className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                  {p.type === 'photo' ? (
                    <img src={p.previewUrl} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <Video size={20} className="text-white" />
                    </div>
                  )}
                  {p.uploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Loader2 size={16} className="text-white animate-spin" />
                    </div>
                  )}
                  {p.uploaded && !p.uploading && (
                    <div className="absolute bottom-1 right-1">
                      <CheckCircle2 size={14} className="text-green-400" />
                    </div>
                  )}
                  {p.error && (
                    <div className="absolute inset-0 bg-red-500/70 flex items-center justify-center">
                      <p className="text-[10px] text-white font-bold">{p.error}</p>
                    </div>
                  )}
                  <button
                    onClick={() => removeMedia(p.previewUrl)}
                    className="absolute top-1 right-1 w-5 h-5 bg-black/50 rounded-full flex items-center justify-center"
                  >
                    <X size={10} className="text-white" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <p className="text-[10px] text-slate-400 mt-1.5">사진 최대 {MAX_PHOTOS}장 (장당 5MB), 동영상 최대 {MAX_VIDEOS}개 (개당 50MB, 60초)</p>
        </div>
      </div>

      {/* 저장 버튼 */}
      <div className="sticky bottom-0 px-5 py-4 bg-white border-t border-slate-100">
        <button
          onClick={handleSave}
          disabled={!canSave}
          className="w-full bg-brand-500 text-white font-black py-3.5 rounded-2xl disabled:opacity-40 transition-opacity active:scale-[0.99] flex items-center justify-center gap-2"
        >
          {saving ? <Loader2 size={18} className="animate-spin" /> : null}
          {hasUploading ? '업로드 중...' : saving ? '저장 중...' : '일기 저장하기'}
        </button>
      </div>
    </div>
  );
}
