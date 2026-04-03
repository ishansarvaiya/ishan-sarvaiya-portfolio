import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "none";
}

/**
 * Wraps children in a framer-motion element that fades in when it enters
 * the viewport. Uses `useInView` with `once: true` so the animation only
 * fires once per page load — avoids jank on scroll-back.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const initialY = direction === "up" ? 24 : 0;
  const initialX = direction === "left" ? -24 : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
