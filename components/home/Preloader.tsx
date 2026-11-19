'use client';

import { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

export default function Preloader() {
  const [lifted, setLifted] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLifted(true), 1500);
    const t2 = setTimeout(() => setGone(true), 2300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-ink transition-transform duration-700 ease-in-out ${
        lifted ? 'pointer-events-none -translate-y-full' : ''
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <span className="grid h-20 w-20 animate-bounce place-items-center rounded-3xl border-2 border-amber-300 bg-primary shadow-[5px_5px_0_0_rgba(252,211,77,0.6)]">
          <GraduationCap className="h-10 w-10 text-white" strokeWidth={2.2} />
        </span>
        <p className="font-display text-2xl font-bold text-paper">
          Placement <span className="text-amber-300">Group</span>
        </p>
        <div className="h-1.5 w-48 overflow-hidden rounded-full bg-paper/15">
          <div className="h-full rounded-full bg-gradient-to-r from-primary via-amber-400 to-secondary" style={{ animation: 'load-bar 1.4s ease-out forwards' }} />
        </div>
        <p className="font-hand text-lg text-paper/60">preparing your career launch…</p>
      </div>
    </div>
  );
}
