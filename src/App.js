import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from './store';

import { Projects } from './components/Projects';
import { Link } from './components/Link';

import { HeaderText, BodyText, SecondaryText, LinkHeaderText } from './components/Text'

export default function App() {

  const [width, set_width] = useState(window.innerWidth)
  const [height, set_height] = useState(window.innerHeight)

  const [TextSize, set_TextSize] = useState(50)

  const { setMobile, printing, setPrinting, setStats, setLoadingStats } = useContext(StoreContext);

  useEffect(() => {
    fetch('https://potato.wylynko.com/stats')
      .then((res) => { res.text().then(JSON.parse).then(setStats).then(() => setLoadingStats(false)) }).catch(console.warn)
  }, [setStats, setLoadingStats])

  useEffect(() => {

    window.addEventListener('resize', updateWindowDimensions);

    let mobile = height >= width
    let displayWidth = mobile ? width : width * 0.5

    setMobile(mobile)
    set_TextSize(printing ? 100 : displayWidth / 7)

    return function cleanup() {
      window.removeEventListener('resize', updateWindowDimensions);
    };

  }, [width, height, printing, setMobile]);

  function updateWindowDimensions() {
    set_width(window.innerWidth)
    set_height(window.innerHeight)
  }

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
        <div>
          <div className="align" >
            <h1 className="align name" style={{ margin: 0, fontSize: TextSize }}>Nick&nbsp;</h1>
            <h1 className="align name wylynko" style={{ margin: 0, fontSize: TextSize, }}>Wylynko</h1>
          </div>
          <BodyText>Perth, WA, Australia · <a href="tel:+61434901870" style={{ color: 'white' }}>0434 901 870</a></BodyText>
          <Link />
          <HeaderText>
            Objective: To gain further knowledge and experience
            in Software and Hardware in this rapidly developing world,
            by gettings a part time or remote position at your business.
          </HeaderText>
          <h3>Education: </h3>
          <HeaderText>
            Day boy at Christ Church Grammar School since year 4,
            currently in year 11 (Queenslea), graduate in 2021 cohort.
          </HeaderText>
          <h4>Year 11 Atar selection:</h4>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <ul >
              <BodyText>· English</BodyText>
              <BodyText>· Mathematics Applications</BodyText>
            </ul>
            <ul>
              <BodyText>· Computer Science</BodyText>
              <BodyText>· Digital Design</BodyText>
            </ul>
          </div>
          <h3>Experiences: </h3>
          <ul>
          <BodyText>· 4 Week exchange to Virginia, USA to learn at St Christophers from March 24, 2019 to April 22</BodyText>
          </ul>
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
            <BodyText>· Took apart and built Computers and different electronics</BodyText>
            <BodyText>· Working with Networking, Servers, Websites</BodyText>
            <BodyText>· Extensive knowledge and use of MacOS, Windows 10 and Linux</BodyText>
            <BodyText>· highly productive in both a team and individual environment</BodyText>
          </ul>
        </div>
        <div className="ProjectsWidth">
          <h3 style={printing ? { marginTop: 50 } : null}>Projects: </h3>
          <Projects />
        </div>
        {/* <h3 style={printing ? {marginTop: 50} : null}>Certificates: </h3> */}
      </div>
    </div>
  );
}

