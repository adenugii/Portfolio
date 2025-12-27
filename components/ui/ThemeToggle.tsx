"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700"
      aria-label="Toggle Theme"
    >
      {/* Sun Icon: Rotate & Scale Out saat Dark Mode */}
      <Sun className="h-5 w-5 transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-zinc-900 dark:text-zinc-100" />
      
      {/* Moon Icon: Rotate & Scale In saat Dark Mode */}
      <Moon className="absolute top-2 left-2 h-5 w-5 transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-zinc-900 dark:text-zinc-100" />
    </button>
  );
}