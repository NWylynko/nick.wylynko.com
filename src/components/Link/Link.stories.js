import React from 'react';
import StoreProvider from '../../store';

import Link from '.';

export const notPrinting = () => <StoreProvider printing={false}><Link/></StoreProvider>;
export const printing = () => <StoreProvider printing={true}><Link/></StoreProvider>;

export default {
    title: 'Link',
    component: notPrinting,
  };