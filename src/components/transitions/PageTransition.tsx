'use client'

import { ReactNode } from "react";
import { motion } from "motion/react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{duration: 0.5, ease: "easeInOut"}}
    >
      {children}
    </motion.div>
  );
}
