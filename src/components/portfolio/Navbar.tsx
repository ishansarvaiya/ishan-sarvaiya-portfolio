import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/portfolio";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { trackEvent } from "@/lib/analytics";
import { Download } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resumeUrl, githubUrl } = useSiteConfig();

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full px-4 md:px-6 py-3 glass-panel flex justify-between items-center transition-all duration-200 relative"
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="#"
        className="font-headline font-bold text-sm tracking-tight shrink-0 hidden sm:block hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md transition-colors"
      >
        IS<span className="text-primary">.</span>
      </a>

      <NavLinks />

      <NavActions
        resumeUrl={resumeUrl}
        githubUrl={githubUrl}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
    </nav>
  );
}

function NavLinks() {
  return (
    <div className="hidden md:flex gap-6 lg:gap-8 items-center">
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="font-headline tracking-tighter uppercase text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-0.5 transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function NavActions({
  resumeUrl,
  githubUrl,
  mobileOpen,
  setMobileOpen,
}: {
  resumeUrl: string;
  githubUrl: string;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <>
      <div className="flex items-center gap-2 md:gap-3">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("resume_download")}
          className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary border border-transparent hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
          aria-label="Download resume"
        >
          <Download size={14} />
          Resume
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md transition-colors px-2"
        >
          GitHub
        </a>
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 p-6 glass-panel rounded-xl flex flex-col gap-4 md:hidden origin-top"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-headline tracking-tighter uppercase text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("resume_download")}
              className="font-mono text-xs uppercase tracking-wider text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md py-1"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
