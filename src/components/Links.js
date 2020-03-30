import React, {useContext} from 'react';
import {StoreContext} from '../store';
import { UpperCaseFirstLetter } from '../utils/UpperCaseFirstLetter';
import { font } from "./font";

export function Links({ links }) {
  const {printing} = useContext(StoreContext);

  if (links) {
    let render = <div children={[]}></div>;
    let keyN = 0;
    links.forEach((link) => {
      keyN++;
      if (link.type === "repo") {
        keyN++;
        let url_split = link.url.split('/');
        let hosting = UpperCaseFirstLetter(url_split[2].split('.')[0]);
        let name = url_split[url_split.length - 1];
        let text;
        if (render.props.children.length) {
          text = `, ${hosting} - ${name}`;
          if (printing) {
            text = `, ${hosting} [${link.url}]`;
          }
        }
        else {
          text = `${hosting}`;
          if (printing) {
            text = `${hosting} [${link.url}]`;
          }
        }
        render.props.children.push(<a className="maincolour" style={font(printing, 25, 0)} key={keyN} href={link.url}>{text}</a>);
      }
      else if (link.type === "production") {
        keyN++;
        let text;
        if (render.props.children.length) {
          text = `, Link`;
          if (printing) {
            text = `, Link [${link.url}]`;
          }
        }
        else {
          text = `Link`;
          if (printing) {
            text = `Link [${link.url}]`;
          }
        }
        render.props.children.push(<a className="maincolour" style={font(printing, 25, 0)} key={keyN} href={link.url}>{text}</a>);
      }
    });
    return (render);
  }
  else {
    return (null);
  }
}
