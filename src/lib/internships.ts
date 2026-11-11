/* Internships (v4.1) — one source for the homepage cards, the /internship hub and the two program pages.
   The 4/6/8-week internships are the main offer; the 30-Day Coding Challenge and Summer/Winter Training
   are two specialised ways in. Fees are shared on WhatsApp, never stored here. */

export type Internship = { weeks: string; title: string; desc: string; icon: string; hot?: boolean; gets: string[] };

export const INTERNSHIPS: Internship[] = [
  { weeks: "4 weeks", title: "Starter Internship", icon: "🌱",
    desc: "One real project, mentor reviews and a certificate — perfect for a semester requirement.",
    gets: ["1 real project", "Weekly mentor review", "Certificate"] },
  { weeks: "6 weeks", title: "Project Internship", icon: "🚀", hot: true,
    desc: "Build and deploy a portfolio project with a small team, Git workflow and weekly reviews.",
    gets: ["Team project, deployed", "Git + code reviews", "Certificate"] },
  { weeks: "8 weeks", title: "Industry Internship", icon: "🏆",
    desc: "A capstone-grade project, a final presentation and a letter of recommendation.",
    gets: ["Capstone project", "Final presentation", "Letter of recommendation"] },
];

export type Program = {
  slug: string; title: string; accent: string; eyebrow: string; line: string; description: string;
  wa: string; meta: string;
  facts: [string, string][];
  gets: { icon: string; title: string; desc: string }[];
  timeline: { phase: string; title: string; description: string }[];
  who: { icon: string; title: string; desc: string }[];
  tracks?: string[];
  faqs: { q: string; a: string }[];
};

const wa = (t: string) => `https://wa.me/919936609430?text=${encodeURIComponent(t)}`;

export const PROGRAMS: Program[] = [
  {
    slug: "30-days-coding-challenge", title: "30-Day Coding Challenge", accent: "Challenge", eyebrow: "30 days · starts any Monday",
    line: "30 days. One language. Interview-ready.",
    description: "Pick Java or Python and solve a hand-picked problem set every day with a live mentor — built to get you through coding rounds.",
    wa: wa("Hi! Please share the fee and next start date for the 30-Day Coding Challenge."),
    meta: "Master Java or Python in 30 days with a daily, mentor-reviewed problem set and mock coding rounds.",
    facts: [["Duration", "30 days"], ["Language", "Java or Python"], ["Batch size", "Max 5 learners"], ["Mode", "Live online / Noida"], ["Starts", "Every Monday"], ["You get", "Certificate + GitHub portfolio"]],
    gets: [
      { icon: "🎯", title: "A plan for every day", desc: "Each week ends in a clear milestone, not a random list of topics." },
      { icon: "👨‍💻", title: "Daily doubt sessions", desc: "Your mentor reviews your code and unblocks you the same day." },
      { icon: "📈", title: "300+ hand-picked problems", desc: "The patterns that actually show up in fresher coding rounds." },
      { icon: "🏆", title: "Certificate + portfolio", desc: "Every solution goes into a GitHub repo recruiters can open." },
    ],
    timeline: [
      { phase: "WEEK 1", title: "Foundations", description: "Variables, conditions, loops, functions and input/output — until they feel automatic." },
      { phase: "WEEK 2", title: "Core concepts", description: "Arrays, strings, OOP, exceptions and the standard library." },
      { phase: "WEEK 3", title: "Data structures", description: "Lists, stacks, queues, linked lists, sorting, searching and Big-O." },
      { phase: "WEEK 4", title: "Interview mode", description: "Timed coding rounds, common patterns, mock interviews, resume and GitHub polish." },
    ],
    who: [
      { icon: "🎓", title: "Final-year students", desc: "Coding rounds coming up for campus placements." },
      { icon: "💼", title: "Fresh graduates", desc: "Strengthen the basics before applying." },
      { icon: "🔄", title: "Career switchers", desc: "Moving into tech from a non-coding background." },
      { icon: "🚀", title: "Ambitious beginners", desc: "Ready to commit 30 days to one real skill." },
    ],
    faqs: [
      { q: "Do I need prior coding experience?", a: "No. Week 1 starts from the fundamentals, and your mentor adjusts the problem set to your level." },
      { q: "Java or Python — which should I choose?", a: "Java suits enterprise and Android roles; Python suits data, AI and automation. Not sure? Ask in your free counseling call." },
      { q: "Are the classes live or recorded?", a: "Live and interactive. Recordings are shared for revision if you miss a session." },
      { q: "What happens after 30 days?", a: "You get a certificate and a GitHub portfolio of solved problems. Many learners then move into a career program — and pay only the difference." },
    ],
  },
  {
    slug: "summer-winter-training", title: "Summer & Winter Training", accent: "Training", eyebrow: "4–8 weeks · college break",
    line: "Turn your college break into a head start.",
    description: "A mentor-led internship during your summer or winter break: a real project in your chosen track, weekly reviews and a certificate.",
    wa: wa("Hi! Please share the fee and next batch for the Summer/Winter Training internship."),
    meta: "4–8 week summer and winter training internships in 14 tech tracks with live projects, 1:1 mentorship and a certificate.",
    facts: [["Duration", "4–8 weeks"], ["Tracks", "14 to choose from"], ["Batch size", "Max 5 learners"], ["Mode", "Online + Noida classroom"], ["Mentorship", "1:1, same mentor"], ["You get", "Certificate + project"]],
    gets: [
      { icon: "🏗️", title: "A real project", desc: "Not a dummy assignment — something you can demo and deploy." },
      { icon: "👨‍🏫", title: "The same mentor throughout", desc: "One person who knows your project and reviews your code." },
      { icon: "📝", title: "Resume + LinkedIn polish", desc: "Your internship written up the way recruiters read it." },
      { icon: "🎤", title: "Mock interviews", desc: "Technical and HR rounds before campus placements start." },
    ],
    timeline: [
      { phase: "WEEKS 1–2", title: "Foundations & setup", description: "Your track's core concepts, tools set up, guided exercises." },
      { phase: "WEEKS 3–4", title: "Core skills + mini-projects", description: "Deeper into your track with code reviews and practical tasks." },
      { phase: "WEEKS 5–6", title: "Industry tools + live project", description: "Team workflow, Git, and steady progress on your main project." },
      { phase: "WEEKS 7–8", title: "Capstone + placement prep", description: "Finish and present the project, polish your resume, mock interviews." },
    ],
    who: [
      { icon: "🎓", title: "2nd and 3rd-year students", desc: "Use the break to get ahead of your batch." },
      { icon: "📋", title: "Need it for college credit", desc: "Certificate and project report for your semester requirement." },
      { icon: "💼", title: "Pre-placement students", desc: "Walk into campus season with a real project." },
      { icon: "🌱", title: "Curious beginners", desc: "Try a track before committing to a full program." },
    ],
    tracks: ["Python", "Java", "Data Analytics with AI", "Data Engineering", "Artificial Intelligence", "Machine Learning", "Full Stack Development", "Web Development", "Cyber Security", "SQL & Databases", "Power BI & Tableau", "AWS Cloud", "Microsoft Azure", "Generative AI & Prompting"],
    faqs: [
      { q: "When do batches start?", a: "Summer batches run May–July and winter batches December–January, with a few start dates in each. Message us for the next one." },
      { q: "Is it online or offline?", a: "Both — join live online or at our Noida classroom." },
      { q: "Will I get a certificate for college?", a: "Yes, along with a project report you can submit for credit." },
      { q: "Can I continue after the break?", a: "Yes. Move into the matching career program later and pay only the difference." },
    ],
  },
];

export const getProgram = (slug: string) => PROGRAMS.find((p) => p.slug === slug)!;
