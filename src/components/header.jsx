import { FavouriteIcon } from '@/assets/FavouriteIcon';
import { MarveLogo } from '@/assets/MarveLogo';

import styles from './header.module.css';

export const Header = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <MarveLogo />
    </div>
    <div className={styles.favouriteWrapper}>
      <FavouriteIcon />
      <p>3</p>
    </div>
  </div>
);
