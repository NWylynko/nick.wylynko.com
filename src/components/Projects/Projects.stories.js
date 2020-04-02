import React from 'react';
import StoreProvider from '../../store';
import {Projects} from './Projects';

export const notPrinting = () => <StoreProvider printing={false}><Projects /></StoreProvider>;
export const printing = () => <StoreProvider printing={true}><Projects /></StoreProvider>;

export default {
    title: 'Projects',
    component: notPrinting,
  };