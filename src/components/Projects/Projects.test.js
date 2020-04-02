import React from 'react';
import { Projects } from './Projects';
import { testComponent } from '../../utils/testComponent';

testComponent('Projects', <Projects />, { printing: false, stats: false, statsLoading: false })
