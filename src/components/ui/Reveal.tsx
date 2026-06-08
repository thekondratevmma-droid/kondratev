"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { margin: "-12% 0px -12% 0px", once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={
        reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, filter: "blur(6px)" }
      }
      animate={
        reduceMotion
          ? { opacity: 1 }
          : inView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 18, filter: "blur(6px)" }
      }
      transition={{
        duration: 0.95,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
