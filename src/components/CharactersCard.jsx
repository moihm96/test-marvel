'use-client';
import { useState } from 'react';
import styles from './charactersCard.module.css';

import { SmallFavIconOn } from '@/assets/SmallFavIconOn';
import { SmallFavIconOff } from '@/assets/SmallFavIconOff';
import { useFavoriteContext } from '@/context/favoriteContext';
import Link from 'next/link';
import { isAlreadyFavorite } from '@/app/utils/help';

export const CharactersCard = ({ character }) => {
  const { favorites, setFavorites } = useFavoriteContext();

  const isJustFavorite = isAlreadyFavorite(favorites, character);
  const [isFavorite, setIsFavorite] = useState(isJustFavorite);

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
        <Link href={`character/${character.id}`}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            width="188"
            height="190"
            className={styles.responsiveImage}
          />
        </Link>
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
