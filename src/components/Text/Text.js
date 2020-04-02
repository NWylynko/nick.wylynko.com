import React, { useContext } from 'react';
import { StoreContext } from '../../store';
import styles from './style.module.css'

export function LinkHeaderText(props) {
  const { printing } = useContext(StoreContext);

  if (printing) {
    return <p className={styles.large} {...props} />
  }

  return <p className={[styles.large, styles.Link].join(' ')} {...props} />
}

export function HeaderText(props) {
  return <p className={styles.large} {...props} />
}

export function BodyA(props) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a className={styles.medium} {...props} />
}

export function BodyText(props) {
  return <p className={styles.medium} {...props} />
}

export function SecondaryText(props) {
  return <p className={styles.small} {...props} />
}