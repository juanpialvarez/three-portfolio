import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  // tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  // threejs,
  angular,
} from '../assets';

export const projects = [
  {
    name: 'My Flix Back-End',
    description:
      'Built a REST API using Express.js. The API can register users and hash their password, then log them in using said hashed password. It also has a variety of GET methods for movies and user data.',
    github: 'https://github.com/juanpialvarez/MyFlix',
    website: 'https://myflix94.netlify.app/',
    screenshot: '',
    techs: [
      {
        icon: git,
        name: 'Git',
      },
      {
        icon: mongodb,
        name: 'MongoDB',
      },
      {
        icon: html,
        name: 'HTML',
      },
      {
        icon: nodejs,
        name: 'Node',
      },
      {
        icon: javascript,
        name: 'Javascript',
      },
    ],
    other: ['Express.js', 'Kanban'],
  },
  {
    name: 'My Flix Front-End',
    description:
      'Built a front end App using React ustilizing the REST API I created for My Flix.',
    github: 'https://github.com/juanpialvarez/MyFlix-client',
    website: 'https://myflix94.netlify.app/',
    screenshot: '',
    techs: [
      {
        icon: reactjs,
        name: 'React',
      },
      {
        icon: redux,
        name: 'Redux',
      },
      {
        icon: css,
        name: 'CSS',
      },
      {
        icon: git,
        name: 'Git',
      },
      {
        icon: html,
        name: 'HTML',
      },
      {
        icon: javascript,
        name: 'Javascript',
      },
    ],
    other: ['Parcel'],
  },
  {
    name: 'My Flix Angular',
    description:
      'Recreated the front end for My Flix but this time using the Angular framework.',
    github: 'https://github.com/juanpialvarez/MyFlix-Angular',
    website: 'https://juanpialvarez.github.io/MyFlix-Angular/welcome',
    screenshot: '',
    techs: [
      {
        icon: angular,
        name: 'Angular',
      },
      {
        icon: redux,
        name: 'Redux',
      },
      {
        icon: css,
        name: 'CSS',
      },
      {
        icon: html,
        name: 'HTML',
      },
      {
        icon: git,
        name: 'Git',
      },
      {
        icon: typescript,
        name: 'Typescript',
      },
    ],
    other: ['Typescript'],
  },

  {
    name: 'Chat App',
    description: 'Used React Native and Firestore to create a mobile chat app.',
    github: 'https://github.com/juanpialvarez/Chat-App',
    website: 'https://www.dropbox.com/s/putpqj6acwjdh78/Task5_5.webm?dl=0',
    screenshot: '',
    techs: [
      {
        icon: reactjs,
        name: 'React',
      },
      {
        icon: redux,
        name: 'Redux',
      },
      {
        icon: css,
        name: 'CSS',
      },
      {
        icon: git,
        name: 'Git',
      },
      {
        icon: html,
        name: 'HTML',
      },
      {
        icon: javascript,
        name: 'Javascript',
      },
    ],
    other: ['React Native'],
  },
  {
    name: 'Meet App',
    description:
      'Used a serverless AWS service to create a PWA React app that displays events to the user. I also created unit, integration, user acceptance, and end-to-end tests to ensure the app functioned properly.',
    github: 'https://github.com/juanpialvarez/Meet-App',
    website: 'https://juanpialvarez.github.io/Meet-App/',
    screenshot: '',
    techs: [
      {
        icon: reactjs,
        name: 'React',
      },
      {
        icon: redux,
        name: 'Redux',
      },
      {
        icon: css,
        name: 'CSS',
      },
      {
        icon: html,
        name: 'HTML',
      },
      {
        icon: git,
        name: 'Git',
      },
      {
        icon: javascript,
        name: 'Javascript',
      },
    ],
    other: ['Serverless', 'Oauth', 'Test Driven Development', 'Jest'],
  },
  {
    name: 'Pokedex',
    description:
      'Using a combination of JQuery and vailla JavaScript, I created a pokedex application that uses the pokedex REST API to obtain data about pokemons. I then used the data to create a front end UI.',
    github: 'https://github.com/juanpialvarez/pokedex',
    website: 'https://juanpialvarez.github.io/pokedex/',
    screenshot: '',
    techs: [
      {
        icon: git,
        name: 'Git',
      },
      {
        icon: css,
        name: 'CSS',
      },
      {
        icon: html,
        name: 'HTML',
      },
      {
        icon: javascript,
        name: 'Javascript',
      },
    ],
    other: ['API', 'JQuery'],
  },
];
