import React from 'react';
import StoreProvider from '../../store';

import Certificates from '.';

export const normal = () => <StoreProvider printing={false}><Certificates/></StoreProvider>;

export default {
    title: 'Certificates',
    component: normal,
  };