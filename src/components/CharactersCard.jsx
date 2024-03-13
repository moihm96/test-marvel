'use-client';

import { useState, useEffect } from 'react';

import styles from './charactersCard.module.css';

import { SmallFavIconOn } from '@/assets/SmallFavIconOn';
import { SmallFavIconOff } from '@/assets/SmallFavIconOff';
import { useFavoriteContext } from '@/context/favoriteContext';
import Link from 'next/link';

export const CharactersCard = ({ character }) => {
  const { favorites, addFavorite, removeFavorite } = useFavoriteContext();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.includes(character));
  }, [favorites, character]);

  const handleFavorites = () => {
    if (isFavorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
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
        <button className={styles.favButton} onClick={handleFavorites}>
          {isFavorite ? <SmallFavIconOn /> : <SmallFavIconOff />}
        </button>
      </div>
    </div>
  );
};
