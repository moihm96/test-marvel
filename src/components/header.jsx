'use client';
import { FavoriteIcon } from '@/assets/FavoriteIcon';
import { MarveLogo } from '@/assets/MarveLogo';

import styles from './header.module.css';
import Link from 'next/link';
import { useFavoriteContext } from '@/context/favoriteContext';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { favorites } = useFavoriteContext();
  const [numberOfFavorites, setNumberOfFavorites] = useState(0);

  useEffect(() => {
    if (favorites && favorites.length > 0) {
      setNumberOfFavorites(favorites.length);
    } else if (favorites.length == 0) {
      setNumberOfFavorites(0);
    }
  }, [favorites, setNumberOfFavorites]);

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <MarveLogo />
      </Link>
      <Link className={styles.favoriteWrapper} href="/favorites">
        <FavoriteIcon />
        <p className={styles.numberOfFavorites}>{numberOfFavorites}</p>
      </Link>
    </div>
  );
};
