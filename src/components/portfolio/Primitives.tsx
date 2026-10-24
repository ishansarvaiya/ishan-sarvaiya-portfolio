import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { press } from "@/lib/motion";

type SectionProps = {
  id?: string;
  /** "grey" sections are full-bleed bands; "canvas" sections sit on the page. */
  tone?: "canvas" | "grey";
  width?: "narrow" | "default" | "wide";
  className?: string;
  children: ReactNode;
  labelledBy?: string;
};

const WIDTHS = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
} as const;

export function Section({
  id,
  tone = "canvas",
  width = "default",
  className,
  children,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "px-6 py-[clamp(5rem,12vw,9rem)]",
        tone === "grey" && "bg-surface-low",
        className,
      )}
    >
      <div className={cn("mx-auto", WIDTHS[width])}>{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-[clamp(2.5rem,6vw,4.5rem)]",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && <p className="text-eyebrow text-primary mb-3">{eyebrow}</p>}
      <h2 id={id} className="text-title text-balance">
        {title}
      </h2>
      {lead && (
        <p className="text-lead text-muted-foreground mt-5 text-pretty">{lead}</p>
      )}
    </header>
  );
}

type ButtonLinkProps = HTMLMotionProps<"a"> & {
  variant?: "primary" | "secondary" | "link";
};

const BUTTON_VARIANTS = {
  primary: "bg-primary text-primary-foreground px-6 hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground px-6 hover:opacity-80",
  link: "text-primary hover:opacity-80",
} as const;

/** Pill link with press feedback on pointerdown. 44px minimum hit area. */
export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <motion.a
      {...press}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-[0.9375rem] font-medium tracking-tight transition-opacity duration-200",
        BUTTON_VARIANTS[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
