/* Workshops — the low-commitment front door. Free sessions bring people in;
   paid weekend workshops come with a certificate. Schedules are recurring so the
   page never shows a date that has already passed. Fees are shared on WhatsApp. */

export type Workshop = {
  slug: string;
  title: string;
  kind: "free" | "paid";
  duration: string;
  schedule: string;
  mode: string;
  icon: string;          // emoji key → SkillIcon
  blurb: string;
  outcomes: string[];    // what you walk away with
  next?: string;         // related course slug
};

export const workshops: Workshop[] = [
  {
    slug: "build-your-first-ai-agent", title: "Build Your First AI Agent", kind: "free", duration: "2 hours",
    schedule: "Every Saturday · 11 AM", mode: "Live online", icon: "🤖",
    blurb: "Go from zero to a working AI agent that answers questions and takes actions — no experience needed.",
    outcomes: ["Your own AI agent running live", "How AI agents actually work", "A clear path into AI careers"],
    next: "ai-engineer-agents-automation",
  },
  {
    slug: "build-an-app-in-2-hours", title: "Build Your Own App in 2 Hours", kind: "free", duration: "2 hours",
    schedule: "Every Sunday · 11 AM", mode: "Live online", icon: "📱",
    blurb: "Build a real mobile app with Flutter and run it on your own phone before the session ends.",
    outcomes: ["An app on your phone", "Flutter basics", "How app developers work"],
    next: "flutter-first-app",
  },
  {
    slug: "crack-your-first-tech-job", title: "Crack Your First Tech Job with AI", kind: "free", duration: "90 minutes",
    schedule: "Alternate Wednesdays · 7 PM", mode: "Live online", icon: "🎯",
    blurb: "Resume, LinkedIn, projects and interviews — and how to use AI to stand out in the 2026 job market.",
    outcomes: ["An AI-polished resume", "A LinkedIn checklist", "What recruiters look for in freshers"],
  },
  {
    slug: "ai-productivity-weekend", title: "AI Productivity Weekend", kind: "paid", duration: "2 days · 3 hrs each",
    schedule: "1st weekend of every month", mode: "Online + Noida", icon: "⚡",
    blurb: "Master ChatGPT, Claude, Copilot and Gemini for study, work and job hunting — hands-on, with a certificate.",
    outcomes: ["Certificate of completion", "Ready-to-use prompt library", "AI workflows for study and work"],
    next: "ai-productivity",
  },
  {
    slug: "portfolio-website-weekend", title: "Build & Deploy Your Portfolio Website", kind: "paid", duration: "2 days · 3 hrs each",
    schedule: "2nd weekend of every month", mode: "Online + Noida", icon: "🌐",
    blurb: "Design, build and publish your personal portfolio site with HTML, CSS, JavaScript and AI coding tools.",
    outcomes: ["Certificate of completion", "Your portfolio live online", "A GitHub profile recruiters notice"],
    next: "web-basics",
  },
  {
    slug: "data-analytics-weekend", title: "Excel + Power BI Dashboard Weekend", kind: "paid", duration: "2 days · 3 hrs each",
    schedule: "3rd weekend of every month", mode: "Online + Noida", icon: "📊",
    blurb: "Turn raw data into a real business dashboard — the fastest way to see if data analytics is for you.",
    outcomes: ["Certificate of completion", "A finished Power BI dashboard", "Excel skills employers test"],
    next: "ai-powered-data-analyst",
  },
  {
    slug: "ethical-hacking-weekend", title: "Ethical Hacking Weekend", kind: "paid", duration: "2 days · 3 hrs each",
    schedule: "4th weekend of every month", mode: "Online + Noida", icon: "🛡️",
    blurb: "See how hackers think — legally, in safe labs — and how to defend against them.",
    outcomes: ["Certificate of completion", "Hands-on lab experience", "A taste of a cybersecurity career"],
    next: "ethical-hacking-basics",
  },
];
