import React from 'react';
import { Hover } from './Hover';
import { certs } from '../data'

import { BodyText, LinkHeaderText } from './Text'

export const Certificates = () => certs.map(cert => (
  <div key={cert.id}>
    <Hover overlay={<img src={cert.image} alt={cert.name} />}>
      <LinkHeaderText className="align">{cert.name} - {cert.date}</LinkHeaderText>
      <BodyText className="align">{cert.body}</BodyText>
    </Hover>
    <hr />
  </div>
))