"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";
import ScrollProgress from "@/components/ScrollProgress";

/* Nav items — exactly per requirements doc section 2. Do not add or rename. */
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

export const NAV_HEIGHT = 56;

/* Pages whose top section is LIGHT — nav must be frosted from the start there,
   otherwise white nav text would sit on a light background and disappear. */
function hasLightTop(pathname: string) {
  return pathname.startsWith("/courses/") || pathname.startsWith("/about");
}

export default function NavClient() {
  const pathname = usePathname() ?? "/";
  const lightTop = hasLightTop(pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const frosted = scrolled || lightTop;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          height: NAV_HEIGHT,
          background: frosted ? "rgba(8,12,28,0.86)" : "transparent",
          backdropFilter: frosted ? "blur(16px) saturate(140%)" : "none",
          WebkitBackdropFilter: frosted ? "blur(16px) saturate(140%)" : "none",
          borderBottom: frosted ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          transition: "background 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease",
        }}
      >
        <ScrollProgress />

        <nav className="max-w-brand mx-auto px-6 h-full flex items-center justify-between">
          <a href="/" className="flex items-center" aria-label="Step2ITCareer-AI home">
            <Logo size="md" theme="dark" />
          </a>

          {/* Desktop links — pill container */}
          <div
            className="hidden md:flex items-center gap-0.5 rounded-full px-1.5 py-1"
            style={{
              background: frosted ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
              transition: "background 300ms ease",
            }}
          >
            <NavDropdown label="Courses" items={courseLinks} />
            <NavDropdown label="Internship" items={internshipLinks} />
            <NavDropdown label="Schooling Program" items={schoolingLinks} />
            <NavDropdown label="Resources" items={resourceLinks} />
            <a href="/contact" className="nav-link px-4 py-2 text-[13px] font-semibold rounded-full">
              Contact Us
            </a>
          </div>

          <a
            href="#"
            className="hidden md:inline-flex items-center px-5 py-2 text-[13px] font-bold rounded-full text-white bg-primary hover:bg-primary-deep transition-all"
            style={{ boxShadow: frosted ? "0 0 22px rgba(59,91,255,0.35)" : "0 4px 16px rgba(59,91,255,0.35)" }}
          >
            Login / Sign In
          </a>

          <MobileNav />
        </nav>
      </header>

      {/* Spacer: only on light-top pages so content isn't hidden under the fixed nav.
          Dark-hero pages want the nav to overlay the hero, so no spacer there. */}
      {lightTop && <div style={{ height: NAV_HEIGHT }} aria-hidden />}
    </>
  );
}

function NavDropdown({ label, items }: { label: string; items: { name: string; href: string }[] }) {
  return (
    <div className="relative group">
      <button className="nav-link flex items-center gap-1 px-4 py-2 text-[13px] font-semibold rounded-full">
        {label}
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2.2" className="mt-0.5 opacity-60">
          <path d="M2 4l3.5 3.5L9 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className="absolute top-full left-0 mt-2 w-72 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden"
        style={{
          background: "rgba(12,21,40,0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
        }}
      >
        {items.map((item) => (
          <a key={item.name} href={item.href} className="nav-link block px-4 py-3 text-[12.5px] font-semibold" style={{ borderRadius: 0 }}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
