"use client";

import { useState } from "react";

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
  { name: "30-Days Coding Challenge - Rs.10,000", href: "#" },
  { name: "Summer/Winter Training Internship - Rs.10,000", href: "#" },
];

const schoolingLinks = [
  { name: "Class 6-8 Coding Program - Rs.5,000", href: "#" },
  { name: "Class 8-10 Coding Program - Rs.10,000", href: "#" },
  { name: "Class 10-12 Coding Program - Rs.10,000", href: "#" },
];

const resourceLinks = [
  { name: "Blogs", href: "#" },
  { name: "Career", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Pay After Placement", href: "#" },
  { name: "Tutorials", href: "#" },
  { name: "Tech Trends", href: "#" },
  { name: "Success Stories", href: "#" },
];

type Section = "courses" | "internship" | "schooling" | "resources" | null;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Section>(null);

  const toggle = (section: Section) => {
    setExpanded(expanded === section ? null : section);
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

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line bg-nav">
          <span className="text-[15px] font-extrabold tracking-tight text-ink">
            Step2IT<span className="text-primary">Career</span>
            <sup className="text-[9px] text-accent font-bold align-super">AI</sup>
          </span>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-muted hover:text-ink transition-colors shadow-sm"
          >
            ✕
          </button>
        </div>

        {/* Drawer body */}
        <div className="flex-1 overflow-y-auto py-4">

          {/* Courses */}
          <div>
            <button
              onClick={() => toggle("courses")}
              className="w-full flex items-center justify-between px-5 py-3.5 text-[14px] font-bold text-ink hover:bg-soft transition-colors"
            >
              Courses
              <svg
                width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`transition-transform duration-200 ${expanded === "courses" ? "rotate-180" : ""}`}
              >
                <path d="M2 4l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {expanded === "courses" && (
              <div className="bg-soft border-y border-line">
                {courseLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-8 py-3 text-[13px] font-semibold text-muted hover:text-primary transition-colors border-b border-line/50 last:border-0"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Internship */}
          <div>
            <button
              onClick={() => toggle("internship")}
              className="w-full flex items-center justify-between px-5 py-3.5 text-[14px] font-bold text-ink hover:bg-soft transition-colors"
            >
              Internship
              <svg
                width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`transition-transform duration-200 ${expanded === "internship" ? "rotate-180" : ""}`}
              >
                <path d="M2 4l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {expanded === "internship" && (
              <div className="bg-soft border-y border-line">
                {internshipLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-8 py-3 text-[13px] font-semibold text-muted hover:text-primary transition-colors border-b border-line/50 last:border-0"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Schooling */}
          <div>
            <button
              onClick={() => toggle("schooling")}
              className="w-full flex items-center justify-between px-5 py-3.5 text-[14px] font-bold text-ink hover:bg-soft transition-colors"
            >
              Schooling Program
              <svg
                width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`transition-transform duration-200 ${expanded === "schooling" ? "rotate-180" : ""}`}
              >
                <path d="M2 4l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {expanded === "schooling" && (
              <div className="bg-soft border-y border-line">
                {schoolingLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-8 py-3 text-[13px] font-semibold text-muted hover:text-primary transition-colors border-b border-line/50 last:border-0"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Resources */}
          <div>
            <button
              onClick={() => toggle("resources")}
              className="w-full flex items-center justify-between px-5 py-3.5 text-[14px] font-bold text-ink hover:bg-soft transition-colors"
            >
              Resources
              <svg
                width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`transition-transform duration-200 ${expanded === "resources" ? "rotate-180" : ""}`}
              >
                <path d="M2 4l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {expanded === "resources" && (
              <div className="bg-soft border-y border-line">
                {resourceLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-8 py-3 text-[13px] font-semibold text-muted hover:text-primary transition-colors border-b border-line/50 last:border-0"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Contact Us */}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="block px-5 py-3.5 text-[14px] font-bold text-ink hover:bg-soft transition-colors"
          >
            Contact Us
          </a>

        </div>

        {/* Drawer footer */}
        <div className="p-5 border-t border-line space-y-3">
          <a
            href="https://wa.me/919936609430"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#16A34A] text-white font-bold rounded-xl text-sm"
          >
            💬 WhatsApp Us
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-full py-3.5 bg-primary text-white font-bold rounded-xl text-sm"
          >
            Login / Sign In
          </a>
        </div>
      </div>
    </>
  );
}
