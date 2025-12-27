"use client";

import { motion, Variants } from "framer-motion"; 
import { MapPin, Mouse } from "lucide-react"; // Import icon Mouse
import { HERO_DATA } from "@/lib/content";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50 } 
    },
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8 relative z-10" // Tambah z-10 agar di atas background
      >
        {/* Badge: Location & Status */}
        <motion.div variants={item} className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 rounded-full dark:bg-zinc-800 dark:text-zinc-300">
                <MapPin className="w-3 h-3" />
                {HERO_DATA.location}
            </div>
            <div className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full dark:bg-emerald-900/30 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {HERO_DATA.status}
            </div>
        </motion.div>

        {/* Main Headline */}
        <div className="space-y-2">
            <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {HERO_DATA.name}
            </motion.h1>
            <motion.h2 variants={item} className="text-2xl md:text-4xl font-medium text-zinc-500 dark:text-zinc-400">
                {HERO_DATA.role}
            </motion.h2>
        </div>

        {/* Summary Description */}
        <motion.p variants={item} className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {HERO_DATA.summary}
        </motion.p>

        {/* Socials Only (View Work Removed) */}
        <motion.div variants={item} className="flex gap-6 pt-4">
            {HERO_DATA.socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    aria-label={social.name}
                >
                    <div className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-colors">
                        <social.icon className="w-5 h-5" />
                    </div>
                    {/* Opsional: Tampilkan nama social media agar tidak terlalu sepi */}
                    <span className="text-sm font-medium">{social.name}</span>
                </a>
            ))}
        </motion.div>
      </motion.div>

      {/* SARAN: Scroll Down Indicator (Absolute Bottom) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600">Scroll</span>
        <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600"
        >
            <Mouse className="w-4 h-4" />
        </motion.div>
      </motion.div>

    </section>
  );
}