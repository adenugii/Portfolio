"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Copy, Check, Download } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "adenugroho3112@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Internship
        </div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 max-w-3xl">
          Let's build something extraordinary together.
        </h2>
        
        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          I'm currently looking for <strong>Front-End or Mobile Development Internships</strong>. 
          If you need someone who bridges the gap between design and engineering, I'd love to discuss how I can contribute.
        </p>
        
        {/* Container Tombol */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center pt-8 w-full">
            
            {/* 1. Tombol Utama: Email */}
            <Link 
                href={`mailto:${email}`}
                className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full text-lg font-semibold hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
                <Mail className="w-5 h-5" />
                Let's get in touch
            </Link>

            {/* 2. Tombol Download CV (BARU) */}
            <a 
                href="/cv.pdf" 
                download="CV - Ade Nugroho.pdf"
                className="group flex items-center gap-2 px-6 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all font-medium text-zinc-600 dark:text-zinc-300 w-full sm:w-auto justify-center"
            >
                <Download className="w-4 h-4 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                <span>Download CV</span>
            </a>

            {/* 3. Tombol Copy Email */}
            <button
                onClick={handleCopy}
                className="group flex items-center gap-2 px-6 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all font-medium text-zinc-600 dark:text-zinc-300 w-full sm:w-auto justify-center"
                aria-label="Copy email address"
            >
                {copied ? (
                    <>
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-green-600 dark:text-green-400">Copied!</span>
                    </>
                ) : (
                    <>
                        <Copy className="w-4 h-4 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                        <span>Copy Email</span>
                    </>
                )}
            </button>

            {/* 4. LinkedIn Link */}
            <Link 
                href="https://linkedin.com/in/adenugroho"
                target="_blank"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium w-full sm:w-auto justify-center"
            >
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
            </Link>
        </div>
      </motion.div>
    </section>
  );
}