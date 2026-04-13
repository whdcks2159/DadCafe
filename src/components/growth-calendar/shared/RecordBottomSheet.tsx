'use client';

import { useState, useEffect, useRef } from 'react';
import { MILESTONE_PRESETS, PREGNANCY_MILESTONE_PRESETS } from '@/data/babyMonths';

interface RecordBottomSheetProps {
  mode: 'pregnancy' | 'baby';
  periodLabel: string; // e.g. "12주차" or "3개월"
  initialMemo?: string;
  initialMilestones?: string[];
  initialHeightCm?: number | null;
  initialWeightKg?: number | null;
  onSave: (data: {
    memo: string;
    milestones: string[];
    heightCm?: number | null;
    weightKg?: number | null;
  }) => Promise<void>;
  onClose: () => void;
}

export default function RecordBottomSheet({
  mode,
  periodLabel,
  initialMemo = '',
  initialMilestones = [],
  initialHeightCm = null,
  initialWeightKg = null,
  onSave,
  onClose,
}: RecordBottomSheetProps) {
  const [memo, setMemo] = useState(initialMemo);
  const [selectedMilestones, setSelectedMilestones] = useState<string[]>(initialMilestones);
  const [heightCm, setHeightCm] = useState<string>(initialHeightCm ? String(initialHeightCm) : '');
  const [weightKg, setWeightKg] = useState<string>(initialWeightKg ? String(initialWeightKg) : '');
  const [isSaving, setIsSaving] = useState(false);
  const [visible, setVisible] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  const presets = mode === 'pregnancy' ? PREGNANCY_MILESTONE_PRESETS : MILESTONE_PRESETS;

  useEffect(() => {
    // 마운트 후 애니메이션
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  function toggleMilestone(id: string) {
    setSelectedMilestones((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  }

  async function handleSave() {
    setIsSaving(true);
    try {
      await onSave({
        memo,
        milestones: selectedMilestones,
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
      {/* 배경 오버레이 */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          visible ? 'opacity-40' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* 시트 */}
      <div
        ref={sheetRef}
        className={`relative bg-white rounded-t-3xl px-5 pt-4 pb-8 max-h-[85vh] overflow-y-auto transition-transform duration-300 ease-out ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* 핸들 */}
        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4" />

        {/* 헤더 */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-slate-900">{periodLabel} 기록</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500"
          >
            ✕
          </button>
        </div>

        {/* 출산 후 모드: 키 / 몸무게 */}
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
              <label className="text-xs font-medium text-slate-500 mb-1 block">
                몸무게 (kg)
              </label>
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

        {/* 마일스톤 태그 */}
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

        {/* 저장 버튼 */}
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full bg-brand-500 text-white font-bold py-3.5 rounded-2xl text-base disabled:opacity-60 transition-opacity"
        >
          {isSaving ? '저장 중...' : '기록하기'}
        </button>

        {(memo || selectedMilestones.length > 0 || heightCm || weightKg) && (
          <p className="text-center text-xs text-slate-400 mt-3">
            나중에 꼭 다시 봐요
          </p>
        )}
      </div>
    </div>
  );
}
