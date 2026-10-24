import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/portfolio";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { trackEvent } from "@/lib/analytics";
import { press, springSnappy } from "@/lib/motion";

const linkClass =
  "inline-flex min-h-11 items-center rounded-full px-3 text-[0.8125rem] text-foreground/80 hover:text-foreground";

/** Tracks which section is under the nav so its link can be marked current. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { resumeUrl, githubUrl } = useSiteConfig();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="glass-panel fixed inset-x-0 top-0 z-50 border-x-0 border-t-0"
      >
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 md:px-6">
          <a
            href="#"
            aria-label="Ishan Sarvaiya, back to top"
            className="inline-flex min-h-11 items-center rounded-full px-2 text-[0.9375rem] font-semibold tracking-tight"
          >
            IS<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href.slice(1) ? "location" : undefined}
                className={`${linkClass} aria-[current=location]:font-semibold aria-[current=location]:text-foreground`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("resume_download")}
              aria-label="Download resume"
              className={`${linkClass} hidden lg:inline-flex gap-1.5`}
            >
              <Download size={14} aria-hidden="true" />
              Resume
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} hidden md:inline-flex`}
            >
              GitHub
            </a>
            <motion.button
              {...press}
              ref={toggleRef}
              type="button"
              className="md:hidden inline-flex size-11 items-center justify-center rounded-full"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              aria-hidden="true"
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="sheet"
              id="mobile-menu"
              className="glass-panel fixed inset-x-3 top-14 z-50 rounded-3xl p-3 md:hidden"
              style={{ transformOrigin: "top right" }}
              initial={{ opacity: 0, scale: 0.95, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -6 }}
              transition={springSnappy}
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center rounded-2xl px-4 text-[1.375rem] font-semibold tracking-tight"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent("resume_download");
                      setOpen(false);
                    }}
                    className="flex min-h-12 items-center rounded-2xl px-4 text-[1.375rem] font-semibold tracking-tight text-primary"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
