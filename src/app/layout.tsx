import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import PopupController from "@/components/PopupController";
import Logo from "@/components/Logo";
import { Icon } from "@/components/Icons";
import NavClient from "@/components/NavClient";
import Loader from "@/components/Loader";
import PageTransition from "@/components/PageTransition";
import { Grain, Slashes } from "@/components/Decor";
import MobileDock from "@/components/MobileDock";
import LoginSheet from "@/components/LoginSheet";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300","400","500","600","700","800"], display: "swap", variable: "--font-jakarta" });

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Step2ITCareer-AI",
  url: "https://step2itcareer.vercel.app",
  logo: "https://step2itcareer.vercel.app/opengraph-image",
  slogan: "Get Hired. Not just Trained.",
  founder: { "@type": "Person", name: "Ashvani Srivastava" },
  telephone: "+91-99366-09430",
  email: "hello@step2itcareer.com",
  address: { "@type": "PostalAddress", streetAddress: "Street No-2, House No. 904, Amrapali Sphere, Gate No-6, Sector 45", addressLocality: "Noida", addressRegion: "Uttar Pradesh", postalCode: "201303", addressCountry: "IN" },
  sameAs: ["https://www.instagram.com/step2itcareerai_official/", "https://www.facebook.com/profile.php?id=61592017550216", "https://www.youtube.com/channel/UCOZ6YNuhMhT2waMGIhkXKoQ"],
};

export const viewport: Viewport = { themeColor: "#070B18" };

export const metadata: Metadata = {
  metadataBase: new URL("https://step2itcareer.vercel.app"),
  openGraph: { type: "website", siteName: "Step2ITCareer-AI", title: "Step2ITCareer-AI — Get Hired. Not just Trained.", description: "Learn in a batch of 5. Not 500. Live, mentor-led IT courses with AI built in." },
  twitter: { card: "summary_large_image" },
  title: "Step2ITCareer-AI — Get Hired. Not just Trained.",
  description: "Live IT courses with AI built in — learn in a batch of 5, not 500. Career programs, short courses, internships and free workshops in Noida and online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable} data-scroll-behavior="smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        <Loader />
        <NavClient />
        <main><PageTransition>{children}</PageTransition></main>
        <MobileDock />
        <Footer />
        <FloatingWhatsApp />
        <PopupController />
        <LoginSheet />
        {/* Visitor stats: Vercel Web Analytics (free, no cookies). Only on the live Vercel site.
            Turn it on once in Vercel: project, then Analytics, then Enable. */}
        {process.env.VERCEL && <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />}
      </body>
    </html>
  );
}

const FOOT_EXPLORE: [string, string][] = [["All courses", "/courses"], ["Internships", "/internship"], ["Free workshops", "/workshops"], ["School coding", "/schooling"], ["About us", "/about"], ["Contact", "/contact"]];
const FOOT_FREE: [string, string][] = [["Catch the AI's Mistake", "/daily"], ["Job-Ready Check", "/check"], ["Career roadmaps", "/resources/roadmaps"], ["Cheat sheets", "/resources/cheat-sheets"], ["Career guides", "/resources/guides"]];
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Amrapali+Sphere+Sector+45+Noida";

/* Footer: on phones it's three short blocks (brand, two link columns, three tap buttons), not one long list. */
function Footer() {
  return (
    <footer className="relative bg-ink2 text-white pt-12 md:pt-16 pb-28 md:pb-8 overflow-hidden">
      <Grain />
      <Slashes side="right" tone="primary" opacity={0.07} height={640} />
      <div className="relative max-w-brand mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1.25fr] gap-x-6 gap-y-9 md:gap-10 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Logo size="lg" theme="dark" />
            <p className="mt-3 text-[15px] font-extrabold tracking-[-0.01em]">Get Hired. <span className="grad-text">Not just Trained.</span></p>
            <p className="hidden md:block mt-2 text-[14px] text-white/55 leading-relaxed max-w-[260px]">Live IT courses in batches of 5, online and in Noida.</p>
            <div className="mt-5">
              <div className="flex gap-2.5">
              <a href="https://www.instagram.com/step2itcareerai_official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/[0.08] border border-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors" title="Instagram">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61592017550216" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/[0.08] border border-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors" title="Facebook">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCOZ6YNuhMhT2waMGIhkXKoQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/[0.08] border border-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors" title="YouTube">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://wa.me/message/332FS7CGCHY5N1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/[0.08] border border-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors" title="WhatsApp">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
            </div>
          </div>

          <FootCol title="Explore" links={FOOT_EXPLORE} />
          <FootCol title="Free for you" links={FOOT_FREE} />

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/60 mb-4">Talk to us</h4>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2.5">
              <FootAction href="https://wa.me/919936609430" label="WhatsApp" sub="Replies in ~2 hrs" green><Icon.WhatsApp size={19} /></FootAction>
              <FootAction href="tel:+919936609430" label="Call" sub="+91 99366 09430"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></FootAction>
              <FootAction href="mailto:hello@step2itcareer.com" label="Email" sub="hello@step2itcareer.com"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/></svg></FootAction>
            </div>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-start gap-2 text-[13px] text-white/55 hover:text-white transition-colors leading-snug">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mt-0.5 shrink-0" aria-hidden><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
              <span>Street No-2, House No. 904,<br />Noida Sec 45, Amrapali Sphere,<br />Gate No-6, Noida, UP 201303</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] text-white/45">
          <p>© {new Date().getFullYear()} Step2ITCareer-AI · Founded by Ashvani Srivastava</p>
          <p className="md:pr-20">Noida, India</p>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/60 mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map(([name, href]) => (
          <li key={href}><Link href={href} className="text-[14px] text-white/75 hover:text-white transition-colors">{name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

function FootAction({ href, label, sub, green = false, children }: { href: string; label: string; sub: string; green?: boolean; children: React.ReactNode }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
      className={`tap flex flex-col md:flex-row items-center md:items-center gap-1.5 md:gap-3 rounded-[16px] border px-2 py-3 md:px-4 md:py-3 transition-colors ${green ? "bg-[#16A34A]/15 border-[#16A34A]/30 text-[#4ADE80] hover:bg-[#16A34A]/25" : "bg-white/[0.05] border-white/10 text-white hover:bg-white/[0.09]"}`}>
      {children}
      <span className="text-center md:text-left">
        <span className="block text-[13px] md:text-[14px] font-extrabold">{label}</span>
        <span className="hidden md:block text-[12px] text-white/50 font-medium">{sub}</span>
      </span>
    </a>
  );
}

function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/message/332FS7CGCHY5N1" target="_blank" rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#16A34A] rounded-full items-center justify-center shadow-deep hover:scale-110 transition-transform" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}
