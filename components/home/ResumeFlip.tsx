'use client';

import { useState } from 'react';

export default function ResumeFlip() {
  const [flipped, setFlipped] = useState(false);

  const face = 'absolute inset-0 rounded-2xl border-2 border-ink p-6 [backface-visibility:hidden]';

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setFlipped((f) => !f)}
        aria-label="Flip resume card"
        className="block h-[360px] w-full max-w-sm cursor-pointer [perspective:1200px]"
      >
        <div
          className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* BEFORE */}
          <div className={`${face} bg-stone-100 shadow-[6px_6px_0_0_var(--ink)]`}>
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-bold text-ink/60">Before</p>
              <span className="rotate-6 rounded-lg border-2 border-rose-500 bg-rose-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-rose-600">
                ATS Score 42
              </span>
            </div>
            <div className="mt-6 space-y-3">
              <div className="h-5 w-1/2 rounded bg-stone-300" />
              <div className="h-2.5 w-1/3 rounded bg-stone-200" />
              <div className="mt-6 space-y-2.5">
                {[100, 92, 96, 70, 88, 60].map((w, i) => (
                  <div key={i} className="h-2.5 rounded bg-stone-200" style={{ width: `${w}%` }} />
                ))}
              </div>
              <div className="mt-6 rounded-xl border-2 border-dashed border-stone-300 p-3 text-xs text-stone-400">
                “We were unable to parse your key skills for this role.”
              </div>
            </div>
            <p className="mt-5 text-center font-hand text-xl text-rose-500">
              lost in the pile 😬
            </p>
          </div>

          {/* AFTER */}
          <div
            className={`${face} bg-white shadow-[6px_6px_0_0_var(--ink)] [transform:rotateY(180deg)]`}
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-bold text-secondary">After</p>
              <span className="-rotate-3 rounded-lg border-2 border-emerald-600 bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-700">
                ATS Score 98
              </span>
            </div>
            <div className="mt-6 space-y-3">
              <div className="h-5 w-1/2 rounded bg-secondary/30" />
              <div className="h-2.5 w-1/3 rounded bg-amber-200" />
              <div className="mt-6 space-y-2.5">
                {[100, 95, 98, 85, 92, 78].map((w, i) => (
                  <div
                    key={i}
                    className="h-2.5 rounded bg-gradient-to-r from-secondary/40 to-secondary/10"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
              <div className="mt-6 rounded-xl border-2 border-emerald-200 bg-emerald-50 p-3 text-xs font-semibold text-emerald-700">
                “Interview scheduled — your profile matched 98% of this role.”
              </div>
            </div>
            <p className="mt-5 text-center font-hand text-xl text-secondary">
              recruiters are calling ✅
            </p>
          </div>
        </div>
      </button>
      <p className="font-hand text-lg text-ink/60">click the resume to flip 👆</p>
    </div>
  );
}
