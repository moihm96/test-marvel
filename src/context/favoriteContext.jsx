'use client';
import { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export function FavoriteWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        setFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  return useContext(FavoriteContext);
}
