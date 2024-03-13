'use client';
import { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export function FavoriteWrapper({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => {
    if (!favorites.includes(favorite)) setFavorites([...favorites, favorite]);
  };
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };
  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  return useContext(FavoriteContext);
}
