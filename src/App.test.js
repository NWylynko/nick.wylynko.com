import React from 'react';
import App from './App';
import { testComponent } from './utils/testComponent';

testComponent('App', <App />, {_printing: false, _stats: false, _statsLoading: false})
testComponent('App', <App />, {_printing: true, _stats: false, _statsLoading: false})