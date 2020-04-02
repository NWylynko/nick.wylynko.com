import React from 'react';
import ClickToShowImage from '../ClickToShowImage/';
import { certs } from '../../data'
import Links from '../Links/';
import { BodyText, LinkHeaderText } from '../Text/'

export const Certificates = () => certs.map(cert => (
  <div key={cert.id}>
    <ClickToShowImage image={<img src={cert.image} alt={cert.name} />}>
      <LinkHeaderText className="align">{cert.name} - {cert.date}</LinkHeaderText>
      <BodyText className="align">{cert.body}</BodyText>
    </ClickToShowImage>
    <Links links={cert.links} />
    <hr />
  </div>
))