export type Course = {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  duration: string;
  fee: string;
  feeDisplay: string;
  description: string;
  skills: { icon: string; name: string }[];
  curriculum: { phase: string; title: string; description: string }[];
  tools: string[];
  roles: string[];
};

export const courses: Course[] = [
  {
    slug: "generative-ai-multi-agent",
    title: "Generative AI & Multi-Agent Systems Engineering",
    category: "AI & Data",
    categoryColor: "#3B5BFF",
    duration: "4 Months",
    fee: "45000",
    feeDisplay: "₹45,000",
    description:
      "Build LLM-powered applications, RAG pipelines, and autonomous multi-agent workflows — designed for developers, career switchers, and anyone ready to work at the frontier of applied AI.",
    skills: [
      { icon: "🧠", name: "Agentic AI Workflows" },
      { icon: "🔗", name: "RAG Systems" },
      { icon: "💬", name: "Prompt Engineering" },
      { icon: "🤖", name: "LLM Applications" },
      { icon: "🔍", name: "Vector Databases" },
      { icon: "⚙️", name: "AI Orchestration" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "Foundations — Python & LLM Basics",
        description: "Python refresher, OpenAI APIs, prompt engineering fundamentals.",
      },
      {
        phase: "MONTH 2",
        title: "Core — LangChain & RAG Systems",
        description: "Vector databases, retrieval-augmented generation, LlamaIndex.",
      },
      {
        phase: "MONTH 3",
        title: "Advanced — Multi-Agent Systems",
        description: "CrewAI, AutoGen, orchestrating autonomous agent workflows.",
      },
      {
        phase: "MONTH 4",
        title: "Capstone + Mentor Review + Placement Prep",
        description: "Guided capstone project, mock interviews, resume & LinkedIn optimization.",
      },
    ],
    tools: ["Python", "OpenAI APIs", "LangChain", "CrewAI", "AutoGen", "LlamaIndex", "Vector Databases", "RAG Systems"],
    roles: ["AI Engineer", "Generative AI Developer", "AI Agent Engineer", "LLM Application Developer"],
  },
  {
    slug: "data-science-ml-ai",
    title: "Data Science, Machine Learning & AI Engineering",
    category: "AI & Data",
    categoryColor: "#16A34A",
    duration: "6 Months",
    fee: "65000",
    feeDisplay: "₹65,000",
    description:
      "Master the complete data science pipeline — from Python and statistics to ML model deployment and AI engineering — with real industry projects and dedicated mentor support.",
    skills: [
      { icon: "📊", name: "Machine Learning" },
      { icon: "🐍", name: "Python & Pandas" },
      { icon: "🧮", name: "Statistics & Math" },
      { icon: "🔬", name: "Deep Learning" },
      { icon: "☁️", name: "Model Deployment" },
      { icon: "📈", name: "Data Visualization" },
    ],
    curriculum: [
      {
        phase: "MONTH 1-2",
        title: "Foundations — Python, Stats & Data Wrangling",
        description: "Python, NumPy, Pandas, statistics, EDA, data cleaning.",
      },
      {
        phase: "MONTH 3",
        title: "Core ML — Supervised & Unsupervised Learning",
        description: "Regression, classification, clustering, scikit-learn, model evaluation.",
      },
      {
        phase: "MONTH 4",
        title: "Deep Learning & NLP",
        description: "Neural networks, TensorFlow, Keras, NLP fundamentals, transformers.",
      },
      {
        phase: "MONTH 5",
        title: "MLOps & AI Engineering",
        description: "Model deployment, FastAPI, Docker, cloud platforms, MLflow.",
      },
      {
        phase: "MONTH 6",
        title: "Capstone + Placement Prep",
        description: "End-to-end ML project, mock interviews, portfolio building.",
      },
    ],
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "FastAPI", "Docker", "MLflow"],
    roles: ["Data Scientist", "ML Engineer", "AI Engineer", "Data Analyst", "NLP Engineer"],
  },
  {
    slug: "data-analytics-bi",
    title: "Data Analytics & Business Intelligence",
    category: "AI & Data",
    categoryColor: "#FF7A3D",
    duration: "4 Months",
    fee: "40000",
    feeDisplay: "₹40,000",
    description:
      "Transform raw data into business decisions. Master SQL, Power BI, Excel, and Python for analytics — and learn to tell compelling data stories that drive real outcomes.",
    skills: [
      { icon: "📊", name: "Power BI & Tableau" },
      { icon: "🗄️", name: "SQL & Databases" },
      { icon: "📗", name: "Advanced Excel" },
      { icon: "🐍", name: "Python for Analytics" },
      { icon: "📉", name: "Statistical Analysis" },
      { icon: "🎯", name: "Business Storytelling" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "Foundations — Excel, SQL & Data Basics",
        description: "Advanced Excel, SQL queries, data types, database concepts.",
      },
      {
        phase: "MONTH 2",
        title: "Analytics — Python & Statistics",
        description: "Python for data analysis, Pandas, statistical thinking, EDA.",
      },
      {
        phase: "MONTH 3",
        title: "Visualization — Power BI & Tableau",
        description: "Dashboard design, Power BI, Tableau, data storytelling.",
      },
      {
        phase: "MONTH 4",
        title: "Capstone + Placement Prep",
        description: "Real business analytics project, mock interviews, portfolio.",
      },
    ],
    tools: ["Excel", "SQL", "Power BI", "Tableau", "Python", "Pandas", "Google Analytics"],
    roles: ["Data Analyst", "Business Analyst", "BI Developer", "Reporting Analyst", "Analytics Consultant"],
  },
  {
    slug: "business-analyst-product-management",
    title: "Business Analyst & Product Management",
    category: "Business",
    categoryColor: "#7C3AED",
    duration: "4 Months",
    fee: "40000",
    feeDisplay: "₹40,000",
    description:
      "Bridge the gap between business and technology. Learn requirements gathering, product thinking, agile methodology, and stakeholder management to lead digital transformation.",
    skills: [
      { icon: "📋", name: "Requirements Gathering" },
      { icon: "🗺️", name: "Product Roadmapping" },
      { icon: "🔄", name: "Agile & Scrum" },
      { icon: "📐", name: "UX & Wireframing" },
      { icon: "📊", name: "Data-Driven Decisions" },
      { icon: "🤝", name: "Stakeholder Management" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "BA Foundations — Business Analysis Core",
        description: "Business analysis fundamentals, SDLC, requirements documentation, use cases.",
      },
      {
        phase: "MONTH 2",
        title: "Product Management — Strategy & Roadmaps",
        description: "Product thinking, roadmapping, user stories, prioritization frameworks.",
      },
      {
        phase: "MONTH 3",
        title: "Agile, Tools & Stakeholder Management",
        description: "Scrum, Jira, Confluence, wireframing with Figma, stakeholder communication.",
      },
      {
        phase: "MONTH 4",
        title: "Capstone + Placement Prep",
        description: "Real product case study, mock interviews, LinkedIn & portfolio.",
      },
    ],
    tools: ["Jira", "Confluence", "Figma", "Excel", "SQL", "Miro", "Google Analytics"],
    roles: ["Business Analyst", "Product Manager", "Product Owner", "System Analyst", "Scrum Master"],
  },
  {
    slug: "full-stack-software-engineering",
    title: "Full Stack Software Engineering",
    category: "Engineering",
    categoryColor: "#3B5BFF",
    duration: "5 Months",
    fee: "45000",
    feeDisplay: "₹45,000",
    description:
      "Build production-grade web applications from scratch. Master React, Node.js, databases, and deployment — and graduate with a portfolio of real apps employers want to see.",
    skills: [
      { icon: "⚛️", name: "React & Next.js" },
      { icon: "🟩", name: "Node.js & Express" },
      { icon: "🗄️", name: "SQL & NoSQL DBs" },
      { icon: "🎨", name: "HTML, CSS, JS" },
      { icon: "🔗", name: "REST APIs & GraphQL" },
      { icon: "🚀", name: "CI/CD & Deployment" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "Frontend Foundations — HTML, CSS, JavaScript",
        description: "Semantic HTML, CSS layouts, JavaScript ES6+, DOM manipulation.",
      },
      {
        phase: "MONTH 2",
        title: "React & Modern Frontend",
        description: "React, Next.js, state management, Tailwind CSS, component design.",
      },
      {
        phase: "MONTH 3",
        title: "Backend — Node.js, Express & Databases",
        description: "Node.js, Express, REST APIs, PostgreSQL, MongoDB, authentication.",
      },
      {
        phase: "MONTH 4",
        title: "Full Stack Projects & DevOps",
        description: "Full stack apps, Docker, CI/CD, Vercel, AWS basics.",
      },
      {
        phase: "MONTH 5",
        title: "Capstone + Placement Prep",
        description: "Production-grade capstone project, mock interviews, portfolio.",
      },
    ],
    tools: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Docker"],
    roles: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer", "Web Developer"],
  },
  {
    slug: "cloud-devops-platform-engineering",
    title: "Cloud, DevOps & Platform Engineering",
    category: "Engineering",
    categoryColor: "#06B6D4",
    duration: "5 Months",
    fee: "52000",
    feeDisplay: "₹52,000",
    description:
      "Master cloud infrastructure, DevOps pipelines, and platform engineering on AWS, Azure, and GCP. Build the skills that keep modern software running at scale.",
    skills: [
      { icon: "☁️", name: "AWS / Azure / GCP" },
      { icon: "🐳", name: "Docker & Kubernetes" },
      { icon: "🔄", name: "CI/CD Pipelines" },
      { icon: "🏗️", name: "Infrastructure as Code" },
      { icon: "📊", name: "Monitoring & Observability" },
      { icon: "🔒", name: "Cloud Security" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "Linux, Networking & Cloud Basics",
        description: "Linux fundamentals, networking, AWS core services, IAM.",
      },
      {
        phase: "MONTH 2",
        title: "Containers — Docker & Kubernetes",
        description: "Docker, Kubernetes, container orchestration, Helm charts.",
      },
      {
        phase: "MONTH 3",
        title: "CI/CD & DevOps Practices",
        description: "Jenkins, GitHub Actions, GitLab CI, automated testing, deployment pipelines.",
      },
      {
        phase: "MONTH 4",
        title: "Infrastructure as Code & Monitoring",
        description: "Terraform, Ansible, Prometheus, Grafana, ELK stack.",
      },
      {
        phase: "MONTH 5",
        title: "Capstone + Placement Prep",
        description: "Cloud architecture project, certification prep, mock interviews.",
      },
    ],
    tools: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Linux"],
    roles: ["DevOps Engineer", "Cloud Engineer", "Platform Engineer", "Site Reliability Engineer", "Infrastructure Engineer"],
  },
  {
    slug: "cybersecurity-cloud-security",
    title: "Cybersecurity & Cloud Security",
    category: "Security",
    categoryColor: "#EF4444",
    duration: "4 Months",
    fee: "45000",
    feeDisplay: "₹45,000",
    description:
      "Defend systems, detect threats, and secure cloud infrastructure. Build hands-on skills in ethical hacking, network security, and cloud security across real-world environments.",
    skills: [
      { icon: "🛡️", name: "Ethical Hacking" },
      { icon: "🔍", name: "Threat Detection" },
      { icon: "🌐", name: "Network Security" },
      { icon: "☁️", name: "Cloud Security" },
      { icon: "🔐", name: "Cryptography" },
      { icon: "📋", name: "Compliance & GRC" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "Security Foundations & Networking",
        description: "Cybersecurity fundamentals, networking, protocols, OSI model, Linux basics.",
      },
      {
        phase: "MONTH 2",
        title: "Ethical Hacking & Penetration Testing",
        description: "Kali Linux, vulnerability assessment, pen testing, OWASP Top 10.",
      },
      {
        phase: "MONTH 3",
        title: "Cloud Security & Compliance",
        description: "AWS/Azure security, IAM, encryption, GDPR, SOC2, compliance frameworks.",
      },
      {
        phase: "MONTH 4",
        title: "Capstone + Placement Prep",
        description: "Security audit project, CEH/CompTIA prep, mock interviews.",
      },
    ],
    tools: ["Kali Linux", "Wireshark", "Metasploit", "Nmap", "Burp Suite", "AWS Security", "SIEM Tools"],
    roles: ["Cybersecurity Analyst", "Penetration Tester", "Cloud Security Engineer", "SOC Analyst", "Security Consultant"],
  },
  {
    slug: "software-testing-qa-automation",
    title: "Software Testing & QA Automation Engineering",
    category: "Engineering",
    categoryColor: "#16A34A",
    duration: "4 Months",
    fee: "45000",
    feeDisplay: "₹45,000",
    description:
      "Go beyond manual testing. Master automation frameworks, API testing, and CI/CD integration to become the QA engineer every development team needs.",
    skills: [
      { icon: "🧪", name: "Test Automation" },
      { icon: "🔌", name: "API Testing" },
      { icon: "🐍", name: "Python / Java for QA" },
      { icon: "🎭", name: "Selenium & Playwright" },
      { icon: "🔄", name: "CI/CD Integration" },
      { icon: "📋", name: "Test Planning" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "QA Foundations & Manual Testing",
        description: "SDLC, STLC, test cases, bug lifecycle, Jira, Agile testing.",
      },
      {
        phase: "MONTH 2",
        title: "Automation — Selenium & Python/Java",
        description: "Selenium WebDriver, Python/Java basics, TestNG, Page Object Model.",
      },
      {
        phase: "MONTH 3",
        title: "API Testing & Advanced Automation",
        description: "Postman, REST Assured, Playwright, performance testing with JMeter.",
      },
      {
        phase: "MONTH 4",
        title: "Capstone + Placement Prep",
        description: "Automation framework project, ISTQB prep, mock interviews.",
      },
    ],
    tools: ["Selenium", "Playwright", "Postman", "JMeter", "Python", "Java", "TestNG", "Jenkins", "Jira"],
    roles: ["QA Automation Engineer", "Software Tester", "SDET", "Quality Analyst", "Test Lead"],
  },
  {
    slug: "cpep-customized-professional-excellence",
    title: "Customized Professional Excellence Program™ (CPEP)",
    category: "Signature",
    categoryColor: "#FF7A3D",
    duration: "Custom",
    fee: "0",
    feeDisplay: "As Per Requirement",
    description:
      "Transform your current project into your biggest career success story. CPEP is our most enrolled program — a fully personalized learning journey built around your existing work, goals, and timeline.",
    skills: [
      { icon: "🎯", name: "Personalized Roadmap" },
      { icon: "🏗️", name: "Project Transformation" },
      { icon: "👨‍🏫", name: "1:1 Expert Mentorship" },
      { icon: "📈", name: "Career Acceleration" },
      { icon: "🏆", name: "Portfolio Building" },
      { icon: "🤝", name: "Placement Support" },
    ],
    curriculum: [
      {
        phase: "WEEK 1-2",
        title: "Deep Dive Assessment",
        description: "Understand your current skills, project, goals, and gaps through 1:1 sessions.",
      },
      {
        phase: "ONGOING",
        title: "Custom Learning Path",
        description: "Personalized curriculum built around your existing project and target role.",
      },
      {
        phase: "ONGOING",
        title: "Weekly 1:1 Mentor Reviews",
        description: "Weekly sessions reviewing progress, solving blockers, refining deliverables.",
      },
      {
        phase: "FINAL PHASE",
        title: "Showcase & Placement",
        description: "Portfolio presentation, mock interviews, placement drive, offer letter support.",
      },
    ],
    tools: ["Depends on your project stack", "Industry-relevant tools", "Mentorship platform", "Portfolio tools"],
    roles: ["Depends on your target role — we build toward it together"],
  },
  {
    slug: "ai-automation-no-code",
    title: "AI Automation & No-Code Solutions",
    category: "AI & Data",
    categoryColor: "#3B5BFF",
    duration: "3 Months",
    fee: "35000",
    feeDisplay: "₹35,000",
    description:
      "Build powerful AI-powered automations without writing complex code. Master n8n, Zapier, Make, and AI tools to automate business workflows and launch no-code products.",
    skills: [
      { icon: "⚡", name: "Workflow Automation" },
      { icon: "🤖", name: "AI Tool Integration" },
      { icon: "🔗", name: "API Connections" },
      { icon: "🏗️", name: "No-Code App Building" },
      { icon: "📊", name: "Process Optimization" },
      { icon: "🚀", name: "Product Launching" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "Automation Foundations — Zapier & Make",
        description: "Workflow thinking, Zapier, Make (Integromat), connecting apps, triggers & actions.",
      },
      {
        phase: "MONTH 2",
        title: "Advanced Automation — n8n & AI Integration",
        description: "n8n self-hosted, OpenAI integration, ChatGPT in workflows, AI-powered automations.",
      },
      {
        phase: "MONTH 3",
        title: "No-Code Products & Capstone",
        description: "Bubble, Webflow, building no-code SaaS, real automation project, portfolio.",
      },
    ],
    tools: ["n8n", "Zapier", "Make", "Bubble", "Webflow", "OpenAI API", "Airtable", "Notion API"],
    roles: ["Automation Engineer", "No-Code Developer", "AI Automation Specialist", "Operations Analyst", "Workflow Consultant"],
  },
  {
    slug: "digital-marketing-growth-analytics",
    title: "Digital Marketing & Growth Analytics",
    category: "Business",
    categoryColor: "#FF7A3D",
    duration: "3 Months",
    fee: "35000",
    feeDisplay: "₹35,000",
    description:
      "Master the full digital marketing stack — SEO, paid ads, social media, email marketing, and analytics — with a data-driven approach that gets real results for real businesses.",
    skills: [
      { icon: "🔍", name: "SEO & SEM" },
      { icon: "📱", name: "Social Media Marketing" },
      { icon: "📧", name: "Email Marketing" },
      { icon: "📊", name: "Google Analytics" },
      { icon: "💰", name: "Paid Advertising" },
      { icon: "📈", name: "Growth Hacking" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "Digital Marketing Foundations",
        description: "Marketing fundamentals, SEO, content marketing, social media strategy.",
      },
      {
        phase: "MONTH 2",
        title: "Paid Ads & Email Marketing",
        description: "Google Ads, Meta Ads, email campaigns, marketing automation, lead generation.",
      },
      {
        phase: "MONTH 3",
        title: "Analytics, Growth & Capstone",
        description: "Google Analytics 4, data-driven decisions, growth hacking, real campaign project.",
      },
    ],
    tools: ["Google Analytics", "Google Ads", "Meta Ads Manager", "Mailchimp", "SEMrush", "Canva", "HubSpot"],
    roles: ["Digital Marketing Manager", "SEO Specialist", "Growth Hacker", "Performance Marketer", "Social Media Manager"],
  },
  {
    slug: "system-design-software-architecture",
    title: "System Design & Software Architecture",
    category: "Engineering",
    categoryColor: "#7C3AED",
    duration: "4 Months",
    fee: "45000",
    feeDisplay: "₹45,000",
    description:
      "Learn to design systems that scale to millions of users. Master distributed systems, microservices, database design, and the architectural patterns used at top tech companies.",
    skills: [
      { icon: "🏗️", name: "System Design" },
      { icon: "🔧", name: "Microservices" },
      { icon: "🗄️", name: "Database Design" },
      { icon: "⚡", name: "Scalability Patterns" },
      { icon: "🌐", name: "Distributed Systems" },
      { icon: "📐", name: "API Design" },
    ],
    curriculum: [
      {
        phase: "MONTH 1",
        title: "System Design Fundamentals",
        description: "Scalability, load balancing, caching, CDN, CAP theorem, consistent hashing.",
      },
      {
        phase: "MONTH 2",
        title: "Database Design & Distributed Systems",
        description: "SQL vs NoSQL, sharding, replication, message queues, event-driven architecture.",
      },
      {
        phase: "MONTH 3",
        title: "Microservices & API Design",
        description: "Microservices patterns, REST vs GraphQL, service mesh, API gateway, Docker.",
      },
      {
        phase: "MONTH 4",
        title: "Capstone + Interview Prep",
        description: "Design real-world systems (Uber, Netflix, WhatsApp scale), mock system design interviews.",
      },
    ],
    tools: ["AWS", "Kafka", "Redis", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "GraphQL"],
    roles: ["Software Architect", "Senior Software Engineer", "Backend Engineer", "Tech Lead", "Solution Architect"],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByCategory(category: string): Course[] {
  if (category === "all") return courses;
  return courses.filter((c) => c.category === category);
}