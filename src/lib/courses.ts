/* ─────────────────────────────────────────────────────────────────────────────
   Step2ITCareer catalogue — the single source of truth for every course page.

   v4.2: a focused catalogue of 15 — 7 career programs + 8 short courses.
     short    → one skill, 4–6 weeks (the cheap front door)
     career   → short courses + projects + internship, 3–6 months, job-ready
   Every short course leads into a career program: upgrade later and pay only the difference.
   Titles name the skill, not the tool, so they don't date. The "advanced" level is retired
   (kept in the Level type only so old code paths compile).

   Rules: "middle" depth (job-ready and finishable, not senior-engineer depth),
   AI inside every program, max 5 learners per batch. Fees are deliberately NOT
   stored here — they are shared on WhatsApp — so nothing leaks into the page JS.
   Skill icons are emoji keys that SkillIcon maps to the brand icon set.
   ───────────────────────────────────────────────────────────────────────────── */

export type Level = "career" | "advanced" | "short";
export type Track = "ai" | "data" | "dev" | "mobile" | "cloud" | "security" | "testing" | "business" | "marketing";

export type Course = {
  slug: string;
  title: string;
  level: Level;
  track: Track;
  category: string;      // track label shown on cards
  categoryColor: string; // track colour
  duration: string;
  hot?: boolean;
  description: string;   // 1–2 lines for cards and the hero
  audience: string[];    // who it's for
  aiAngle: string;       // how AI is part of this course
  skills: { icon: string; name: string }[];
  curriculum: { phase: string; title: string; description: string }[];
  projects: string[];
  tools: string[];
  roles: string[];       // career: job roles · short/advanced: what it prepares you for
  stack?: string[];      // career only: the short/advanced courses it is built from
  upgrade?: string;      // short/advanced only: the career program it leads into
};

export const TRACKS: Record<Track, { label: string; color: string }> = {
  ai: { label: "AI & Automation", color: "#3B5BFF" },
  data: { label: "Data & Analytics", color: "#0891B2" },
  dev: { label: "Software Development", color: "#7B5BFF" },
  mobile: { label: "Mobile Apps", color: "#E0457B" },
  cloud: { label: "Cloud & DevOps", color: "#2563EB" },
  security: { label: "Cybersecurity", color: "#DC2626" },
  testing: { label: "Testing & QA", color: "#D97706" },
  business: { label: "Business & Projects", color: "#FF7A3D" },
  marketing: { label: "Digital Marketing", color: "#DB2777" },
};

export const LEVELS: Record<Level, { label: string; short: string; blurb: string }> = {
  career: { label: "Career Program", short: "Career", blurb: "3–6 months · job-ready · internship + certificate" },
  advanced: { label: "Advanced Course", short: "Advanced", blurb: "6–8 weeks · go deeper in one skill" },
  short: { label: "Short Course", short: "Short", blurb: "4–6 weeks · one skill, start fast" },
};

const t = (track: Track) => ({ track, category: TRACKS[track].label, categoryColor: TRACKS[track].color });

/* ═══════════════════════════════ CAREER PROGRAMS ═══════════════════════════════ */

const career: Course[] = [
  {
    slug: "ai-engineer-agents-automation", title: "AI Engineer: Agents & Automation", level: "career", ...t("ai"), duration: "5 Months", hot: true,
    description: "Build AI agents, chatbots and automations that do real work — from your first prompt to a deployed multi-agent app. One of the fastest-growing roles in tech, taught from scratch.",
    audience: ["Students and freshers who want the hottest role in tech", "Developers and testers moving into AI", "Non-CS learners — Python is taught from zero"],
    aiAngle: "This whole program is AI: you build with LLM APIs, agent frameworks and automation tools the way AI teams work today.",
    skills: [
      { icon: "🤖", name: "AI Agents & Tool Calling" }, { icon: "🔗", name: "RAG & Vector Databases" },
      { icon: "⚡", name: "n8n AI Automation" }, { icon: "🧠", name: "Prompt & Context Engineering" },
      { icon: "🔌", name: "MCP & App Integrations" }, { icon: "🚀", name: "Deploying AI Apps" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Python + How LLMs Work", description: "Python from scratch, APIs, how LLMs think, prompting and structured outputs. Build your first chatbot." },
      { phase: "MONTH 2", title: "RAG & Knowledge Bots", description: "Embeddings, vector databases and retrieval. Build a bot that answers questions from your own documents." },
      { phase: "MONTH 3", title: "AI Agents & Multi-Agent Teams", description: "Tool calling, memory, LangChain, LangGraph and CrewAI. Agents that plan, act and check their own work." },
      { phase: "MONTH 4", title: "No-Code Automation + MCP", description: "n8n workflows, AI inside business apps, MCP servers, guardrails, evaluation and cost control." },
      { phase: "MONTH 5", title: "Capstone + Internship + Interview Prep", description: "Ship and deploy a real agent, present it, polish GitHub and LinkedIn, mock interviews." },
    ],
    projects: ["AI customer-support agent with escalation", "Lead & CRM automation with n8n", "Research-and-report multi-agent crew", "Capstone: a deployed AI agent for a real business problem"],
    tools: ["Python", "OpenAI / Claude / Gemini APIs", "LangChain", "LangGraph", "CrewAI", "n8n", "Chroma / Pinecone", "MCP", "Streamlit", "FastAPI"],
    roles: ["AI Engineer", "AI Agent Developer", "AI Automation Specialist", "LLM App Developer", "AI Product Analyst"],
    stack: ["ai-productivity", "python-for-ai", "no-code-ai-automation"],
  },
  {
    slug: "ai-powered-data-analyst", title: "AI-Powered Data Analyst", level: "career", ...t("data"), duration: "4 Months", hot: true,
    description: "Turn messy data into decisions with Excel, SQL, Power BI and Python — and let AI do the heavy lifting. One of the most popular first steps into AI-era jobs for freshers.",
    audience: ["Any graduate — B.Tech, BCA, B.Com, BBA, B.Sc", "Freshers who want a non-coding-heavy tech role", "Anyone who loves numbers and finding patterns"],
    aiAngle: "Use AI to write SQL, clean data, explain charts and draft reports — then verify it like a professional.",
    skills: [
      { icon: "📊", name: "Excel & Power Query" }, { icon: "🗄️", name: "SQL for Analysis" },
      { icon: "📈", name: "Power BI Dashboards" }, { icon: "🐍", name: "Python & Pandas" },
      { icon: "🤖", name: "AI-Assisted Analysis" }, { icon: "💬", name: "Data Storytelling" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Excel + Business Thinking", description: "Formulas, lookups, pivots, Power Query, KPIs and how businesses actually use numbers." },
      { phase: "MONTH 2", title: "SQL — Ask Any Question of Data", description: "Joins, grouping, CTEs and window functions on real sales and customer datasets." },
      { phase: "MONTH 3", title: "Power BI + Python", description: "Data models, DAX and dashboards. Pandas for cleaning and exploring data." },
      { phase: "MONTH 4", title: "AI Analytics + Capstone + Internship", description: "AI copilots for analysis, a full business case study, presentation and interview prep." },
    ],
    projects: ["Sales performance dashboard in Power BI", "Customer churn analysis with SQL + Python", "Capstone: end-to-end business insight report"],
    tools: ["Excel", "SQL", "MySQL", "Power BI", "DAX", "Python", "Pandas", "ChatGPT / Copilot for data"],
    roles: ["Data Analyst", "Business Intelligence Analyst", "MIS / Reporting Analyst", "AI Operations Analyst", "Junior Business Analyst"],
    stack: ["sql-excel", "python-for-ai"],
  },
  {
    slug: "mern-full-stack-ai", title: "Full Stack Web Developer (MERN + AI)", level: "career", ...t("dev"), duration: "5 Months",
    description: "Build modern web apps end to end with JavaScript — React, Node, Express and MongoDB — the way startups ship in 2026, with AI coding tools in your workflow.",
    audience: ["Students and freshers who want to build websites and apps", "Anyone aiming for startup developer roles", "Freelancers who want to build for clients"],
    aiAngle: "Build with Cursor, Copilot and Claude Code, and ship an app with a built-in AI chatbot.",
    skills: [
      { icon: "🌐", name: "HTML, CSS & JavaScript" }, { icon: "⚛️", name: "React & Tailwind" },
      { icon: "🟩", name: "Node.js & Express APIs" }, { icon: "🗄️", name: "MongoDB" },
      { icon: "🏗️", name: "System Design Basics" }, { icon: "🤖", name: "AI Features & AI Coding" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Web Foundations", description: "HTML, CSS, JavaScript and Git — with DSA essentials twice a week." },
      { phase: "MONTH 2", title: "React", description: "Components, hooks, routing, Tailwind and calling real APIs." },
      { phase: "MONTH 3", title: "Node, Express & MongoDB", description: "REST APIs, authentication, databases and connecting front to back." },
      { phase: "MONTH 4", title: "AI + System Design Basics", description: "AI coding tools, adding a chatbot to your app, and 2 weeks of system design basics." },
      { phase: "MONTH 5", title: "Capstone + Internship + Interview Prep", description: "Ship a live product, deploy it, and prepare for interviews." },
    ],
    projects: ["Portfolio website", "Real-time chat app", "Job board with login and dashboards", "Capstone: deployed MERN app with an AI assistant"],
    tools: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Git & GitHub", "Cursor / Copilot", "Vercel"],
    roles: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "MERN Developer"],
    stack: ["ai-assisted-coding"],
  },
  {
    slug: "java-full-stack-ai", title: "Java Full Stack Developer + AI", level: "career", ...t("dev"), duration: "5 Months", hot: true,
    description: "India's most-hired fresher stack: Core Java, Advanced Java, Spring Boot and React — with AI coding tools built in. Build and deploy real apps, then crack the interview.",
    audience: ["B.Tech, BCA, MCA students and freshers", "Anyone targeting service companies and GCCs", "Beginners — Java is taught from zero"],
    aiAngle: "Code with AI assistants like Copilot and Claude Code, review AI-written code, and add an AI feature to your app.",
    skills: [
      { icon: "☕", name: "Core & Advanced Java" }, { icon: "🌱", name: "Spring Boot & REST APIs" },
      { icon: "🗄️", name: "SQL, JDBC & Hibernate" }, { icon: "⚛️", name: "React Frontend" },
      { icon: "🏗️", name: "System Design Basics" }, { icon: "🤖", name: "AI-Assisted Coding" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Core Java + OOP + Git", description: "Java syntax, OOP, collections, exceptions and Git — plus DSA essentials twice a week." },
      { phase: "MONTH 2", title: "Advanced Java + SQL", description: "JDBC, Servlets, SQL, Hibernate/JPA and building your first database-backed app." },
      { phase: "MONTH 3", title: "Spring Boot APIs", description: "REST APIs, validation, Spring Security with JWT login, testing." },
      { phase: "MONTH 4", title: "React + AI + System Design Basics", description: "React frontend, connecting to your APIs, AI coding tools, an AI feature, and 2 weeks of system design basics." },
      { phase: "MONTH 5", title: "Capstone + Internship + Interview Prep", description: "Build and deploy a full app, resume, mock technical and HR interviews." },
    ],
    projects: ["Student management system (Spring Boot + SQL)", "E-commerce REST API with login", "Job portal with React frontend", "Capstone: deployed full-stack app with an AI feature"],
    tools: ["Java", "Spring Boot", "Hibernate / JPA", "MySQL", "React", "Git & GitHub", "Postman", "GitHub Copilot", "Docker basics"],
    roles: ["Java Developer", "Full Stack Developer", "Backend Developer", "Software Engineer (Fresher)"],
    stack: ["core-java", "ai-assisted-coding"],
  },
  {
    slug: "mobile-app-developer-ai", title: "Mobile App Developer (Android + iOS + AI)", level: "career", ...t("mobile"), duration: "5 Months",
    description: "Build apps for Android and iPhone with Flutter and React Native, learn native Kotlin and Swift basics, add AI features, and publish to the Play Store and App Store.",
    audience: ["Students who want to build apps people actually use", "Freshers aiming for app developer roles", "Founders and freelancers who want to ship their own app"],
    aiAngle: "Add AI chat, image recognition and smart search to your apps, and build faster with AI coding assistants.",
    skills: [
      { icon: "📱", name: "Flutter & Dart" }, { icon: "🤖", name: "Android with Kotlin" },
      { icon: "🍎", name: "iOS with Swift & SwiftUI" }, { icon: "⚛️", name: "React Native" },
      { icon: "🧠", name: "AI Features in Apps" }, { icon: "🚀", name: "Publishing to Stores" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Dart + Flutter Basics", description: "Dart, widgets, layouts and navigation — your first app on your own phone in week 2." },
      { phase: "MONTH 2", title: "Real Apps: Flutter + React Native", description: "State management, APIs and Firebase login and database — then the same app in React Native." },
      { phase: "MONTH 3", title: "Native Android & iOS", description: "Kotlin and Swift/SwiftUI basics on Mac, and when to go native." },
      { phase: "MONTH 4", title: "AI Features + Payments + Publishing", description: "AI chat and vision in apps, notifications, payments, and publishing to the stores." },
      { phase: "MONTH 5", title: "Capstone + Internship + Interview Prep", description: "Publish your own app and prepare for interviews." },
    ],
    projects: ["Expense tracker app", "Food-ordering app with Firebase", "AI chat assistant app", "Capstone: an app published on the Play Store"],
    tools: ["Flutter", "Dart", "React Native", "Firebase", "Kotlin", "Android Studio", "Swift / SwiftUI", "Xcode", "Gemini / OpenAI APIs"],
    roles: ["Flutter Developer", "React Native Developer", "Mobile App Developer", "Android Developer", "iOS Developer (Junior)"],
    stack: ["build-your-first-app", "react-native"],
  },
  {
    slug: "cybersecurity-ai-security", title: "Cybersecurity & AI Security Analyst", level: "career", ...t("security"), duration: "5 Months",
    description: "India is short of over a million security professionals. Learn ethical hacking, network and web security, SOC operations — and the new world of AI security.",
    audience: ["Students curious about how systems get hacked", "Freshers aiming for SOC and security analyst roles", "IT and networking learners going into security"],
    aiAngle: "Learn AI-era threats like prompt injection and deepfake phishing, and use AI tools to detect and investigate attacks.",
    skills: [
      { icon: "🌐", name: "Networking & Linux" }, { icon: "🛡️", name: "Ethical Hacking" },
      { icon: "🔍", name: "Web App Security" }, { icon: "👁️", name: "SOC & Threat Detection" },
      { icon: "☁️", name: "Cloud Security Basics" }, { icon: "🤖", name: "AI Security" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Networking, Linux & Security Basics", description: "How networks work, Linux, and core security concepts." },
      { phase: "MONTH 2", title: "Ethical Hacking", description: "Reconnaissance, scanning, exploitation basics in safe labs." },
      { phase: "MONTH 3", title: "Web Security (OWASP)", description: "Finding and fixing common web vulnerabilities with Burp Suite." },
      { phase: "MONTH 4", title: "SOC, Cloud & AI Security", description: "SIEM, incident response, cloud security, and attacks on AI systems." },
      { phase: "MONTH 5", title: "Capstone + Internship + Interview Prep", description: "A full security assessment report and interview preparation." },
    ],
    projects: ["Network scan and vulnerability report", "Web app penetration test (lab)", "SOC alert investigation", "Capstone: security audit of an app including its AI features"],
    tools: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "Splunk / SIEM", "AWS Security"],
    roles: ["SOC Analyst", "Cybersecurity Analyst", "Junior Penetration Tester", "Security Operations Associate"],
  },
  {
    slug: "digital-marketing-ai", title: "Digital Marketing with AI", level: "career", ...t("marketing"), duration: "3 Months",
    description: "Grow brands online with SEO, social media, Google and Meta ads, and analytics — using AI to create content and run campaigns faster than ever.",
    audience: ["Students from any background", "Creators and freelancers", "Anyone who wants to grow a business online"],
    aiAngle: "Create posts, ads, videos and landing pages with AI tools, and use AI to analyse what's working.",
    skills: [
      { icon: "🔍", name: "SEO" }, { icon: "📱", name: "Social Media Marketing" },
      { icon: "🎯", name: "Google & Meta Ads" }, { icon: "📈", name: "Analytics (GA4)" },
      { icon: "🎨", name: "AI Content Creation" }, { icon: "📧", name: "Email & WhatsApp Marketing" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Foundations, SEO & Content", description: "How digital marketing works, SEO, and AI-assisted content." },
      { phase: "MONTH 2", title: "Social Media & Paid Ads", description: "Instagram, LinkedIn, Google Ads and Meta Ads campaigns." },
      { phase: "MONTH 3", title: "Analytics + Capstone + Internship", description: "GA4, reporting, and a real campaign for a brand." },
    ],
    projects: ["SEO audit of a real website", "Social media content calendar made with AI", "Ad campaign plan with budget", "Capstone: full campaign and results report"],
    tools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Search Console", "Canva", "ChatGPT", "AI video tools"],
    roles: ["Digital Marketing Executive", "Social Media Manager", "SEO Executive", "Performance Marketing Associate"],
    stack: ["ai-productivity"],
  },
];

/* ═══════════════════════════════ SHORT COURSES ═══════════════════════════════ */

const short: Course[] = [
  {
    slug: "ai-productivity", title: "AI Productivity for Everyone", level: "short", ...t("ai"), duration: "4 Weeks", hot: true,
    description: "Use AI like a pro for study, work and job hunting — research, writing, slides, spreadsheets and more.",
    audience: ["Anyone — no coding needed", "Students who want to work smarter"],
    aiAngle: "This course is all about using AI tools well — and safely.",
    skills: [{ icon: "💬", name: "Prompting That Works" }, { icon: "📝", name: "Writing & Research" }, { icon: "📊", name: "AI for Excel & Slides" }, { icon: "🛡️", name: "Using AI Responsibly" }],
    curriculum: [
      { phase: "WEEK 1", title: "How AI Tools Think", description: "ChatGPT, Claude, Gemini and Copilot — strengths and limits." },
      { phase: "WEEK 2", title: "Prompting for Real Tasks", description: "Research, writing, summarising and learning faster." },
      { phase: "WEEK 3", title: "AI at Work", description: "Excel, slides, email and meeting notes with AI." },
      { phase: "WEEK 4", title: "Project", description: "An AI-powered resume, portfolio or study system." },
    ],
    projects: ["AI-built resume and cover letter", "Personal AI study workflow"],
    tools: ["ChatGPT", "Claude", "Gemini", "Microsoft Copilot", "Notion AI"],
    roles: ["Every job in 2026"], upgrade: "ai-engineer-agents-automation",
  },
  {
    slug: "ai-assisted-coding", title: "Coding with AI", level: "short", ...t("ai"), duration: "4 Weeks", hot: true,
    description: "The skill every developer is hired for in 2026: build real apps with AI coding tools — and learn to review what they write.",
    audience: ["Students who know basic programming", "Developers who want to work 2× faster"],
    aiAngle: "You'll pair-program with AI every day and learn to specify, review and test AI-written code.",
    skills: [{ icon: "🤖", name: "AI Pair Programming" }, { icon: "📝", name: "Spec-Driven Building" }, { icon: "🔍", name: "Reviewing AI Code" }, { icon: "🧪", name: "Testing & Debugging" }],
    curriculum: [
      { phase: "WEEK 1", title: "The AI Coding Toolkit", description: "Copilot, Cursor and Claude Code — setup and habits." },
      { phase: "WEEK 2", title: "Build from a Spec", description: "Plan, prompt and build a working app." },
      { phase: "WEEK 3", title: "Review, Test, Fix", description: "Catching bugs and security issues in AI code." },
      { phase: "WEEK 4", title: "Ship a Project", description: "Deploy an app built with AI." },
    ],
    projects: ["A deployed web app built with AI tools"],
    tools: ["GitHub Copilot", "Cursor", "Claude Code", "Git", "Vercel"],
    roles: ["Software Developer", "Full Stack Developer"], upgrade: "mern-full-stack-ai",
  },
  {
    slug: "no-code-ai-automation", title: "No-Code AI Automation", level: "short", ...t("ai"), duration: "4 Weeks",
    description: "Automate emails, leads, reports and WhatsApp messages with n8n and AI — no heavy coding needed.",
    audience: ["Anyone — non-coders welcome", "Freelancers who want to sell automations"],
    aiAngle: "Put AI steps inside workflows to read, classify and reply automatically.",
    skills: [{ icon: "⚡", name: "n8n Workflows" }, { icon: "🔌", name: "Connecting Apps" }, { icon: "🤖", name: "AI Nodes" }, { icon: "📧", name: "Email & Lead Automation" }],
    curriculum: [
      { phase: "WEEK 1", title: "Automation Basics", description: "Triggers, actions and data mapping." },
      { phase: "WEEK 2", title: "Connecting Apps", description: "Sheets, Gmail, WhatsApp, webhooks and APIs." },
      { phase: "WEEK 3", title: "AI in Workflows", description: "AI nodes and simple AI agents in n8n." },
      { phase: "WEEK 4", title: "Project", description: "A complete business automation." },
    ],
    projects: ["Lead capture → AI reply → CRM workflow"],
    tools: ["n8n", "Make", "Zapier", "Google Sheets", "OpenAI API"],
    roles: ["AI Automation Specialist", "Freelance Automation Builder"], upgrade: "ai-engineer-agents-automation",
  },
  {
    slug: "python-for-ai", title: "Python for AI", level: "short", ...t("ai"), duration: "6 Weeks", hot: true,
    description: "The language of AI, from zero. Write real programs, then build your own chatbot and automation script.",
    audience: ["Complete beginners", "Students who want to get into AI or data"],
    aiAngle: "Call an AI model from your own code, and learn to use AI as a tutor without letting it do your thinking.",
    skills: [{ icon: "🐍", name: "Python Basics" }, { icon: "🧩", name: "Functions & OOP" }, { icon: "📁", name: "Files & Data" }, { icon: "🤖", name: "Calling AI APIs" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Basics", description: "Variables, conditions, loops and functions." },
      { phase: "WEEKS 3–4", title: "Data & Files", description: "Lists, dictionaries, files, errors and working with real data." },
      { phase: "WEEKS 5–6", title: "Python + AI", description: "Call an AI API and build a chatbot and an automation script." },
    ],
    projects: ["Your own AI chatbot", "An automation script", "Expense tracker"],
    tools: ["Python", "VS Code", "Git", "OpenAI / Gemini API"],
    roles: ["Foundation for AI and data roles"], upgrade: "ai-engineer-agents-automation",
  },
  {
    slug: "core-java", title: "Core Java", level: "short", ...t("dev"), duration: "6 Weeks",
    description: "Master the language India hires for most — OOP, collections and problem solving, interview-ready.",
    audience: ["Complete beginners", "Students preparing for placements"],
    aiAngle: "Use AI to practise interview questions and explain concepts in your own words.",
    skills: [{ icon: "☕", name: "Java Fundamentals" }, { icon: "🧩", name: "OOP" }, { icon: "📚", name: "Collections" }, { icon: "🧠", name: "Problem Solving" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Basics", description: "Syntax, data types, loops, arrays and strings." },
      { phase: "WEEKS 3–4", title: "OOP", description: "Classes, inheritance, interfaces and exceptions." },
      { phase: "WEEKS 5–6", title: "Collections + Project", description: "Lists, maps, sets and a final project." },
    ],
    projects: ["Bank account system", "Library manager"],
    tools: ["Java", "IntelliJ IDEA", "Git"],
    roles: ["Foundation for Java developer and QA roles"], upgrade: "java-full-stack-ai",
  },
  {
    slug: "sql-excel", title: "SQL + Excel for Analysis", level: "short", ...t("data"), duration: "6 Weeks",
    description: "The two skills behind most analyst jobs. Answer real business questions from data.",
    audience: ["Any graduate", "Beginners heading into data roles"],
    aiAngle: "Use AI to draft formulas and queries — and check that the answers are right.",
    skills: [{ icon: "📊", name: "Excel & Pivots" }, { icon: "🗄️", name: "SQL Queries" }, { icon: "🔗", name: "Joins & Grouping" }, { icon: "📈", name: "Business Reports" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Excel", description: "Formulas, lookups, pivots and charts." },
      { phase: "WEEKS 3–4", title: "SQL", description: "Select, filter, join and group." },
      { phase: "WEEKS 5–6", title: "Project", description: "A business report from raw data." },
    ],
    projects: ["Sales analysis report"],
    tools: ["Excel", "SQL", "MySQL"],
    roles: ["Data Analyst", "MIS Executive"], upgrade: "ai-powered-data-analyst",
  },
  {
    slug: "build-your-first-app", title: "Build Your First App", level: "short", ...t("mobile"), duration: "6 Weeks", hot: true,
    description: "Build and run a real mobile app on your own phone, from your first screen to a working app. No experience needed.",
    audience: ["Complete beginners", "Students who want to build apps"],
    aiAngle: "Add a simple AI feature to your first app.",
    skills: [{ icon: "🎨", name: "App Screens & Layouts" }, { icon: "🗺️", name: "Navigation" }, { icon: "🔌", name: "Data & APIs" }, { icon: "📱", name: "Run It on Your Phone" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Your First Screens", description: "Set up, build your first screens and run the app on your phone." },
      { phase: "WEEKS 3–4", title: "Screens & Data", description: "Navigation, forms and pulling data from APIs." },
      { phase: "WEEKS 5–6", title: "Project", description: "A complete app with an AI touch." },
    ],
    projects: ["Weather app", "To-do app with AI suggestions"],
    tools: ["Mentor-picked app framework", "VS Code", "Android / iPhone"],
    roles: ["Foundation for mobile developer roles"], upgrade: "mobile-app-developer-ai",
  },
  {
    slug: "react-native", title: "React Native Apps", level: "short", ...t("mobile"), duration: "6 Weeks",
    description: "Build Android and iPhone apps with JavaScript, using React Native and Expo.",
    audience: ["Beginners who know basic JavaScript", "Web learners going mobile"],
    aiAngle: "Build an AI chat screen and ship it in your app.",
    skills: [{ icon: "⚛️", name: "React Native & Expo" }, { icon: "🗺️", name: "Navigation" }, { icon: "🔌", name: "APIs & Storage" }, { icon: "🚀", name: "App Builds" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "From React to Native", description: "Core components, styling and Expo." },
      { phase: "WEEKS 3–4", title: "Navigation & Data", description: "Screens, APIs and local storage." },
      { phase: "WEEKS 5–6", title: "AI + Publish", description: "An AI feature, builds and publishing." },
    ],
    projects: ["News reader app", "AI chat app"],
    tools: ["React Native", "Expo", "JavaScript", "Firebase"],
    roles: ["React Native Developer", "Mobile Developer"], upgrade: "mobile-app-developer-ai",
  },
];

export const courses: Course[] = [...career, ...short];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export const careerPrograms = career;
export const coursesByLevel = (level: Level) => courses.filter((c) => c.level === level);

/** Old URLs (already shared on WhatsApp) → their new home. Used by next.config redirects. */
export const LEGACY_SLUGS: Record<string, string> = {
  "generative-ai-multi-agent": "ai-engineer-agents-automation",
  "ai-automation-no-code": "ai-engineer-agents-automation",
  "data-science-ml-ai": "data-scientist-ml-genai",
  "data-analytics-bi": "ai-powered-data-analyst",
  "business-analyst-product-management": "business-analyst-project-coordinator-ai",
  "full-stack-software-engineering": "mern-full-stack-ai",
  "cloud-devops-platform-engineering": "cloud-devops-engineer-ai",
  "cybersecurity-cloud-security": "cybersecurity-ai-security",
  "software-testing-qa-automation": "qa-ai-testing-engineer",
  "digital-marketing-growth-analytics": "digital-marketing-ai",
  "system-design-software-architecture": "",
  "cpep-customized-professional-excellence": "",
};

/** Courses retired in the v4.2 focus (39 → 15) → their closest remaining course ("" = /courses). */
export const RETIRED_SLUGS: Record<string, string> = {
  "data-scientist-ml-genai": "ai-powered-data-analyst",
  "python-full-stack-ai": "mern-full-stack-ai",
  "qa-ai-testing-engineer": "",
  "cloud-devops-engineer-ai": "",
  "business-analyst-project-coordinator-ai": "ai-powered-data-analyst",
  "agentic-ai": "ai-engineer-agents-automation",
  "advanced-python": "python-for-ai",
  "advanced-java": "java-full-stack-ai",
  "spring-boot": "java-full-stack-ai",
  "react": "mern-full-stack-ai",
  "node-express": "mern-full-stack-ai",
  "advanced-flutter": "mobile-app-developer-ai",
  "power-bi": "ai-powered-data-analyst",
  "selenium-automation": "",
  "devops-essentials": "",
  "system-design": "",
  "python-programming": "python-for-ai",
  "web-basics": "mern-full-stack-ai",
  "git-github": "ai-assisted-coding",
  "python-for-data": "ai-powered-data-analyst",
  "flutter-first-app": "build-your-first-app",
  "android-kotlin": "mobile-app-developer-ai",
  "ios-swift": "mobile-app-developer-ai",
  "manual-testing": "",
  "aws-basics": "",
  "ethical-hacking-basics": "cybersecurity-ai-security",
};

/** Every old course URL → its final destination, following chains (old v3 slug → retired v4 slug → v4.2 course). */
export function courseRedirects(): { from: string; to: string }[] {
  const all: Record<string, string> = { ...LEGACY_SLUGS, ...RETIRED_SLUGS };
  const live = new Set(courses.map((c) => c.slug));
  const resolve = (slug: string, depth = 0): string =>
    !slug || live.has(slug) || depth > 5 ? slug : slug in all ? resolve(all[slug], depth + 1) : "";
  return Object.keys(all).map((from) => ({ from, to: resolve(all[from]) }));
}

/** Prefilled WhatsApp link asking for the fee of a specific course. */
export const feeWhatsApp = (title: string) =>
  `https://wa.me/919936609430?text=${encodeURIComponent(`Hi! Please share the fee and next batch details for: ${title}`)}`;
