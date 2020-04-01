import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from './store';

import { Projects } from './components/Projects';
import { Link } from './components/Link';

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
          <h6 style={{ margin: 3 }}>Perth, WA, Australia · <a href="tel:+61434901870" style={{ color: 'white' }}>0434 901 870</a></h6>
          <Link />
          <h5 style={{ margin: 5 }}>
            Objective: To gain further knowledge and experience
            in Software and Hardware in this rapidly developing world,
            by gettings a part time or remote position at your business.
        </h5>
          <h3>Education: </h3>
          <p style={{ margin: 2 }}>
            Day boy at Christ Church Grammar School since year 4,
            currently in year 11 (Queenslea), graduate in 2021 cohort.
        </p>
          <h4 style={{ marginLeft: 15, }}>Year 11 Atar selection:</h4>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <ul>
            <li>English</li>
            <li>Mathematics Applications</li>
          </ul>
          <ul>
            <li>Computer Science</li>
            <li>Digital Design</li>
          </ul>
          </div>
          <h3>Experiences: </h3>
          <ul>
            <li>4 Week exchange to Virginia, USA to learn at St Christophers from March 24, 2019 to April 22</li>
          </ul>
          <h3>Skills: </h3>
          <ul>
            <li>HTML, CSS, JS, Python, Nodejs, SQL, NoSQL, Reactjs, React Native (expo),
            Shell, Docker, GitHub, Photoshop, Blender, Word, Excel,
            PowerPoint, firebase, gcloud</li>
          </ul>
          <hr />
          <ul>
            <li>Took apart and built Computers and different electronics</li>
            <li>Working with Networking, Servers, Websites</li>
            <li>Extensive knowledge and use of MacOS, Windows 10 and Linux</li>
            <li>highly productive in both a team and individual environment</li>
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

