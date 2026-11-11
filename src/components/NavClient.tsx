"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { careerPrograms } from "@/lib/courses";
import MobileNav from "@/components/MobileNav";
import ScrollProgress from "@/components/ScrollProgress";

/* Nav items — requirements doc section 2, plus Workshops (approved Nov 2026). */
const courseLinks = [
  ...careerPrograms.map((c) => ({ name: c.title, href: `/courses/${c.slug}` })),
  { name: "All short & advanced courses →", href: "/courses" },
];

const internshipLinks = [
  { name: "30-Days Coding Challenge", href: "/internship/30-days-coding-challenge" },
  { name: "Summer/Winter Training Internship", href: "/internship/summer-winter-training" },
];

const schoolingLinks = [
  { name: "Class 6–8 Coding Program", href: "/schooling/class-6-8" },
  { name: "Class 8–10 Coding Program", href: "/schooling/class-8-10" },
  { name: "Class 10–12 Coding Program", href: "/schooling/class-10-12" },
];

const resourceLinks = [
  { name: "Blogs", href: "/resources/blogs" },
  { name: "Career", href: "/resources/career" },
  { name: "About Us", href: "/about" },
  { name: "Pay After Placement", href: "/resources/pay-after-placement" },
  { name: "Tutorials", href: "/resources/tutorials" },
  { name: "Tech Trends", href: "/resources/tech-trends" },
  { name: "Success Stories", href: "/resources/success-stories" },
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
          background: frosted ? "rgba(14,20,44,0.78)" : "transparent",
          backdropFilter: frosted ? "blur(16px) saturate(140%)" : "none",
          WebkitBackdropFilter: frosted ? "blur(16px) saturate(140%)" : "none",
          borderBottom: frosted ? "1px solid rgba(139,164,255,0.22)" : "1px solid transparent",
          transition: "background 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease",
        }}
      >
        <ScrollProgress />

        <nav className="max-w-brand mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Step2ITCareer-AI home">
            <Logo size="md" theme="dark" />
          </Link>

          {/* Desktop links — pill container */}
          <div
            className="hidden lg:flex items-center gap-0.5 rounded-full px-1.5 py-1"
            style={{
              background: frosted ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
              transition: "background 300ms ease",
            }}
          >
            <NavDropdown label="Courses" items={courseLinks} />
            <NavDropdown label="Internship" items={internshipLinks} />
            <Link href="/workshops" className="nav-link px-3.5 py-2 text-[13px] font-semibold rounded-full">
              Workshops
            </Link>
            <NavDropdown label="Schooling Program" items={schoolingLinks} />
            <NavDropdown label="Resources" items={resourceLinks} />
            <Link href="/contact" className="nav-link px-4 py-2 text-[13px] font-semibold rounded-full">
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("openLoginSheet"))}
            className="btn-grad tap hidden lg:inline-flex items-center px-5 py-2 text-[13px] font-bold rounded-full text-white"
          >
            Login / Sign In
          </button>

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
          background: "rgba(12,21,40,0.99)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
        }}
      >
        {items.map((item) => (
          <Link key={item.name} href={item.href} className="nav-link block px-4 py-3 text-[12.5px] font-semibold" style={{ borderRadius: 0 }}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
