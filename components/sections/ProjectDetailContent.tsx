"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, ExternalLink, Github, Layers, Zap, AlertTriangle, 
  CheckCircle2, ChevronRight, HelpCircle, ChevronLeft, Layout, 
  GitBranch, Terminal, Cpu, Flag, Youtube 
} from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

// IMPORT ICONS
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiTailwindcss, SiFramer, SiHtml5, SiCss3, 
  SiNodedotjs, SiFirebase, SiKotlin, SiJetpackcompose, 
  SiSolidity, SiPostman, SiAndroid, SiGreensock, 
  SiDocker, SiGit, SiLeaflet, SiExpress, SiMongodb
} from "react-icons/si";

// Components
import Navbar from "@/components/layout/Navbar";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";

// --- ICON MAPPING ---
const ICON_MAP: Record<string, React.ElementType> = {
  "SiNextdotjs": SiNextdotjs,
  "SiGreensock": SiGreensock,
  "SiTailwindcss": SiTailwindcss,
  "SiReact": SiReact,
  "SiKotlin": SiKotlin,
  "SiJetpackcompose": SiJetpackcompose,
  "SiAndroid": SiAndroid,
  "SiFirebase": SiFirebase,
  "SiSolidity": SiSolidity,
  "SiJavascript": SiJavascript,
  "SiHtml5": SiHtml5,
  "SiCss3": SiCss3,
  "SiNodedotjs": SiNodedotjs,
  "SiPostman": SiPostman,
  "SiDocker": SiDocker,
  "SiGit": SiGit,
  "SiLeaflet": SiLeaflet,
  "SiExpress": SiExpress,
  "SiMongodb": SiMongodb
};

interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  link: string;
  repo?: string;
  video?: string; // TAMBAHAN: Optional Video Link
  gradient: string;
  award?: string;
  detail: {
    shortOverview: string;
    problem: string;
    solution: string;
    features: string[];
    techStack: { name: string; icon: string; purpose: string }[];
    process: { title: string; description: string }[];
    challenges: { title: string; description: string }[];
    results: string;
    images: string[];
  }
}

export default function ProjectDetailContent({ project }: { project: Project }) {
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const projectImages = project.detail.images || [];
  const imageCount = projectImages.length;
  const currentImageUrl = projectImages[activeImageIndex] || null;

  const handleNext = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
  };

  const handlePrev = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + imageCount) % imageCount);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const navBtnBase = "absolute top-1/2 -translate-y-1/2 z-20 p-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95";
  const navBtnStyle = `${navBtnBase} bg-white/90 dark:bg-zinc-800/90 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-700`;

  return (
    <main className="relative min-h-screen bg-white dark:bg-zinc-950 overflow-hidden selection:bg-blue-100 dark:selection:bg-blue-900/30">
      <div className="fixed inset-0 z-0 pointer-events-auto opacity-40">
        <BackgroundGrid />
      </div>

      <div className="relative z-10">
        <Navbar />

        <article className="px-6 pt-32 pb-24 max-w-6xl mx-auto">
          
          {/* Breadcrumb / Back Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 flex items-center gap-2 text-sm text-zinc-500"
          >
            <Link href="/#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Projects
            </Link>
            <ChevronRight className="w-3 h-3 opacity-50" />
            <span className="text-zinc-900 dark:text-zinc-100 font-medium truncate">{project.title}</span>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-24">
            
            {/* 1. HERO HEADER + OVERVIEW + GALLERY (ID: OVERVIEW) */}
            <motion.div id="overview" variants={fadeInUp} className="scroll-mt-32 space-y-8">
               
               {/* Header Content */}
               <div className="space-y-8 pb-12 border-b border-zinc-200 dark:border-zinc-800">
                   <div className="flex flex-wrap items-center gap-3">
                      {project.award && (
                         <div className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold flex items-center gap-2 border border-amber-200 dark:border-amber-700/50 shadow-sm">
                            {project.award}
                         </div>
                      )}
                      {project.tags.map(tag => (
                         <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                            {tag}
                         </span>
                      ))}
                   </div>

                   <div className="space-y-6">
                     <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                        {project.title}
                     </h1>
                     <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
                        {project.detail.shortOverview}
                     </p>
                   </div>

                   {/* --- ACTION BUTTONS (DYNAMIC) --- */}
                   <div className="flex flex-wrap gap-4">
                      {/* Live Demo Button - Only if link exists and is not '#' */}
                      {project.link && project.link !== "#" && (
                        <a href={project.link} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-zinc-200 dark:shadow-zinc-900/20">
                           Live Demo <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      
                      {/* Source Code Button - Only if repo exists and is not '#' */}
                      {project.repo && project.repo !== "#" && (
                        <a href={project.repo} target="_blank" className="flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-full font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                           Source Code <Github className="w-4 h-4" />
                        </a>
                      )}

                      {/* Presentation Video Button - Only if video exists */}
                      {project.video && (
                         <a href={project.video} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-red-200 dark:shadow-red-900/20">
                            Watch Video <Youtube className="w-5 h-5" />
                         </a>
                      )}
                   </div>
               </div>

               {/* Gallery Section */}
               <div className="space-y-6">
                  <div className="relative group">
                      {imageCount > 1 && (
                        <>
                          <button onClick={handlePrev} className={`${navBtnStyle} left-2 md:-left-16`}>
                              <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button onClick={handleNext} className={`${navBtnStyle} right-2 md:-right-16`}>
                              <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}

                      <div className={`aspect-video w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 relative shadow-2xl shadow-zinc-200/50 dark:shadow-black/50 select-none ring-1 ring-zinc-900/5 dark:ring-white/10`}>
                        {currentImageUrl ? (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative w-full h-full"
                                >
                                    <Image 
                                        src={currentImageUrl} 
                                        alt={`${project.title} Screenshot ${activeImageIndex + 1}`}
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-zinc-400">
                                <span className="p-4 rounded-full bg-zinc-200 dark:bg-zinc-800">
                                  <Layout className="w-8 h-8" />
                                </span>
                                <span className="font-mono text-sm">No Preview Available</span>
                            </div>
                        )}
                      </div>
                  </div>
                  
                  {/* Thumbnails */}
                  {imageCount > 1 && (
                      <div className="
                        flex gap-3 overflow-x-auto pb-4 pt-2 px-1 justify-center
                        scrollbar-thin scrollbar-color-zinc-300 dark:scrollbar-color-zinc-700
                        [&::-webkit-scrollbar]:h-1.5
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:bg-zinc-300
                        [&::-webkit-scrollbar-thumb]:dark:bg-zinc-700
                        [&::-webkit-scrollbar-thumb]:rounded-full
                      ">
                          {projectImages.map((img, idx) => (
                              <button
                                key={idx}
                                onClick={() => setActiveImageIndex(idx)}
                                className={`relative w-16 h-12 md:w-24 md:h-16 flex-shrink-0 rounded-lg overflow-hidden border transition-all duration-300 ${
                                    activeImageIndex === idx 
                                    ? "border-zinc-900 dark:border-zinc-100 ring-2 ring-zinc-900/10 dark:ring-white/10 opacity-100 scale-105" 
                                    : "border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                                }`}
                              >
                                  <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
                              </button>
                          ))}
                      </div>
                  )}
               </div>

               {/* Problem Solution */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
                  <div className="relative p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 hover:border-red-200 dark:hover:border-red-900/30 transition-colors group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2.5 bg-red-100/50 dark:bg-red-900/20 rounded-xl text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                            <AlertTriangle className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">The Challenge</h2>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                        {project.detail.problem}
                      </p>
                  </div>

                  <div className="relative p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 hover:border-emerald-200 dark:hover:border-emerald-900/30 transition-colors group">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2.5 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-xl text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">The Solution</h2>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                        {project.detail.solution}
                      </p>
                  </div>
               </div>
            </motion.div>

            {/* 2. KEY FEATURES (ID: FEATURES) */}
            <motion.div id="features" variants={fadeInUp} className="scroll-mt-32 space-y-8">
               <div className="flex items-center gap-3 pb-2 border-b border-zinc-100 dark:border-zinc-800">
                   <Zap className="w-6 h-6 text-amber-500" />
                   <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Key Features</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.detail.features.map((feature, i) => (
                     <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mt-1 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 font-bold text-sm border border-blue-100 dark:border-blue-800">
                           {i + 1}
                        </div>
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium leading-snug">
                           {feature}
                        </span>
                     </div>
                  ))}
               </div>
            </motion.div>

            {/* 3. TECH STACK (ID: TECH) */}
            <motion.div id="tech" variants={fadeInUp} className="scroll-mt-32 space-y-8">
               <div className="flex items-center gap-3 pb-2 border-b border-zinc-100 dark:border-zinc-800">
                   <Layers className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
                   <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Technology Stack</h2>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.detail.techStack.map((tech, idx) => {
                     const IconComponent = ICON_MAP[tech.icon] || HelpCircle;
                     return (
                       <div key={idx} className="group p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all">
                          <div className="flex items-start justify-between mb-4">
                             <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 shadow-sm group-hover:scale-110 transition-transform">
                                <IconComponent className="w-6 h-6 text-zinc-900 dark:text-white" />
                             </div>
                          </div>
                          <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">{tech.name}</h3>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                             {tech.purpose}
                          </p>
                       </div>
                     );
                  })}
               </div>
            </motion.div>

            {/* 4. DEVELOPMENT PROCESS (ID: PROCESS) */}
            <motion.div id="process" variants={fadeInUp} className="scroll-mt-32 space-y-12">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-100 dark:border-zinc-800 justify-center">
                   <GitBranch className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
                   <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Development Process</h2>
               </div>

               <div className="relative">
                  <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

                  <div className="space-y-12 md:space-y-24 py-4">
                     {project.detail.process.map((step, i) => {
                        const isEven = i % 2 === 0;
                        return (
                           <motion.div 
                              key={i}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-100px" }}
                              transition={{ duration: 0.6, delay: 0.1 }}
                              className={`relative flex flex-col md:flex-row items-center md:justify-between w-full group ${isEven ? "md:flex-row-reverse" : ""}`}
                           >
                              <div className="w-full md:w-[42%] pl-16 md:pl-0">
                                 <div className={`space-y-3 ${isEven ? "md:text-left" : "md:text-right"}`}>
                                    <div className={`flex items-center gap-3 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                       <span className="text-6xl font-bold text-zinc-200 dark:text-zinc-800/50 leading-none">0{i+1}</span>
                                       <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                                          {step.title}
                                       </h3>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                                       {step.description}
                                    </p>
                                 </div>
                              </div>

                              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-zinc-950 bg-blue-500 shadow-md z-10 group-hover:scale-150 transition-transform duration-300" />
                              
                              <div className="hidden md:block w-[42%]" />
                           </motion.div>
                        );
                     })}
                  </div>
               </div>
            </motion.div>

            {/* 5. CHALLENGES & IMPACT */}
            <motion.div variants={fadeInUp} className="space-y-8 pt-12 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-3 pb-2 border-b border-zinc-100 dark:border-zinc-800">
                   <Terminal className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
                   <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Engineering Challenges</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.detail.challenges.map((challenge, i) => (
                     <div key={i} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all group shadow-sm">
                        <div className="mb-4">
                           <div className="w-fit p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                              <Cpu className="w-5 h-5" />
                           </div>
                        </div>
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg mb-3">
                           {challenge.title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                           {challenge.description}
                        </p>
                     </div>
                  ))}
               </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="py-16 text-center">
               <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-zinc-100 dark:bg-zinc-800/50">
                  <Flag className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
               </div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500 mb-6 leading-tight max-w-4xl mx-auto">
                  "{project.detail.results}"
               </h2>
               <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </motion.div>

          </motion.div>
        </article>
        
        <footer className="py-8 text-center border-t border-neutral-100 dark:border-neutral-900 bg-white/80 dark:bg-black/80 backdrop-blur-md">
          <p className="text-neutral-500 text-xs">
              © {new Date().getFullYear()} Ade Nugroho. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}