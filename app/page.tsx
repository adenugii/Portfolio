import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";

export default function Home() {
  return (
    // Pastikan selection color juga Neutral/Zinc, bukan Blue
    <main className="relative min-h-screen bg-white dark:bg-black overflow-hidden selection:bg-neutral-200 dark:selection:bg-neutral-800">
      
      {/* BACKGROUND GRID (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <BackgroundGrid />
      </div>

      {/* KONTEN */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        
        <footer className="py-6 text-center border-t border-neutral-100 dark:border-neutral-900 bg-white/80 dark:bg-black/80 backdrop-blur-md">
          <p className="text-neutral-500 text-xs">
              © {new Date().getFullYear()} Ade Nugroho. All rights reserved.
          </p>
        </footer>
      </div>

    </main>
  );
}