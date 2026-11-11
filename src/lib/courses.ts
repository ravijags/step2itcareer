/* ─────────────────────────────────────────────────────────────────────────────
   Step2ITCareer catalogue — the single source of truth for every course page.

   Three levels that stack:
     short    → one skill, 4–6 weeks (the cheap front door)
     advanced → the next level, 6–8 weeks
     career   → short + advanced + projects + internship, 3–6 months, job-ready
   A learner can start with any short or advanced course and later upgrade to the
   career program by paying only the difference.

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
    stack: ["ai-productivity", "python-programming", "no-code-ai-automation", "agentic-ai"],
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
    stack: ["sql-excel", "python-for-data", "power-bi"],
  },
  {
    slug: "data-scientist-ml-genai", title: "Data Scientist: ML + GenAI", level: "career", ...t("data"), duration: "6 Months",
    description: "Learn to build models that predict, classify and generate — from statistics and machine learning to deep learning and GenAI. Sized for freshers, focused on projects.",
    audience: ["Students comfortable with basic maths", "Freshers aiming for ML and data science roles", "Data analysts ready for the next step"],
    aiAngle: "Classic machine learning plus modern GenAI: you'll fine-tune, prompt and evaluate LLMs alongside traditional models.",
    skills: [
      { icon: "🧮", name: "Statistics & Probability" }, { icon: "🐍", name: "Python, NumPy, Pandas" },
      { icon: "🧠", name: "Machine Learning" }, { icon: "🔬", name: "Deep Learning & NLP" },
      { icon: "🤖", name: "Generative AI" }, { icon: "🚀", name: "Model Deployment" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Python + Statistics", description: "Python, NumPy, Pandas, statistics and visualisation — the foundations every model stands on." },
      { phase: "MONTH 2", title: "Exploratory Data Analysis", description: "Cleaning, feature engineering and finding the story in data." },
      { phase: "MONTH 3", title: "Machine Learning", description: "Regression, classification, clustering and model evaluation with scikit-learn." },
      { phase: "MONTH 4", title: "Deep Learning & NLP", description: "Neural networks, computer vision basics, text and transformers." },
      { phase: "MONTH 5", title: "GenAI + Deployment", description: "LLMs, RAG, fine-tuning basics, FastAPI, Docker and MLOps essentials." },
      { phase: "MONTH 6", title: "Capstone + Internship + Interview Prep", description: "An end-to-end ML project, Kaggle-style practice and mock interviews." },
    ],
    projects: ["House-price prediction model", "Customer segmentation with clustering", "Image or text classifier with deep learning", "Capstone: deployed ML + GenAI app"],
    tools: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow / PyTorch", "Hugging Face", "FastAPI", "Docker", "MLflow"],
    roles: ["Junior Data Scientist", "ML Engineer (Associate)", "AI Engineer", "Data Analyst", "NLP Engineer (Associate)"],
    stack: ["python-programming", "python-for-data", "agentic-ai"],
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
    stack: ["core-java", "advanced-java", "spring-boot", "react"],
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
    stack: ["web-basics", "react", "node-express", "ai-assisted-coding"],
  },
  {
    slug: "python-full-stack-ai", title: "Python Full Stack Developer + AI", level: "career", ...t("dev"), duration: "5 Months",
    description: "One language for web, data and AI. Learn Python, build APIs with Django and FastAPI, add a React frontend — and plug AI into everything you build.",
    audience: ["Beginners who want the friendliest first language", "Students who want both development and AI options", "Freshers targeting Python developer roles"],
    aiAngle: "Python is the language of AI — you'll call LLM APIs directly from your backend and ship AI-powered features.",
    skills: [
      { icon: "🐍", name: "Python & OOP" }, { icon: "🔌", name: "Django & FastAPI" },
      { icon: "🗄️", name: "SQL & PostgreSQL" }, { icon: "⚛️", name: "React Basics" },
      { icon: "🏗️", name: "System Design Basics" }, { icon: "🤖", name: "AI APIs in Your Apps" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Python Programming", description: "Python from zero, OOP, files, error handling, Git — plus DSA essentials." },
      { phase: "MONTH 2", title: "Advanced Python + SQL", description: "Modules, APIs, testing, SQL and PostgreSQL." },
      { phase: "MONTH 3", title: "Django & FastAPI", description: "Web apps with Django, fast REST APIs with FastAPI, authentication." },
      { phase: "MONTH 4", title: "React + AI + System Design Basics", description: "A React frontend, AI features with LLM APIs, and 2 weeks of system design basics." },
      { phase: "MONTH 5", title: "Capstone + Internship + Interview Prep", description: "Ship a deployed product and prepare for interviews." },
    ],
    projects: ["Blog platform with Django", "Expense tracker API with FastAPI", "AI resume reviewer", "Capstone: deployed full-stack Python + AI app"],
    tools: ["Python", "Django", "FastAPI", "PostgreSQL", "React", "Git & GitHub", "OpenAI / Claude APIs", "Docker basics"],
    roles: ["Python Developer", "Backend Developer", "Full Stack Developer", "AI Application Developer"],
    stack: ["python-programming", "advanced-python", "react"],
  },
  {
    slug: "mobile-app-developer-ai", title: "Mobile App Developer (Android + iOS + AI)", level: "career", ...t("mobile"), duration: "5 Months",
    description: "Build apps for Android and iPhone with Flutter, learn native Kotlin and Swift basics, add AI features, and publish to the Play Store and App Store.",
    audience: ["Students who want to build apps people actually use", "Freshers aiming for app developer roles", "Founders and freelancers who want to ship their own app"],
    aiAngle: "Add AI chat, image recognition and smart search to your apps, and build faster with AI coding assistants.",
    skills: [
      { icon: "📱", name: "Flutter & Dart" }, { icon: "🤖", name: "Android with Kotlin" },
      { icon: "🍎", name: "iOS with Swift & SwiftUI" }, { icon: "🔥", name: "Firebase Backend" },
      { icon: "🧠", name: "AI Features in Apps" }, { icon: "🚀", name: "Publishing to Stores" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Dart + Flutter Basics", description: "Dart, widgets, layouts and navigation — your first app on your own phone in week 2." },
      { phase: "MONTH 2", title: "Real Apps with Flutter", description: "State management, APIs, local storage and Firebase login and database." },
      { phase: "MONTH 3", title: "Native Android & iOS", description: "Kotlin and Swift/SwiftUI basics on Mac, and when to go native." },
      { phase: "MONTH 4", title: "AI Features + Payments + Publishing", description: "AI chat and vision in apps, notifications, payments, and publishing to the stores." },
      { phase: "MONTH 5", title: "Capstone + Internship + Interview Prep", description: "Publish your own app and prepare for interviews." },
    ],
    projects: ["Expense tracker app", "Food-ordering app with Firebase", "AI chat assistant app", "Capstone: an app published on the Play Store"],
    tools: ["Flutter", "Dart", "Firebase", "Kotlin", "Android Studio", "Swift / SwiftUI", "Xcode", "Gemini / OpenAI APIs"],
    roles: ["Flutter Developer", "Mobile App Developer", "Android Developer", "iOS Developer (Junior)"],
    stack: ["flutter-first-app", "advanced-flutter", "android-kotlin", "ios-swift"],
  },
  {
    slug: "qa-ai-testing-engineer", title: "QA & AI Testing Engineer", level: "career", ...t("testing"), duration: "4 Months",
    description: "Every app needs testers — and every AI app needs a new kind of tester. Learn manual testing, Selenium and API automation, plus how to test AI and chatbots.",
    audience: ["Freshers from any engineering or IT background", "Anyone who likes finding what's broken", "Manual testers moving into automation"],
    aiAngle: "Test AI chatbots and LLM features for wrong answers and safety, and use AI to generate test cases faster.",
    skills: [
      { icon: "📋", name: "Manual Testing & Test Cases" }, { icon: "⚙️", name: "Selenium with Java" },
      { icon: "🔌", name: "API Testing (Postman)" }, { icon: "🎭", name: "Playwright" },
      { icon: "🤖", name: "Testing AI Apps" }, { icon: "🔄", name: "CI/CD for Tests" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Manual Testing + SQL", description: "SDLC, test design, bug reports, Jira and SQL for testers." },
      { phase: "MONTH 2", title: "Java + Selenium", description: "Java for testers, Selenium WebDriver, TestNG and page-object frameworks." },
      { phase: "MONTH 3", title: "API + Playwright + CI", description: "Postman, REST Assured, Playwright and running tests in GitHub Actions." },
      { phase: "MONTH 4", title: "AI Testing + Capstone + Internship", description: "Evaluating chatbots and LLM features, an automation framework capstone, interview prep." },
    ],
    projects: ["Test plan and bug reports for a live website", "Selenium framework for an e-commerce site", "API test suite in Postman", "Capstone: automation + AI chatbot evaluation"],
    tools: ["Jira", "SQL", "Java", "Selenium", "TestNG", "Postman", "Playwright", "GitHub Actions"],
    roles: ["QA Engineer", "Automation Test Engineer", "Software Tester", "AI Quality Analyst"],
    stack: ["manual-testing", "selenium-automation"],
  },
  {
    slug: "cloud-devops-engineer-ai", title: "Cloud & DevOps Engineer + AI", level: "career", ...t("cloud"), duration: "5 Months",
    description: "Learn how apps run in the real world — Linux, AWS, Docker, CI/CD and Kubernetes basics — and how companies deploy AI apps to the cloud.",
    audience: ["Students who like systems more than screens", "Freshers aiming for cloud and DevOps roles", "Developers who want to own deployment"],
    aiAngle: "Deploy AI apps on the cloud, monitor them, and use AI assistants to write scripts and fix pipelines.",
    skills: [
      { icon: "🖥️", name: "Linux & Networking" }, { icon: "☁️", name: "AWS Core Services" },
      { icon: "🐳", name: "Docker" }, { icon: "🔄", name: "CI/CD Pipelines" },
      { icon: "⚙️", name: "Kubernetes Basics" }, { icon: "🤖", name: "Deploying AI Apps" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Linux, Networking & Git", description: "Command line, shell scripting, networking basics and Git." },
      { phase: "MONTH 2", title: "AWS Foundations", description: "EC2, S3, IAM, VPC, RDS — hosting real apps on AWS." },
      { phase: "MONTH 3", title: "Docker + CI/CD", description: "Containers, GitHub Actions and Jenkins pipelines." },
      { phase: "MONTH 4", title: "Kubernetes, Terraform & Monitoring", description: "Kubernetes basics, infrastructure as code, monitoring, deploying an AI app." },
      { phase: "MONTH 5", title: "Capstone + Internship + Interview Prep", description: "Automate a full deployment and prepare for interviews and an AWS certification." },
    ],
    projects: ["Host a website on AWS", "Dockerise and auto-deploy an app", "Kubernetes deployment with monitoring", "Capstone: full CI/CD pipeline for an AI app"],
    tools: ["Linux", "AWS", "Docker", "GitHub Actions", "Jenkins", "Kubernetes", "Terraform", "Grafana"],
    roles: ["Cloud Engineer (Associate)", "DevOps Engineer (Junior)", "Site Reliability Engineer (Trainee)", "Cloud Support Engineer"],
    stack: ["aws-basics", "devops-essentials"],
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
    stack: ["ethical-hacking-basics"],
  },
  {
    slug: "business-analyst-project-coordinator-ai", title: "Business Analyst & Project Coordinator + AI", level: "career", ...t("business"), duration: "4 Months",
    description: "The bridge between business and tech teams. Plan projects, gather requirements, track delivery, build dashboards — and use AI to do it twice as fast.",
    audience: ["Graduates from any stream — no coding needed", "Freshers who enjoy planning and communication", "Anyone aiming for coordinator, analyst or PMO roles"],
    aiAngle: "Use AI to write requirements, meeting notes, status reports and analyses — the way modern project teams already work.",
    skills: [
      { icon: "🗺️", name: "Project Planning & Agile" }, { icon: "📋", name: "Requirements & User Stories" },
      { icon: "📊", name: "Excel & SQL" }, { icon: "📈", name: "Power BI Reporting" },
      { icon: "🤝", name: "Stakeholder Communication" }, { icon: "🤖", name: "AI for Business Work" },
    ],
    curriculum: [
      { phase: "MONTH 1", title: "Project Coordination + Agile", description: "Project lifecycle, planning, Scrum, Jira and documentation." },
      { phase: "MONTH 2", title: "Business Analysis", description: "Requirements, user stories, process flows and KPIs." },
      { phase: "MONTH 3", title: "Excel, SQL & Power BI", description: "Analysing project and business data and building dashboards." },
      { phase: "MONTH 4", title: "AI Workflows + Capstone + Internship", description: "AI for reporting and analysis, a full project simulation, interview prep." },
    ],
    projects: ["Run a simulated website project in Jira", "Requirements document for a mobile app", "Project performance dashboard in Power BI", "Capstone: end-to-end business case"],
    tools: ["Jira", "Confluence", "MS Project", "Excel", "SQL", "Power BI", "Google Workspace", "ChatGPT / Copilot"],
    roles: ["Project Coordinator", "Business Analyst (Junior)", "PMO Analyst", "MIS Executive"],
    stack: ["sql-excel", "power-bi", "ai-productivity"],
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

/* ═══════════════════════════════ ADVANCED COURSES ═══════════════════════════════ */

const advanced: Course[] = [
  {
    slug: "agentic-ai", title: "Agentic AI: LangChain, RAG & MCP", level: "advanced", ...t("ai"), duration: "8 Weeks", hot: true,
    description: "Go beyond chatbots. Build AI agents that use tools, search your documents, remember context and work in teams.",
    audience: ["Learners who know basic Python", "Developers adding AI to their skill set"],
    aiAngle: "Everything in this course is hands-on AI engineering.",
    skills: [{ icon: "🔗", name: "RAG Pipelines" }, { icon: "🤖", name: "Tool-Using Agents" }, { icon: "🧠", name: "Memory & Planning" }, { icon: "👥", name: "Multi-Agent Systems" }, { icon: "🔌", name: "MCP Servers" }, { icon: "🛡️", name: "Guardrails & Evaluation" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "LLM APIs & RAG", description: "Embeddings, vector stores and a document Q&A bot." },
      { phase: "WEEKS 3–4", title: "Agents & Tools", description: "Function calling, LangChain and LangGraph agents." },
      { phase: "WEEKS 5–6", title: "Multi-Agent + MCP", description: "CrewAI teams and connecting agents to apps with MCP." },
      { phase: "WEEKS 7–8", title: "Ship It", description: "Evaluation, guardrails, deployment and a final project." },
    ],
    projects: ["Knowledge bot over company documents", "Multi-agent research assistant"],
    tools: ["Python", "LangChain", "LangGraph", "CrewAI", "Chroma", "MCP", "Streamlit"],
    roles: ["AI Engineer", "AI Agent Developer"], upgrade: "ai-engineer-agents-automation",
  },
  {
    slug: "advanced-python", title: "Advanced Python", level: "advanced", ...t("dev"), duration: "6 Weeks",
    description: "Write Python like a professional — OOP, APIs, testing, async and clean project structure.",
    audience: ["Learners who finished Python basics", "Anyone heading into backend, data or AI"],
    aiAngle: "Use AI assistants to refactor and test your code — and learn to judge their output.",
    skills: [{ icon: "🧩", name: "OOP & Design" }, { icon: "🔌", name: "Working with APIs" }, { icon: "🧪", name: "Testing with pytest" }, { icon: "⚡", name: "Async Python" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "OOP & Clean Code", description: "Classes, modules, packaging and project structure." },
      { phase: "WEEKS 3–4", title: "APIs & Data", description: "Requests, JSON, databases and a FastAPI service." },
      { phase: "WEEKS 5–6", title: "Testing, Async & Project", description: "pytest, async basics and a final project." },
    ],
    projects: ["Command-line app with tests", "REST API with FastAPI"],
    tools: ["Python", "FastAPI", "pytest", "SQLite", "Git"],
    roles: ["Python Developer", "Backend Developer"], upgrade: "python-full-stack-ai",
  },
  {
    slug: "advanced-java", title: "Advanced Java (JDBC, Servlets, Hibernate)", level: "advanced", ...t("dev"), duration: "6 Weeks",
    description: "Take Core Java to the server: databases with JDBC, web apps with Servlets and JSP, and Hibernate.",
    audience: ["Learners who know Core Java", "Students preparing for Java developer interviews"],
    aiAngle: "Use AI to explain errors and generate boilerplate — then understand every line it writes.",
    skills: [{ icon: "🗄️", name: "JDBC & SQL" }, { icon: "🌐", name: "Servlets & JSP" }, { icon: "🔗", name: "Hibernate / JPA" }, { icon: "🏗️", name: "MVC Architecture" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "JDBC & SQL", description: "Connecting Java to databases, CRUD and transactions." },
      { phase: "WEEKS 3–4", title: "Servlets & JSP", description: "Web apps, sessions, filters and MVC." },
      { phase: "WEEKS 5–6", title: "Hibernate + Project", description: "ORM, mappings and a database-backed web app." },
    ],
    projects: ["Library management web app", "Employee portal with Hibernate"],
    tools: ["Java", "JDBC", "MySQL", "Servlets", "JSP", "Hibernate", "Tomcat"],
    roles: ["Java Developer", "Backend Developer"], upgrade: "java-full-stack-ai",
  },
  {
    slug: "spring-boot", title: "Spring Boot & REST APIs", level: "advanced", ...t("dev"), duration: "6 Weeks",
    description: "The framework behind most Java jobs. Build secure, production-style REST APIs with Spring Boot.",
    audience: ["Learners who know Core Java", "Java developers preparing for interviews"],
    aiAngle: "Generate API scaffolding with AI and learn to review it for security and correctness.",
    skills: [{ icon: "🌱", name: "Spring Boot" }, { icon: "🔌", name: "REST API Design" }, { icon: "🔐", name: "Spring Security & JWT" }, { icon: "🗄️", name: "Spring Data JPA" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Spring Core & Boot", description: "Dependency injection, configuration and your first API." },
      { phase: "WEEKS 3–4", title: "Data & Validation", description: "Spring Data JPA, validation and error handling." },
      { phase: "WEEKS 5–6", title: "Security + Project", description: "JWT login, testing and a complete API project." },
    ],
    projects: ["E-commerce product & order API", "Secure user-management API"],
    tools: ["Spring Boot", "Spring Security", "JPA", "MySQL", "Postman", "Maven"],
    roles: ["Java Backend Developer", "Spring Boot Developer"], upgrade: "java-full-stack-ai",
  },
  {
    slug: "react", title: "React for the Real World", level: "advanced", ...t("dev"), duration: "6 Weeks",
    description: "Build fast, modern user interfaces with React — components, hooks, routing and real API calls.",
    audience: ["Learners who know HTML, CSS and JavaScript", "Backend developers who want a frontend"],
    aiAngle: "Use AI coding tools to build UI faster, and add an AI chat widget to your app.",
    skills: [{ icon: "⚛️", name: "Components & Hooks" }, { icon: "🗺️", name: "Routing" }, { icon: "🔌", name: "Calling APIs" }, { icon: "🎨", name: "Tailwind CSS" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "React Basics", description: "Components, props, state and events." },
      { phase: "WEEKS 3–4", title: "Hooks, Routing & APIs", description: "useEffect, custom hooks, React Router and data fetching." },
      { phase: "WEEKS 5–6", title: "Styling + Project", description: "Tailwind, forms, deployment and a final app." },
    ],
    projects: ["Movie search app", "Dashboard app with charts"],
    tools: ["React", "Vite", "Tailwind CSS", "React Router", "Vercel"],
    roles: ["Frontend Developer", "React Developer"], upgrade: "mern-full-stack-ai",
  },
  {
    slug: "node-express", title: "Node.js & Express APIs", level: "advanced", ...t("dev"), duration: "6 Weeks",
    description: "Build the backend: REST APIs, authentication and databases with Node.js, Express and MongoDB.",
    audience: ["Learners who know JavaScript", "Frontend developers going full stack"],
    aiAngle: "Connect your API to LLMs and build an AI-powered endpoint.",
    skills: [{ icon: "🟩", name: "Node.js" }, { icon: "🔌", name: "Express REST APIs" }, { icon: "🗄️", name: "MongoDB & Mongoose" }, { icon: "🔐", name: "Auth with JWT" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Node & Express", description: "Modules, routing, middleware and your first API." },
      { phase: "WEEKS 3–4", title: "Databases & Auth", description: "MongoDB, Mongoose, JWT login and validation." },
      { phase: "WEEKS 5–6", title: "AI Endpoint + Project", description: "Calling LLM APIs, deployment and a final API." },
    ],
    projects: ["Notes API with login", "AI-powered summary API"],
    tools: ["Node.js", "Express", "MongoDB", "Mongoose", "Postman", "Render / Railway"],
    roles: ["Backend Developer", "Node.js Developer"], upgrade: "mern-full-stack-ai",
  },
  {
    slug: "advanced-flutter", title: "Advanced Flutter", level: "advanced", ...t("mobile"), duration: "8 Weeks",
    description: "From demo apps to real products: state management, Firebase, payments, AI features and publishing.",
    audience: ["Learners who finished Flutter basics", "App developers who want production skills"],
    aiAngle: "Add AI chat and image recognition to your app using Gemini or OpenAI APIs.",
    skills: [{ icon: "📱", name: "State Management" }, { icon: "🔥", name: "Firebase" }, { icon: "🧠", name: "AI Features" }, { icon: "🚀", name: "Store Publishing" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Architecture & State", description: "Provider/Riverpod and clean app structure." },
      { phase: "WEEKS 3–4", title: "Firebase & APIs", description: "Auth, Firestore, storage and notifications." },
      { phase: "WEEKS 5–6", title: "AI + Payments", description: "AI features and payment integration." },
      { phase: "WEEKS 7–8", title: "Publish", description: "Testing, release builds and the Play Store." },
    ],
    projects: ["Social app with Firebase", "AI-powered assistant app"],
    tools: ["Flutter", "Riverpod", "Firebase", "Gemini API", "Razorpay"],
    roles: ["Flutter Developer", "Mobile App Developer"], upgrade: "mobile-app-developer-ai",
  },
  {
    slug: "react-native", title: "React Native Apps", level: "advanced", ...t("mobile"), duration: "6 Weeks",
    description: "Already know React? Turn it into Android and iPhone apps with React Native and Expo.",
    audience: ["Web developers who know React", "MERN learners going mobile"],
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
  {
    slug: "power-bi", title: "Power BI & Dashboards", level: "advanced", ...t("data"), duration: "6 Weeks",
    description: "Build the dashboards managers actually use — data modelling, DAX and interactive reports.",
    audience: ["Learners who know Excel basics", "Analysts and MIS executives"],
    aiAngle: "Use Copilot-style AI to write DAX and explain insights.",
    skills: [{ icon: "📈", name: "Power BI Desktop" }, { icon: "🧮", name: "DAX" }, { icon: "🗄️", name: "Data Modelling" }, { icon: "💬", name: "Data Storytelling" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Data & Power Query", description: "Connecting, cleaning and shaping data." },
      { phase: "WEEKS 3–4", title: "Models & DAX", description: "Star schema, measures and time intelligence." },
      { phase: "WEEKS 5–6", title: "Dashboards + Project", description: "Design, drill-downs and publishing." },
    ],
    projects: ["Sales dashboard", "HR analytics dashboard"],
    tools: ["Power BI", "DAX", "Power Query", "Excel"],
    roles: ["BI Analyst", "Data Analyst", "MIS Analyst"], upgrade: "ai-powered-data-analyst",
  },
  {
    slug: "selenium-automation", title: "Selenium Automation with Java", level: "advanced", ...t("testing"), duration: "6 Weeks",
    description: "Automate web testing with Selenium, TestNG and a real framework — the most asked-for QA skill.",
    audience: ["Manual testers", "Freshers aiming for automation roles"],
    aiAngle: "Generate test cases and locators with AI, and learn when not to trust them.",
    skills: [{ icon: "⚙️", name: "Selenium WebDriver" }, { icon: "🧪", name: "TestNG" }, { icon: "🏗️", name: "Page Object Framework" }, { icon: "🔄", name: "CI Integration" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Java for Testers", description: "Just enough Java to automate confidently." },
      { phase: "WEEKS 3–4", title: "Selenium & TestNG", description: "Locators, waits, assertions and reports." },
      { phase: "WEEKS 5–6", title: "Framework + CI", description: "Page objects, data-driven tests and GitHub Actions." },
    ],
    projects: ["Automation suite for an e-commerce site"],
    tools: ["Java", "Selenium", "TestNG", "Maven", "GitHub Actions"],
    roles: ["Automation Test Engineer", "QA Engineer"], upgrade: "qa-ai-testing-engineer",
  },
  {
    slug: "devops-essentials", title: "DevOps Essentials: Docker, CI/CD & Kubernetes", level: "advanced", ...t("cloud"), duration: "8 Weeks",
    description: "Ship code automatically: containers, pipelines and Kubernetes basics — the core of every DevOps job.",
    audience: ["Developers who want to deploy their own apps", "Learners who finished AWS basics"],
    aiAngle: "Deploy and monitor an AI app, and use AI to write pipeline and config files.",
    skills: [{ icon: "🐳", name: "Docker" }, { icon: "🔄", name: "CI/CD" }, { icon: "⚙️", name: "Kubernetes Basics" }, { icon: "🏗️", name: "Terraform" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Docker", description: "Images, containers, volumes and Compose." },
      { phase: "WEEKS 3–4", title: "CI/CD", description: "GitHub Actions and Jenkins pipelines." },
      { phase: "WEEKS 5–6", title: "Kubernetes", description: "Pods, deployments and services." },
      { phase: "WEEKS 7–8", title: "IaC + Project", description: "Terraform basics and an automated deployment." },
    ],
    projects: ["Containerised app with auto-deploy"],
    tools: ["Docker", "GitHub Actions", "Jenkins", "Kubernetes", "Terraform"],
    roles: ["DevOps Engineer (Junior)", "Cloud Engineer"], upgrade: "cloud-devops-engineer-ai",
  },
  {
    slug: "system-design", title: "System Design for Developers", level: "advanced", ...t("dev"), duration: "6 Weeks",
    description: "How real apps handle millions of users — caching, databases, queues and scaling, explained for interviews and real work.",
    audience: ["Developers who can already build apps", "Learners preparing for product-company interviews"],
    aiAngle: "Design AI-powered systems: where the LLM sits, cost, latency and caching.",
    skills: [{ icon: "🏗️", name: "Scalability Basics" }, { icon: "🗄️", name: "Database Design" }, { icon: "⚡", name: "Caching & Queues" }, { icon: "📐", name: "Design Interviews" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Foundations", description: "Load balancers, caching, CDNs and API design." },
      { phase: "WEEKS 3–4", title: "Data at Scale", description: "SQL vs NoSQL, indexing, replication and queues." },
      { phase: "WEEKS 5–6", title: "Design Practice", description: "Design WhatsApp, URL shortener and an AI chatbot backend." },
    ],
    projects: ["Design document for a real-world app"],
    tools: ["Redis", "PostgreSQL", "Kafka (concepts)", "Excalidraw"],
    roles: ["Software Engineer", "Backend Developer"], upgrade: "java-full-stack-ai",
  },
];

/* ═══════════════════════════════ SHORT COURSES ═══════════════════════════════ */

const short: Course[] = [
  {
    slug: "ai-productivity", title: "AI Productivity: ChatGPT, Claude & Copilot", level: "short", ...t("ai"), duration: "4 Weeks", hot: true,
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
    slug: "ai-assisted-coding", title: "AI-Assisted Coding: Copilot, Cursor & Claude Code", level: "short", ...t("ai"), duration: "4 Weeks", hot: true,
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
    slug: "no-code-ai-automation", title: "No-Code AI Automation with n8n", level: "short", ...t("ai"), duration: "4 Weeks",
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
    slug: "python-programming", title: "Python Programming", level: "short", ...t("dev"), duration: "6 Weeks",
    description: "The friendliest first language — and the language of AI and data. Start from zero, write real programs.",
    audience: ["Complete beginners", "Students starting their tech journey"],
    aiAngle: "Learn to use AI as a tutor to explain errors — without letting it do your thinking.",
    skills: [{ icon: "🐍", name: "Python Basics" }, { icon: "🧩", name: "Functions & OOP" }, { icon: "📁", name: "Files & Data" }, { icon: "🧠", name: "Problem Solving" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Basics", description: "Variables, conditions, loops and functions." },
      { phase: "WEEKS 3–4", title: "Data Structures", description: "Lists, dictionaries, files and errors." },
      { phase: "WEEKS 5–6", title: "OOP + Project", description: "Classes and a final program." },
    ],
    projects: ["Quiz game", "Expense tracker"],
    tools: ["Python", "VS Code", "Git"],
    roles: ["Foundation for AI, data and backend roles"], upgrade: "python-full-stack-ai",
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
    slug: "web-basics", title: "Web Basics: HTML, CSS & JavaScript", level: "short", ...t("dev"), duration: "6 Weeks",
    description: "Build and publish your own websites from scratch — the starting point for every web developer.",
    audience: ["Complete beginners", "Anyone who wants their own website"],
    aiAngle: "Use AI to generate layouts and debug code — and understand every line.",
    skills: [{ icon: "🌐", name: "HTML" }, { icon: "🎨", name: "CSS & Responsive Design" }, { icon: "⚡", name: "JavaScript" }, { icon: "🚀", name: "Publishing Online" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "HTML & CSS", description: "Structure, styling and mobile-friendly layouts." },
      { phase: "WEEKS 3–4", title: "JavaScript", description: "Logic, the DOM and interactivity." },
      { phase: "WEEKS 5–6", title: "Project", description: "A personal portfolio site, live online." },
    ],
    projects: ["Personal portfolio website", "Interactive to-do app"],
    tools: ["HTML", "CSS", "JavaScript", "VS Code", "GitHub Pages"],
    roles: ["Foundation for frontend and full stack roles"], upgrade: "mern-full-stack-ai",
  },
  {
    slug: "git-github", title: "Git & GitHub", level: "short", ...t("dev"), duration: "2 Weeks",
    description: "The tool every tech team uses. Version control, collaboration and a GitHub profile recruiters notice.",
    audience: ["Anyone learning to code"],
    aiAngle: "Use AI to write commit messages and understand merge conflicts.",
    skills: [{ icon: "🔄", name: "Version Control" }, { icon: "👥", name: "Team Collaboration" }, { icon: "⭐", name: "GitHub Profile" }],
    curriculum: [
      { phase: "WEEK 1", title: "Git Basics", description: "Commits, branches and merging." },
      { phase: "WEEK 2", title: "GitHub", description: "Pull requests, collaboration and your profile." },
    ],
    projects: ["A polished GitHub profile with projects"],
    tools: ["Git", "GitHub", "VS Code"],
    roles: ["Every developer role"], upgrade: "mern-full-stack-ai",
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
    slug: "python-for-data", title: "Python for Data Analysis", level: "short", ...t("data"), duration: "6 Weeks",
    description: "Clean, explore and visualise data with Python, Pandas and charts.",
    audience: ["Beginners and Excel users", "Future data analysts and scientists"],
    aiAngle: "Use AI notebooks to speed up analysis and explain results.",
    skills: [{ icon: "🐍", name: "Python Basics" }, { icon: "🐼", name: "Pandas" }, { icon: "📈", name: "Visualisation" }, { icon: "🔍", name: "Exploratory Analysis" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Python for Data", description: "Just enough Python to work with data." },
      { phase: "WEEKS 3–4", title: "Pandas", description: "Cleaning, grouping and merging data." },
      { phase: "WEEKS 5–6", title: "Charts + Project", description: "Matplotlib, Seaborn and an analysis project." },
    ],
    projects: ["Exploratory analysis of a real dataset"],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    roles: ["Data Analyst", "Data Science foundation"], upgrade: "ai-powered-data-analyst",
  },
  {
    slug: "flutter-first-app", title: "Build Your First App (Flutter)", level: "short", ...t("mobile"), duration: "6 Weeks", hot: true,
    description: "Build a real app for Android and iPhone and run it on your own phone in the first two weeks.",
    audience: ["Complete beginners", "Students who want to build apps"],
    aiAngle: "Add a simple AI feature to your first app.",
    skills: [{ icon: "📱", name: "Flutter & Dart" }, { icon: "🎨", name: "App UI Design" }, { icon: "🗺️", name: "Navigation" }, { icon: "🔌", name: "Using APIs" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Dart & Widgets", description: "Your first app running on your phone." },
      { phase: "WEEKS 3–4", title: "Screens & Data", description: "Navigation, forms and APIs." },
      { phase: "WEEKS 5–6", title: "Project", description: "A complete app with an AI touch." },
    ],
    projects: ["Weather app", "To-do app with AI suggestions"],
    tools: ["Flutter", "Dart", "Android Studio", "VS Code"],
    roles: ["Foundation for mobile developer roles"], upgrade: "mobile-app-developer-ai",
  },
  {
    slug: "android-kotlin", title: "Android Development with Kotlin", level: "short", ...t("mobile"), duration: "6 Weeks",
    description: "Build native Android apps the way Google recommends — Kotlin and Jetpack Compose.",
    audience: ["Beginners with basic programming", "Mobile learners going native"],
    aiAngle: "Use AI in Android Studio to speed up building and debugging.",
    skills: [{ icon: "📱", name: "Kotlin" }, { icon: "🎨", name: "Jetpack Compose" }, { icon: "🗄️", name: "Room Database" }, { icon: "🔌", name: "APIs" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Kotlin", description: "The language, the right way." },
      { phase: "WEEKS 3–4", title: "Compose UI", description: "Screens, state and navigation." },
      { phase: "WEEKS 5–6", title: "Data + Project", description: "APIs, storage and a final app." },
    ],
    projects: ["Notes app", "News app"],
    tools: ["Kotlin", "Jetpack Compose", "Android Studio", "Room"],
    roles: ["Android Developer (Junior)"], upgrade: "mobile-app-developer-ai",
  },
  {
    slug: "ios-swift", title: "iOS Development with Swift & SwiftUI", level: "short", ...t("mobile"), duration: "6 Weeks",
    description: "Build iPhone apps with Swift and SwiftUI on Mac — from first screen to a working app.",
    audience: ["Beginners with basic programming", "Learners who want to build for iPhone"],
    aiAngle: "Use AI tools to learn Swift faster and add on-device intelligence.",
    skills: [{ icon: "🍎", name: "Swift" }, { icon: "🎨", name: "SwiftUI" }, { icon: "🗄️", name: "Data & Storage" }, { icon: "🔌", name: "APIs" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Swift", description: "Language basics on Mac and Xcode." },
      { phase: "WEEKS 3–4", title: "SwiftUI", description: "Views, state and navigation." },
      { phase: "WEEKS 5–6", title: "Data + Project", description: "APIs, storage and a final app." },
    ],
    projects: ["Habit tracker app", "Recipe app"],
    tools: ["Swift", "SwiftUI", "Xcode", "Mac lab"],
    roles: ["iOS Developer (Junior)"], upgrade: "mobile-app-developer-ai",
  },
  {
    slug: "manual-testing", title: "Manual Software Testing", level: "short", ...t("testing"), duration: "4 Weeks",
    description: "Start a QA career: test cases, bug reports, Jira and how software teams ship quality.",
    audience: ["Any graduate", "Beginners entering IT"],
    aiAngle: "Use AI to draft test cases and spot gaps in requirements.",
    skills: [{ icon: "📋", name: "Test Cases" }, { icon: "🔍", name: "Bug Reporting" }, { icon: "🔄", name: "SDLC & STLC" }, { icon: "🗄️", name: "SQL for Testers" }],
    curriculum: [
      { phase: "WEEK 1", title: "Testing Basics", description: "Why testing matters, SDLC and STLC." },
      { phase: "WEEK 2", title: "Test Design", description: "Writing test cases and scenarios." },
      { phase: "WEEK 3", title: "Bugs & Jira", description: "Reporting and tracking defects." },
      { phase: "WEEK 4", title: "Project", description: "Test a live website end to end." },
    ],
    projects: ["Complete test plan for a website"],
    tools: ["Jira", "Excel", "SQL", "Browser DevTools"],
    roles: ["Software Tester", "QA Analyst"], upgrade: "qa-ai-testing-engineer",
  },
  {
    slug: "aws-basics", title: "AWS Cloud Basics", level: "short", ...t("cloud"), duration: "4 Weeks",
    description: "Understand the cloud and host your first apps on AWS — a great start toward a cloud certification.",
    audience: ["Beginners curious about the cloud", "Developers who want to deploy"],
    aiAngle: "Explore AWS AI services and host an AI-powered app.",
    skills: [{ icon: "☁️", name: "Cloud Concepts" }, { icon: "🖥️", name: "EC2 & S3" }, { icon: "🔐", name: "IAM & Security" }, { icon: "🚀", name: "Hosting Apps" }],
    curriculum: [
      { phase: "WEEK 1", title: "Cloud Basics", description: "What the cloud is and how AWS is organised." },
      { phase: "WEEK 2", title: "Compute & Storage", description: "EC2, S3 and hosting a site." },
      { phase: "WEEK 3", title: "Security & Databases", description: "IAM, VPC basics and RDS." },
      { phase: "WEEK 4", title: "Project", description: "Deploy a working app on AWS." },
    ],
    projects: ["Website hosted on AWS"],
    tools: ["AWS", "EC2", "S3", "IAM", "RDS"],
    roles: ["Cloud Support Associate"], upgrade: "cloud-devops-engineer-ai",
  },
  {
    slug: "ethical-hacking-basics", title: "Ethical Hacking Basics", level: "short", ...t("security"), duration: "6 Weeks",
    description: "Learn how attackers think — legally, in safe labs — and how to protect systems.",
    audience: ["Beginners curious about security", "IT students exploring a security career"],
    aiAngle: "See how AI is used in attacks and defence, including phishing and deepfakes.",
    skills: [{ icon: "🌐", name: "Networking Basics" }, { icon: "🔍", name: "Reconnaissance" }, { icon: "🛡️", name: "Vulnerability Scanning" }, { icon: "🔒", name: "Defence Basics" }],
    curriculum: [
      { phase: "WEEKS 1–2", title: "Foundations", description: "Networks, Linux and the hacker mindset." },
      { phase: "WEEKS 3–4", title: "Scanning & Exploits", description: "Nmap, vulnerabilities and safe lab attacks." },
      { phase: "WEEKS 5–6", title: "Web Security + Project", description: "Common web attacks and a security report." },
    ],
    projects: ["Vulnerability assessment report (lab)"],
    tools: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite"],
    roles: ["Foundation for SOC and security analyst roles"], upgrade: "cybersecurity-ai-security",
  },
];

export const courses: Course[] = [...career, ...advanced, ...short];

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
  "system-design-software-architecture": "system-design",
  "cpep-customized-professional-excellence": "",
};

/** Prefilled WhatsApp link asking for the fee of a specific course. */
export const feeWhatsApp = (title: string) =>
  `https://wa.me/919936609430?text=${encodeURIComponent(`Hi! Please share the fee and next batch details for: ${title}`)}`;
