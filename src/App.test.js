import React from 'react';
import App from './App';
import { testComponent } from './utils/testComponent';

testComponent('App', <App />, { printing: false, stats: false, statsLoading: false })
testComponent('App', <App />, { printing: true, stats: false, statsLoading: false })
