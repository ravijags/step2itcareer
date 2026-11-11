"use client";

import { useState, useEffect } from "react";
import LeadPopup, { type LeadPreset } from "./LeadPopup";

export default function PopupController() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [preset, setPreset] = useState<LeadPreset | undefined>();

  // Listen for global trigger — works on every page including homepage
  useEffect(() => {
    // Callers may pass { detail: { program, heading, sub, cta } } to tailor the sheet (e.g. a workshop signup).
    const handler = (e: Event) => { setPreset((e as CustomEvent<LeadPreset>).detail ?? undefined); setOpen(true); };
    window.addEventListener("openLeadPopup", handler);
    return () => window.removeEventListener("openLeadPopup", handler);
  }, []);

  // Auto-show once per session, on any page, after 9s. Dismissing counts as shown.
  useEffect(() => {
    const KEY = "s2it-popup-shown";
    if (sessionStorage.getItem(KEY)) return;
    const t = setTimeout(() => { sessionStorage.setItem(KEY, "1"); setPreset(undefined); setOpen(true); }, 9000);
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
      preset={preset}
      submitted={submitted}
      onSubmit={() => setSubmitted(true)}
      onClose={() => { setOpen(false); setSubmitted(false); }}
    />
  );
}
