import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Stefan Dudu| Dev portofolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A basic portofolio website to showcase my work', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Greetings, my name is ',
  name: 'Stefan Dudu',
  subtitle: `I'm the developer you don't know you need yet`,
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
    'Besides programming, his hobbies are weight-lifting, reading, outdoor walks, trekking and sleeping.',
  resume: 'https://www.linkedin.com/in/stefan-dudu/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'roboBuddies.png',
    title: 'RoboBuddies',
    info:
      'I have created a simple website using React.js . I have used for the first time things like components, props & state, destructuring and learned how to update a project using GitHub and fetch data from an API.',
    info2: ``,
    url: 'https://stefan01-dev.github.io/robobuddies/',
    repo: 'https://github.com/stefan01-dev/robobuddies', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'faceRecog.png',
    title: 'Face Recognition AI',
    info:
      'Using the power of the AI, this app is able to return probability scores on the likelihood that the image contains human faces and coordinate locations of where those faces appear with a bounding box. This application was created using Ract.js alongside with an image recognition API. It also includes concepts like Sign In, creating a user and a fully responsive interface.',
    info2: '',
    url: 'https://dev-face-identification.herokuapp.com/',
    repo: 'https://github.com/stefan01-dev/face_recog', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'stefan01.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/StefanDudu_',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stefan-dudu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/stefan01-dev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
