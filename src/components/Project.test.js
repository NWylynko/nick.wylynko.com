import React from 'react';
import { Project } from './Project';
import { testComponent } from '../utils/testComponent';
import img from '../img/img'

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

testComponent('Project', <Project {...testProject} />, { _printing: false, _stats: false, _statsLoading: false })
