import type { Metadata } from "next";
import "./globals.css";

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
          Log In / Sign Up
        </a>

        <button className="md:hidden p-2 rounded-lg text-ink">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
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
              Live, mentor-led IT career transition programs. Learn in micro-batches of max 5 students.
            </p>
            <p className="text-xs text-white/40">Empowering Careers. Enabling Futures.</p>
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
                <span className="text-white/40 block text-xs mb-0.5">Founder</span>
                Ashvani Srivastava
              </li>
              <li>
                <a href="tel:+919936609430" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 99366 09430
                </a>
              </li>
              <li>
                <a href="https://wa.me/919936609430" className="text-sm text-green-brand hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="mailto:info@step2itcareer.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@step2itcareer.com
                </a>
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
    <a href="https://wa.me/919936609430" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#16A34A] rounded-full flex items-center justify-center shadow-deep hover:scale-110 transition-transform" aria-label="Chat on WhatsApp">
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
  { name: "CPEP — Customized Excellence Program", href: "/courses/cpep-customized-professional-excellence" },
  { name: "AI Automation & No-Code Solutions", href: "/courses/ai-automation-no-code" },
  { name: "Digital Marketing & Growth Analytics", href: "/courses/digital-marketing-growth-analytics" },
  { name: "System Design & Software Architecture", href: "/courses/system-design-software-architecture" },
];

const internshipLinks = [
  { name: "30-Days Coding Challenge - Rs.10,000", href: "#" },
  { name: "Summer/Winter Training Internship - Rs.6,000", href: "#" },
];

const schoolingLinks = [
  { name: "Class 6-8 Coding Program - Rs.5,000", href: "#" },
  { name: "Class 8-10 Coding Program", href: "#" },
  { name: "Class 10-12 Coding Program", href: "#" },
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