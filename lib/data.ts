import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import hlresImg from "@/public/hlres.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "USA, Remote",
    description:
      "Working as a Senior Frontend Engineer. Helping organisation to deliver state of the art feature for real estate domain. Technologies Vue, Django, AWS.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Lahore, PK",
    description:
      "I worked across multiple projects with an agile team as a full-stack javascript developer. I joined Invozone in the capacity of Frontend Engineer and now become a Full Stack Developer.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Lahore, PK",
    description:
      "I worked as a Software Engineer in Programmers Force. It has headquartered in the United Kingdom. It specialise in Application Programming Interface (API) Development and Integration, Fintech Solutions, Enterprise Applications, Mobile App Development, and Big Data Processing to facilitate several corporate clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Graduated bootcamp",
    location: "Lahore, PK",
    description:
      "I have a bachelor's degree in computer science. Major subjects of degree are OOP, Data Structure And Algorithms, Web Development, Compiler Construction, Operation System, Computer Networking, Data Science, Machine Learning, and Theory of Automata.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },

  

] as const;

export const projectsData = [
  {
    title: "Highline Residential",
    description:
      "Working as a Senior Frontend Engineer. Helping organizations to deliver state-of-the-art features for the real estate domain. Technologies Vue, Django, AWS, Webpack.",
    tags: ["Vue", "Django", "Ag-Grid", "Webpack"],
    imageUrl: hlresImg,
    projectUrl: 'https://www.hlres.com/'
  },
  {
    title: "Invohub",
    description:
      "Invohub is developed for managing resources data. Such as managing resources salaries, theirs increment record, performance in different projects, attendance, remaining annual, casual, sick leaves.",
    tags: ["React", "Node", "Postgress", "Next", "Redux"],
    imageUrl: rmtdevImg,
    projectUrl: 'https://hub.invozone.com/'
  },
  {
    title: "WhistleIt",
    description:
      "I worked as a Frontend developer on this startup project for 2 years. Users can communicate just like slack.",
    tags: ["Vue", "Veutify", "MongoDB", "Bootsrap", "Node", "Docker"],
    imageUrl: corpcommentImg,
    projectUrl: 'https://app.whistleit.io/'
  },
  {
    title: "Gigimot",
    description:
      "Gigimot is online video meeting app, which gives users flexibility to arrange one to one or group recurring virtual meetings. This product is used by health and wellness coaches, teachers.",
    tags: ["Vue", "Node", "Postgres",],
    imageUrl: wordanalyticsImg,
    projectUrl: 'https://gigimot.com/'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Vue",
  "Angular",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "AWS",
  "Express",
  "PostgreSQL",
  "CI/CD Jenkins",
  "Docker",
  "Kubernetes",
] as const;
