import React, {useContext} from 'react';
import {StoreContext} from '../store';
import { Links } from './Links';
import { Hover } from './Hover';
import { font } from './font';

export function Project({ subtitle, title, info, body, links, image }) {

  const {mobile, printing} = useContext(StoreContext);
  
  return (<div className="tile" style={{
    marginRight: mobile ? 5 : 50,
    marginLeft: mobile ? 5 : 50,
  }}>
    <p style={font(printing, 20, 3)}>{subtitle}</p>
    <div className="align">
      <Hover overlay={<img src={image} alt={title} />}>
        <p className="align" style={font(printing, 32, 3, { color: 'LightBlue', textDecoration: 'underline' })}>{title.toUpperCase()}</p>
        <p className="align" style={font(printing, 25, 3)}>&nbsp;{info}</p>
      </Hover>
    </div>
    <p style={font(printing, 25, 3)}>{body}</p>
    <Links links={links} />
  </div>);
}
