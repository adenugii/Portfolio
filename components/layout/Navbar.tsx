"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowLeft } from "lucide-react";
import { NAV_LINKS } from "@/lib/content"; // Link Home (About, Projects, etc)
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

// --- LINK KHUSUS HALAMAN PROJECT ---
const PROJECT_LINKS = [
  { name: "Overview", href: "#overview" },
  { name: "Features", href: "#features" },
  { name: "Tech", href: "#tech" },
  { name: "Process", href: "#process" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Cek apakah user sedang di Home Page
  const isHomePage = pathname === "/";

  // Tentukan Link mana yang dipakai
  const currentLinks = isHomePage ? NAV_LINKS : PROJECT_LINKS;
  
  // Ambil ID untuk Active State Hook
  const sectionIds = currentLinks.map((link) => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Jika link adalah hash (#), lakukan smooth scroll
    if (href.startsWith("#")) {
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: "smooth" });
    } else {
        // Jika link biasa (misal logo klik ke '/'), biarkan default behavior (tapi disini kita handle preventDefault di atas)
        // Kita perlu manual navigasi jika itu bukan hash
        window.location.href = href;
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center p-4"
    >
      <nav className="relative flex items-center justify-between px-6 py-3 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm w-full max-w-2xl transition-all duration-300">
        
        {/* --- LOGO / BACK BUTTON --- */}
        {isHomePage ? (
            <Link 
              href="/" 
              className="font-bold text-lg tracking-tighter text-zinc-800 dark:text-zinc-100 mr-4"
              onClick={(e) => handleScroll(e, "#about")}
            >
              AN.
            </Link>
        ) : (
            // Jika di Project Page, Logo berubah jadi tombol Back kecil
            <Link 
              href="/" 
              className="flex items-center gap-2 font-medium text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mr-4 transition-colors"
            >
               <ArrowLeft className="w-4 h-4" /> 
               <span className="hidden sm:inline">Back</span>
            </Link>
        )}

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden md:flex items-center gap-1 mx-auto">
          {currentLinks.map((link) => {
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

        {/* --- RIGHT SECTION --- */}
        <div className="flex items-center gap-3 pl-4">
            <ThemeToggle />
            
            {/* Mobile Hamburger */}
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
            {currentLinks.map((link) => {
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
  );
}