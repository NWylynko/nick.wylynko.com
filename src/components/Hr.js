import React, {useContext} from 'react';
import {StoreContext} from '../store'

export function Hr() {
  const {printing} = useContext(StoreContext);

  if (printing) {
    return (null);
  }
  else {
    return (<hr />);
  }
}
