import React from 'react';
import StoreProvider from '../../store';
import { LinkHeaderText, HeaderText, BodyA, BodyText, SecondaryText } from './Text';

export const LinkHeader_notPrinting = () => <StoreProvider printing={false}><LinkHeaderText>Testing LinkHeader</LinkHeaderText></StoreProvider>;
export const LinkHeader_printing = () => <StoreProvider printing={true}><LinkHeaderText>Testing LinkHeader</LinkHeaderText></StoreProvider>;

export const Header = () => <HeaderText>Testing Header</HeaderText>;

export const BodyLink = () => <BodyA>Testing BodyLink</BodyA>;

export const Body = () => <BodyText>Testing Body</BodyText>;

export const Secondary = () => <SecondaryText>Testing Secondary</SecondaryText>;

export default {
    title: 'Text',
    component: LinkHeader_notPrinting,
  };