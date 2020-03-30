import React, {useState, createContext} from 'react';

export const StoreContext = createContext(null);

export default ({children}) => {
  const [mobile, setMobile] = useState(false);
  const [printing, setPrinting] = useState(false);

  const store = {
    mobile,
    setMobile,
    printing,
    setPrinting,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
