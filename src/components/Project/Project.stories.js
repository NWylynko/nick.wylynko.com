import React from 'react';
import StoreProvider from '../../store';
import img from '../../img/img'
import {Project} from './Project';

const testProject = {
    id: 1,
    subtitle: "2020 - Myself",
    title: "Fountains",
    info: "IPhone, Android - Expo (React Native), firebase",
    body: "Public map of water fountains around the world.",
    image: img.projects.fountains,
    links: [{
      name: "Link / Demo",
      url: "exp://exp.host/@nwylynko/fountains"
    }],
    stat: 'fountains'
  }

export const notPrinting = () => <StoreProvider printing={false}><Project {...testProject}/></StoreProvider>;
export const printing = () => <StoreProvider printing={true}><Project {...testProject}/></StoreProvider>;

export default {
    title: 'Project',
    component: notPrinting,
  };