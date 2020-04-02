import React, { useEffect, useContext } from 'react';
import { StoreContext } from './store';

import Projects from './components/Projects/';
import Certificates from './components/Certificates/';
import Link from './components/Link/';

import { HeaderText, BodyText } from './components/Text/'

export default function App() {
  const { printing, setPrinting, setStats, setLoadingStats } = useContext(StoreContext);

  useEffect(() => {
    fetch('https://potato.wylynko.com/stats')
      .then((res) => { res.text().then(JSON.parse).then(setStats).then(() => setLoadingStats(false)) }).catch(console.warn)
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
            <h1 className="title maincolour">Wylynko</h1>
          </div>
          <BodyText>Perth, WA, Australia · <a href="tel:+61434901870" style={{ color: 'white' }}>0434 901 870</a></BodyText>
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
            <BodyText>· 4 Week exchange to Virginia, USA to learn at St Christophers from March 24, 2019 to April 22</BodyText>
          <h3>Skills: </h3>
          <ul>
            <BodyText>
              HTML, CSS, JS, Python, Nodejs, SQL, NoSQL, Reactjs, React Native (expo),
              Shell, Docker, GitHub, Photoshop, Blender, Word, Excel,
              PowerPoint, firebase, gcloud
            </BodyText>
          </ul>
          <hr />
          <ul>
            <BodyText>· Took apart, put back together and built  Computers</BodyText>
            <BodyText>· Working with Networking, Servers, Websites</BodyText>
            <BodyText>· Extensive knowledge and use of MacOS, Windows 10 and Linux</BodyText>
            <BodyText>· highly productive in both a team and individual environment</BodyText>
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

