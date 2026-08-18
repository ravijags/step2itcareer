import type { Metadata } from "next";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Step2ITCareer-AI — Get Job-Ready. Get Hired.",
  description:
    "Live, mentor-led IT career transition programs in New Delhi. Learn in micro-batches of max 5 students and secure your future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-nav border-b border-line">
      <nav className="max-w-brand mx-auto px-6 flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-2">
          <span className="text-[15px] font-extrabold tracking-tight text-ink leading-tight">
            Step2IT<span className="text-primary">Career</span>
            <sup className="text-[9px] text-accent font-bold align-super">AI</sup>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-white rounded-full px-2 py-1.5 shadow-card border border-line">
          <NavDropdown label="Courses" items={courseLinks} />
          <NavDropdown label="Internship" items={internshipLinks} />
          <NavDropdown label="Schooling Program" items={schoolingLinks} />
          <NavDropdown label="Resources" items={resourceLinks} />
          <a href="/contact" className="px-4 py-2 text-[13.5px] font-semibold text-ink hover:text-primary transition-colors rounded-full">
            Contact Us
          </a>
        </div>

        <a href="#" className="hidden md:inline-flex items-center px-5 py-2 bg-primary text-white text-[13.5px] font-bold rounded-full hover:bg-primary-deep transition-colors">
          Login / Sign In
        </a>

        <MobileNav />
      </nav>
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: { name: string; href: string }[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-4 py-2 text-[13.5px] font-semibold text-ink hover:text-primary transition-colors rounded-full hover:bg-soft">
        {label}
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5">
          <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-brand shadow-deep border border-line opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {items.map((item) => (
          <a key={item.name} href={item.href} className="block px-4 py-3 text-[13px] font-semibold text-ink hover:text-primary hover:bg-soft transition-colors first:rounded-t-brand last:rounded-b-brand">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white pt-14 pb-8">
      <div className="max-w-brand mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="text-[17px] font-extrabold mb-3">
              Step2IT<span className="text-primary">Career</span>
              <sup className="text-[9px] text-accent font-bold align-super">AI</sup>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Your next step starts here. Practical IT career programs for students, freshers and career switchers.
            </p>
            <p className="text-xs text-white/40 mb-5">Empowering Careers. Enabling Futures.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.instagram.com/step2itcareerai_official/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors" title="Instagram">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61592017550216" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors" title="Facebook">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com/@step2itcareer-ai_official" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors" title="YouTube">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://wa.me/message/332FS7CGCHY5N1" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-green-brand rounded-full flex items-center justify-center transition-colors" title="WhatsApp">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-white/80 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[["Home", "/"], ["All Courses", "/courses"], ["Internship", "#"], ["Schooling Program", "#"], ["Contact Us", "/contact"]].map(([name, href]) => (
                <li key={name}>
                  <a href={href} className="text-sm text-white/60 hover:text-white transition-colors">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-white/80 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {["Blogs", "Career", "About Us", "Pay After Placement", "Tutorials", "Tech Trends", "Success Stories"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-white/80 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/60">
                <span className="text-white/40 block text-xs mb-0.5">Founder & CEO</span>
                Ashvani Srivastava
              </li>
              <li>
                <a href="tel:+919936609430" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 99366 09430
                </a>
              </li>
              <li>
                <a href="https://wa.me/message/332FS7CGCHY5N1" className="text-sm text-green-brand hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="mailto:hello@step2itcareer.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  hello@step2itcareer.com
                </a>
              </li>
              <li>
                <a href="mailto:admissions@step2itcareer.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  admissions@step2itcareer.com
                </a>
              </li>
              <li className="text-sm text-white/60 leading-relaxed">
                Street No-2, House No. 904,<br />
                Noida Sec 45, Amrapali Sphere,<br />
                Gate No-6, Noida, UP 201303
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© 2025 Step2ITCareer-AI. All rights reserved.</p>
          <p className="text-xs text-white/40">Built with love for ambitious learners</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/message/332FS7CGCHY5N1" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#16A34A] rounded-full flex items-center justify-center shadow-deep hover:scale-110 transition-transform" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
