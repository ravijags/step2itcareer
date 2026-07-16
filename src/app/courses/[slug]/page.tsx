import { courses, getCourseBySlug } from "@/lib/courses";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} — Step2ITCareer-AI`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <div className="min-h-screen bg-white">

      {/* ── COURSE HEADER BAND ── */}
      <div className="bg-[#0D1330] text-white py-14 px-6">
        <div className="max-w-brand mx-auto">
          <a href="/courses" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-semibold mb-8 transition-colors">
            ← Back to All Courses
          </a>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-white/10 border border-white/20 text-white/80">
              {course.category}
            </span>
            <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-white/10 border border-white/20 text-white/80">
              Online / Offline / Hybrid
            </span>
            <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-white/10 border border-white/20 text-white/80">
              {course.duration}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 max-w-2xl leading-tight">
            {course.title}
          </h1>
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            {course.description}
          </p>
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="max-w-brand mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-12">

            {/* Skills */}
            <section>
              <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Skills Covered
              </span>
              <h2 className="text-xl font-extrabold text-ink mb-6">
                Comprehensive Curriculum Outcomes
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {course.skills.map((skill) => (
                  <div key={skill.name} className="bg-soft rounded-xl p-5 text-center border border-line">
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="text-[13px] font-bold text-ink">{skill.name}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Curriculum
              </span>
              <h2 className="text-xl font-extrabold text-ink mb-6">
                How the Program Unfolds
              </h2>
              <div className="relative pl-7">
                {/* Vertical line */}
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-line" />

                <div className="space-y-8">
                  {course.curriculum.map((item, i) => (
                    <div key={i} className="relative">
                      {/* Dot */}
                      <div className="absolute -left-7 top-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-white shadow-sm" />
                      <div className="text-[11px] font-extrabold text-primary tracking-widest uppercase mb-1">
                        {item.phase}
                      </div>
                      <h4 className="text-[15px] font-extrabold text-ink mb-1">{item.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Tools */}
            <section>
              <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Tools & Technologies
              </span>
              <h2 className="text-xl font-extrabold text-ink mb-6">What You'll Work With</h2>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-soft border border-line rounded-full text-[12.5px] font-bold text-ink">
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* Roles */}
            <section>
              <span className="inline-block px-4 py-1.5 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Career Roles
              </span>
              <h2 className="text-xl font-extrabold text-ink mb-6">Where This Program Leads</h2>
              <div className="flex flex-wrap gap-2">
                {course.roles.map((role) => (
                  <span key={role} className="px-4 py-2 bg-primary-tint text-primary rounded-full text-[12.5px] font-bold">
                    {role}
                  </span>
                ))}
              </div>
            </section>

          </div>

          {/* ── SIDEBAR ── */}
          <aside className="lg:sticky lg:top-24 bg-white border border-line rounded-brand p-7 shadow-deep">
            {/* Seats badge */}
            <div className="flex items-center gap-2 bg-accent-tint text-accent text-xs font-bold px-4 py-2.5 rounded-xl mb-5">
              <span className="w-2 h-2 rounded-full bg-accent animate-blip" />
              Only 5 Seats Per Batch
            </div>

            {/* Fee */}
            <div className="text-3xl font-extrabold text-ink mb-1">{course.feeDisplay}</div>
            <div className="text-xs text-muted mb-6">One-time program fee</div>

            {/* Details */}
            <div className="space-y-0 mb-6">
              {[
                ["Duration", course.duration],
                ["Mode", "Online / Offline / Hybrid"],
                ["Batch Size", "5 Students Max"],
                ["Mentorship", "Weekly 1:1 Reviews"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-3 border-b border-line text-sm">
                  <span className="text-muted font-semibold">{label}</span>
                  <span className="font-bold text-ink">{value}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <a
              href="https://wa.me/919936609430"
              className="w-full py-3.5 bg-primary text-white font-bold rounded-xl flex items-center justify-center hover:bg-primary-deep transition-colors text-sm mb-3"
            >
              Book Free Counseling
            </a>
            <a
              href="https://wa.me/919936609430"
              className="w-full py-3.5 bg-[#16A34A] text-white font-bold rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors text-sm gap-2"
            >
              💬 WhatsApp Us
            </a>
          </aside>

        </div>
      </div>
    </div>
  );
}