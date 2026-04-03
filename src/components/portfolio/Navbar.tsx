import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/portfolio";
import { DarkModeToggle } from "./DarkModeToggle";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full px-6 py-3 glass-panel shadow-[0_0_20px_rgba(0,240,255,0.08)] flex justify-between items-center transition-all duration-200"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Desktop links */}
      <div className="hidden md:flex gap-8 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-headline tracking-tighter uppercase text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right side: dark mode toggle + mobile hamburger */}
      <div className="flex items-center gap-4">
        <DarkModeToggle />

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 p-6 glass-panel rounded-2xl flex flex-col gap-4 md:hidden origin-top"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-headline tracking-tighter uppercase text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
