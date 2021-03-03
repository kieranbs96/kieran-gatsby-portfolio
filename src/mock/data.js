import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kieran | Web Developer',
  lang: 'en',
  description: 'Welcome to my portfolio',
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is ',
  name: 'Kieran Smith',
  subtitle: 'I\'m a Web Developer',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a London based web developer currently working for Education First (EF). I specialize in React development and have a passion for CSS and producing the best user experience, commonly building from designs produced in Figma & Sketch (served by Zeplin)",
  paragraphTwo: "During my time as a developer I've worked with a variety of technologies including React (Gatsby + Next.js), Node.js, GraphQL, CSS in JS (Styled Components), TypeScript, Jest + Enzyme and many more.",
  resume: 'https://docs.google.com/document/d/1SrjgdxkoMGls5e3nOPQBDnhMV6K4XVgDUewDuK5NhBo/',
  contactText: "I'm open to new opportunities you can contact me on the following:",
  emailContactText: "Drop me an email at ",
  emailContact: "kieranbs96@gmail.com",
  phoneContactText: "Give me a call or text me on ",
  phoneContact: "07468523821"
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'georginacross.png',
    title: 'Nursing Portfolio',
    info: 'A basic portfolio and blog for a nurse. Developed using Gatsby & GraphQL into the Contentful headless CMS. Styled using SASS.',
    info2: '',
    url: 'https://www.georginacross.co.uk/',
    repo: 'https://github.com/kieranbs96/georgina-portfolio-contentful',
  },
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kieranbs96/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kieranbs96',
    },
  ],
};