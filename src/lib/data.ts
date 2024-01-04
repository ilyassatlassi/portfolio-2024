
import blog from "../../public/images/blogApp.png"
import rmtdevImg from "../../public/images/rmtdev.png";
import wordanalyticsImg from "../../public/images/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#hero",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I created a blog app using Next.js. I used Prisma as an ORM to interact with a PostgreSQL database. I also incorporated Tanstack's React Query for performing CRUD operations, along with React Hook Form to create user-friendly post forms.",
    tags: ["React", "Next.js", "React Query", "react-forms", "Tailwind", "Prisma"],
    source: "https://github.com/ilyassatlassi/Word-Analytics",
    demo: "https://github.com/ilyassatlassi/Blog_app",
    imageUrl: blog,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    source: "https://github.com/ilyassatlassi/Word-Analytics",
    demo: undefined,
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    source: "https://github.com/ilyassatlassi/Word-Analytics",
    demo: undefined,
    imageUrl: wordanalyticsImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "PostgreSQL",
  "react-forms",
  "Framer Motion",
] as const;
