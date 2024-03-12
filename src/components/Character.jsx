'use client';
import { useCountContext } from '@/context/countContext';
import styles from './character.module.css';

import { CharactersCard } from '@/components/CharactersCard';
import { useEffect } from 'react';

const Character = ({ characters, count }) => {
  const { setCount } = useCountContext();

  useEffect(() => {
    setCount(count);
  }, [setCount, count]);

  return (
    <div className={styles.container}>
      {characters.map((character) => {
        return <CharactersCard key={character.id} character={character} />;
      })}
    </div>
  );
};

export default Character;
