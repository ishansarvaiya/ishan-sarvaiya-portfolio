import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { REVEAL_OFFSET, spring } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
}

/**
 * Scroll reveal: a short fade and small rise, played once when the element
 * enters the viewport. Opacity and transform only; MotionConfig handles
 * prefers-reduced-motion by dropping the transform.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  const y = direction === "up" ? REVEAL_OFFSET : 0;
  const x = direction === "left" ? -REVEAL_OFFSET : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : undefined}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}
