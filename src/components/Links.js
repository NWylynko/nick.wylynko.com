import React, { useContext } from 'react';
import { StoreContext } from '../store';

import { BodyText, BodyA } from './Text'

export function Links({ links }) {
  const { printing } = useContext(StoreContext);

  if (links) {
    if (printing) {
      return links.map((link, i) => <BodyText className="maincolour" key={i}>{link.name} [{link.url}]</BodyText>)
    }
    return links.map((link, i) => <BodyA className="maincolour" key={i} href={link.url}>{link.name}</BodyA>)
  }
  else {
    return (null);
  }
}
