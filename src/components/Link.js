import React, { useContext } from 'react';
import { StoreContext } from '../store';

import {BodyText, BodyA} from './Text'

export function Link() {
  const { printing } = useContext(StoreContext);
  if (printing) {
    return (<div>
      <BodyText className="maincolour">Website [nick.wylynko.com]</BodyText>
      <BodyText className="maincolour">Email [nick1014375@gmail.com]</BodyText>
      <BodyText className="maincolour">LinkedIn [nick.wylynko.com/linkedin]</BodyText>
      <BodyText className="maincolour">Github [nick.wylynko.com/github]</BodyText>
    </div>);
  }
  else {
    return (<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <BodyA className="maincolour" href="mailto:nick1014375@gmail.com">Email</BodyA>
      <BodyText> · </BodyText>
      <BodyA className="maincolour" href="https://linkedin.com/in/nick-wylynko-17a202193/">LinkedIn</BodyA>
      <BodyText> · </BodyText>
      <BodyA className="maincolour" href="https://github.com/nwylynko">Github</BodyA>
    </div>);
  }
}
