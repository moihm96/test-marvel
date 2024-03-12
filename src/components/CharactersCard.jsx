'use-client';
import { useState } from 'react';
import styles from './charactersCard.module.css';

import { SmallFavIconOn } from '@/assets/SmallFavIconOn';
import { SmallFavIconOff } from '@/assets/SmallFavIconOff';
import { useFavoriteContext } from '@/context/favoriteContext';

export const CharactersCard = ({ character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { favorites, setFavorites } = useFavoriteContext();

  const addFavorites = () => {
    if (isFavorite == false) {
      setFavorites([...favorites, character]);
      setIsFavorite(!isFavorite);
    } else {
      const favoritesAfterRemoved = favorites.filter((favorite) => {
        return favorite.id != character.id;
      });
      setFavorites(favoritesAfterRemoved);
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <div key={character.id} className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width="188"
          height="190"
          className={styles.responsiveImage}
        />
      </div>
      <div className={styles.cardFooter}>
        <p>{character.name}</p>
        <button className={styles.favButton} onClick={addFavorites}>
          {isFavorite ? <SmallFavIconOn /> : <SmallFavIconOff />}
        </button>
      </div>
    </div>
  );
};
