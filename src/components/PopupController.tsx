"use client";

import { useState, useEffect } from "react";
import LeadPopup from "./LeadPopup";

export default function PopupController() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Listen for global trigger — works on every page including homepage
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openLeadPopup", handler);
    return () => window.removeEventListener("openLeadPopup", handler);
  }, []);

  // Auto-show once per session, on any page, after 9s. Dismissing counts as shown.
  useEffect(() => {
    const KEY = "s2it-popup-shown";
    if (sessionStorage.getItem(KEY)) return;
    const t = setTimeout(() => { sessionStorage.setItem(KEY, "1"); setOpen(true); }, 9000);
    return () => clearTimeout(t);
  }, []);

  // Escape key close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  return (
    <LeadPopup
      submitted={submitted}
      onSubmit={() => setSubmitted(true)}
      onClose={() => { setOpen(false); setSubmitted(false); }}
    />
  );
}
