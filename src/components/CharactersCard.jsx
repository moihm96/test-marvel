'use-client';
import styles from './charactersCard.module.css';

import { SmallFavIconOn } from '@/assets/SmallFavIconOn';

export const CharactersCard = ({ character }) => {
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
        <SmallFavIconOn />
      </div>
    </div>
  );
};
