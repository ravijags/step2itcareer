"use client";
import { motion } from "framer-motion";

/* Scroll reveal — part of the v4.1 motion system: 16px fade-up, plays once, and triggers as soon as
   the element enters the viewport (amount 0) so items at the very bottom of a page always finish. */
export const REVEAL = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0 as const, margin: "0px 0px -40px 0px" },
};

export default function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div {...REVEAL} transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}
