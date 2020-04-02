import React from 'react';
import ClickToShowImage from '.';
import img from '../../img/img'

export const normal = () => <ClickToShowImage image={<img src={img.projects.mininotes} alt="u clicked" />} ><p>click me</p></ClickToShowImage>;

export default {
    title: 'ClickToShowImage',
    component: normal,
  };