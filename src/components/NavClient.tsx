"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { courses, coursesByLevel, LEVELS, type Level } from "@/lib/courses";
import { internshipLinks, schoolingLinks, resourceLinks, type NavItem } from "@/lib/nav";
import MobileNav from "@/components/MobileNav";
import ScrollProgress from "@/components/ScrollProgress";

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
  // A menu stays open only on the page it was opened on — any navigation closes it,
  // even when the cursor is still resting where the panel was.
  const [menuState, setMenuState] = useState<{ id: string | null; path: string }>({ id: null, path: pathname });
  const open = menuState.path === pathname ? menuState.id : null;
  const setOpen = (id: string | null) => setMenuState({ id, path: pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuState((m) => ({ ...m, id: null })); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const frosted = scrolled || lightTop;
  const menu = (id: string) => ({ id, open: open === id, setOpen });

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          height: NAV_HEIGHT,
          // Near-solid ink when scrolled: the old 78% glass turned muddy grey over white sections.
          background: frosted ? "rgba(10,15,34,0.94)" : "transparent",
          backdropFilter: frosted ? "blur(16px) saturate(140%)" : "none",
          WebkitBackdropFilter: frosted ? "blur(16px) saturate(140%)" : "none",
          borderBottom: frosted ? "1px solid rgba(139,164,255,0.22)" : "1px solid transparent",
          transition: "background 250ms ease, border-color 250ms ease",
        }}
      >
        <ScrollProgress />

        <nav className="relative max-w-brand mx-auto px-6 h-full flex items-center justify-between" onMouseLeave={() => setOpen(null)}>
          <Link href="/" className="flex items-center" aria-label="Step2ITCareer-AI home">
            <Logo size="md" theme="dark" />
          </Link>

          {/* Desktop links — pill container */}
          <div
            className="hidden lg:flex items-center gap-0.5 rounded-full px-1.5 py-1"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
          >
            <CoursesMega {...menu("courses")} />
            <NavDropdown label="Internship" items={internshipLinks} {...menu("internship")} />
            <Link href="/workshops" onMouseEnter={() => setOpen(null)} className="nav-link px-3.5 py-2 text-[13px] font-semibold rounded-full">
              Workshops
            </Link>
            <NavDropdown label="Schooling Program" items={schoolingLinks} {...menu("schooling")} />
            <NavDropdown label="Resources" items={resourceLinks} {...menu("resources")} />
            <Link href="/contact" onMouseEnter={() => setOpen(null)} className="nav-link px-4 py-2 text-[13px] font-semibold rounded-full">
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

      {/* Spacer: only on light-top pages so content isn't hidden under the fixed nav. */}
      {lightTop && <div style={{ height: NAV_HEIGHT }} aria-hidden />}
    </>
  );
}

type MenuProps = { id: string; open: boolean; setOpen: (v: string | null) => void };

const PANEL_STYLE: React.CSSProperties = {
  background: "#0C1328",
  border: "1px solid rgba(255,255,255,0.09)",
  boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
};

function Trigger({ label, id, open, setOpen }: MenuProps & { label: string }) {
  return (
    <button
      type="button"
      onMouseEnter={() => setOpen(id)}
      onClick={() => setOpen(open ? null : id)}
      aria-expanded={open}
      className="nav-link flex items-center gap-1 px-4 py-2 text-[13px] font-semibold rounded-full"
      style={open ? { color: "#fff", background: "rgba(255,255,255,0.07)" } : undefined}
    >
      {label}
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2.2"
        className="mt-0.5 opacity-60 transition-transform duration-150" style={{ transform: open ? "rotate(180deg)" : "none" }}>
        <path d="M2 4l3.5 3.5L9 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function NavDropdown({ label, items, ...m }: MenuProps & { label: string; items: NavItem[] }) {
  return (
    <div className="relative">
      <Trigger label={label} {...m} />
      {/* pt-2 instead of a margin keeps the hover area continuous between button and panel */}
      <div className="dd-panel absolute top-full left-0 pt-2 z-50" data-open={m.open}>
        <div className="w-72 rounded-xl overflow-hidden py-1.5" style={PANEL_STYLE}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => m.setOpen(null)} className="nav-link block px-4 py-2.5" style={{ borderRadius: 0 }}>
              <span className="block text-[13px] font-semibold">{item.name}</span>
              {item.note && <span className="block text-[11.5px] text-white/40 mt-0.5">{item.note}</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Courses: one three-column panel (Career / Advanced / Short) instead of a 12-item list that ran off-screen. */
function CoursesMega(m: MenuProps) {
  const cols: Level[] = ["career", "short"];
  return (
    <div>
      <Trigger label="Courses" {...m} />
      <div className="dd-panel absolute top-full w-[680px] pt-2 z-50" style={{ left: "50%", marginLeft: -340 }} data-open={m.open}>
        <div className="rounded-2xl overflow-hidden" style={PANEL_STYLE}>
          <div className="grid grid-cols-2 gap-4 px-5 py-4 max-h-[calc(100svh-120px)] overflow-y-auto">
            {cols.map((lvl) => (
              <div key={lvl} className="min-w-0">
                <div className="px-2.5 mb-1.5">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8BA4FF]">{LEVELS[lvl].label}s</div>
                  <div className="text-[11.5px] text-white/40 mt-0.5">{LEVELS[lvl].blurb}</div>
                </div>
                {coursesByLevel(lvl).map((c) => (
                  <Link key={c.slug} href={`/courses/${c.slug}`} onClick={() => m.setOpen(null)}
                    className="nav-link flex items-center gap-2 px-2.5 py-[6px] rounded-md text-[13px] font-semibold leading-[19px]">
                    <span className="truncate">{c.title}</span>
                    {c.hot && <span className="shrink-0 text-[9px] font-extrabold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-accent/15 text-[#FF9A6C]">Hot</span>}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-6 py-2.5 border-t border-white/[0.07] bg-white/[0.02]">
            <span className="text-[12px] text-white/50">Courses stack — start small, upgrade later and pay only the difference.</span>
            <Link href="/courses" onClick={() => m.setOpen(null)} className="text-[12.5px] font-extrabold text-[#8BA4FF] hover:text-white">See all {courses.length} courses →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
