import React from 'react';
import StoreProvider from '../../store';

import Links from '.';

const testLinks = [{
  name: "Github / Source",
  url: "https://github.com/nwylynko/MiniNotes"
},
{
  name: "Link / Demo",
  url: "https://mininotes-420.web.app"
}
]

export const notPrinting = () => <StoreProvider printing={false}><Links links={testLinks}/></StoreProvider>;
export const printing = () => <StoreProvider printing={true}><Links links={testLinks}/></StoreProvider>;

export default {
    title: 'Links',
    component: notPrinting,
  };