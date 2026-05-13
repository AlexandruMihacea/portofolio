"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  amount?: number;
};

const offset = {
  up: { x: 0, y: 34 },
  down: { x: 0, y: -34 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({ children, className, delay = 0, direction = "up", amount = 0.2 }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const start = offset[direction];

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: start.x, y: start.y, filter: "blur(10px)" }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.16, margin: "-8% 0px -8% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: reducedMotion ? {} : { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 26, scale: 0.98, filter: "blur(8px)" },
        show: reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.62, ease }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className }: { children: React.ReactNode; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reducedMotion ? undefined : { y: -6, scale: 1.01 }}
      whileTap={reducedMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.28, ease }}
    >
      {children}
    </motion.div>
  );
}
