'use client';
import { useCountContext } from '@/context/countContext';
import styles from './character.module.css';

import { CharactersCard } from '@/components/CharactersCard';
import { useEffect } from 'react';
import { SearchBar } from './SearchBar';
const favoriteUrl = '/favorites';

const Character = ({ characters, count, pathName }) => {
  const { setCount } = useCountContext();

  const isFavoritePage = pathName == favoriteUrl;

  useEffect(() => {
    setCount(count);
  }, [setCount, count]);

  return (
    <div>
      {isFavoritePage && <p className={styles.favTitle}>FAVORITES</p>}
      <SearchBar />
      <div className={styles.container}>
        {characters.map((character) => {
          return <CharactersCard key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
};

export default Character;
