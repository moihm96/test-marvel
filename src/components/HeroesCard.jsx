'use-client';
import styles from './heroesCard.module.css';

import { SmallFavIconOn } from '@/assets/SmallFavIconOn';

export const HeroesCard = ({ hero }) => {
  return (
    <div key={hero.id} className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
          width="188"
          height="190"
          className={styles.responsiveImage}
        />
      </div>
      <div className={styles.cardFooter}>
        <p>{hero.name}</p>
        <SmallFavIconOn />
      </div>
    </div>
  );
};

//
