"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((link) => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  // Smooth Scroll Handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    
    setIsOpen(false);

    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center p-4"
      >
        <nav className="relative flex items-center justify-between px-6 py-3 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm w-full max-w-2xl transition-all duration-300">
          
          {/* --- LOGO --- */}
          <Link 
            href="/" 
            className="font-bold text-lg tracking-tighter text-zinc-800 dark:text-zinc-100 mr-4"
            onClick={(e) => handleScroll(e, "#about")}
          >
            AN.
          </Link>

          {/* --- DESKTOP MENU (Hidden di Mobile) --- */}
          <ul className="hidden md:flex items-center gap-1 mx-auto">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);

              return (
                <li key={link.name} className="relative">
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full z-10 block",
                      isActive 
                        ? "text-zinc-900 dark:text-white" 
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* --- RIGHT SECTION (Toggle & Mobile Button) --- */}
          <div className="flex items-center gap-3 pl-4">
              <ThemeToggle />
              
              {/* Mobile Hamburger Button (Visible only on mobile) */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
          </div>
        </nav>

        {/* --- MOBILE MENU DROPDOWN --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-xl md:hidden flex flex-col gap-2 overflow-hidden"
            >
              {NAV_LINKS.map((link) => {
                 const isActive = activeSection === link.href.substring(1);
                 return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" 
                        : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    )}
                  >
                    {link.name}
                    
                    {/* Dot Indicator untuk Active State di Mobile */}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    )}
                  </Link>
                 )
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>
    </>
  );
}