import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Keldan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'JS Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Keldan',
  subtitle: 'Lets make your creative vision a reality',
  cta: 'groovy',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Creative and design inclined web developer with experience in both front and back end web development',
  paragraphTwo: 'Cert in Full Stack Web Development through University of Denver',
  paragraphThree:
    'Experience in HTML5, CSS3, JavaScript, jQuery, Node.js, Express.js, React.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more.',
  resume:
    'https://docs.google.com/document/d/1EcKGlw-jsqbQ68lEoeiT1EaZcDPadW2Gt7z9hBwKmHk/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Spiral',
    info: 'MERN Social Network for Artists',
    info2: '',
    url: 'https://immense-river-92138.herokuapp.com/',
    repo: 'https://github.com/keldykins/spiral-social', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wormhole.png',
    title: 'wormhole',
    info: 'MERN based Google Books search app',
    info2: '',
    url: 'https://immense-cliffs-21577.herokuapp.com/',
    repo: 'https://github.com/keldykins/wormhole-books', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'employeetracks.png',
    title: 'Employee Tracks',
    info: 'A React.js employee directory intended to view and sort non-sensitive employee data.',
    info2: '',
    url: 'https://keldykins.github.io/employee-tracks/',
    repo: 'https://github.com/keldykins/employee-tracks', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would love to hear from you!',
  btn: 'Email',
  email: 'kelcundy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/keldan-cundy/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/keldykins',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/mgc.wnd',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
