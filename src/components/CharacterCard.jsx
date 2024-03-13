'use client';

import { useState, useEffect } from 'react';

import Comic from './Comic';
import styles from './characterCard.module.css';
import { SmallFavIconOff } from '@/assets/SmallFavIconOff';
import { SmallFavIconOn } from '@/assets/SmallFavIconOn';
import { useFavoriteContext } from '@/context/favoriteContext';

const CharacterCard = ({ character, comics }) => {
  const { favorites, addFavorite, removeFavorite } = useFavoriteContext();

  const [isFavorite, setIsFavorite] = useState(
    favorites.find((favorite) => favorite.id == character.id) != undefined,
  );

  useEffect(() => {
    setIsFavorite(
      favorites.find((favorite) => favorite.id == character.id) != undefined,
    );
  }, [favorites, character]);

  const handleFavorites = () => {
    if (isFavorite) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div>
      <div className={styles.characterContainer}>
        <div className={styles.imageContainer}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            width="320"
            height="320"
            className={styles.responsiveImage}
          />
        </div>
        <div className={styles.characterInfo}>
          <div className={styles.nameContainer}>
            <p className={styles.name}>{character.name}</p>
            <button className={styles.favButton} onClick={handleFavorites}>
              {isFavorite ? <SmallFavIconOn /> : <SmallFavIconOff />}
            </button>
          </div>
          <p>{character.description}</p>
        </div>
      </div>
      <div className={styles.comicsContainer}>
        {comics.map((comic) => (
          <Comic key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
};

export default CharacterCard;
