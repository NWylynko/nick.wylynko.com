import React, {useState, createContext} from 'react';

export const StoreContext = createContext(null);

export default ({children}) => {
  const [printing, setPrinting] = useState(false);
  const [stats, setStats] = useState(false);
  const [loadingStats, setLoadingStats] = useState(true);

  const store = {
    printing,
    setPrinting,
    stats, 
    setStats,
    loadingStats, 
    setLoadingStats
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
