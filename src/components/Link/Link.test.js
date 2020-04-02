import React from 'react';
import { Link } from './Link';
import { testComponent } from '../../utils/testComponent';

testComponent('Link', <Link />, { printing: false })
testComponent('Link', <Link />, { printing: true })
