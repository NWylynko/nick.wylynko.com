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
      <div className="align">
        <ClickToShowImage image={<img src={image} alt={title} />}>
          <LinkHeaderText className="align">{title.toUpperCase()}</LinkHeaderText>
          <SecondaryText className="align">&nbsp;{info}</SecondaryText>
        </ClickToShowImage>
      </div>
      <BodyText>{body}</BodyText>
      {stat ? loadingStats ? <BodyText>Loading...</BodyText> : <BodyText>{stater(stat, stats[stat])}</BodyText> : null}
      <Links links={links} />
    </div>
  );
}
