import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kieran Smith | Web Developer',
  lang: 'en',
  description: 'Welcome to my portfolio',
};

// HERO DATA
export const heroData = {
  title: 'Hi 👋  My name is ',
  name: 'Kieran',
  subtitle: "I'm a Web Developer",
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpeg',
  paragraphOne:
    "I'm a London based web developer currently working for Education First (EF). I specialize in React development and have a passion for CSS and producing the best user experience, commonly building from designs produced in Figma & Sketch (served by Zeplin)",
  paragraphTwo:
    "During my time as a developer I've worked with a variety of technologies including React (Gatsby + Next.js), Node.js, GraphQL, CSS in JS (Styled Components), TypeScript, Jest + Enzyme and many more.",
  resume: 'https://docs.google.com/document/d/1SrjgdxkoMGls5e3nOPQBDnhMV6K4XVgDUewDuK5NhBo/',
  contactText: '',
  emailContactText: 'Drop me an email at ',
  emailContact: 'kieranbs96@gmail.com',
  phoneContactText: '',
  phoneContact: '',
};

export const experienceData = {
  title: 'My Experience',
  jobs: [
    {
      name: 'Global',
      title: 'Frontend Developer',
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'],
      date: {
        from: 'June 2021',
        until: 'Present',
      },
      location: 'Holborn, London',
      jobDesc: ['Soon..'],
    },
    {
      name: 'Education First',
      title: 'Frontend Developer',
      tags: ['React', 'Redux', 'Gatsby', 'TypeScript', 'Node.js'],
      date: {
        from: 'July 2019',
        until: 'June 2021',
      },
      location: 'Chelsea, London',
      jobDesc: [
        'EF is an international education company that specializes in language training, educational travel, academic degree programs, and cultural exchange. In my time at EF my role involved building components and maintaining a large React (Gatsby / Next) codebase that covers a large variety of the EF requirements. I became extremely comfortable with the Agile Methodologies which were heavily used in my team, including sprints, retros, kick-offs and story points.',
      ],
    },
    {
      name: 'Conversion',
      title: 'Frontend Developer',
      tags: ['JavaScript', 'React', 'SASS', 'A/B Testing', 'CRO'],
      date: {
        from: 'May 2018',
        until: 'July 2019',
      },
      location: 'Farringdon, London',
      jobDesc: [
        'Conversion.com is a leading provider of Conversion Rate Optimization with market leading clients such as Dominos, Just Eat, and Canon. The work involves developing A/B Tests, which use Javascript, HTML and CSS then injecting this all as Javascript onto a page using a A/B testing tool such as Optimizely, Qubit or VWO.  Frequently tests use APIs to deliver custom and complex features on client’s websites this has included Google Maps API aswell as custom client APIs. ',
      ],
    },
    {
      name: 'SellerDeck',
      title: 'Junior Developer',
      tags: ['JavaScript', 'SASS', 'Magento', 'eCommerce'],
      date: {
        from: 'July 2013',
        until: 'May 2018',
      },
      location: 'West Byfleet, Surrey',
      jobDesc: [
        'My role at SellerDeck started as a technical support analyst which moved into being a team leader in that field. A role opened up inhouse for a Junior Web Developer in 2015 and this is where my love for coding kickstarted.',
      ],
    },
  ],
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'nextjs.png',
    title: 'Next + Keystone Shop',
    info: `A shop type app based on Next.js with Keystone as a headless CMS and GraphQL queries into the headless CMS, created as part of the Wes Bos course Advanced React.`,
    info2: '',
    url: '',
    repo: 'https://github.com/kieranbs96/typechain',
  },
  {
    id: nanoid(),
    img: 'typescript.jpg',
    title: 'Typechain',
    info:
      'Typechain is a TypeScript library made to practice and to explore the world of blockchain (very briefly) as part of a course ran by NomadCoders. ',
    info2: '',
    url: '',
    repo: 'https://github.com/kieranbs96/typechain',
  },
  {
    id: nanoid(),
    img: 'hooks.png',
    title: 'Nooks',
    info:
      'Nooks is a library to practice using React Hooks to produce some useful reusable hooks as part of a course ran by NomadCoders.',
    info2: '',
    url: '',
    repo: 'https://github.com/kieranbs96/nooks',
  },
  {
    id: nanoid(),
    img: 'georginacross.png',
    title: 'Nursing Portfolio',
    info:
      'A basic portfolio and blog for a nurse. Developed using Gatsby & GraphQL into the Contentful headless CMS. Styled using SASS.',
    info2: '',
    url: 'https://www.georginacross.co.uk/',
    repo: 'https://github.com/kieranbs96/georgina-portfolio-contentful',
  },
];

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
