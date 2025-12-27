"use client";

import { SKILLS } from "@/lib/content";

export default function Skills() {
  return (
    <section className="py-24 overflow-hidden bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-800">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-2">
          Tech Stack
        </h3>
        <p className="text-zinc-400 text-sm">
            Technologies I use to build scalable solutions
        </p>
      </div>

      <div className="relative w-full">
        {/* Gradients Fade (Kiri & Kanan) - Agar keluar masuknya halus */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        {/* Container Marquee */}
        <div className="flex overflow-hidden">
          {/* Perubahan PENTING disini:
             1. 'w-max': Agar container lebarnya mengikuti konten, tidak dibatasi layar.
             2. Render items cukup 2 set, tapi animasi CSS hanya gerak 50%.
          */}
          <div className="flex gap-12 animate-scroll w-max hover:[animation-play-state:paused] py-4">
            
            {/* Render 2x: Set 1 & Set 2 */}
            {[...SKILLS, ...SKILLS].map((skill, i) => (
              <div 
                key={i}
                className="flex flex-col items-center gap-4 transition-transform hover:scale-110 duration-300 cursor-default"
              >
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                    <skill.icon className="w-8 h-8 text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-300" />
                </div>
                <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {skill.name}
                </span>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}