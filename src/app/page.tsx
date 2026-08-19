"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { courses } from "@/lib/courses";

// Fire popup from any button
function openPopup() {
  window.dispatchEvent(new CustomEvent("openLeadPopup"));
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (1800 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AlumniMarquee />
      <StatsRow />
      <FeaturedCourses />
      <MicroBatchUSP />
      <AIToolsStrip />
      <PlacementProcess />
      <RecentPlacements />
      <Testimonials />
      <FinalCTA />
      <MobileStickyBar />
    </>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  return (
    <section className="relative min-h-[94vh] flex items-center bg-[#060D1F] overflow-hidden">
      {/* Animated background blobs */}
      <motion.div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.18]"
        style={{ background: "radial-gradient(circle, #3B5BFF, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #FF7A3D, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle, #3B5BFF 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: 3+i%3, height: 3+i%3, background: i%2===0?"#3B5BFF":"#FF7A3D", left:`${10+i*9}%`, top:`${15+i*7}%`, opacity: 0.5 }}
          animate={{ y: [0,-25,0], opacity:[0.3,0.8,0.3] }}
          transition={{ duration: 3+i*0.4, repeat: Infinity, delay: i*0.3, ease:"easeInOut" }}/>
      ))}

      <motion.div style={{ y }} className="relative max-w-brand mx-auto px-6 py-20 text-center w-full">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-[11px] font-extrabold tracking-[0.2em] uppercase mb-8">
          <motion.span animate={{ scale:[1,1.3,1] }} transition={{ duration:1.5, repeat:Infinity }}>⚡</motion.span>
          Live Cohort-Based Bootcamps · New Delhi
        </motion.div>

        <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          From Learning to{" "}
          <span className="gradient-text block sm:inline">Landing the Job</span>
        </motion.h1>

        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
          className="text-base md:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
          Live, mentor-led IT career programs engineered for outcomes.<br className="hidden md:block"/>
          Max 5 students per batch. Real projects. Placement until hired.
        </motion.p>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }}
          className="flex flex-col items-center gap-3 mb-12 w-full max-w-sm sm:max-w-none mx-auto">
          <div className="flex gap-3 w-full sm:w-auto">
            <motion.a href="/courses" whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
              className="flex-1 sm:flex-none px-7 py-4 bg-primary text-white font-bold rounded-full text-[14px] text-center"
              style={{ boxShadow:"0 4px 24px rgba(59,91,255,0.45)" }}>
              Explore Courses
            </motion.a>
            <motion.button onClick={openPopup} whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
              className="flex-1 sm:flex-none px-7 py-4 bg-white/10 text-white font-bold rounded-full border border-white/20 text-[14px] backdrop-blur-sm">
              Free Counseling
            </motion.button>
          </div>
          <motion.a href="https://wa.me/919936609430" whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
            className="w-full sm:w-auto px-7 py-4 text-white font-bold rounded-full text-[14px] flex items-center justify-center gap-2"
            style={{ background:"#16A34A", boxShadow:"0 4px 20px rgba(22,163,74,0.35)" }}>
            💬 WhatsApp Us
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.7, delay:0.5 }}
          className="flex flex-wrap justify-center gap-2.5">
          {["🎥 Live Classes","👥 Max 5/Batch","💼 Real Projects","🏆 Placement Support"].map((chip, i) => (
            <motion.span key={chip} initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
              transition={{ delay: 0.5+i*0.1 }}
              className="px-4 py-2 bg-white/8 text-white/70 text-[12px] font-semibold rounded-full border border-white/12 backdrop-blur-sm">
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background:"linear-gradient(to top, #ffffff06, transparent)" }} />
    </section>
  );
}

function TrustBar() {
  return (
    <div className="bg-primary py-4 px-6">
      <div className="max-w-brand mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
        {["✅ 100% Live Classes — No Recordings","⚡ Batch Starts Every Month","🎯 Placement Support Until First Job","💳 EMI Options Available"].map(item => (
          <span key={item} className="text-white/85 text-[12px] font-semibold">{item}</span>
        ))}
      </div>
    </div>
  );
}

function AlumniMarquee() {
  const logos = [
    <span key="google" className="text-[19px] font-bold tracking-tight">
      <span style={{color:"#4285F4"}}>G</span><span style={{color:"#EA4335"}}>o</span><span style={{color:"#FBBC05"}}>o</span><span style={{color:"#4285F4"}}>g</span><span style={{color:"#34A853"}}>l</span><span style={{color:"#EA4335"}}>e</span>
    </span>,
    <span key="ms" className="inline-flex items-center gap-2 text-[19px] font-semibold text-gray-700">
      <span className="grid grid-cols-2 gap-[2px] w-5 h-5 shrink-0">
        <span style={{background:"#F25022"}} className="rounded-[1px]"/><span style={{background:"#7FBA00"}} className="rounded-[1px]"/>
        <span style={{background:"#00A4EF"}} className="rounded-[1px]"/><span style={{background:"#FFB900"}} className="rounded-[1px]"/>
      </span>Microsoft
    </span>,
    <span key="amz" className="inline-flex flex-col leading-none">
      <span className="text-[19px] font-bold text-gray-900">amazon</span>
      <svg viewBox="0 0 100 18" width="70" height="11"><path d="M5 8 Q50 20 95 8" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round"/><polygon points="90,4 98,9 90,14" fill="#FF9900"/></svg>
    </span>,
    <span key="ibm" className="text-[19px] font-extrabold tracking-[0.15em]" style={{color:"#1F70C1"}}>IBM</span>,
    <span key="infy" className="text-[19px] font-bold" style={{color:"#007CC3"}}>Infosys</span>,
    <span key="tcs" className="text-[19px] font-bold" style={{color:"#CC0000"}}>TCS</span>,
    <span key="wipro" className="text-[19px] font-bold" style={{color:"#341C5C"}}>wipro</span>,
    <span key="acc" className="text-[19px] font-bold" style={{color:"#A100FF"}}>Accenture&gt;</span>,
    <span key="cap" className="text-[19px] font-bold" style={{color:"#0070AD"}}>Capgemini</span>,
    <span key="del" className="text-[19px] font-bold" style={{color:"#86BC25"}}>Deloitte.</span>,
    <span key="cog" className="text-[19px] font-bold" style={{color:"#1A4CA1"}}>Cognizant</span>,
    <span key="hcl" className="text-[19px] font-bold" style={{color:"#0076C0"}}>HCL<sup className="text-[10px]">Tech</sup></span>,
  ];
  const doubled = [...logos, ...logos];

  return (
    <section className="py-10 bg-soft overflow-hidden">
      <Reveal>
        <p className="text-center text-[11px] font-extrabold text-primary uppercase tracking-[0.25em] mb-2">Our Alumni Work Here</p>
        <div className="w-10 h-0.5 bg-primary mx-auto mb-8" />
      </Reveal>
      <div className="relative flex">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10" style={{background:"linear-gradient(to right, #F6F8FC, transparent)"}}/>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10" style={{background:"linear-gradient(to left, #F6F8FC, transparent)"}}/>
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {doubled.map((logo, i) => (
            <div key={i} className="inline-flex items-center mx-10 md:mx-14">{logo}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsRow() {
  const stats = [
    { value: 355, label: "Students Trained", suffix: "+" },
    { value: 236, label: "Placements", suffix: "+" },
    { value: 14, label: "Hiring Partners", suffix: "+" },
    { value: 4, label: "Expert Trainers", suffix: "+" },
    { value: 94, label: "Placement Rate", suffix: "%" },
  ];
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i*0.08} className={i===4?"col-span-2 md:col-span-1":""}>
              <motion.div whileHover={{ y:-4, borderColor:"#3B5BFF" }} transition={{ duration:0.2 }}
                className="text-center p-5 md:p-6 rounded-2xl bg-soft border border-line cursor-default">
                <div className="text-2xl md:text-3xl font-extrabold text-primary mb-1">
                  <CountUp target={s.value} suffix={s.suffix}/>
                </div>
                <div className="text-xs text-muted font-semibold">{s.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-[11px] text-muted/70 mt-3">⚠️ Stats are illustrative and will be updated with verified data before launch</p>
      </div>
    </section>
  );
}

function FeaturedCourses() {
  const featured = courses.filter(c =>
    ["generative-ai-multi-agent","data-science-ml-ai","cpep-customized-professional-excellence"].includes(c.slug)
  );
  const images: Record<string,string> = {
    "generative-ai-multi-agent": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=85",
    "data-science-ml-ai": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=85",
    "cpep-customized-professional-excellence": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=85",
  };
  const ratings: Record<string,number> = { "generative-ai-multi-agent":4.9, "data-science-ml-ai":4.8, "cpep-customized-professional-excellence":5.0 };
  const enrolled: Record<string,number> = { "generative-ai-multi-agent":142, "data-science-ml-ai":98, "cpep-customized-professional-excellence":67 };

  return (
    <section className="py-16 md:py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="section-label">Our Programs</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-3">Career-Launching Tech Programs</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">12 industry-aligned programs with live mentorship, real projects, and guaranteed placement support.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((course, i) => (
            <Reveal key={course.slug} delay={i*0.12}>
              <motion.a href={`/courses/${course.slug}`}
                whileHover={{ y:-8 }} transition={{ duration:0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card flex flex-col group block"
                style={{ boxShadow:"0 4px 24px -8px rgba(14,21,38,0.1)" }}>
                <div className="h-48 relative overflow-hidden">
                  <img src={images[course.slug]} alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)"}}/>
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full" style={{background:"rgba(59,91,255,0.9)",color:"#fff"}}>Max 5 Students</span>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full" style={{background:"rgba(22,163,74,0.9)",color:"#fff"}}>Live Mentorship</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-extrabold text-[15px] leading-snug">{course.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-amber-400 text-xs">{"★".repeat(Math.floor(ratings[course.slug]))}</span>
                      <span className="text-[11px] font-bold text-ink">{ratings[course.slug]}</span>
                      <span className="text-[11px] text-muted">({enrolled[course.slug]} enrolled)</span>
                    </div>
                    <span className="text-[11px] text-muted font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-extrabold text-ink">{course.feeDisplay}</span>
                    <span className="text-[12px] font-bold text-white bg-primary px-4 py-2 rounded-full group-hover:bg-primary-deep transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <motion.a href="/courses" whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-white font-bold rounded-full text-[14px] hover:bg-ink/90 transition-colors"
            style={{ boxShadow:"0 4px 20px rgba(14,21,38,0.25)" }}>
            View All 12 Programs →
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}

function MicroBatchUSP() {
  const features = [
    { icon:"👥", title:"Max 5 Students Per Batch", desc:"You're not a number. Real attention, every session." },
    { icon:"🗺️", title:"Personalized Roadmap", desc:"Your path is built around your goals, not a generic template." },
    { icon:"📅", title:"Weekly 1:1 Mentor Reviews", desc:"Direct feedback every week — not once a month." },
    { icon:"🏆", title:"Guaranteed Capstone Project", desc:"Every student ships a real project before graduating." },
    { icon:"🔁", title:"Free Re-attendance", desc:"Attend future batches free if you need more time." },
    { icon:"🎯", title:"Placement Until Hired", desc:"We don't stop until you have your first offer letter." },
  ];
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="section-label">Why We're Different</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-3">Micro-Batch Career Accelerator™</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">Not a classroom. Not a MOOC. A high-accountability program built for real outcomes.</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i*0.07}>
              <motion.div whileHover={{ y:-5, borderColor:"#3B5BFF" }} transition={{ duration:0.2 }}
                className="p-6 rounded-2xl bg-soft border border-line h-full group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
                <h3 className="text-[14px] font-extrabold text-ink mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIToolsStrip() {
  const tools = ["ChatGPT","Claude","Gemini","Cursor","GitHub Copilot","Midjourney","Hugging Face","LangChain","n8n","Zapier","Power BI","Tableau","AWS","Azure"];
  return (
    <section className="py-12 bg-[#060D1F]">
      <div className="max-w-brand mx-auto px-6">
        <Reveal>
          <p className="text-center text-[11px] font-extrabold text-white/30 uppercase tracking-[0.25em] mb-6">Built With AI Tools & Modern Tech</p>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-2.5">
          {tools.map(t => (
            <span key={t} className="px-4 py-2 bg-white/8 text-white/70 text-[12px] font-bold rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlacementProcess() {
  const steps = ["Resume Building","Placement Training","Interview Questions","Internships Under Experts","Real-time Live Projects","Aptitude Preparation","Personality Development","Mock Interviews","Scheduling Interviews","Get Offer Letter 🎉"];
  return (
    <section className="py-16 md:py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="section-label">How It Works</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-3">10-Step Placement Process</h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">Engineered to get you hired, not just trained.</p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((step, i) => (
            <Reveal key={step} delay={i*0.05}>
              <motion.div whileHover={{ y:-4, borderColor:"#3B5BFF" }}
                className="bg-white rounded-2xl border border-line p-4 text-center h-full flex flex-col items-center justify-center">
                <motion.div className="w-8 h-8 bg-primary text-white text-xs font-extrabold rounded-full flex items-center justify-center mb-3"
                  whileHover={{ backgroundColor:"#FF7A3D" }} transition={{ duration:0.2 }}>
                  {i+1}
                </motion.div>
                <p className="text-[12px] font-bold text-ink leading-snug">{step}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentPlacements() {
  const placements = [
    { name:"Priya S.", track:"Data Science & ML", company:"Microsoft", pkg:"₹18 LPA", color:"#3B5BFF", img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" },
    { name:"Rahul K.", track:"Full Stack Engineering", company:"Infosys", pkg:"₹12 LPA", color:"#16A34A", img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" },
    { name:"Anjali R.", track:"Generative AI", company:"TCS", pkg:"₹14 LPA", color:"#FF7A3D", img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" },
    { name:"Vikas M.", track:"Cloud & DevOps", company:"Wipro", pkg:"₹11 LPA", color:"#7C3AED", img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80" },
  ];
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="section-label">Success Stories</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink mb-2">Recent Placements</h2>
          <p className="text-[11px] text-muted/70 mt-2">⚠️ Illustrative — real stories coming soon</p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {placements.map((p, i) => (
            <Reveal key={p.name} delay={i*0.1}>
              <motion.div whileHover={{ y:-6 }} transition={{ duration:0.3 }}
                className="bg-soft rounded-2xl border border-line p-5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{background:p.color}}/>
                <div className="flex items-center gap-3 mb-4">
                  <img src={p.img} alt={p.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"/>
                  <div>
                    <div className="font-extrabold text-ink text-sm">{p.name}</div>
                    <div className="text-[11px] text-muted">{p.track}</div>
                  </div>
                </div>
                <div className="text-[12px] font-bold mb-1" style={{color:"#16A34A"}}>✓ Placed at {p.company}</div>
                <div className="text-xl font-extrabold text-ink">{p.pkg}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name:"Aditya Sharma", role:"Data Analyst @ Capgemini", quote:"The micro-batch model changed everything for me. My mentor knew my weaknesses better than I did. Placed in 4 months.", img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80", rating:5 },
    { name:"Neha Gupta", role:"Full Stack Dev @ HCL Tech", quote:"Coming from a non-IT background felt scary. But the personalized roadmap made it feel achievable. Best investment I made.", img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80", rating:5 },
    { name:"Rohit Verma", role:"GenAI Engineer @ Startup", quote:"The batch of 5 meant I could never hide. That accountability is exactly what I needed. Got my offer 2 weeks after graduating.", img:"https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&q=80", rating:5 },
  ];
  return (
    <section className="py-16 md:py-20 bg-soft">
      <div className="max-w-brand mx-auto px-6">
        <Reveal className="text-center mb-12">
          <span className="section-label">What Students Say</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-ink">Heard It From Them</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i*0.12}>
              <motion.div whileHover={{ y:-5 }} transition={{ duration:0.25 }}
                className="bg-white rounded-2xl border border-line p-6 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_,j) => <span key={j} className="text-amber-400 text-sm">★</span>)}
                </div>
                <p className="text-sm text-muted leading-relaxed flex-1 mb-5 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-line">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover"/>
                  <div>
                    <div className="text-sm font-extrabold text-ink">{t.name}</div>
                    <div className="text-[11px] text-muted">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      <motion.div className="absolute inset-0 opacity-[0.08]"
        animate={{ backgroundPosition:["0% 0%","100% 100%"] }}
        transition={{ duration:12, repeat:Infinity, repeatType:"reverse" }}
        style={{ backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)", backgroundSize:"28px 28px" }}/>
      <div className="max-w-brand mx-auto px-6 text-center relative">
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">Ready to Take the Next Leap?</h2>
          <p className="text-white/60 text-sm md:text-base mb-8 max-w-lg mx-auto">Free 1:1 counseling. EMI options. Placement support until your first offer.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button onClick={openPopup} whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.97 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-extrabold rounded-full text-[15px] shadow-xl hover:shadow-2xl transition-all">
              Book Free Counseling
            </motion.button>
            <motion.a href="https://wa.me/919936609430" whileHover={{ scale:1.05, y:-2 }} whileTap={{ scale:0.97 }}
              className="w-full sm:w-auto px-8 py-4 font-extrabold rounded-full text-[15px] text-center shadow-xl transition-all"
              style={{ background:"#16A34A", color:"white" }}>
              💬 WhatsApp Now
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MobileStickyBar() {
  return (
    <motion.div initial={{ y:100 }} animate={{ y:0 }} transition={{ delay:1, duration:0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-line flex"
      style={{ paddingBottom:"env(safe-area-inset-bottom)" }}>
      <a href="https://wa.me/919936609430"
        className="flex-1 py-3.5 text-center text-[11px] font-bold text-[#16A34A] border-r border-line flex flex-col items-center justify-center gap-0.5">
        <span>💬</span><span>WhatsApp</span>
      </a>
      <button onClick={openPopup}
        className="flex-1 py-3.5 text-center text-[11px] font-bold text-white bg-primary border-r border-line">
        Apply Now
      </button>
      <a href="tel:+919936609430"
        className="flex-1 py-3.5 text-center text-[11px] font-bold text-ink flex flex-col items-center justify-center gap-0.5">
        <span>📞</span><span>Call</span>
      </a>
    </motion.div>
  );
}
