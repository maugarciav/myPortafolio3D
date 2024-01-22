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
  threejs,
  github,
  // Experience
  church,
  // Projects
  teslaclone,
  developer,
  teaWebPage,
  travelWebPage,
  linkedIn,
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
    name: "Tesla Page Clone",
    description:
      "Developed a responsive website replica of Tesla's official webpage using React and Tailwind CSS. This project aimed to recreate the sleek and modern design of the Tesla site while ensuring a seamless user experience across various devices",
    tags: [
      {
        name: "React",
      },
      {
        name: "Tailwind",
      },
    ],
    image: teslaclone,
    source_code_link: "https://github.com/maugarciav/tesla-clone",
  },


  {
    name: "App Roberto Ruiz Obregón",
    description:
      "Developed an iOS application for information management, implemented MVVM architecture with Clean Architecture principles.",
    tags: [
      {
        name: "React",
      },
      {
        name: "Swift",
      },
      {
        name: "Express.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: developer,
  },

  {
    name: "Tea Web Page",
    description:
      "Web page that simulates a tea shop, written in HTML, CSS an little use of JavaScript. The main objective was to build a project using CSS Flexbox and CSS Grid",
    tags: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
    ],
    image: teaWebPage,
    source_code_link: "https://github.com/maugarciav/Final-Proyect-Web-Page?tab=readme-ov-file",
    hosted_link: "https://teaproyect.netlify.app/"
  },

  {
    name: "Travel Web Page",
    description:
      "Web page that simulates a travel company, where you can build your own itinerary, written in HTML, CSS and little use of JavaScript. Main objective was to use CSS Flexboc",
    tags: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JavaScript",
      },
    ],
    image: travelWebPage,
    source_code_link: "https://github.com/maugarciav/Travel-html-css-proyect",
    hosted_link: "https://travel-flexbox-proyect.netlify.app/"
  },

];

const personalLinks = {
  githubLink: "https://github.com/maugarciav",
  linkedInLink: "https://www.linkedin.com/in/maugarciav/",
  resumeLink: "https://drive.google.com/file/d/1odAN3iLZQ3s21ZZP8qDIn2mrqqXHmEXh/view?usp=sharing"
};


export { services, technologies, experiences, projects, personalLinks };