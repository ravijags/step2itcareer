/* Project gallery for career programs (v4.3). For each project in courses.ts (same order):
   an icon, and one line on what it proves to a recruiter. Hiring is moving to proof of work,
   so this explains why each project matters, not just what it is. */

export type Showcase = { icon: string; proves: string };

export const SHOWCASE: Record<string, Showcase[]> = {
  "ai-engineer-agents-automation": [
    { icon: "🤖", proves: "You can build an agent that knows when to hand over to a human." },
    { icon: "⚡", proves: "You can automate a real business workflow end to end." },
    { icon: "🧠", proves: "You can make several agents plan, research and check each other's work." },
    { icon: "🚀", proves: "You can ship a working AI product, not just a demo." },
  ],
  "ai-powered-data-analyst": [
    { icon: "📊", proves: "You can turn raw numbers into a dashboard a manager actually uses." },
    { icon: "🔍", proves: "You can find why customers leave using SQL and Python." },
    { icon: "📝", proves: "You can go from messy data to a clear recommendation." },
  ],
  "mern-full-stack-ai": [
    { icon: "🎨", proves: "You can design and ship a clean, responsive site." },
    { icon: "💬", proves: "You can handle real-time data between users." },
    { icon: "🔐", proves: "You can build login, roles and dashboards safely." },
    { icon: "🚀", proves: "You can deploy a complete app with an AI feature." },
  ],
  "java-full-stack-ai": [
    { icon: "🗄️", proves: "You can model data and build a Spring Boot backend on SQL." },
    { icon: "🔌", proves: "You can design secure REST APIs with login." },
    { icon: "⚛️", proves: "You can connect a React frontend to your own backend." },
    { icon: "🚀", proves: "You can deploy a full-stack app with an AI feature." },
  ],
  "mobile-app-developer-ai": [
    { icon: "📱", proves: "You can build a clean, useful app from scratch." },
    { icon: "🔥", proves: "You can add login and a live database to an app." },
    { icon: "🤖", proves: "You can put AI inside a mobile app." },
    { icon: "🚀", proves: "You can publish to the Play Store — a real, downloadable app." },
  ],
  "cybersecurity-ai-security": [
    { icon: "🌐", proves: "You can map a network and report its weak spots clearly." },
    { icon: "🛡️", proves: "You can find web vulnerabilities safely, in a lab." },
    { icon: "👁️", proves: "You can investigate an alert like a SOC analyst." },
    { icon: "🔒", proves: "You can audit a real app, including its AI features." },
  ],
  "digital-marketing-ai": [
    { icon: "🔍", proves: "You can find why a website isn't ranking — and fix it." },
    { icon: "📅", proves: "You can plan a month of content with AI, fast." },
    { icon: "💰", proves: "You can plan ad spend against a real budget." },
    { icon: "📈", proves: "You can run a campaign and report what worked." },
  ],
};
