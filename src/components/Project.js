import React from 'react';
import { Links } from './Links';
import { Hover } from './Hover';
import { font } from './font';
export function Project({ printing, mobile, subtitle, title, title_info, body, links, image }) {
  return (<div className="tile" style={{
    marginTop: 25,
    marginBottom: 25,
    marginRight: mobile ? 5 : 50,
    marginLeft: mobile ? 5 : 50,
  }}>
    <p style={font(printing, 20, 3)}>{subtitle}</p>
    <div className="align">
      <Hover overlay={<img src={image} alt={title} />}>
        <p className="align" style={font(printing, 32, 3, { color: 'LightBlue', textDecoration: 'underline' })}>{title.toUpperCase()}</p>
        <p className="align" style={font(printing, 25, 3)}>&nbsp;{title_info}</p>
      </Hover>
    </div>
    <p style={font(printing, 25, 3)}>{body}</p>
    <Links printing={printing} links={links} />
  </div>);
}
