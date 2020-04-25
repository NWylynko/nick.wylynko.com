import React, { useState, createContext } from 'react';

export const StoreContext = createContext(null);

export default ({ children, printing = false, stats = {}, loadingStats = true }) => {
  const [_printing, setPrinting] = useState(printing);
  const [_stats, setStats] = useState(stats);
  const [_loadingStats, setLoadingStats] = useState(loadingStats);

  const store = {
    printing: _printing,
    setPrinting,
    stats: _stats,
    setStats,
    loadingStats: _loadingStats,
    setLoadingStats
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
