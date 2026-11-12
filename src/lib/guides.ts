/* Career Guides (v4.3) — 8 evergreen, opinionated reads. Each opens with a TL;DR so the value
   is clear in five seconds, uses short sections, and ends with one relevant next step.
   No statistics that can't be checked; advice only. */

export type Block =
  | { t: "p"; text: string }
  | { t: "h"; text: string }
  | { t: "list"; items: string[] }
  | { t: "tip"; text: string };

export type Guide = {
  slug: string; title: string; tag: string; minutes: number; dek: string; tldr: string[];
  body: Block[]; next: { label: string; href: string };
};

export const GUIDES: Guide[] = [
  {
    slug: "data-analyst-vs-data-scientist", tag: "Choosing a path", minutes: 4,
    title: "Data Analyst or Data Scientist: which should a fresher pick?",
    dek: "They sound similar. The day-to-day work — and the way in — is very different.",
    tldr: ["Analysts answer \"what happened and why\" with SQL, Excel and dashboards.", "Data scientists build models that predict, which usually needs more maths and experience.", "For most freshers, analyst is the faster, more realistic first job — and a strong step towards data science later."],
    body: [
      { t: "h", text: "What each role actually does" },
      { t: "p", text: "A data analyst takes business questions — why did sales drop, which product sells best in Noida — and answers them with SQL, Excel and a dashboard. A data scientist builds models that predict what will happen next, like which customers are about to leave." },
      { t: "h", text: "Why analyst is usually the better first job" },
      { t: "list", items: ["More entry-level openings, across almost every industry.", "The core tools (Excel, SQL, Power BI) can be learned in months, not years.", "You don't need advanced maths to be useful from day one.", "It's open to commerce and arts graduates, not just engineers."] },
      { t: "tip", text: "Many data scientists started as analysts. Learning SQL and business thinking first isn't a detour — it's the foundation." },
      { t: "h", text: "When data science makes sense" },
      { t: "p", text: "If you genuinely enjoy statistics and maths, already know Python well, or are aiming for a master's degree, data science is worth working towards. Even then, analyst work gives you real data to practise on." },
      { t: "h", text: "How to decide this week" },
      { t: "p", text: "Download any public sales dataset and try to answer one question in Excel. If you enjoyed digging for the answer, analyst is a great fit. If you kept thinking \"could I predict this?\", note that — it's the data science itch." },
    ],
    next: { label: "See the AI-Powered Data Analyst program", href: "/courses/ai-powered-data-analyst" },
  },
  {
    slug: "how-much-dsa-for-first-job", tag: "Interviews", minutes: 4,
    title: "How much DSA do you actually need for your first job?",
    dek: "Less than YouTube makes you think — and more than zero.",
    tldr: ["Most first-job interviews test fundamentals, not hard competitive-programming problems.", "Arrays, strings, hash maps, sorting and basic recursion cover a lot of fresher rounds.", "Projects you can explain often matter as much as solved problems."],
    body: [
      { t: "h", text: "Why DSA feels scarier than it is" },
      { t: "p", text: "Social media is full of people preparing for a handful of top product companies, where interviews really are tough. Most fresher roles — at service companies, startups and GCCs — focus on whether you can think clearly through a problem." },
      { t: "h", text: "The essentials to be comfortable with" },
      { t: "list", items: ["Arrays and strings: reversing, searching, counting.", "Hash maps: counting things, finding duplicates.", "Sorting and binary search.", "Basic recursion.", "Big-O: explaining why one solution is faster than another."] },
      { t: "tip", text: "Two problems a day for six to eight weeks, explained out loud, beats 300 problems copied from solutions." },
      { t: "h", text: "What else gets you hired" },
      { t: "p", text: "Interviewers often ask about your projects: what you built, why you chose that design, what broke. A project you truly understand is worth practising as seriously as DSA." },
      { t: "h", text: "If you're aiming for top product companies" },
      { t: "p", text: "Then yes, go deeper: trees, graphs and dynamic programming. But get your fundamentals and one strong project in place first." },
    ],
    next: { label: "Try the 30-Day Coding Challenge", href: "/internship/30-days-coding-challenge" },
  },
  {
    slug: "mern-or-java-full-stack", tag: "Choosing a path", minutes: 4,
    title: "MERN or Java full stack: which fits you?",
    dek: "Both build complete web apps. They lead to different kinds of companies.",
    tldr: ["MERN (JavaScript everywhere) is popular with startups and product teams.", "Java with Spring Boot dominates banks, GCCs and large IT companies.", "Pick the kind of company you want to work in — then pick the stack."],
    body: [
      { t: "h", text: "The short version" },
      { t: "p", text: "MERN uses JavaScript for both the screen and the server, so you learn one language and build fast. Java full stack uses Java and Spring Boot on the server and usually React on the screen; it's the backbone of a lot of enterprise software." },
      { t: "h", text: "Choose MERN if…" },
      { t: "list", items: ["You want to work at startups or build your own product.", "You like seeing results quickly in the browser.", "You might also want to build mobile apps with React Native later."] },
      { t: "h", text: "Choose Java full stack if…" },
      { t: "list", items: ["You're aiming for banks, GCCs or large IT companies.", "You like structure and strong typing.", "Your college already taught you some Java."] },
      { t: "tip", text: "The skill that transfers is how the web works: APIs, databases, authentication. Learn one stack properly and switching later is far easier than you think." },
      { t: "h", text: "Still stuck?" },
      { t: "p", text: "Look at ten fresher job posts in the city you want to work in. Count which stack appears more. That's your tie-breaker." },
    ],
    next: { label: "Compare both programs", href: "/courses" },
  },
  {
    slug: "first-resume-zero-experience", tag: "Getting hired", minutes: 5,
    title: "Your first resume with zero experience",
    dek: "No internship yet? Your resume can still say \"I can do this job\".",
    tldr: ["Lead with projects and skills, not your school marks.", "Every line should show something you did and what came of it.", "One page, plain layout, a GitHub link — and no invented experience."],
    body: [
      { t: "h", text: "The order that works for freshers" },
      { t: "list", items: ["Name, phone, email, LinkedIn, GitHub.", "Two-line summary: the role you want and what you can already do.", "Skills, grouped (languages, tools, databases).", "Projects — your strongest section.", "Education.", "Certificates and achievements, if relevant."] },
      { t: "h", text: "How to write a project line" },
      { t: "p", text: "Weak: \"Made a chat app.\" Stronger: \"Built a real-time chat app with React and Node.js, with login and message history; deployed on Vercel.\" Say what you built, with what, and that it actually works." },
      { t: "tip", text: "Use AI to tighten your wording — but only with facts you give it. Never let it invent results or experience you don't have." },
      { t: "h", text: "Common mistakes" },
      { t: "list", items: ["Two-column templates and skill bars that applicant-tracking systems can't read.", "Listing every technology you've heard of.", "\"Hardworking team player\" with nothing to prove it.", "A GitHub link to empty or copied repositories."] },
      { t: "h", text: "Before you send it" },
      { t: "p", text: "Read it aloud, check every link works, export as PDF, and name the file properly: Firstname-Lastname-Resume.pdf." },
    ],
    next: { label: "Join the free 'Crack Your First Tech Job' workshop", href: "/workshops" },
  },
  {
    slug: "projects-recruiters-open", tag: "Getting hired", minutes: 4,
    title: "How to build projects recruiters actually open",
    dek: "Another to-do app won't stand out. A useful, finished, explained project will.",
    tldr: ["Solve a real, specific problem — ideally someone else's.", "Finish it, deploy it, and write a clear README.", "Two strong projects beat ten half-done ones."],
    body: [
      { t: "h", text: "Pick a real problem" },
      { t: "p", text: "Think of a small business, a college club or a family member with an annoying task. A booking page for a local tutor or a dashboard for a shop's sales says far more than a clone of a famous app." },
      { t: "h", text: "What makes a project feel professional" },
      { t: "list", items: ["It's live — a link anyone can open.", "A README with screenshots, what it does, how to run it.", "Login, error handling and a clean UI on mobile.", "Sensible commits, not one giant upload."] },
      { t: "tip", text: "Add one AI feature that genuinely helps — search, summaries, suggestions. It shows you can work with modern tools, as long as you can explain how it works." },
      { t: "h", text: "Be ready to explain it" },
      { t: "p", text: "In interviews you'll be asked why you chose your stack, what was hardest, and what you'd improve. Write those answers down while you build." },
    ],
    next: { label: "See what you'd build in each career program", href: "/courses" },
  },
  {
    slug: "learn-coding-with-ai", tag: "Learning", minutes: 4,
    title: "Learn to code with AI — without letting it think for you",
    dek: "AI can make you a faster learner or a weaker one. Here's how to get the first.",
    tldr: ["Ask AI to explain and question you, not to hand you finished code.", "Always try first, then compare with what AI suggests.", "Read every line AI writes before you run it."],
    body: [
      { t: "h", text: "The trap" },
      { t: "p", text: "Copying AI answers feels productive, but in an interview or a real job you need to solve problems yourself. If AI wrote everything, you'll freeze the moment it isn't there." },
      { t: "h", text: "Habits that help you learn" },
      { t: "list", items: ["Try for 20 minutes before asking.", "Ask \"why does this error happen?\" instead of \"fix this\".", "Ask for hints, one at a time.", "Ask it to quiz you on what you just learned.", "Rewrite AI's code in your own words and style."] },
      { t: "tip", text: "Good prompt: \"Here's my code and the error. Explain the cause and give me a hint — don't rewrite it.\"" },
      { t: "h", text: "Where AI is genuinely great" },
      { t: "p", text: "Explaining a concept a different way, generating practice questions, reviewing your code for mistakes, and speeding up boring boilerplate once you already understand it. Teams expect you to use AI this way — as a sharp assistant, not a replacement for thinking." },
    ],
    next: { label: "See the Coding with AI short course", href: "/courses/ai-assisted-coding" },
  },
  {
    slug: "non-cs-into-it", tag: "Career switch", minutes: 5,
    title: "Non-CS background? Your realistic path into IT",
    dek: "B.Com, BA, B.Sc or anything else — a tech career is possible. Here's how to start smart.",
    tldr: ["Pick roles where your background helps: data, digital marketing, business-facing tech.", "Start with one short course to test your interest before committing.", "Projects and skills matter more than your degree for many fresher roles."],
    body: [
      { t: "h", text: "Roles that welcome non-CS graduates" },
      { t: "list", items: ["Data analyst — commerce and economics graduates often have an edge.", "Digital marketing — creativity plus analytics.", "AI automation — building workflows for businesses with low-code tools.", "Software development — very possible, but it takes the most consistent practice."] },
      { t: "h", text: "Test before you commit" },
      { t: "p", text: "Take a free workshop or a 4-week short course first. If you enjoy it and keep practising on your own, that's a much better signal than any aptitude quiz." },
      { t: "tip", text: "Your old field is an asset. A commerce graduate who can build a finance dashboard is more interesting to an employer than someone with just the tools." },
      { t: "h", text: "What to expect honestly" },
      { t: "p", text: "It takes months of steady work, not weeks. Plan for regular study time, build two or three real projects, and expect your first role to be junior. Many people make this switch successfully every year." },
    ],
    next: { label: "Find a beginner-friendly course", href: "/courses?for=switching" },
  },
  {
    slug: "internship-vs-certificate", tag: "Getting hired", minutes: 3,
    title: "Internship or certificate: what actually gets you shortlisted?",
    dek: "Certificates show you learned something. Real work shows you can do it.",
    tldr: ["Certificates help you get noticed; experience helps you get picked.", "An internship or real project gives you something specific to talk about in interviews.", "The best combination is a short course plus a real project or internship."],
    body: [
      { t: "h", text: "What a certificate does" },
      { t: "p", text: "It tells a recruiter you've covered a topic. That helps — especially when filters scan for keywords — but on its own it rarely makes you stand out, because many applicants have the same certificates." },
      { t: "h", text: "What an internship or real project adds" },
      { t: "list", items: ["Proof you can work on something real, with deadlines and feedback.", "Specific stories for interviews: a bug you fixed, a decision you made.", "Often, a reference who can vouch for you."] },
      { t: "tip", text: "On your resume, put the internship or project above the certificates. Lead with what you did." },
      { t: "h", text: "If you can only do one right now" },
      { t: "p", text: "Pick the option where you build and ship something under a mentor's review. That experience makes every certificate you earn later worth more." },
    ],
    next: { label: "Explore internships (4, 6 or 8 weeks)", href: "/internship" },
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
