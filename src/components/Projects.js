import React from 'react';
import img from "../img/img";
import { Project } from './Project';
import { Hr } from './Hr';
export function Projects({ printing, mobile }) {
  return (<div>
    <Project printing={printing} mobile={mobile} subtitle={"2020 - Myself"} title={"Fountains"} title_info={"IPhone, Android - Expo (React Native), firebase"} body={"Public map of water fountains around the world"} links={[
      {
        type: "production",
        url: "exp://exp.host/@nwylynko/fountains"
      }
    ]} image={img.projects.fountains} />
    <Hr printing={printing} />
    <Project printing={printing} mobile={mobile} subtitle={"2019 - Myself"} title={"MiniNotes"} title_info={"Website - React, firebase"} body={"Public pin board for posting notes forever"} links={[
      {
        type: "repo",
        url: "https://github.com/nwylynko/MiniNotes"
      },
      {
        type: "production",
        url: "https://mininotes-420.web.app"
      }
    ]} image={img.projects.mininotes} />
    <Hr printing={printing} />
    <Project printing={printing} mobile={mobile} subtitle={"2019 - Myself"} title={"Small Talk"} title_info={"Website, IPhone, Android - Expo (React Native), firebase"} body={"Instant Messaging app that works accross all platforms."} links={[
      {
        type: "repo",
        url: "https://github.com/nwylynko/Small-Talk"
      },
      {
        type: "production",
        url: "https://small-talk-666.web.app"
      }
    ]} image={img.projects.smalltalk} />
    <Hr printing={printing} />
    <Project printing={printing} mobile={mobile} subtitle={"Year 10 - Extracurricular - School Robotics"} title={"Robotics"} title_info={"Coding - javascript, python"} body={"Developing/Coding tools to control robots in school robots’ competitions."} links={[
      {
        type: "repo",
        url: "https://github.com/CCGSRobotics/RoboHUD"
      },
    ]} image={img.projects.RoboHUD} />
    <Hr printing={printing} />
    <Project printing={printing} mobile={mobile} subtitle={"Year 10 - School - Advanced Software Development"} title={"WeBanter"} title_info={"Windows - C# client, Nodejs"} body={"Program for sharing messages and images in group chats."} links={[
      {
        type: "repo",
        url: "https://github.com/ccgs-10asd-2019/major-project-geet"
      },
    ]} image={img.projects.majorprojectgeet} />
    <Hr printing={printing} />
    <Project printing={printing} mobile={mobile} subtitle={"2019 - Myself"} title={"MCControl"} title_info={"Website - html, Javascript, Nodejs, Websocket"} body={"Developed from scratch over 30 hours, runs and controls a Minecraft server remotely."} links={[
      {
        type: "repo",
        url: "https://github.com/NWylynko/MCControl"
      },
    ]} image={img.projects.mccontrol} />
    <Hr printing={printing} />
    <Project printing={printing} mobile={mobile} subtitle={"2019 - Myself"} title={"Cookies"} title_info={"iPhone, Android Game - React Native/Expo"} body={"Taught myself how to create React Native apps for phones with basic JavaScript knowledge and put this game together over 2 weeks."} links={[
      {
        type: "repo",
        url: "https://github.com/NWylynko/Cookies"
      },
    ]} image={img.projects.cookies} />
    <Hr printing={printing} />
    <Project printing={printing} mobile={mobile} subtitle={"2019 - Myself"} title={"Random Scripts"} title_info={"Shell / Bash scripts"} body={"While overseas I created scripts to quickly install and setup programs on remote servers."} links={[
      {
        type: "repo",
        url: "https://github.com/NWylynko/Random-Scripts"
      },
    ]} image={img.projects.randomscripts} />
    <Hr printing={printing} />
    <Project printing={printing} mobile={mobile} subtitle={"2018 - Myself"} title={"Computers"} title_info={"hardware"} body={`Got old computer, installed FreeNas on, repurposed as a NAS.
          Bought parts for a gaming computer, fun to build and play on.
          Built a computer and Hackintoshed it so it would run MacOS, 
          saved money and got the storage and power needed. Challenging but fun to work on.
          Opened my MacBook and installed more ram and replaced HDD for SSD.`} image={img.projects.computers} />
    <Hr printing={printing} />
    <Project printing={printing} mobile={mobile} subtitle={"Year 9 - School - Software Development"} title={"21 BlackJack"} title_info={"iPad Game - Swift"} body={"Spent a term developing an iPad game based off the betting game Blackjack."} links={[
      {
        type: "repo",
        url: "https://github.com/NWylynko/21-BlackJack"
      },
    ]} />
  </div>);
}
