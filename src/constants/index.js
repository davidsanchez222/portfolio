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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "Front End Web Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Singularity Capital",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2022",
    points: [
      "Utilized Yahoo Finance Python wrapper to access historical data on stock indices such as SPY and QQQ.",
      "Developed script that track the starts and ends of bull and bear markets in the past and calculated max drawdown.",
      "Created a market scanner entry signal based on relative value for highly correlated equity pairs like HD and LOW.",
      "Extensively back tested models in parallel and avoided common data leakage problems found in financial time series datasets.",
    ],
  },
  {
    title: "Data Engineering Intern",
    company_name: "Fluence",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Focused on analyzing why batteries degrade and extracting important data to explain it.",
      "Analyzed battery rack current data and found that bottom racks on the battery cores had higher current.",
      "This analysis was important when feeding battery data into a machine learning algorithm.",
      "Created a Python wrapper for a REST API for battery storage centers.",
      "Wrote a script to simultaneously send power commands to batteries and collect data on them.",
      "Assisted on another script that collected battery data via Modbus connections.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Priyansh has very visible passion for his idea and it was great to witness his clarity of thoughts. He is also a good team player, ready to mould his skills if that helps him improve. These are some qualities that can go a long way in charting out a path towards success. I wish him the very best",
    name: "Khyati Bhatt",
    designation: "CEO",
    company: "Simply Body Talk",
    image:
      "https://media.licdn.com/dms/image/C4D03AQEpBQFei2OEtQ/profile-displayphoto-shrink_400_400/0/1650362145770?e=1694044800&v=beta&t=DQlFIbXqEC2uj_sx91baM_7e7QMpBKli03NgxYaQqbc",
  },
  {
    testimonial:
      "I highly recommend Priyansh for any future endeavors. His dedication, hard work, and passion for his work are truly inspiring. Priyansh is a rare talent, and I am confident that he will continue to make great strides in his career and achieve even greater success in the future.",
    name: "Anup Robins",
    designation: "HR Business Partner",
    company: "Experian",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "This guy has what it takes for the first unicorn. Just wait and watch.",
    name: "Aman Sharma",
    designation: "CTO",
    company: "Dinnerfy",
    image:
      "https://media.licdn.com/dms/image/D4E03AQFrs3BhOhnt5A/profile-displayphoto-shrink_400_400/0/1683687300051?e=1693440000&v=beta&t=BKh8L96K5xzfbcOMTznFCep4PPAuwTr5iIBNtiTJBEQ",
  },
];

const projects = [
  {
    name: "NBA Bets",
    description:
      "Volt is a comprehensive portfolio management software which offers a holistic solution for managing startup portfolios. Seamlessly manage your portfolio, track investments, and analyze performance all in one place with Volt's latest industry standards and best practices. Say goodbye to inefficiencies, embrace Volt!",
    tags: [
      {
        name: "sports betting",
        color: "blue-text-gradient",
      },
      {
        name: "data visualization",
        color: "green-text-gradient",
      },
      {
        name: "data analysis",
        color: "pink-text-gradient",
      },
      {
        name: "machine learning",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/StarticField",
  },
  {
    name: "Eurotower",
    description:
      "Web application that displays real time data of VIX futures contracts",
    tags: [
      {
        name: "finance",
        color: "blue-text-gradient",
      },
      {
        name: "data analysis",
        color: "green-text-gradient",
      },
      {
        name: "options trading",
        color: "pink-text-gradient",
      },
      {
        name: "vix",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/PriyanshNegi/PredCo",
  },
  // {
  //   name: "Prompt-X",
  //   description:
  //     "Prompt-X is an undergoing project designed to train language models and enhance prompt engineering. It will offer productivity analytics, personalized recommendations and insights for Chat GPT users. With its focus on training LLM models, Prompt-X is a powerful tool for optimizing workflows and advancing natural language understanding. ",
  //   tags: [
  //     {
  //       name: "machine learning",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "web dev",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "prompt engineering",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/PriyanshNegi/Prompt-X-Website",
  // },
];

export { services, technologies, experiences, testimonials, projects };
