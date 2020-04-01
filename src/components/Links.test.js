import React from 'react';
import { Links } from './Links';
import { testComponent } from '../utils/testComponent';

const testLinks = [{
    name: "Github / Source",
    url: "https://github.com/nwylynko/MiniNotes"
  },
  {
    name: "Link / Demo",
    url: "https://mininotes-420.web.app"
  }
]

testComponent('Links', <Links links={testLinks} />, {_printing: false, _stats: false, _statsLoading: false})
