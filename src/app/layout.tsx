import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import PopupController from "@/components/PopupController";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Step2ITCareer-AI — Get Job-Ready. Get Hired.",
  description: "Live, mentor-led IT career transition programs in New Delhi. Micro-batches of max 5 students. Guaranteed placement support.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <PopupController />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-line shadow-sm">
      <nav className="max-w-brand mx-auto px-5 flex items-center justify-between h-[60px]">
        <Logo size="md" />
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5 bg-soft rounded-full px-2 py-1.5 border border-line">
          <NavDropdown label="Courses" items={courseLinks} />
          <NavDropdown label="Internship" items={internshipLinks} />
          <NavDropdown label="Schooling" items={schoolingLinks} />
          <NavDropdown label="Resources" items={resourceLinks} />
          <a href="/contact" className="px-4 py-2 text-[13px] font-semibold text-ink hover:text-primary transition-colors rounded-full">
            Contact
          </a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#"
            className="px-5 py-2.5 bg-primary text-white text-[13px] font-bold rounded-full hover:bg-primary-deep transition-all"
            style={{ boxShadow: "0 2px 12px rgba(59,91,255,0.3)" }}>
            Free Counseling
          </a>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: { name: string; href: string }[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-semibold text-ink hover:text-primary transition-colors rounded-full hover:bg-white">
        {label}
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 opacity-50">
          <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-deep border border-line opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-1.5">
        {items.map((item) => (
          <a key={item.name} href={item.href}
            className="flex items-center gap-2.5 px-4 py-3 text-[13px] font-semibold text-ink hover:text-primary hover:bg-soft transition-colors rounded-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="max-w-brand mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Logo size="lg" theme="dark" />
            <p className="text-sm text-white/50 leading-relaxed mt-5 mb-5">
              India's most outcome-focused IT career platform. Live mentorship, micro-batches, guaranteed placement support.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {[
                { href: "https://www.instagram.com/step2itcareerai_official/", icon: "IG", bg: "#E1306C" },
                { href: "https://www.facebook.com/profile.php?id=61592017550216", icon: "FB", bg: "#1877F2" },
                { href: "https://youtube.com/@step2itcareer-ai_official", icon: "YT", bg: "#FF0000" },
                { href: "https://wa.me/message/332FS7CGCHY5N1", icon: "WA", bg: "#16A34A" },
              ].map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-extrabold text-white transition-transform hover:scale-110"
                  style={{ background: s.bg }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold mb-5 text-white/50 uppercase tracking-[0.15em]">Quick Links</h4>
            <ul className="space-y-2.5">
              {[["Home","/"],["All Courses","/courses"],["Internship","/internship"],["Schooling","/schooling"],["About Us","/about"],["Contact","/contact"]].map(([n,h]) => (
                <li key={n}><a href={h} className="text-sm text-white/55 hover:text-white transition-colors">{n}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold mb-5 text-white/50 uppercase tracking-[0.15em]">Resources</h4>
            <ul className="space-y-2.5">
              {["Blogs","Career","About Us","Pay After Placement","Tutorials","Tech Trends","Success Stories"].map(item => (
                <li key={item}><a href="#" className="text-sm text-white/55 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold mb-5 text-white/50 uppercase tracking-[0.15em]">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/55">
                <span className="block text-white/30 text-[11px] mb-0.5">Founder & CEO</span>
                Ashvani Srivastava
              </li>
              <li><a href="tel:+919936609430" className="text-sm text-white/55 hover:text-white transition-colors">+91 99366 09430</a></li>
              <li><a href="https://wa.me/message/332FS7CGCHY5N1" className="text-sm text-green-400 hover:text-white transition-colors font-semibold">WhatsApp Us →</a></li>
              <li><a href="mailto:hello@step2itcareer.com" className="text-sm text-white/55 hover:text-white transition-colors">hello@step2itcareer.com</a></li>
              <li className="text-sm text-white/40 leading-relaxed">Street No-2, House No. 904,<br/>Noida Sec 45, UP 201303</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">© 2025 Step2ITCareer-AI. All rights reserved.</p>
          <p className="text-xs text-white/30">Built with ❤️ for ambitious learners in India</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/message/332FS7CGCHY5N1" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-8 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ background: "#16A34A", boxShadow: "0 4px 20px rgba(22,163,74,0.45)" }}
      aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  );
}

const courseLinks = [
  { name: "Generative AI & Multi-Agent Systems", href: "/courses/generative-ai-multi-agent" },
  { name: "Data Science, ML & AI Engineering", href: "/courses/data-science-ml-ai" },
  { name: "Data Analytics & Business Intelligence", href: "/courses/data-analytics-bi" },
  { name: "Business Analyst & Product Management", href: "/courses/business-analyst-product-management" },
  { name: "Full Stack Software Engineering", href: "/courses/full-stack-software-engineering" },
  { name: "Cloud, DevOps & Platform Engineering", href: "/courses/cloud-devops-platform-engineering" },
  { name: "Cybersecurity & Cloud Security", href: "/courses/cybersecurity-cloud-security" },
  { name: "Software Testing & QA Automation", href: "/courses/software-testing-qa-automation" },
  { name: "CPEP™ — Customized Excellence", href: "/courses/cpep-customized-professional-excellence" },
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
