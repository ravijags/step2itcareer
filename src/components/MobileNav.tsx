"use client";

import { useState, useEffect } from "react";

const courseLinks = [
  { name: "Generative AI & Multi-Agent Systems", href: "/courses/generative-ai-multi-agent" },
  { name: "Data Science, ML & AI Engineering", href: "/courses/data-science-ml-ai" },
  { name: "Data Analytics & Business Intelligence", href: "/courses/data-analytics-bi" },
  { name: "Business Analyst & Product Management", href: "/courses/business-analyst-product-management" },
  { name: "Full Stack Software Engineering", href: "/courses/full-stack-software-engineering" },
  { name: "Cloud, DevOps & Platform Engineering", href: "/courses/cloud-devops-platform-engineering" },
  { name: "Cybersecurity & Cloud Security", href: "/courses/cybersecurity-cloud-security" },
  { name: "Software Testing & QA Automation", href: "/courses/software-testing-qa-automation" },
  { name: "CPEP™ — Customized Excellence Program", href: "/courses/cpep-customized-professional-excellence" },
  { name: "AI Automation & No-Code Solutions", href: "/courses/ai-automation-no-code" },
  { name: "Digital Marketing & Growth Analytics", href: "/courses/digital-marketing-growth-analytics" },
  { name: "System Design & Software Architecture", href: "/courses/system-design-software-architecture" },
];

const internshipLinks = [
  { name: "30-Days Coding Challenge — ₹10,000", href: "/internship/30-days-coding-challenge" },
  { name: "Summer/Winter Training — ₹6,000", href: "/internship/summer-winter-training" },
];

const schoolingLinks = [
  { name: "Class 6–8 Coding Program — ₹5,000", href: "/schooling/class-6-8" },
  { name: "Class 8–10 Coding Program — ₹10,000", href: "/schooling/class-8-10" },
  { name: "Class 10–12 Coding Program — ₹10,000", href: "/schooling/class-10-12" },
];

const resourceLinks = [
  { name: "Blogs", href: "#" },
  { name: "Career", href: "#" },
  { name: "About Us", href: "/about" },
  { name: "Pay After Placement", href: "#" },
  { name: "Tutorials", href: "#" },
  { name: "Tech Trends", href: "#" },
  { name: "Success Stories", href: "#" },
];

type Section = "courses" | "internship" | "schooling" | "resources" | null;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Section>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const toggle = (section: Section) =>
    setExpanded((prev) => (prev === section ? null : section));

  const close = () => { setOpen(false); setExpanded(null); };

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-lg text-ink"
        aria-label="Open navigation menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[9997] md:hidden"
          style={{ background: "rgba(14,21,38,0.6)", backdropFilter: "blur(2px)" }}
          onClick={close}
          aria-hidden
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[88%] max-w-[360px] bg-white z-[9998] shadow-2xl flex flex-col md:hidden transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line bg-white shrink-0">
          <a href="/" onClick={close} className="text-[15px] font-extrabold tracking-tight text-ink">
            Step2IT<span className="text-primary">Career</span>
            <sup className="text-[9px] text-accent font-bold align-super">AI</sup>
          </a>
          <button
            onClick={close}
            className="w-9 h-9 bg-soft rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-line transition-colors text-base font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Nav */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <NavAccordion label="Courses" section="courses" expanded={expanded} onToggle={toggle} items={courseLinks} onClose={close} />
          <NavAccordion label="Internship" section="internship" expanded={expanded} onToggle={toggle} items={internshipLinks} onClose={close} />
          <NavAccordion label="Schooling Program" section="schooling" expanded={expanded} onToggle={toggle} items={schoolingLinks} onClose={close} />
          <NavAccordion label="Resources" section="resources" expanded={expanded} onToggle={toggle} items={resourceLinks} onClose={close} />
          <a href="/contact" onClick={close} className="flex items-center justify-between px-5 py-4 text-[14px] font-bold text-ink hover:bg-soft border-b border-line transition-colors">
            Contact Us
          </a>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 border-t border-line space-y-2.5 shrink-0 bg-white" style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}>
          <a href="https://wa.me/919936609430" onClick={close}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#16A34A] text-white font-bold rounded-xl text-sm hover:bg-green-700 transition-colors">
            💬 WhatsApp Us
          </a>
          <a href="#" onClick={close}
            className="flex items-center justify-center w-full py-3.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary-deep transition-colors">
            Login / Sign In
          </a>
        </div>
      </div>
    </>
  );
}

function NavAccordion({ label, section, expanded, onToggle, items, onClose }: {
  label: string;
  section: Section;
  expanded: Section;
  onToggle: (s: Section) => void;
  items: { name: string; href: string }[];
  onClose: () => void;
}) {
  const isOpen = expanded === section;
  return (
    <div className="border-b border-line">
      <button
        onClick={() => onToggle(section)}
        className="w-full flex items-center justify-between px-5 py-4 text-[14px] font-bold text-ink hover:bg-soft transition-colors"
        aria-expanded={isOpen}
      >
        {label}
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"
          className={`transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
          <path d="M3 5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-soft">
          {items.map((item) => (
            <a key={item.name} href={item.href} onClick={onClose}
              className="flex items-center px-8 py-3 text-[13px] font-semibold text-muted hover:text-primary hover:bg-white transition-colors border-b border-line/50 last:border-0">
              <span className="mr-2 text-primary/40">›</span>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
