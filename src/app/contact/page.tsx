import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Step2ITCareer-AI",
  description: "Get in touch with Step2ITCareer-AI. Call, WhatsApp, or email us for career counseling and program inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0D1330] py-16 px-6 text-center">
        <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">Get In Touch</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
        <p className="text-white/60 text-base max-w-xl mx-auto">Have questions about our programs? We are here to help. Reach out through any of the channels below.</p>
      </div>

      <div className="max-w-brand mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-extrabold text-ink mb-8">Reach Out Directly</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-soft rounded-brand border border-line">
                <div className="w-11 h-11 bg-primary-tint rounded-full flex items-center justify-center text-xl shrink-0">📞</div>
                <div>
                  <div className="font-extrabold text-ink mb-1">Phone & WhatsApp</div>
                  <a href="tel:+919936609430" className="text-primary font-bold text-lg block hover:underline">+91 99366 09430</a>
                  <a href="https://wa.me/message/332FS7CGCHY5N1" className="text-[#16A34A] text-sm font-semibold mt-1 block">💬 WhatsApp Business →</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-soft rounded-brand border border-line">
                <div className="w-11 h-11 bg-primary-tint rounded-full flex items-center justify-center text-xl shrink-0">✉️</div>
                <div>
                  <div className="font-extrabold text-ink mb-2">Email Addresses</div>
                  {[
                    { label: "General Enquiries", email: "hello@step2itcareer.com" },
                    { label: "Admissions", email: "admissions@step2itcareer.com" },
                    { label: "Student Support", email: "support@step2itcareer.com" },
                    { label: "Career & Placement", email: "career@step2itcareer.com" },
                    { label: "Corporate & Partnerships", email: "corporate@step2itcareer.com" },
                  ].map((e) => (
                    <div key={e.email} className="mb-2">
                      <span className="text-xs text-muted">{e.label}</span>
                      <a href={`mailto:${e.email}`} className="block text-sm font-bold text-primary hover:underline">{e.email}</a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-soft rounded-brand border border-line">
                <div className="w-11 h-11 bg-primary-tint rounded-full flex items-center justify-center text-xl shrink-0">📍</div>
                <div>
                  <div className="font-extrabold text-ink mb-1">Office Address</div>
                  <p className="text-sm text-muted leading-relaxed">
                    Street No-2, House No. 904,<br />
                    Noida Sec 45, Amrapali Sphere,<br />
                    Gate No-6, Noida,<br />
                    Uttar Pradesh 201303
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-soft rounded-brand border border-line">
                <div className="w-11 h-11 bg-primary-tint rounded-full flex items-center justify-center text-xl shrink-0">🌐</div>
                <div>
                  <div className="font-extrabold text-ink mb-2">Follow Us</div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: "Instagram", href: "https://www.instagram.com/step2itcareerai_official/", color: "#E1306C" },
                      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592017550216", color: "#1877F2" },
                      { label: "YouTube", href: "https://youtube.com/@step2itcareer-ai_official", color: "#FF0000" },
                      { label: "WhatsApp", href: "https://wa.me/message/332FS7CGCHY5N1", color: "#16A34A" },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-full text-white text-xs font-bold"
                        style={{ background: s.color }}>
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div>
            <h2 className="text-2xl font-extrabold text-ink mb-8">Quick Actions</h2>
            <div className="space-y-4">
              <a href="https://wa.me/919936609430" className="flex items-center gap-4 p-6 bg-[#16A34A] text-white rounded-brand hover:opacity-90 transition-opacity">
                <span className="text-3xl">💬</span>
                <div>
                  <div className="font-extrabold text-lg">WhatsApp Us Now</div>
                  <div className="text-white/80 text-sm">Fastest way to reach us — instant reply</div>
                </div>
              </a>
              <a href="tel:+919936609430" className="flex items-center gap-4 p-6 bg-primary text-white rounded-brand hover:opacity-90 transition-opacity">
                <span className="text-3xl">📞</span>
                <div>
                  <div className="font-extrabold text-lg">Call Us Directly</div>
                  <div className="text-white/80 text-sm">+91 99366 09430 — Mon to Sat, 9am–7pm</div>
                </div>
              </a>
              <a href="mailto:admissions@step2itcareer.com" className="flex items-center gap-4 p-6 bg-soft border border-line rounded-brand hover:border-primary transition-colors">
                <span className="text-3xl">🎓</span>
                <div>
                  <div className="font-extrabold text-ink text-lg">Admissions Enquiry</div>
                  <div className="text-muted text-sm">admissions@step2itcareer.com</div>
                </div>
              </a>
              <a href="mailto:corporate@step2itcareer.com" className="flex items-center gap-4 p-6 bg-soft border border-line rounded-brand hover:border-primary transition-colors">
                <span className="text-3xl">🤝</span>
                <div>
                  <div className="font-extrabold text-ink text-lg">Corporate & Partnerships</div>
                  <div className="text-muted text-sm">corporate@step2itcareer.com</div>
                </div>
              </a>
              <a href="/courses" className="flex items-center gap-4 p-6 bg-soft border border-line rounded-brand hover:border-primary transition-colors">
                <span className="text-3xl">📚</span>
                <div>
                  <div className="font-extrabold text-ink text-lg">Browse Our Programs</div>
                  <div className="text-muted text-sm">12 career-launching tech programs</div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-primary-tint rounded-brand border border-primary/20">
              <h3 className="font-extrabold text-ink mb-2">Founder Direct Contact</h3>
              <p className="text-sm text-muted mb-3">Ashvani Srivastava — Founder & CEO</p>
              <div className="flex gap-3">
                <a href="tel:+919936609430" className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full">📞 Call</a>
                <a href="https://wa.me/919936609430" className="px-4 py-2 bg-[#16A34A] text-white text-xs font-bold rounded-full">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
