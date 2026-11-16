"use client";
/* Route change: a dark veil (the colour of every page's hero) fades away over the new page.
   The page itself is never transparent, so the light body colour can't flash through between pages.
   Scroll restoration is handled by Next (see data-scroll-behavior in layout). */
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  return (
    <>
      {!reduce && (
        <motion.div key={pathname} aria-hidden initial={{ opacity: 1 }} animate={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-30 bg-ink2 pointer-events-none" />
      )}
      {children}
    </>
  );
}
