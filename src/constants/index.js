import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  c,
  cplusplus,
  firebase,
  vite,
  aws,
  mysql,
  postman,
  python,
  swift,
  unity,
  church,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];


const experiences = [
  {
    title: "Church Notary Administration",
    tech: "React, Node.js, Express.js, MySQL, Amazon RDS",
    company: "Parroquia San Judas Tadeo",
    icon: church,
    iconBg: "#E6DEDD",
    // iconBg: "#383E56",
    date: "March 2023 - July 2023",
    points: [
      "Developed a web application for managing and tracking events within a church.",
      "The platform encompasses features such as event registration, payment tracking, an interactive calendar, and more.",
      "Built using React, Node.js (Express.js), MySQL, and deployed on Vercel.",
    ],
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
      },
      {
        name: "mongodb",
      },
      {
        name: "tailwind",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, projects };