export default function SkeletonCard() {
      return (
            <div aria-busy="true" aria-label="loading card" className="relative w-52 h-64 shrink-0 p-4 rounded-3xl backdrop-blur-md bg-[var(--bg-back-primary)]/30 overflow-hidden transform-gpu">
                  {/* shimmer + overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-black/25 mix-blend-overlay" />
                        <div className="absolute inset-0 -skew-x-12 opacity-30 animate-shimmer bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                  </div>

                  {/* decorative corner pluses */}
                  <span className="absolute opacity-30 -top-2 -left-2 text-xs font-bold text-zinc-400">+</span>
                  <span className="absolute opacity-30 -top-2 -right-2 text-xs font-bold text-zinc-400">+</span>
                  <span className="absolute opacity-30 -bottom-2 -left-2 text-xs font-bold text-zinc-400">+</span>
                  <span className="absolute opacity-30 -bottom-2 -right-2 text-xs font-bold text-zinc-400">+</span>

                  <div className="relative z-10 flex flex-col h-full">
                        {/* header row, icon placeholders */}
                        <div className="flex justify-between items-center">
                              <div className="w-8 h-8 rounded-full bg-zinc-700 animate-pulse" />
                              <div className="w-8 h-8 rounded-full bg-red-700/80 animate-pulse" />
                        </div>

                        {/* content lines */}
                        <div className="mt-3 space-y-2 flex-1">
                              <div className="h-3 w-5/6 rounded-md bg-zinc-700/60 animate-pulse" />
                              <div className="h-2.5 w-full rounded-md bg-zinc-700/50 animate-pulse" />
                              <div className="h-2.5 w-11/12 rounded-md bg-zinc-700/50 animate-pulse" />
                              <div className="h-2.5 w-9/12 rounded-md bg-zinc-700/50 animate-pulse" />
                        </div>

                        {/* bottom title strip */}
                        <div className="mt-3">
                              <div className="h-10 w-full rounded-xl bg-gradient-to-r from-zinc-700/30 via-zinc-600/40 to-zinc-700/30 animate-pulse flex items-center justify-center text-sm text-zinc-300/60 font-medium">&nbsp;</div>
                        </div>
                  </div>

                  {/* local CSS for shimmer */}
                  <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-120%) skewX(-12deg); }
          50% { transform: translateX(120%) skewX(-12deg); }
          100% { transform: translateX(260%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 1.2s linear infinite;
        }
      `}</style>
            </div>
      );
}
