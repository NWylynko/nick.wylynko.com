import React from 'react';
export function Hover({ children, overlay }) {
  const [hovering, set_hovering] = React.useState(false);
  function Overlay() {
    // if user hovering
    if (hovering) {
      // if image is defined
      if (overlay.props.src) {
        return (overlay);
      }
      else {
        return (null);
      }
    }
    else {
      return (null);
    }
  }
  return (<div
    // onMouseEnter={() => { set_hovering(true) }}
    // onMouseLeave={() => { set_hovering(false) }}>
    onClick={() => { set_hovering(!hovering); }}>
    {children}
    <Overlay />
  </div>);
}
