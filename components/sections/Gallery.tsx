"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const GALLERY_IMAGES = [
  {
    src: "/gallery/asprak-paw.jpeg",
    alt: "Web Development Assistant",
    caption: "Web App Dev. Laboratory Assistant",
    category: "Experience",
    className: "h-64 md:h-60", 
  },
  {
    src: "/gallery/gemastik.jpeg",
    alt: "Gemastik 2025 Finals",
    caption: "GEMASTIK 2025 National Finalist",
    category: "Competition",
    className: "h-56 md:h-65", 
  },
  {
    src: "/gallery/itechno.png",
    alt: "I-Techno Cup Winner",
    caption: "Awarding Night at PNJ Jakarta",
    category: "Competition",
    className: "h-64 md:h-70", 
  },
  {
    src: "/gallery/asprak-asd.jpeg",
    alt: "Algorithms Assistant",
    caption: "Algorithms & Data Structures Assistant", 
    category: "Experience",
    className: "h-64 md:h-70",
  },
  {
    src: "/gallery/sertif-hology.jpg",
    alt: "HOLOGY 8.0 Certificate",
    caption: "1st Runner Up HOLOGY 8.0",
    category: "Achievement",
    className: "h-48 md:h-60",
  },
  {
    src: "/gallery/sertif-itechno.png",
    alt: "ITECHNO Cup Certificate",
    caption: "2nd Place ITECHNO CUP 2025",
    category: "Achievement",
    className: "h-48 md:h-64", 
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="mb-12 space-y-4 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Beyond the Code
        </h2>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          A glimpse into my journey. From national competitions to university life, 
          capturing moments of <span className="text-zinc-900 dark:text-zinc-200 font-medium">growth</span> and <span className="text-zinc-900 dark:text-zinc-200 font-medium">collaboration</span>.
        </p>
      </div>

      {/* Masonry Grid Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {GALLERY_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800"
          >
            {/* Image Container */}
            <div className={cn("relative w-full", img.className)}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Overlay Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">
                    {img.category}
                </span>
                <p className="text-white font-medium text-base md:text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                </p>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}