"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LeadPopup from "./LeadPopup";

export default function PopupController() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Auto-show once per 24h
    const key = "popupLastShown";
    const last = localStorage.getItem(key);
    const now = Date.now();
    if (!last || now - parseInt(last) > 24 * 60 * 60 * 1000) {
      const t = setTimeout(() => {
        setOpen(true);
        localStorage.setItem(key, String(now));
      }, 5000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    // Listen for global open event from any page/button
    const handler = () => setOpen(true);
    window.addEventListener("openLeadPopup", handler);
    return () => window.removeEventListener("openLeadPopup", handler);
  }, []);

  useEffect(() => {
    // Close on Escape
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <LeadPopup
            submitted={submitted}
            onSubmit={() => setSubmitted(true)}
            onClose={() => { setOpen(false); setSubmitted(false); }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
