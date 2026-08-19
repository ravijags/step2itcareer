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
  { name: "CPEP - Customized Excellence Program", href: "/courses/cpep-customized-professional-excellence" },
  { name: "AI Automation & No-Code Solutions", href: "/courses/ai-automation-no-code" },
  { name: "Digital Marketing & Growth Analytics", href: "/courses/digital-marketing-growth-analytics" },
  { name: "System Design & Software Architecture", href: "/courses/system-design-software-architecture" },
];

const internshipLinks = [
  { name: "30-Days Coding Challenge — ₹10,000", href: "/internship" },
  { name: "Summer/Winter Training Internship — ₹6,000", href: "/internship" },
];

const schoolingLinks = [
  { name: "Class 6–8 Coding Program — ₹5,000", href: "/schooling" },
  { name: "Class 8–10 Coding Program", href: "/schooling" },
  { name: "Class 10–12 Coding Program", href: "/schooling" },
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

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const toggle = (section: Section) => {
    setExpanded(expanded === section ? null : section);
  };

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 rounded-lg text-ink"
        aria-label="Open menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
        </svg>
      </button>

      {/* Full-screen overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[999] md:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={close}
        />
      )}

      {/* Drawer — slides in from right, sits above overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-[88%] max-w-[360px] bg-white z-[1000] shadow-2xl flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line bg-white shrink-0">
          <a href="/" onClick={close} className="text-[15px] font-extrabold tracking-tight text-ink">
            Step2IT<span className="text-primary">Career</span>
            <sup className="text-[9px] text-accent font-bold align-super">AI</sup>
          </a>
          <button
            onClick={close}
            className="w-9 h-9 bg-soft rounded-full flex items-center justify-center text-muted hover:text-ink transition-colors text-lg font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Scrollable nav body */}
        <div className="flex-1 overflow-y-auto">

          <MobileAccordion
            label="Courses"
            section="courses"
            expanded={expanded}
            onToggle={toggle}
            items={courseLinks}
            onClose={close}
          />

          <MobileAccordion
            label="Internship"
            section="internship"
            expanded={expanded}
            onToggle={toggle}
            items={internshipLinks}
            onClose={close}
          />

          <MobileAccordion
            label="Schooling Program"
            section="schooling"
            expanded={expanded}
            onToggle={toggle}
            items={schoolingLinks}
            onClose={close}
          />

          <MobileAccordion
            label="Resources"
            section="resources"
            expanded={expanded}
            onToggle={toggle}
            items={resourceLinks}
            onClose={close}
          />

          <a
            href="/contact"
            onClick={close}
            className="flex items-center px-5 py-4 text-[14px] font-bold text-ink hover:bg-soft border-b border-line transition-colors"
          >
            Contact Us
          </a>

        </div>

        {/* Footer CTAs */}
        <div className="p-5 border-t border-line space-y-3 shrink-0 bg-white">
          <a
            href="https://wa.me/919936609430"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#16A34A] text-white font-bold rounded-xl text-sm"
            onClick={close}
          >
            💬 WhatsApp Us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-full py-3.5 bg-primary text-white font-bold rounded-xl text-sm"
            onClick={close}
          >
            Login / Sign In
          </a>
        </div>
      </div>
    </>
  );
}

function MobileAccordion({
  label, section, expanded, onToggle, items, onClose,
}: {
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
      >
        {label}
        <svg
          width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"
          className={`transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M3 5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-soft">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="flex items-center px-8 py-3 text-[13px] font-semibold text-muted hover:text-primary transition-colors border-b border-line/50 last:border-0"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
