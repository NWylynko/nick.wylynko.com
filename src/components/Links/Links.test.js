import React from 'react';
import { Links } from './Links';
import { testComponent } from '../../utils/testComponent';

const testLinks = [{
  name: "Github / Source",
  url: "https://github.com/nwylynko/MiniNotes"
},
{
  name: "Link / Demo",
  url: "https://mininotes-420.web.app"
}
]

testComponent('Links', <Links links={testLinks} />, { printing: false })
testComponent('Links', <Links links={testLinks} />, { printing: true })
testComponent('Links no links', <Links />, {})
