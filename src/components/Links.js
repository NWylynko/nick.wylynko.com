import React, { useContext } from 'react';
import { StoreContext } from '../store';

export function Links({ links }) {
  const { printing } = useContext(StoreContext);

  if (links) {
    if (printing) {
      return links.map((link, i) => <p className="maincolour" style={{ fontSize: 15, margin: 0 }} key={i}>{link.name} [{link.url}]</p>)
    }
    return links.map((link, i) => <a className="maincolour" style={{ fontSize: 25, margin: 0 }} key={i} href={link.url}>{i > 0 ? ', ' : ''}{link.name}</a>)
  }
  else {
    return (null);
  }
}
