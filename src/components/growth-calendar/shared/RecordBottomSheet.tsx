'use client';

import { useState, useEffect, useRef } from 'react';
import { Camera, X, Loader } from 'lucide-react';
import { MILESTONE_PRESETS, PREGNANCY_MILESTONE_PRESETS } from '@/data/babyMonths';
import { uploadGrowthPhoto, deleteGrowthPhoto } from '@/lib/firebase/storage';
import { useAuth } from '@/context/AuthContext';
import { useBaby } from '@/context/BabyContext';

interface RecordBottomSheetProps {
  mode: 'pregnancy' | 'baby';
  periodLabel: string;
  periodNumber: number; // week or month number (for storage path)
  initialMemo?: string;
  initialMilestones?: string[];
  initialHeightCm?: number | null;
  initialWeightKg?: number | null;
  initialPhotoUrls?: string[];
  onSave: (data: {
    memo: string;
    milestones: string[];
    heightCm?: number | null;
    weightKg?: number | null;
    photoUrls?: string[];
  }) => Promise<void>;
  onClose: () => void;
}

export default function RecordBottomSheet({
  mode,
  periodLabel,
  periodNumber,
  initialMemo = '',
  initialMilestones = [],
  initialHeightCm = null,
  initialWeightKg = null,
  initialPhotoUrls = [],
  onSave,
  onClose,
}: RecordBottomSheetProps) {
  const { user } = useAuth();
  const { activeBaby } = useBaby();

  const [memo, setMemo] = useState(initialMemo);
  const [selectedMilestones, setSelectedMilestones] = useState<string[]>(initialMilestones);
  const [heightCm, setHeightCm] = useState<string>(initialHeightCm ? String(initialHeightCm) : '');
  const [weightKg, setWeightKg] = useState<string>(initialWeightKg ? String(initialWeightKg) : '');
  const [photoUrls, setPhotoUrls] = useState<string[]>(initialPhotoUrls);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [visible, setVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const presets = mode === 'pregnancy' ? PREGNANCY_MILESTONE_PRESETS : MILESTONE_PRESETS;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  function toggleMilestone(label: string) {
    setSelectedMilestones((prev) =>
      prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label]
    );
  }

  async function handlePhotoSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !user || !activeBaby) return;
    if (photoUrls.length >= 3) return;

    setUploading(true);
    setUploadProgress(0);
    try {
      const { url } = await uploadGrowthPhoto(
        user.uid,
        activeBaby.id,
        periodNumber,
        file,
        (pct) => setUploadProgress(pct)
      );
      setPhotoUrls((prev) => [...prev, url]);
    } catch (err) {
      console.error('사진 업로드 실패', err);
    } finally {
      setUploading(false);
      // input 초기화 (같은 파일 재선택 가능하도록)
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }

  async function handleRemovePhoto(url: string) {
    // Storage path는 URL에서 추출 불가 → 삭제는 Firestore URL 저장 시 path도 같이 저장해야 하는데
    // 현재 구조상 URL만 저장 → 클라이언트에서만 제거 (Storage 파일은 남아있음, 허용 범위)
    setPhotoUrls((prev) => prev.filter((u) => u !== url));
  }

  async function handleSave() {
    setIsSaving(true);
    try {
      await onSave({
        memo,
        milestones: selectedMilestones,
        photoUrls,
        ...(mode === 'baby'
          ? {
              heightCm: heightCm ? parseFloat(heightCm) : null,
              weightKg: weightKg ? parseFloat(weightKg) : null,
            }
          : {}),
      });
      handleClose();
    } finally {
      setIsSaving(false);
    }
  }

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 280);
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          visible ? 'opacity-40' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      <div
        className={`relative bg-white rounded-t-3xl px-5 pt-4 pb-10 max-h-[90vh] overflow-y-auto transition-transform duration-300 ease-out ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4" />

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-slate-900">{periodLabel} 기록</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500"
          >
            <X size={16} />
          </button>
        </div>

        {/* 사진 업로드 */}
        <div className="mb-5">
          <label className="text-xs font-medium text-slate-500 mb-2 block">
            사진 <span className="text-slate-300 font-normal">({photoUrls.length}/3)</span>
          </label>
          <div className="flex gap-2 flex-wrap">
            {photoUrls.map((url) => (
              <div key={url} className="relative w-20 h-20">
                <img
                  src={url}
                  alt="기록 사진"
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <button
                  onClick={() => handleRemovePhoto(url)}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center"
                >
                  <X size={10} className="text-white" />
                </button>
              </div>
            ))}

            {photoUrls.length < 3 && (
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-20 h-20 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-1 text-slate-400 hover:border-brand-300 hover:text-brand-400 transition-colors disabled:opacity-50"
              >
                {uploading ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    <span className="text-[10px]">{uploadProgress}%</span>
                  </>
                ) : (
                  <>
                    <Camera size={18} />
                    <span className="text-[10px]">사진 추가</span>
                  </>
                )}
              </button>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoSelect}
          />
        </div>

        {/* 출산 후: 키 / 몸무게 */}
        {mode === 'baby' && (
          <div className="flex gap-3 mb-5">
            <div className="flex-1">
              <label className="text-xs font-medium text-slate-500 mb-1 block">키 (cm)</label>
              <input
                type="number"
                inputMode="decimal"
                placeholder="예: 51.5"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-slate-500 mb-1 block">몸무게 (kg)</label>
              <input
                type="number"
                inputMode="decimal"
                placeholder="예: 3.8"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        )}

        {/* 메모 */}
        <div className="mb-5">
          <label className="text-xs font-medium text-slate-500 mb-1 block">오늘의 한마디</label>
          <textarea
            placeholder={
              mode === 'pregnancy'
                ? '아내에게, 혹은 아기에게 하고 싶은 말을 적어보세요'
                : '아이에게, 혹은 미래의 나에게 남기는 기록'
            }
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            rows={3}
            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        {/* 마일스톤 */}
        <div className="mb-6">
          <label className="text-xs font-medium text-slate-500 mb-2 block">
            이번 {mode === 'pregnancy' ? '주' : '달'} 특별한 일
          </label>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => toggleMilestone(preset.label)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedMilestones.includes(preset.label)
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={isSaving || uploading}
          className="w-full bg-brand-500 text-white font-bold py-3.5 rounded-2xl text-base disabled:opacity-60 transition-opacity"
        >
          {isSaving ? '저장 중...' : '기록하기'}
        </button>
      </div>
    </div>
  );
}
