"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { HERO_DATA } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 max-w-7xl mx-auto pt-20 pb-10 overflow-hidden">
      
      {/* Grid Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* --- KOLOM KIRI: Typography & Info --- */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
          
          {/* Status Badge (UPDATED: Match Contact Section Style) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-400 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Internship
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              {HERO_DATA.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400"
            >
              {HERO_DATA.role}
            </motion.p>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            {HERO_DATA.summary}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
          >
            <Link href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full text-lg font-semibold hover:scale-105 transition-transform">
               View My Work 
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex items-center gap-2">
                {HERO_DATA.socials.map((social) => (
                    <a 
                        key={social.name} 
                        href={social.url} 
                        target="_blank" 
                        className="p-4 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
          </motion.div>
        </div>

        {/* --- KOLOM KANAN: Image Showcase --- */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="lg:col-span-4 relative flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
            {/* Container Gambar */}
            <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-[2rem] overflow-hidden group bg-zinc-50 dark:bg-zinc-900">
                
                {/* Image */}
                <Image 
                    src="/me.jpg" 
                    alt="Profile" 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
                    priority
                />

                {/* Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Subtle Border */}
                <div className="absolute inset-0 rounded-[2rem] border border-black/5 dark:border-white/10 pointer-events-none" />
                
            </div>
        </motion.div>

      </div>
    </section>
  );
}