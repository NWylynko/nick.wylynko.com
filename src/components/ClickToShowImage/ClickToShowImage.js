import React from 'react';

export function ClickToShowImage({ children, image }) {
  const [hovering, set_hovering] = React.useState(false);
  function Overlay() {
    // if user hovering
    if (hovering) {
      // if image is defined
      if (image?.props?.src) {
        return (image);
      }
      else {
        return (null);
      }
    }
    else {
      return (null);
    }
  }
  return (
  <div
    onClick={() => { set_hovering(!hovering); }}>
    {children}
    <Overlay />
  </div>
  );
}
