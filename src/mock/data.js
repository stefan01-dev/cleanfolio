import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Stefan Dudu| Dev portofolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A basic portofolio website to showcase my work', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Greetings, my names is ',
  name: 'Stefan Dudu',
  subtitle: `I'm de developer you don't know yet you need`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'Stefan Dudu is very passionate about the web development industry and information technology. He has a `long run` mindset, eager to stay in tune with the latest and modern technologies.',
  paragraphTwo:
    'His hunger for knowledge and his perseveration are the reasons of why he can achieve many things in a short period of time and learn a lot. He considers himself a well-organised person, problem solver and he loves to work in a team on ambitious projects with the right people. He enjoys working on the front-end with React but he is very flexible with a lot of technologies.',
  paragraphThree:
    'Besides programming, his hobbies are weight-lifting, reading, outdoor walks, trekking, reading and sleeping.',
  resume: 'https://www.linkedin.com/in/stefan-dudu/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
