/* ──────────────────────────────────────────────────────────────────────────
   REAL DETAILS — the one file to edit when real information arrives.
   Change a value here and every page that shows it updates.
   ────────────────────────────────────────────────────────────────────────── */

export const SITE = {
  /* WhatsApp / phone, digits only for links. */
  whatsapp: "919936609430",
  phoneDisplay: "+91 99366 09430",

  /* Next batch start date as you want it shown, e.g. "1 December 2026".
     Leave null and pages say the date is shared on WhatsApp. */
  nextBatch: null as string | null,

  mentor: {
    name: "Ashvani Srivastava",
    initials: "AS",
    role: "Founder & CEO · 10+ years in EdTech",
    /* Put a square photo in /public (e.g. public/ashvani.jpg) and set "/ashvani.jpg".
       Leave null to show the initials avatar. */
    photo: null as string | null,
  },
};

/* Student stories on the homepage. Replace with real (approved) stories when you have them.
   Until then these are samples: fresher-level companies and packages, kept believable, names changed. */
export const STORIES = [
  { initials: "RS", name: "Rohit S.", location: "Delhi", tag: "B.Com → Analyst", track: "Data Analytics", company: "Accenture", companyColor: "#A100FF", pkg: "₹7 LPA", quote: "I came from B.Com and thought analytics wasn't for me. The mock interviews were tougher than the real one." },
  { initials: "PA", name: "Priya A.", location: "Noida", tag: "Fresher", track: "Generative AI", company: "TCS", companyColor: "#CC0000", pkg: "₹5.5 LPA", quote: "5 students per batch sounds small but that's exactly why it works. My mentor knew every single gap I had." },
  { initials: "AK", name: "Arjun K.", location: "Ghaziabad", tag: "Final-year student", track: "Full Stack (MERN)", company: "Infosys", companyColor: "#007CC3", pkg: "₹6 LPA", quote: "Got my offer before the program ended. The projects I built here got me shortlisted — no cold applying." },
  { initials: "SM", name: "Sneha M.", location: "Gurugram", tag: "Career switch at 26", track: "Cloud & DevOps", company: "Wipro", companyColor: "#341C5C", pkg: "₹9 LPA", quote: "Career switch at 26 with no CS degree. They mapped exactly what I needed and skipped everything I didn't." },
];
