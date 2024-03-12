'use client';

import Comic from './Comic';
import { useState } from 'react';
import styles from './characterCard.module.css';
import { SmallFavIconOff } from '@/assets/SmallFavIconOff';
import { SmallFavIconOn } from '@/assets/SmallFavIconOn';
import { useFavoriteContext } from '@/context/favoriteContext';
import { isAlreadyFavorite } from '@/app/utils/help';

const CharacterCard = ({ character, comics }) => {
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
            <button className={styles.favButton} onClick={addFavorites}>
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
