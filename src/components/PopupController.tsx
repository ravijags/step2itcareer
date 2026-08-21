"use client";

import { useState, useEffect } from "react";
import LeadPopup from "./LeadPopup";

export default function PopupController() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-show once per session (not on homepage — homepage has its own logic)
  useEffect(() => {
    const key = "popupShownGlobal";
    if (sessionStorage.getItem(key)) return;
    // Only auto-show if NOT on homepage (homepage handles its own)
    if (window.location.pathname === "/") return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(key, "1");
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  // Listen for global trigger from any button on any page
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("openLeadPopup", handler);
    return () => window.removeEventListener("openLeadPopup", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
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
