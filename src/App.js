import React, { useEffect, useContext } from 'react';
import { StoreContext } from './store';

import Projects from './components/Projects/';
import Certificates from './components/Certificates/';
import Link from './components/Link/';

import { HeaderText, BodyText } from './components/Text/'

import Badge from 'react-simple-badges';

export default function App() {
  const { printing, setPrinting, setStats, setLoadingStats } = useContext(StoreContext);

  useEffect(() => {
    let fetch1 = fetch('https://potato.wylynko.com/stats')
      .then(res => { res.text().then(JSON.parse).then(stats => setStats(oldState => { return { ...oldState, ...stats } })) }).catch(console.warn)
    let fetch2 = fetch('https://potato.wylynko.com/c420/stats')
      .then(res => { res.text().then(JSON.parse).then(stats => setStats(oldState => { return { ...oldState, connect420: stats } })) }).catch(console.warn)

    Promise.all([fetch1, fetch2]).finally(() => setLoadingStats(false))

  }, [setStats, setLoadingStats])

  useEffect(() => {
    window.onbeforeprint = () => {
      setPrinting(true)
    }

    window.onafterprint = () => {
      setPrinting(false)
    }
  }, [setPrinting])

  return (
    <div className="App">
      <div className="content">
        <div className="left">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <h1 className="title">Nick&nbsp;</h1>
            <h1 className="title" style={{ color: 'var(--accent-color)' }}>Wylynko</h1>
          </div>
          <BodyText>Perth, WA, Australia ·&nbsp;<a href="tel:+61434901870" className="phone">0434 901 870</a></BodyText>
          <Link />
          <HeaderText>
            Objective: To gain further knowledge and experience
            in Software and Hardware in this rapidly developing world.
          </HeaderText>
          <h3>Education: </h3>
          <BodyText>
            Day boy at Christ Church Grammar School since year 4,
            currently in year {12 - (2021 - new Date().getFullYear())} (Queenslea), graduate in 2021 cohort.
          </BodyText>
          <h3>Year 11 Atar selection:</h3>
          <div style={{ justifyContent: 'space-around' }}>
            <BodyText>English</BodyText><BodyText>·</BodyText>
            <BodyText>Mathematics Applications</BodyText><BodyText>·</BodyText>
            <BodyText>Computer Science</BodyText><BodyText>·</BodyText>
            <BodyText>Digital Design</BodyText>
          </div>
          <h3>Experiences: </h3>
          <BodyText>· 4 Week exchange to Virginia, USA to learn at St Christophers from 24th of March, 2019 to 22nd of April</BodyText>
          <BodyText>· 2 Week school camp 'venture', walking over 200km from 19th of November, 2019 to the 29th</BodyText>
          <h3>Skills: </h3>
          <Skill title={'Languages'}>
            <Badge name="JavaScript" />
            <Badge name="TypeScript" />
            <Badge name="HTML5" />
            <Badge name="CSS3" />
            <Badge name="Python" />
          </Skill>
          <Skill title={'Frameworks'}>
            <Badge name="React" />
            <Badge name="Expo"/>
            <Badge name="Socket.io"/>
            <Badge name="Material-UI" />
            <Badge name="styled-components" />
          </Skill>
          <Skill title={'Tools'}>
            <Badge name="Git" />
            <Badge name="GitHub" />
            <Badge name="Visual Studio Code" />
            <Badge name="Blender" />
            <Badge name="Adobe Photoshop" />
            <Badge name="Adobe Illustrator" />
          </Skill>
          <Skill title={'Other'}>
            <Badge name="node.js" />
            <Badge name="Docker" />
            <Badge name="Firebase" />
            <Badge name="Google Cloud" />
            <Badge name="Redis" />
            <Badge name="Nginx" />
          </Skill>
          {/* <Skill title={'Libraries:'}>Reactjs, React Native, Expo, Expressjs, Socketio</Skill>
          <Skill title={'Tools:'}>Git, Visual Studio Code, Shell, Blender, Photoshop, Illustrator</Skill>
          <Skill title={'Other:'}>Node.js, Docker, Firebase, GCloud, Redis, Nginx, PWA</Skill>
          <Skill title={'Methodologies:'}>12 factor app, Agile app development, Test Driven Development</Skill>
          <Skill title={'Architecture:'}>Rest over http (CRUD), Client-server, Microservices</Skill>
          <Skill title={'Office:'}>Word, PowerPoint, Excel</Skill> */}
          <hr />
          <ul>
            <BodyText>· Took apart, put back together and built  Computers</BodyText>
            <BodyText>· Working with Networking, Servers, Websites</BodyText>
            <BodyText>· Extensive knowledge and use of MacOS, Windows 10 and Linux</BodyText>
            <BodyText>· Highly productive in both a team and individual environment</BodyText>
          </ul>
          <h3>Certificates: </h3>
          <div className="certs">
            <Certificates />
          </div>

        </div>
        <div className="right">
          <h3 style={printing ? { marginTop: 50 } : null}>Projects: </h3>
          <Projects />
        </div>
      </div>
    </div>
  );
}

function Skill({ title, children }) {
  return (
    <div style={{ textAlign: 'left' }} className="Skills">
      <h5>{title}</h5>
      <div>
        {children}
      </div>
    </div>
  )
}
