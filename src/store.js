import React, { useState, createContext } from 'react';

export const StoreContext = createContext(null);

export default ({ children, _printing = false, _stats = false, _loadingStats = true }) => {
  const [printing, setPrinting] = useState(_printing);
  const [stats, setStats] = useState(_stats);
  const [loadingStats, setLoadingStats] = useState(_loadingStats);

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
