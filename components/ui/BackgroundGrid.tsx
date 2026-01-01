"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundGrid = ({ className }: { className?: string }) => {
  // --- LOGIC 1: MOUSE FOLLOW (DESKTOP) ---
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
        "relative h-full w-full bg-white dark:bg-black overflow-hidden",
        className
      )}
    >
      {/* 1. BASE LAYER (Grid Statis) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* 2. DESKTOP LAYER (Interactive Mouse) */}
      <motion.div
        className="pointer-events-none absolute inset-0 transition duration-300 opacity-0 md:opacity-100 hidden md:block"
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
        <div className="absolute inset-0 bg-[radial-gradient(#737373_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-100" />
      </motion.div>

      {/* 3. MOBILE LAYER (Auto-Animation - FIXED TS ERROR) */}
      <motion.div
        className="pointer-events-none absolute inset-0 md:hidden block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
            className="absolute inset-0 bg-[radial-gradient(#737373_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"
            // HAPUS WebkitMaskImage DARI SINI
            animate={{
                maskImage: [
                    "radial-gradient(300px circle at 20% 20%, black 0%, transparent 100%)",
                    "radial-gradient(300px circle at 80% 30%, black 0%, transparent 100%)",
                    "radial-gradient(300px circle at 50% 80%, black 0%, transparent 100%)",
                    "radial-gradient(300px circle at 20% 20%, black 0%, transparent 100%)"
                ],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
            }}
        />
      </motion.div>
      
      {/* 4. VIGNETTE */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/60 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_100%)] pointer-events-none" />
    </div>
  );
};