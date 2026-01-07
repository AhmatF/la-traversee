/**
 * La Traversée - Variants Framer Motion
 * Animations éco-conçues (CSS transforms uniquement)
 */

import { Variants, Transition } from "framer-motion";

// ============================
// TRANSITIONS PAR DÉFAUT
// ============================

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1], // ease-out-quart
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

export const staggerTransition: Transition = {
  staggerChildren: 0.1,
  delayChildren: 0.2,
};

// ============================
// VARIANTS DE BASE
// ============================

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

// ============================
// VARIANTS AVEC SCALE
// ============================

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const scaleInBounce: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

// ============================
// VARIANTS POUR CONTAINERS
// ============================

export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: staggerTransition,
  },
};

export const staggerContainerFast: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// ============================
// VARIANTS POUR ITEMS
// ============================

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// ============================
// VARIANTS POUR SECTIONS
// ============================

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ============================
// VARIANTS POUR BADGES
// ============================

export const badgePulse: Variants = {
  initial: {
    scale: 1,
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================
// VARIANTS POUR CHIFFRES
// ============================

export const counterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ============================
// VARIANTS POUR IMAGES
// ============================

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ============================
// VARIANTS POUR NAVIGATION
// ============================

export const menuSlide: Variants = {
  closed: {
    opacity: 0,
    height: 0,
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const menuItem: Variants = {
  closed: {
    opacity: 0,
    x: -20,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// ============================
// VARIANTS PILIERS
// ============================

export const pilierCard: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
};

// ============================
// VARIANTS TRANSITION URGENCE → ESPOIR
// ============================

export const transitionSection: Variants = {
  urgence: {
    backgroundColor: "var(--urgency-bg)",
    color: "var(--urgency-text)",
  },
  espoir: {
    backgroundColor: "var(--hope-dawn)",
    color: "var(--ocean-midnight)",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

// ============================
// VIEWPORT OPTIONS
// ============================

export const viewportOnce = {
  once: true,
  margin: "-100px",
};

export const viewportRepeating = {
  once: false,
  margin: "-50px",
  amount: 0.3,
};

// ============================
// REDUCED MOTION FALLBACKS
// ============================

export const reducedMotionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
};
