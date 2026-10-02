export type Resource = { slug: string; title: string; line: string; blurb: string; wa: string };

export const RESOURCES: Resource[] = [
  { slug: "blogs", title: "Blogs", line: "Straight talk on getting hired.", blurb: "Short, honest reads on interviews, resumes, projects and what recruiters actually look for. Written by working mentors, not content farms.", wa: "Notify me when the Step2ITCareer blog goes live" },
  { slug: "career", title: "Career", line: "Roles, roadmaps and real salaries.", blurb: "Role-by-role roadmaps for freshers: what to learn, in what order, and what each path pays in the first three years.", wa: "I want the career roadmaps from Step2ITCareer" },
  { slug: "pay-after-placement", title: "Pay After Placement", line: "Learn first. Pay when you are hired.", blurb: "We are designing a placement-linked fee plan for selected students. Message Ashvani to check if you qualify when it opens.", wa: "Tell me about Pay After Placement at Step2ITCareer" },
  { slug: "tutorials", title: "Tutorials", line: "Free mini-lessons from our classroom.", blurb: "Bite-sized tutorials taken straight from live batches: Java, Python, SQL, web and more. Free to watch.", wa: "Notify me when Step2ITCareer tutorials launch" },
  { slug: "tech-trends", title: "Tech Trends", line: "What is hot, and what is hype.", blurb: "A monthly, no-fluff read on AI, cloud and hiring trends, and what they mean for your first job.", wa: "Send me Step2ITCareer tech trend updates" },
  { slug: "success-stories", title: "Success Stories", line: "Real students. Real offers.", blurb: "Full stories from learners who went from campus to offer letter: their struggles, their projects, their interviews.", wa: "I want to read Step2ITCareer success stories" },
];

export const resourceHref = (name: string) => {
  const r = RESOURCES.find((x) => x.title === name);
  return r ? `/resources/${r.slug}` : "/about";
};
