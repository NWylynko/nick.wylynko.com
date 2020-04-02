import React from 'react';

import Project from '../Project/';

import { projects } from '../../data'

export const Projects = () => projects.map(
  project => (
    <div key={project.id}>
      <Project {...project} />
      <hr />
    </div>
  )
)