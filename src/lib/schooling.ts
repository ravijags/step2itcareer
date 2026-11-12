/* Schooling (Class 6–12) — one source for the hub and the three class pages (v4.3).
   Written for parents first: plain, warm, no jargon. Fees are shared on WhatsApp. */

export type School = {
  slug: string; band: string; classes: string; accent: string; color: string;
  eyebrow: string; title: string; titleAccent: string; line: string; description: string;
  card: string; highlights: string[];
  why: { title: string; body: string };
  gets: { icon: string; title: string; desc: string }[];
  learn: string[];
  skills: string[];
  facts: [string, string][];
  faqs: { q: string; a: string }[];
  meta: string;
};

const wa = (band: string) => `https://wa.me/919936609430?text=${encodeURIComponent(`Hi! Please share the fee and next batch for the ${band} coding program.`)}`;
export const schoolWa = wa;

export const SCHOOLS: School[] = [
  {
    slug: "class-6-8", band: "Class 6–8", classes: "6th, 7th & 8th", accent: "Beginner friendly", color: "#3B5BFF",
    eyebrow: "Class 6, 7 & 8 · Beginner friendly",
    title: "Coding that feels", titleAccent: "like play.",
    line: "Games, animations and first Python — in a batch of 5.",
    description: "Your child builds their own games and animations while learning to think step by step. No prior experience needed; we start from the very basics.",
    card: "Block-based coding and first Python through games, animations and creative projects kids actually enjoy.",
    highlights: ["Block-based coding", "First Python", "Games & animations", "Weekly parent updates"],
    why: { title: "Why start in Class 6–8?", body: "Ages 11–14 are a great time to build step-by-step thinking. We start with block-based coding so logic comes before syntax, then move into simple Python once your child is confident." },
    gets: [
      { icon: "🎮", title: "Games & animations", desc: "Kids build things they want to show their friends — so they keep coming back." },
      { icon: "🧩", title: "Blocks before code", desc: "Logic first with block coding, then the jump to real Python." },
      { icon: "🌱", title: "Zero prerequisites", desc: "No prior computer experience needed. We start from the basics." },
      { icon: "👨‍👩‍👧", title: "Weekly parent updates", desc: "A short note every week on what your child built and learned." },
    ],
    learn: ["Computer basics", "Coding logic", "Flowcharts", "Block-based coding", "First steps in Python", "Games & animations", "AI awareness", "Mini projects", "Internet safety", "Creative problem solving"],
    skills: ["Logical thinking", "Creativity", "Problem solving", "Digital confidence"],
    facts: [["Classes", "6th, 7th & 8th"], ["Batch size", "Max 5 students"], ["Mode", "Live, interactive"], ["Schedule", "Weekends"], ["Parent updates", "Weekly"], ["You get", "Certificate"]],
    faqs: [
      { q: "My child has never coded. Is that okay?", a: "Yes. This program starts from the basics, and the small batch means the mentor can go at your child's pace." },
      { q: "Is this screen time well spent?", a: "Every class is hands-on: your child makes something in each session, rather than watching videos." },
      { q: "How will I know it's working?", a: "You get a short weekly update, and your child finishes with projects they can show you." },
    ],
    meta: "Coding for Class 6, 7 & 8: games, animations and first Python in a live batch of 5, with weekly parent updates.",
  },
  {
    slug: "class-8-10", band: "Class 8–10", classes: "8th, 9th & 10th", accent: "Real code", color: "#7B5BFF",
    eyebrow: "Class 8, 9 & 10 · Real code",
    title: "From playing with tech", titleAccent: "to building it.",
    line: "Real Python, problem solving and debugging — 1:1 attention in a batch of 5.",
    description: "Students write real Python, solve problems, find their own bugs and finish mini projects. We check their level first, so they start at the right point.",
    card: "Real Python, problem solving, debugging and OOP basics, starting at your child's actual level.",
    highlights: ["Level check first", "Real Python", "Debugging skills", "Mini projects"],
    why: { title: "Why Class 8–10 is the right time", body: "Students who learn to code now reach college already knowing how software works — and with projects to show. Because we check each child's level first, beginners and kids who've tried Scratch both start in the right place." },
    gets: [
      { icon: "🧪", title: "Level check first", desc: "A short assessment, then a starting point that makes sense for your child." },
      { icon: "📝", title: "Handwritten practice", desc: "Writing code on paper builds the habit school exams and interviews test." },
      { icon: "🔍", title: "Debugging skills", desc: "Finding and fixing their own bugs — the skill real developers use most." },
      { icon: "🚀", title: "AI and modern tools", desc: "A safe look at AI and automation, so they see where tech is heading." },
    ],
    learn: ["Programming basics", "Variables & data types", "Conditions & loops", "Functions", "Strings & lists", "Problem solving", "Basic data structures", "Debugging", "OOP basics", "Coding challenges", "Mini projects", "Introduction to AI"],
    skills: ["Logic", "Coding", "Debugging", "Confidence"],
    facts: [["Classes", "8th, 9th & 10th"], ["Batch size", "Max 5 students"], ["Mentorship", "1:1 attention, online"], ["Entry", "Based on a level check"], ["Parent updates", "Weekly"], ["You get", "Certificate"]],
    faqs: [
      { q: "Will this clash with board exam prep?", a: "Classes run on weekends and the pace adjusts around exams. Tell the mentor your exam dates." },
      { q: "My child already knows a little Scratch. Will they be bored?", a: "No — the level check places them correctly, and the small batch lets the mentor stretch faster learners." },
      { q: "Does it help with Computer Science in school?", a: "The Python, logic and handwritten practice line up well with school CS, but this isn't exam coaching." },
    ],
    meta: "Coding for Class 8, 9 & 10: real Python, problem solving and debugging in a live batch of 5, starting at your child's level.",
  },
  {
    slug: "class-10-12", band: "Class 10–12", classes: "10th, 11th & 12th", accent: "College-ready", color: "#FF7A3D",
    eyebrow: "Class 10, 11 & 12 · College-ready",
    title: "Arrive at college", titleAccent: "ready to build.",
    line: "Python, Java, SQL, Git and AI tools — with a GitHub portfolio before college starts.",
    description: "Pre-college students learn the tools developers actually use and ship real projects to GitHub, so they start college with a portfolio, not just marks.",
    card: "Python, Java, SQL, Git and AI tools, with real projects and a GitHub portfolio before college.",
    highlights: ["Python & Java", "GitHub portfolio", "AI tools", "Resume & interview basics"],
    why: { title: "The college-ready tech stack", body: "Most students reach college without writing a real program. Ours arrive knowing Python, Java, Git, SQL and how to use AI tools well — with a GitHub portfolio to prove it." },
    gets: [
      { icon: "💻", title: "A GitHub portfolio", desc: "Every project is pushed to GitHub — a portfolio before day one of college." },
      { icon: "🤖", title: "AI tools, used well", desc: "ChatGPT, Claude and Copilot for learning and building — without letting them do the thinking." },
      { icon: "💼", title: "Career basics", desc: "Resume, LinkedIn and interview basics, so internships come sooner." },
      { icon: "🌐", title: "Real developer tools", desc: "Python, Java, SQL, HTML/CSS/JS and Git — what employers actually use." },
    ],
    learn: ["Python & Java", "SQL & databases", "Git & GitHub", "HTML, CSS & JavaScript", "DSA basics", "AI fundamentals", "Prompting & AI tools", "APIs", "App development", "Deploying a project"],
    skills: ["Problem solving", "Version control", "AI productivity", "Building projects"],
    facts: [["Classes", "10th, 11th & 12th"], ["Batch size", "Max 5 students"], ["Mentorship", "1:1 attention, online"], ["Portfolio", "GitHub profile built"], ["AI tools", "Included"], ["You get", "Certificate"]],
    faqs: [
      { q: "Is this useful if my child isn't taking Computer Science?", a: "Yes. Many students take it to explore tech before choosing a college course." },
      { q: "Can they continue after Class 12?", a: "Yes — they can move into any of our short courses or career programs and pay only the difference." },
      { q: "When do classes run?", a: "Weekends, with the pace adjusted around board exams." },
    ],
    meta: "Coding for Class 10, 11 & 12: Python, Java, SQL, Git and AI tools with real projects and a GitHub portfolio before college.",
  },
];

export const getSchool = (slug: string) => SCHOOLS.find((s) => s.slug === slug)!;
