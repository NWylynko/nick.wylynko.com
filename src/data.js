import img from "./img/img"

export function stater(name, info) {
  if (info) {
    if (name === 'fountains') {
      return `Currently ${info.locations} water fountains recorded around the world.`
    } else if (name === 'miniNotes') {
      return `Currently ${info.notes} notes pinned on ${info.boards} boards.`
    } else if (name === 'smallTalk') {
      return `Currently ${info.messages} messages sent accross ${info.chats} chats.`
    } else if (name === 'connect420') {
      return `Currently ${info.connectedRightNow} players on right now, with ${info.gamesPlayed} games played.`
    }
  } else {
    return '';
  }

}

export const projects = [{
  id: 11,
  subtitle: "Year 11 - School - Computer Science first project",
  title: "Connect 420",
  info: "Web app / PWA - Reactjs, TypeScript, Socketio, Redis, Docker",
  body: "School Project was to create a simple game, I choose to create a clone of Connect 4, Connect 420 an online multiplayer retro themed version of the game. I taught myself how to use Redis to store the state of the boards and create a game server that can easily be scaled to handle thousands of players simultaneously. I touched up on my docker skills to containerize the server to quickly and easily deploy the server anywhere.",
  image: img.projects.connect420,
  links: [{
    name: "Link,",
    url: "https://connect420.web.app/"
  },{
    name: "Github - Client,",
    url: "https://github.com/NWylynko/connect420/"
  }, {
    name: "Github - Server,",
    url: "https://github.com/NWylynko/connect420-server/"
  }, {
    name: "Docker - Client,",
    url: "https://hub.docker.com/r/nwylynko/connect420/"
  }, {
    name: "Docker - Server,",
    url: "https://hub.docker.com/r/nwylynko/connect420-server/"
  }],
  stat: 'connect420'
},{
  id: 10,
  subtitle: "2020 - Myself",
  title: "Conduit - realworld",
  info: "IPhone, Android - React Native, CRUD - REST api",
  body: "Ported Conduit [https://github.com/gothinkster/realworld] over to React Native in 4 days, while sticking to the spec.",
  image: img.projects.realworld,
  links: [{
    name: "Github",
    url: "https://github.com/NWylynko/realworld-react-native/"
  }]
}, {
  id: 1,
  subtitle: "2020 - Myself",
  title: "Fountains",
  info: "IPhone, Android - Expo (React Native), firebase",
  body: "Public map of water fountains around the world.",
  image: img.projects.fountains,
  links: [{
    name: "Link (need expo)",
    url: "exp://exp.host/@nwylynko/fountains"
  }],
  stat: 'fountains'
},
{
  id: 2,
  subtitle: "2019 - Myself",
  title: "MiniNotes",
  info: "Website - React, firebase",
  body: "Public pin board for posting notes forever.",
  image: img.projects.mininotes,
  links: [{
    name: "Github,",
    url: "https://github.com/nwylynko/MiniNotes"
  },
  {
    name: "Link",
    url: "https://mininotes-420.web.app"
  }
  ],
  stat: 'miniNotes',
},
{
  id: 3,
  subtitle: "2019 - Myself",
  title: "Small Talk",
  info: "Website, IPhone, Android - Expo (React Native), firebase",
  body: "Instant Messaging app that works accross all platforms.",
  image: img.projects.smalltalk,
  links: [{
    name: "Github,",
    url: "https://github.com/nwylynko/Small-Talk"
  },
  {
    name: "Link",
    url: "https://small-talk-666.web.app"
  }
  ],
  stat: 'smallTalk'
},
{
  id: 4,
  subtitle: "Year 10 - Extracurricular - School Robotics",
  title: "Robotics",
  info: "Coding - javascript, python",
  body: "Developing/Coding tools to control robots in school robots’ competitions.",
  image: img.projects.RoboHUD,
  links: [{
    name: "Github",
    url: "https://github.com/CCGSRobotics/RoboHUD"
  }]
},
{
  id: 5,
  subtitle: "Year 10 - School - Advanced Software Development",
  title: "WeBanter",
  info: "Windows - C# client, Nodejs",
  body: "Program for sharing messages and images in group chats.",
  image: img.projects.majorprojectgeet,
  links: [{
    name: "Github",
    url: "https://github.com/ccgs-10asd-2019/major-project-geet"
  }]
},
{
  id: 6,
  subtitle: "2019 - Myself",
  title: "MCControl",
  info: "Website - html, Javascript, Nodejs, Websocket",
  body: "Developed from scratch over 30 hours, runs and controls a Minecraft server remotely.",
  image: img.projects.mccontrol,
  links: [{
    name: "Github",
    url: "https://github.com/NWylynko/MCControl"
  }]
},
{
  id: 7,
  subtitle: "2019 - Myself",
  title: "Cookies",
  info: "iPhone, Android Game - React Native/Expo",
  body: "Taught myself how to create React Native apps for phones with basic JavaScript knowledge and put this game together over 2 weeks.",
  image: img.projects.cookies,
  links: [{
    name: "Github",
    url: "https://github.com/NWylynko/Cookies"
  }]
},
{
  id: 8,
  subtitle: "2019 - Myself",
  title: "Random Scripts",
  info: "Shell / Bash scripts",
  body: "While overseas I created scripts to quickly install and setup programs on remote servers.",
  image: img.projects.randomscripts,
  links: [{
    name: "Github",
    url: "https://github.com/NWylynko/Random-Scripts"
  }]
},
{
  id: 9,
  subtitle: "2018 - Myself",
  title: "Computers",
  info: "hardware",
  body: `Got old computer, installed FreeNas on, repurposed as a NAS.
      Bought parts for a gaming computer, fun to build and play on.
      Built a computer and Hackintoshed it so it would run MacOS, 
      saved money and got the storage and power needed. Challenging but fun to work on.
      Opened my MacBook and installed more ram and replaced HDD for SSD.`,
  image: img.projects.computers,
}
]

export const certs = [
{
    id: 3,
    name: 'Interactive Design - Mobile User Experience',
    date: '2020',
    body: `This course further extended my knowledge in creating mobile apps that have an emphasis on the end user having a great experience using it.`,
    image: img.certs.ID_MobileUX,
    links: [{
      name: "Link",
      url: "https://www.interaction-design.org/nick-wylynko/certificate/course/b7c26498-3d37-4faf-8130-6825dc0ac204"
    }]
  },
  {
    id: 2,
    name: 'Interactive Design - Human Computer Interaction',
    date: '2020',
    body: `This 9 week course taught me how to design software 
    around peoples needs to ensure the end user is 
    engaged and has an enjoyable experience.`,
    image: img.certs.ID_HCI,
    links: [{
      name: "Link",
      url: "https://www.interaction-design.org/nick-wylynko/certificate/course/90deb6fb-43e4-4621-b751-1668853c1944"
    }]
  },
  {
    id: 1,
    name: 'SAE Design',
    date: '2020',
    body: `Fun three day course on the holidays, I learnt some new tips 
    and tricks with Illustrator and Photoshop.`,
    image: img.certs.SAEDesign
  }]
