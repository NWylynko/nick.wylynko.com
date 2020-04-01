import img from "./img/img"

export function stater(name, info) {
  if (info) {
    if (name === 'fountains') {
      return `Currently ${info.locations} water fountains recorded around the world.`
    } else if (name === 'miniNotes') {
      return `Currently ${info.notes} notes pinned on ${info.boards} boards.`
    } else if (name === 'smallTalk') {
      return `Currently ${info.messages} messages sent accross ${info.chats} chats.`
    }
  } else {
    return '';
  }
  
}

export const projects = [{
  id: 10,
  subtitle: "2020 - Myself",
  title: "Conduit - realworld",
  info: "IPhone, Android - React Native, CRUD - REST api",
  body: "ported Conduit [https://github.com/gothinkster/realworld] over to React Native in 4 days, while sticking to the spec.",
  image: img.projects.realworld,
  links: [{
    type: "repo",
    url: "https://github.com/NWylynko/realworld-react-native/"
  }]
},{
    id: 1,
    subtitle: "2020 - Myself",
    title: "Fountains",
    info: "IPhone, Android - Expo (React Native), firebase",
    body: "Public map of water fountains around the world.",
    image: img.projects.fountains,
    links: [{
      type: "production",
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
        type: "repo",
        url: "https://github.com/nwylynko/MiniNotes"
      },
      {
        type: "production",
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
        type: "repo",
        url: "https://github.com/nwylynko/Small-Talk"
      },
      {
        type: "production",
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
      type: "repo",
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
      type: "repo",
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
      type: "repo",
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
      type: "repo",
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
      type: "repo",
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