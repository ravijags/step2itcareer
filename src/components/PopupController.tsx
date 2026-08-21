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

  // Auto-show on inner pages after 5s (homepage fires its own timer via page.tsx)
  useEffect(() => {
    if (window.location.pathname === "/") return;
    const key = "s2ic_popup_v3";
    if (sessionStorage.getItem(key)) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(key, "1");
    }, 5000);
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
