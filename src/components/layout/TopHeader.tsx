'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface TopHeaderProps {
  title: string;
  showBack?: boolean;
  right?: React.ReactNode;
}

export default function TopHeader({ title, showBack = false, right }: TopHeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100 px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            onClick={() => router.back()}
            className="p-1 -ml-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
        )}
        <h1 className="text-base font-bold text-slate-800">{title}</h1>
      </div>
      {right && <div>{right}</div>}
    </header>
  );
}
