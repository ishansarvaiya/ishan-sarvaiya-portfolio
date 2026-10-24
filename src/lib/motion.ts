import type { Transition, Variants } from "framer-motion";

/**
 * Motion system. Springs by default, critically damped (damping ratio 1,
 * bounce 0) with a response of roughly 0.3–0.4s. Bounce is reserved for
 * momentum-driven interactions (flicks, drags released with velocity).
 * Animate transform and opacity only.
 */

/** Default for most interactions: UI feedback, layout, expand/collapse. */
export const spring: Transition = { type: "spring", duration: 0.35, bounce: 0 };

/** Quicker response for press feedback and small state changes. */
export const springSnappy: Transition = { type: "spring", duration: 0.25, bounce: 0 };

/** Slightly longer for large surfaces such as sheets and expanding cards. */
export const springSheet: Transition = { type: "spring", duration: 0.45, bounce: 0 };

/** Momentum-driven only (damping ratio ≈ 0.8). */
export const springBouncy: Transition = { type: "spring", duration: 0.5, bounce: 0.2 };

/** Press feedback: starts on pointerdown, interruptible, starts from the current value. */
export const press = {
  whileTap: { scale: 0.97 },
  transition: springSnappy,
} as const;

/** Subtle lift for cards and large targets. */
export const pressCard = {
  whileTap: { scale: 0.985 },
  transition: springSnappy,
} as const;

/** Scroll reveal: short, subtle, staggered, played once. */
export const REVEAL_OFFSET = 12;
export const REVEAL_STAGGER = 0.06;

export const revealContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: REVEAL_STAGGER } },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET },
  show: { opacity: 1, y: 0, transition: spring },
};
