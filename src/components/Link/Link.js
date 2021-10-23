import React, { useContext } from 'react';
import { StoreContext } from '../../store';

import { BodyText, BodyA } from '../Text/'

export function Link() {
  const { printing } = useContext(StoreContext);
  if (printing) {
    return (<div>
      <BodyText>Website [nick.wylynko.com]</BodyText>
      <BodyText>Email [nick@wylynko.com]</BodyText>
      <BodyText>LinkedIn [nick.wylynko.com/linkedin]</BodyText>
      <BodyText>Github [nick.wylynko.com/github]</BodyText>
    </div>);
  }
  else {
    return (<div style={{ justifyContent: 'center' }}>
      <BodyA href="mailto:nick@wylynko.com">Email</BodyA>
      <BodyText> · </BodyText>
      <BodyA href="https://linkedin.com/in/nick-wylynko/">LinkedIn</BodyA>
      <BodyText> · </BodyText>
      <BodyA href="https://github.com/nwylynko">Github</BodyA>
    </div>);
  }
}
