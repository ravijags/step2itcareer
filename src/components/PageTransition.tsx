"use client";
/* A quick fade on route change. No vertical slide: combined with the scroll reset it read as the
   new page "jumping". Scroll restoration itself is handled by Next (see data-scroll-behavior in layout). */
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
