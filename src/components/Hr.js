import React from 'react';
export function Hr({ printing }) {
  if (printing) {
    return (null);
  }
  else {
    return (<hr />);
  }
}
