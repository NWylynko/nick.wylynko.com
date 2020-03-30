import React, { useState, useEffect } from 'react';

import { Hr } from './components/Hr';
import { Projects } from './components/Projects';

export default function App() {

  const [width, set_width] = useState(window.innerWidth)
  const [height, set_height] = useState(window.innerHeight)

  const [TextSize, set_TextSize] = useState(50)
  const [mobile, set_mobile] = useState(null)
  const [printing, set_printing] = useState(false)

  useEffect(() => {

    window.addEventListener('resize', updateWindowDimensions);

    let mobile = height >= width
    let displayWidth = mobile ? width : width * 0.5

    set_mobile(mobile)
    set_TextSize(printing ? 100 : displayWidth / 7)

    return function cleanup() {
      window.removeEventListener('resize', updateWindowDimensions);
    };

  }, [width, height, printing]);

  function updateWindowDimensions() {
    set_width(window.innerWidth)
    set_height(window.innerHeight)
  }

  window.onbeforeprint = () => {
    set_printing(true)
  }

  window.onafterprint = () => {
    set_printing(false)
  }

  function Link() {
    if (printing) {
      return (
        <div>
          <p className="maincolour" style={{ marginBottom: 5, marginTop: 5 }}>Website [nick.wylynko.com]</p>
          <p className="maincolour" style={{ marginBottom: 5, marginTop: 5 }}>Email [nick1014375@gmail.com]</p>
          <p className="maincolour" style={{ marginBottom: 5, marginTop: 5 }}>LinkedIn [nick.wylynko.com/linkedin]</p>
          <p className="maincolour" style={{ marginBottom: 5, marginTop: 5 }}>Github [nick.wylynko.com/github]</p>
        </div>
      )
    } else {
      return (
        <div>
          <a className="maincolour" href="mailto:nick1014375@gmail.com">Email ·</a>
          <a className="maincolour" href="https://linkedin.com/in/nick-wylynko-17a202193/"> LinkedIn </a>
          <a className="maincolour" href="https://github.com/nwylynko">· Github</a>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <div className="content">

        <div className="align" >
          <h1 className="align" style={{ margin: 0, fontSize: TextSize }}>Nick&nbsp;</h1>
          <h1 className="align wylynko" style={{ margin: 0, fontSize: TextSize, }}>Wylynko</h1>
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
        <ul>
          <li>English</li>
          <li>Mathematics Applications</li>
          <li>Computer Science</li>
          <li>Digital Design</li>
        </ul>
        <h3>Experiences: </h3>
        <ul>
          <li>4 Week exchange to Virginia, USA to learn at St Christophers from March 24, 2019 to April 22</li>
        </ul>
        <h3>Skills: </h3>
        <ul style={{ flexDirection: "row" }}>
          <li>HTML, CSS, JS, Python, Nodejs, SQL, NoSQL, Reactjs, React Native (expo),
            Shell, Docker, GitHub, Photoshop, Blender, Word, Excel,
            PowerPoint, firebase, gcloud</li>
        </ul>
        <Hr printing={printing} />
        <ul>
          <li>Took apart and built Computers and different electronics</li>
          <li>Working with Networking, Servers, Websites</li>
          <li>Extensive knowledge and use of MacOS, Windows 10 and Linux</li>
          <li>highly productive in both a team and individual environment</li>
        </ul>
        <h3 style={printing ? { marginTop: 50 } : null}>Projects: </h3>
        <Projects printing={printing} mobile={mobile} />
        {/* <h3 style={printing ? {marginTop: 50} : null}>Certificates: </h3> */}
      </div>
    </div>
  );
}
