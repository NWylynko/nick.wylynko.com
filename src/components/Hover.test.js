import React from 'react';
import { Hover } from './Hover';
import { testComponent } from '../utils/testComponent';

testComponent('Hover', <Hover overlay={<p>testing</p>} ><p>testing</p></Hover>, { _printing: false, _stats: false, _statsLoading: false })
