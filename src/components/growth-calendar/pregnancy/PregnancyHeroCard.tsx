'use client';

import { useState } from 'react';
import { getWeekInfo } from '@/data/pregnancyWeeks';
import type { WeeklyLog } from '@/types';
import RecordBottomSheet from '@/components/growth-calendar/shared/RecordBottomSheet';
import { useGrowthCalendar } from '@/context/GrowthCalendarContext';

interface PregnancyHeroCardProps {
  currentWeek: number;
  babyName?: string;
  log: WeeklyLog | undefined;
}

export default function PregnancyHeroCard({
  currentWeek,
  babyName,
  log,
}: PregnancyHeroCardProps) {
  const { saveWeeklyLog } = useGrowthCalendar();
  const [sheetOpen, setSheetOpen] = useState(false);

  const info = getWeekInfo(currentWeek);
  const progress = Math.min(100, Math.round((currentWeek / 40) * 100));

  const completedChecklist = log?.checklistDone ?? [];
  const checklistTotal = info.checklistItems.length;
  const checklistDone = completedChecklist.length;

  async function toggleChecklist(itemId: string) {
    const next = completedChecklist.includes(itemId)
      ? completedChecklist.filter((id) => id !== itemId)
      : [...completedChecklist, itemId];
    await saveWeeklyLog(currentWeek, { checklistDone: next });
  }

  async function handleSave(data: {
    memo: string;
    milestones: string[];
    photoUrls?: string[];
  }) {
    await saveWeeklyLog(currentWeek, data);
  }

  return (
    <>
      <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-3xl p-5 mb-4 border border-brand-100">
        {/* 주차 + 아기 이름 */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-xs font-medium text-brand-500 mb-0.5">지금 이 순간</div>
            <h2 className="text-2xl font-black text-slate-900">
              {currentWeek}주차
            </h2>
            {babyName && (
              <div className="text-sm text-slate-500 mt-0.5">{babyName}가 자라고 있어요</div>
            )}
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-brand-500">{currentWeek}</div>
            <div className="text-xs text-slate-400">/ 40주</div>
          </div>
        </div>

        {/* 과일 비유 */}
        <div className="bg-white rounded-2xl px-4 py-3 mb-4 flex items-center gap-3">
          <div className="text-2xl">
            {getFruitEmoji(info.fruit)}
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">{info.sizeLabel}</div>
            <div className="text-xs text-slate-500">{info.babyTip}</div>
          </div>
        </div>

        {/* 진행 바 */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-slate-400 mb-1.5">
            <span>임신 진행</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-500 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 이번 주 아빠 팁 */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2 mb-4">
          <div className="text-xs font-medium text-amber-700 mb-0.5">이번 주 아빠 팁</div>
          <div className="text-sm text-amber-900">{info.dadTip}</div>
        </div>

        {/* 체크리스트 */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-bold text-slate-700">이번 주 할 일</div>
            <div className="text-xs text-slate-400">
              {checklistDone}/{checklistTotal}
            </div>
          </div>
          <div className="space-y-2">
            {info.checklistItems.map((item) => {
              const done = completedChecklist.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className={`w-full flex items-center gap-2.5 text-left px-3 py-2.5 rounded-xl transition-colors ${
                    done ? 'bg-brand-50' : 'bg-white'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      done
                        ? 'border-brand-500 bg-brand-500'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {done && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      done ? 'line-through text-slate-400' : 'text-slate-700'
                    }`}
                  >
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 사진 썸네일 */}
        {log?.photoUrls && log.photoUrls.length > 0 && (
          <div className="flex gap-2 mb-3">
            {log.photoUrls.slice(0, 3).map((url) => (
              <img
                key={url}
                src={url}
                alt="이번 주 사진"
                className="w-16 h-16 rounded-xl object-cover"
              />
            ))}
          </div>
        )}

        {/* 기록 버튼 */}
        <button
          onClick={() => setSheetOpen(true)}
          className="w-full bg-brand-500 text-white font-bold py-3 rounded-2xl text-sm"
        >
          {log?.memo ? '기록 수정하기' : '이번 주 기록 남기기'}
        </button>

        {/* 기존 메모 미리보기 */}
        {log?.memo && (
          <div className="mt-3 px-3 py-2.5 bg-white rounded-xl">
            <div className="text-xs text-slate-400 mb-0.5">남긴 기록</div>
            <div className="text-sm text-slate-700 line-clamp-2">{log.memo}</div>
          </div>
        )}

        {/* 마일스톤 태그 */}
        {log?.milestones && log.milestones.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {log.milestones.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-medium"
              >
                {m}
              </span>
            ))}
          </div>
        )}
      </div>

      {sheetOpen && (
        <RecordBottomSheet
          mode="pregnancy"
          periodLabel={`${currentWeek}주차`}
          periodNumber={currentWeek}
          initialMemo={log?.memo ?? ''}
          initialMilestones={log?.milestones ?? []}
          initialPhotoUrls={log?.photoUrls ?? []}
          onSave={handleSave}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </>
  );
}

function getFruitEmoji(fruit: string): string {
  const map: Record<string, string> = {
    양귀비씨: '🌺', 참깨: '🌾', 완두콩: '🟢', 블루베리: '🫐', 라즈베리: '🍓',
    올리브: '🫒', 딸기: '🍓', 무화과: '🍈', 레몬: '🍋', 복숭아: '🍑',
    키위: '🥝', 사과: '🍎', 아보카도: '🥑', 당근: '🥕', 망고: '🥭',
    바나나: '🍌', 피망: '🫑', 파프리카: '🫑', '포도송이': '🍇', 옥수수: '🌽',
    순무: '🥔', '상추 한포기': '🥬', 콜리플라워: '🥦', 가지: '🍆',
    '버터넛 호박': '🎃', 양배추: '🥬', 코코넛: '🥥', 파인애플: '🍍',
    멜론: '🍈', 파파야: '🍈', '수박 (소)': '🍉', 수박: '🍉',
  };
  return map[fruit] ?? '🍼';
}
