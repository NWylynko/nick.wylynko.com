import React, { useContext } from 'react';
import { StoreContext } from '../../store';
import Links from '../Links';
import ClickToShowImage from '../ClickToShowImage';
import { stater } from '../../data';

import { BodyText, SecondaryText, LinkHeaderText } from '../Text/'

export function Project({ subtitle, title, info, body, links, image, stat }) {

  const { stats, loadingStats } = useContext(StoreContext);

  return (
    <div className="tile">
      <SecondaryText>{subtitle}</SecondaryText>
        <ClickToShowImage image={<img src={image} alt={title} />}>
            <LinkHeaderText>{title.toUpperCase()}</LinkHeaderText>
            <SecondaryText>&nbsp;{info}</SecondaryText>
        </ClickToShowImage>
      <BodyText>{body}</BodyText>
      {stat ? loadingStats ? <BodyText>Loading...</BodyText> : <BodyText>{stater(stat, stats[stat])}</BodyText> : null}
      <div style={{display: 'flex'}}>
        <Links links={links} />
      </div>
    </div>
  );
}
