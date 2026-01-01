"use client";

import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Trophy, Lock } from "lucide-react"; // Tambah Icon Lock
import { PROJECTS } from "@/lib/content";
import Link from "next/link";

// --- KOMPONEN SPOTLIGHT CARD (Tetap sama) ---
const SpotlightCard = ({ 
  children, 
  className = "",
  spotlightColor = "var(--spotlight)"
}: { 
  children: React.ReactNode; 
  className?: string;
  spotlightColor?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setOpacity(1); };
  const handleBlur = () => { setOpacity(0); };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={`relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// --- KOMPONEN UTAMA ---
export default function Projects() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12 space-y-4 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Featured Projects
        </h2>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          From concept to award-winning code. A curated collection of robust mobile apps and interactive web experiences.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {PROJECTS.map((project, index) => {
          
          // 1. CEK STATUS UPCOMING DARI DATA
          // Pastikan di content.ts project F1 punya properti: upcoming: true
          const isUpcoming = (project as any).upcoming === true;

          return (
            <motion.div
              key={project.title}
              variants={item}
              className={project.featured ? "md:col-span-2" : "md:col-span-1"}
            >
              {/* LOGIKA WRAPPER: 
                  Jika Upcoming -> Div biasa (Gak bisa diklik)
                  Jika Tidak -> Link ke detail
              */}
              {isUpcoming ? (
                // --- TAMPILAN UPCOMING (UNCLICKABLE) ---
                <div className="block h-full cursor-not-allowed opacity-80 grayscale-[0.5]">
                   <SpotlightCard className="h-full flex flex-col border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/20">
                      <div className="p-8 flex flex-col h-full">
                          <div className="flex justify-between items-start mb-6">
                              <div className="space-y-2">
                                <h3 className="text-xl font-bold text-zinc-500 dark:text-zinc-400">
                                  {project.title}
                                  <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                                    Construction
                                  </span>
                                </h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed max-w-md">
                                  {project.description}
                                </p>
                              </div>
                              <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
                                <Lock className="w-5 h-5" />
                              </div>
                          </div>
                          
                          {/* Tags (Disabled look) */}
                          <div className="mt-auto pt-6 flex flex-wrap gap-2 opacity-50">
                            {project.tags.map((tag) => (
                              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 border border-zinc-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                      </div>
                   </SpotlightCard>
                </div>
              ) : (
                // --- TAMPILAN NORMAL (CLICKABLE) ---
                <Link 
                  href={`/projects/${project.slug}`}
                  className="block h-full cursor-pointer"
                >
                  <SpotlightCard className="h-full flex flex-col group transition-colors hover:border-zinc-300 dark:hover:border-zinc-700">
                    
                    <div className="p-8 flex flex-col h-full">
                      
                      {/* Award Badge */}
                      {project.award && (
                        <div className="mb-4 w-fit px-3 py-1 flex items-center gap-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700/50">
                          <Trophy className="w-3 h-3 text-yellow-700 dark:text-yellow-500" />
                          <span className="text-xs font-semibold text-yellow-800 dark:text-yellow-400">
                            {project.award}
                          </span>
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                             {project.title}
                          </h3>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
                            {project.description}
                          </p>
                        </div>
                        
                        <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-white dark:group-hover:bg-zinc-700 group-hover:scale-110 transition-all">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mt-auto pt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Gradient Overlay */}
                      <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
                    </div>

                  </SpotlightCard>
                </Link>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}