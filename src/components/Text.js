import React, { useContext } from 'react';
import { StoreContext } from '../store';

export function LinkHeaderText(props) {
  const { printing } = useContext(StoreContext);

  if (printing) {
    return <p style={{ fontSize: '22px', margin: 1, padding: 1 }} {...props} />
  }

  return <p style={{ fontSize: '22px', margin: 1, padding: 1, color: 'LightBlue', textDecoration: 'underline' }} {...props} />
}

export function HeaderText(props) {
  return <p style={{ fontSize: '22px', margin: 1, padding: 1 }} {...props} />
}

export function BodyA(props) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a style={{ fontSize: '16px', margin: 1, padding: 1 }} {...props} />
}

export function BodyText(props) {
  return <p style={{ fontSize: '16px', margin: 1, padding: 1 }} {...props} />
}

export function SecondaryText(props) {
  return <p style={{ fontSize: '14px', margin: 1, padding: 1 }} {...props} />
}