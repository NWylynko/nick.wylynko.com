import React, {useContext} from 'react';
import {StoreContext} from '../store';
import { Links } from './Links';
import { Hover } from './Hover';
import {stater} from '../data'

export function Project({ subtitle, title, info, body, links, image, stat }) {

  const {mobile, printing, stats, LoadingStats} = useContext(StoreContext);

  if (printing) {
    return (
      <div className="tile" >
        <p style={{ fontSize: 10, margin: 3 }}>{subtitle}</p>
        <div className="align">
          <p style={{fontSize: 20, margin: 3}}>{title.toUpperCase()}</p>
          <p style={{fontSize: 15, margin: 3}}>&nbsp;{info}</p>
        </div>
        <p style={{fontSize: 15, margin: 3}}>{body}</p>
        { stat ? LoadingStats ? <p style={{fontSize: 15, margin: 3}}>Loading...</p> : <p style={{fontSize: 15, margin: 3}}>{stater(stat, stats[stat])}</p> : null }
        <Links links={links} />
      </div>
    )
  }
  
  return (<div className="tile" style={{
    marginRight: mobile ? 5 : 50,
    marginLeft: mobile ? 5 : 50,
  }}>
    <p style={{fontSize: 20, margin: 3}}>{subtitle}</p>
    <div className="align">
      <Hover overlay={<img src={image} alt={title} />}>
        <p className="align" style={{fontSize: 32, margin: 3, color: 'LightBlue', textDecoration: 'underline' }}>{title.toUpperCase()}</p>
        <p className="align" style={{fontSize: 25, margin: 3}}>&nbsp;{info}</p>
      </Hover>
    </div>
    <p style={{fontSize: 25, margin: 3}}>{body}</p>
    { stat ? LoadingStats ? <p style={{fontSize: 25, margin: 3}}>Loading...</p> : <p style={{fontSize: 25, margin: 3}}>{stater(stat, stats[stat])}</p> : null }
    <Links links={links} />
  </div>);
}
