"use client";

import { useState, useEffect } from "react";
import LeadPopup from "./LeadPopup";

export default function PopupController() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-show once per session on ALL pages except homepage
  // (homepage has its own popup logic with its own key)
  useEffect(() => {
    const isHomepage = window.location.pathname === "/";
    if (isHomepage) return;

    // Use session storage so it resets each visit
    const key = "s2ic_popup_shown_v2";
    if (sessionStorage.getItem(key)) return;

    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(key, "1");
    }, 4000);
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
