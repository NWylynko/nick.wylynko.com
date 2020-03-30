import React, { useContext } from 'react';
import { StoreContext } from '../store';

export function Link() {
  const { printing } = useContext(StoreContext);
  if (printing) {
    return (<div>
      <p className="maincolour" style={{ marginBottom: 5, marginTop: 5 }}>Website [nick.wylynko.com]</p>
      <p className="maincolour" style={{ marginBottom: 5, marginTop: 5 }}>Email [nick1014375@gmail.com]</p>
      <p className="maincolour" style={{ marginBottom: 5, marginTop: 5 }}>LinkedIn [nick.wylynko.com/linkedin]</p>
      <p className="maincolour" style={{ marginBottom: 5, marginTop: 5 }}>Github [nick.wylynko.com/github]</p>
    </div>);
  }
  else {
    return (<div>
      <a className="maincolour" href="mailto:nick1014375@gmail.com">Email ·</a>
      <a className="maincolour" href="https://linkedin.com/in/nick-wylynko-17a202193/"> LinkedIn </a>
      <a className="maincolour" href="https://github.com/nwylynko">· Github</a>
    </div>);
  }
}
