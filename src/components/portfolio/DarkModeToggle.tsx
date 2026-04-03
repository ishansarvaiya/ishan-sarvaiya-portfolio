import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isTrueDark = theme === "true-dark";

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isTrueDark}
      aria-label={isTrueDark ? "Switch to standard theme" : "Switch to true dark theme"}
      title={isTrueDark ? "True Dark: ON" : "True Dark: OFF"}
      className="relative flex h-7 w-[3.25rem] items-center rounded-full border border-border bg-muted px-1 transition-colors duration-300 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Track fills faintly when active */}
      <span
        className="absolute inset-0 rounded-full transition-opacity duration-300"
        style={{
          background: isTrueDark
            ? "linear-gradient(90deg, hsl(38 60% 55% / 0.15), transparent)"
            : "transparent",
        }}
        aria-hidden="true"
      />

      {/* Sliding pill */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 38 }}
        className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold shadow-sm border transition-colors duration-200 ${
          isTrueDark
            ? "ml-auto border-amber-500/40 bg-amber-500/15 text-amber-400"
            : "border-primary/30 bg-primary/10 text-primary"
        }`}
      >
        {isTrueDark ? "✦" : "○"}
      </motion.span>
    </button>
  );
}
