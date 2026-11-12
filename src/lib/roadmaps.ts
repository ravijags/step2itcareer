/* Career Roadmaps (v4.3) — one per career program. Each step: what it is, roughly how long,
   one free official resource, and where our course covers it. Free links point to official
   docs only (python.org, MDN, react.dev …), which stay stable and need no sign-up. */

export type Step = { title: string; what: string; time: string; free?: { label: string; url: string }; month: string };
export type Roadmap = { slug: string; course: string; role: string; color: string; total: string; intro: string; steps: Step[] };

export const ROADMAPS: Roadmap[] = [
  {
    slug: "ai-engineer", course: "ai-engineer-agents-automation", role: "AI Engineer", color: "#5B7BFF", total: "about 5 months",
    intro: "From your first line of Python to an AI agent that does real work for a real business.",
    steps: [
      { title: "Python basics", what: "Variables, loops, functions, lists and dictionaries — the language almost every AI tool is built around.", time: "3–4 weeks", free: { label: "The official Python tutorial", url: "https://docs.python.org/3/tutorial/" }, month: "Month 1" },
      { title: "Working with APIs and JSON", what: "Send a request, read the JSON that comes back. This is how your code talks to AI models.", time: "1 week", free: { label: "Requests quickstart", url: "https://requests.readthedocs.io/en/latest/user/quickstart/" }, month: "Month 1" },
      { title: "How LLMs work + prompting", what: "Tokens, context windows, and how to write prompts that get reliable, structured answers.", time: "1–2 weeks", free: { label: "Prompt engineering guide", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" }, month: "Month 1" },
      { title: "RAG: answers from your own documents", what: "Embeddings, vector search and retrieval, so a bot answers from your data instead of guessing.", time: "2–3 weeks", free: { label: "LangChain docs", url: "https://docs.langchain.com" }, month: "Month 2" },
      { title: "Tool calling and agents", what: "Let the model call functions: search, calculate, send an email — and decide what to do next.", time: "2–3 weeks", free: { label: "Tool use overview", url: "https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview" }, month: "Month 3" },
      { title: "Multi-agent teams", what: "Several agents that plan, research and check each other's work.", time: "2 weeks", free: { label: "CrewAI docs", url: "https://docs.crewai.com" }, month: "Month 3" },
      { title: "No-code automation + MCP", what: "Wire AI into everyday business apps with n8n, and connect models to tools with MCP.", time: "2–3 weeks", free: { label: "n8n docs", url: "https://docs.n8n.io" }, month: "Month 4" },
      { title: "Ship a capstone", what: "Deploy one agent that solves a real problem, measure how well it works, and present it.", time: "3–4 weeks", month: "Month 5" },
    ],
  },
  {
    slug: "data-analyst", course: "ai-powered-data-analyst", role: "Data Analyst", color: "#22B8D6", total: "about 4 months",
    intro: "From spreadsheets to dashboards and clear recommendations that managers act on.",
    steps: [
      { title: "Excel that analysts actually use", what: "Cleaning data, lookups, pivot tables and charts.", time: "2–3 weeks", free: { label: "Excel help & learning", url: "https://support.microsoft.com/excel" }, month: "Month 1" },
      { title: "Business thinking", what: "Turning a vague question (\"why are sales down?\") into numbers you can check.", time: "1 week", month: "Month 1" },
      { title: "SQL basics", what: "SELECT, WHERE, GROUP BY and JOIN — asking questions of a database.", time: "2–3 weeks", free: { label: "PostgreSQL tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" }, month: "Month 2" },
      { title: "SQL for real questions", what: "Subqueries, window functions and messy real-world tables.", time: "2 weeks", month: "Month 2" },
      { title: "Power BI dashboards", what: "Data models, measures and dashboards people understand at a glance.", time: "3 weeks", free: { label: "Power BI documentation", url: "https://learn.microsoft.com/power-bi/" }, month: "Month 3" },
      { title: "Python for analysis", what: "Pandas for cleaning and analysing data that's too big for Excel.", time: "2–3 weeks", free: { label: "pandas getting started", url: "https://pandas.pydata.org/docs/getting_started/index.html" }, month: "Month 3" },
      { title: "AI-assisted analysis", what: "Use AI to draft queries and summaries — and check every number it gives you.", time: "1–2 weeks", month: "Month 4" },
      { title: "Capstone insight report", what: "One dataset, end to end: clean, analyse, visualise, recommend.", time: "2–3 weeks", month: "Month 4" },
    ],
  },
  {
    slug: "mern-full-stack", course: "mern-full-stack-ai", role: "Full Stack Developer (MERN)", color: "#FF7A3D", total: "about 5 months",
    intro: "Build complete web apps — the screen users see and the server behind it.",
    steps: [
      { title: "HTML and CSS", what: "Structure and style a page; make it work on phones.", time: "2 weeks", free: { label: "MDN: learn web development", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development" }, month: "Month 1" },
      { title: "JavaScript", what: "Variables, functions, arrays, objects, and async code with fetch.", time: "3 weeks", free: { label: "MDN JavaScript guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }, month: "Month 1" },
      { title: "Git and GitHub", what: "Save your work, branch safely, and show your code to recruiters.", time: "1 week", free: { label: "Pro Git book", url: "https://git-scm.com/book/en/v2" }, month: "Month 1" },
      { title: "React", what: "Components, state, hooks and routing — the frontend most startups use.", time: "4 weeks", free: { label: "react.dev — Learn", url: "https://react.dev/learn" }, month: "Month 2" },
      { title: "Node.js and Express", what: "Build your own API: routes, middleware and authentication.", time: "2–3 weeks", free: { label: "Node.js — Learn", url: "https://nodejs.org/en/learn" }, month: "Month 3" },
      { title: "MongoDB", what: "Store and query your app's data.", time: "1–2 weeks", free: { label: "MongoDB documentation", url: "https://www.mongodb.com/docs/" }, month: "Month 3" },
      { title: "AI features + system design basics", what: "Add an AI assistant to your app; learn how apps handle more users.", time: "3 weeks", month: "Month 4" },
      { title: "Capstone + deploy", what: "Ship a complete app online with login, data and an AI feature.", time: "3–4 weeks", month: "Month 5" },
    ],
  },
  {
    slug: "java-full-stack", course: "java-full-stack-ai", role: "Java Full Stack Developer", color: "#7B5BFF", total: "about 5 months",
    intro: "The stack banks, GCCs and large IT teams hire for: Java, Spring Boot, SQL and React.",
    steps: [
      { title: "Core Java", what: "Syntax, OOP, collections and exceptions.", time: "4 weeks", free: { label: "Dev.java — Learn", url: "https://dev.java/learn/" }, month: "Month 1" },
      { title: "Git and GitHub", what: "Version control every developer team expects.", time: "1 week", free: { label: "Pro Git book", url: "https://git-scm.com/book/en/v2" }, month: "Month 1" },
      { title: "SQL and JDBC", what: "Design tables, write queries, and connect Java to a database.", time: "2–3 weeks", free: { label: "PostgreSQL tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html" }, month: "Month 2" },
      { title: "Advanced Java", what: "Servlets and Hibernate — how Java web apps work under the hood.", time: "2 weeks", month: "Month 2" },
      { title: "Spring Boot REST APIs", what: "Build secure APIs the way enterprise teams do.", time: "4 weeks", free: { label: "Spring guides", url: "https://spring.io/guides" }, month: "Month 3" },
      { title: "React frontend", what: "A modern frontend on top of your own API.", time: "2–3 weeks", free: { label: "react.dev — Learn", url: "https://react.dev/learn" }, month: "Month 4" },
      { title: "AI features + system design basics", what: "Add AI to your app and learn the basics of scaling.", time: "2 weeks", month: "Month 4" },
      { title: "Capstone + interview prep", what: "Deploy a full-stack app and practise the questions Java interviews ask.", time: "4 weeks", month: "Month 5" },
    ],
  },
  {
    slug: "mobile-app-developer", course: "mobile-app-developer-ai", role: "Mobile App Developer", color: "#22C58B", total: "about 5 months",
    intro: "From your first screen to an app other people download from the Play Store.",
    steps: [
      { title: "Dart and Flutter basics", what: "Widgets, layouts and navigation — your first app on your own phone.", time: "3–4 weeks", free: { label: "Flutter docs", url: "https://docs.flutter.dev" }, month: "Month 1" },
      { title: "Real apps: state, APIs and Firebase", what: "Load data, keep it in sync, and add login and a database.", time: "3 weeks", free: { label: "Firebase documentation", url: "https://firebase.google.com/docs" }, month: "Month 2" },
      { title: "React Native", what: "Build the same kind of app with JavaScript — useful if you know web.", time: "1–2 weeks", free: { label: "React Native docs", url: "https://reactnative.dev/docs/getting-started" }, month: "Month 2" },
      { title: "Native Android (Kotlin)", what: "When and why teams build fully native Android apps.", time: "2 weeks", free: { label: "Android developers — Kotlin", url: "https://developer.android.com/kotlin" }, month: "Month 3" },
      { title: "Native iOS (Swift)", what: "SwiftUI basics on a Mac, and how iOS apps differ.", time: "2 weeks", free: { label: "Swift documentation", url: "https://www.swift.org/documentation/" }, month: "Month 3" },
      { title: "AI features in apps", what: "Chat, image recognition and smart search inside your app.", time: "2 weeks", month: "Month 4" },
      { title: "Payments, notifications and publishing", what: "The last mile: payments, push notifications and store release.", time: "2 weeks", month: "Month 4" },
      { title: "Capstone: publish your app", what: "Ship your own app to the Play Store and prepare for interviews.", time: "4 weeks", month: "Month 5" },
    ],
  },
  {
    slug: "cybersecurity-analyst", course: "cybersecurity-ai-security", role: "Cybersecurity Analyst", color: "#F0569A", total: "about 5 months",
    intro: "Learn how attacks work — legally, in safe labs — and how to detect and stop them.",
    steps: [
      { title: "Networking basics", what: "IP addresses, ports, DNS and how data moves between machines.", time: "2 weeks", month: "Month 1" },
      { title: "Linux for security", what: "The command line every security analyst lives in.", time: "2 weeks", free: { label: "Kali Linux docs", url: "https://www.kali.org/docs/" }, month: "Month 1" },
      { title: "Ethical hacking in labs", what: "Reconnaissance, scanning and exploitation basics — only on systems you're allowed to test.", time: "3–4 weeks", free: { label: "Nmap reference guide", url: "https://nmap.org/book/man.html" }, month: "Month 2" },
      { title: "Web security (OWASP Top 10)", what: "The most common web vulnerabilities, and how to find and fix them.", time: "3–4 weeks", free: { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" }, month: "Month 3" },
      { title: "Traffic analysis", what: "Read network captures and spot what doesn't belong.", time: "1 week", free: { label: "Wireshark user's guide", url: "https://www.wireshark.org/docs/wsug_html_chunked/" }, month: "Month 3" },
      { title: "SOC and threat detection", what: "SIEM alerts, triage and incident response — the work of a SOC analyst.", time: "2–3 weeks", month: "Month 4" },
      { title: "Cloud and AI security", what: "Securing cloud accounts, plus new AI threats like prompt injection.", time: "2 weeks", month: "Month 4" },
      { title: "Capstone security audit", what: "A full assessment report of an app, including its AI features.", time: "3–4 weeks", month: "Month 5" },
    ],
  },
  {
    slug: "digital-marketer", course: "digital-marketing-ai", role: "Digital Marketer", color: "#DB2777", total: "about 3 months",
    intro: "Get found, grow an audience, and prove what worked — with AI speeding up every step.",
    steps: [
      { title: "Marketing foundations", what: "Audiences, funnels and how businesses actually get customers online.", time: "1 week", month: "Month 1" },
      { title: "SEO", what: "Help a website rank on Google: keywords, content and technical basics.", time: "2 weeks", free: { label: "Google Search Central: SEO starter guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }, month: "Month 1" },
      { title: "Content with AI", what: "Plan and draft content faster with AI — and edit it so it sounds human.", time: "1–2 weeks", month: "Month 1" },
      { title: "Social media marketing", what: "Content calendars, Reels and community for real brands.", time: "2 weeks", month: "Month 2" },
      { title: "Paid ads", what: "Google and Meta ads: targeting, budgets and creatives.", time: "2–3 weeks", free: { label: "Google Ads help", url: "https://support.google.com/google-ads" }, month: "Month 2" },
      { title: "Analytics", what: "Track what's working with GA4 and report it clearly.", time: "2 weeks", free: { label: "Google Analytics help", url: "https://support.google.com/analytics" }, month: "Month 3" },
      { title: "Capstone campaign", what: "Plan, run and report a full campaign end to end.", time: "2 weeks", month: "Month 3" },
    ],
  },
];

export const getRoadmap = (slug: string) => ROADMAPS.find((r) => r.slug === slug);
