"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundGrid = ({ className }: { className?: string }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  useEffect(() => {
    function handleMouseMove({ clientX, clientY }: MouseEvent) {
      mouseX.set(clientX);
      mouseY.set(clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      className={cn(
        "relative h-full w-full bg-white dark:bg-black",
        className
      )}
    >
      {/* 1. BASE LAYER (Grid Diam)
        Light Mode: #e5e5e5 (Abu-abu sangat muda/Neutral-200) - Agar background terlihat bersih.
        Dark Mode: #262626 (Neutral-800)
      */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* 2. HIGHLIGHT LAYER (Efek Kursor)
        Menggunakan Masking agar hanya muncul di sekitar mouse.
      */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 lg:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      >
        {/* PERUBAHAN DISINI (WARNA DOTS SAAT KENA MOUSE):
           Light Mode: #737373 (Neutral-500) -> Jadi abu-abu medium/gelap. Kontras terlihat jelas di background putih.
           Dark Mode: #ffffff (White) -> Jadi putih menyala.
        */}
        <div className="absolute inset-0 bg-[radial-gradient(#737373_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-100" />
      </motion.div>
      
      {/* 3. VIGNETTE (Pinggiran Halus) */}
      {/* Di Light Mode kita buat fade ke Putih Bersih (bg-white/80) agar konten tengah lebih fokus */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_100%)] pointer-events-none" />
    </div>
  );
};