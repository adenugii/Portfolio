"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { EXPERIENCE, AWARDS } from "@/lib/content";

export default function Experience() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* KOLOM KIRI: Experience & Education */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Experience & Education</h2>
          </div>

          <div className="space-y-8 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 pl-8 relative">
            {EXPERIENCE.map((exp, index) => (
              <motion.div key={index} variants={item} className="relative">
                {/* Dot Timeline */}
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-300 dark:bg-zinc-700" />
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2 sm:gap-0">
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                  
                  {/* UPDATE DISINI: Tambahkan 'w-fit' */}
                  <span className="w-fit text-xs font-medium px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md text-zinc-500 border border-zinc-200 dark:border-zinc-700/50">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    {exp.company}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* KOLOM KANAN: Awards */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Achievements</h2>
          </div>

          <div className="grid gap-4">
            {AWARDS.map((award, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {award.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400 shrink-0 ml-2">
                        {award.year}
                    </span>
                </div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {award.event}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                    {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}