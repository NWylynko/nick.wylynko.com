import React from 'react';

import {Project} from './Project';
import {Hr} from './Hr';

import {projects} from '../data'

export const Projects = () => projects.map(project => (
      <div key={project.id}><Project {...project} /><Hr /></div>))