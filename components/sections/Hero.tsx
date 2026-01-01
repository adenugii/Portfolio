"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_DATA } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center px-6 max-w-7xl mx-auto pt-32 md:pt-20 pb-12 overflow-hidden"
    >
      
      {/* Grid Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* --- KOLOM KIRI (Typography & Info) --- */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 z-10">
          
          {/* 1. Headline (Nama) */}
          <div className="space-y-2 md:space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              {HERO_DATA.name}
            </motion.h1>
            
            {/* --- KHUSUS MOBILE: FOTO DI TENGAH --- */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="lg:hidden relative w-48 h-64 mx-auto my-6 rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-800"
            >
                <Image 
                    src="/me.png" 
                    alt="Profile Mobile" 
                    fill 
                    className="object-cover scale-100 grayscale-0"
                    priority
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            {/* ----------------------------------- */}

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
            className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed px-4 md:px-0"
          >
            {HERO_DATA.summary}
          </motion.p>

          {/* CTA & Socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <Link 
                href="#projects" 
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full text-lg font-semibold hover:scale-105 transition-transform w-full sm:w-auto"
            >
               View My Work 
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex items-center gap-3">
                {HERO_DATA.socials.map((social) => (
                    <a 
                        key={social.name} 
                        href={social.url} 
                        target="_blank" 
                        className="p-4 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all bg-white dark:bg-zinc-900"
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
          </motion.div>
        </div>

        {/* --- KOLOM KANAN: Image Showcase (KHUSUS DESKTOP) --- */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="hidden lg:flex lg:col-span-4 relative justify-end"
        >
            {/* Container Gambar Desktop - Miring dihapus */}
            {/* PERUBAHAN: Hapus 'rotate-3 hover:rotate-0' */}
            <div className="relative w-[350px] h-[450px] rounded-[2rem] overflow-hidden group bg-zinc-50 dark:bg-zinc-900 shadow-2xl transition-all duration-500">
                
                <Image 
                    src="/me.png" 
                    alt="Profile Desktop" 
                    fill 
                    className="object-cover transition-all duration-700 ease-in-out
                        scale-100 grayscale-0 
                        md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110"
                    priority
                />

                {/* Gradient Mask Desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-[2rem] border border-black/5 dark:border-white/10 pointer-events-none" />
                
            </div>
        </motion.div>

      </div>
    </section>
  );
}