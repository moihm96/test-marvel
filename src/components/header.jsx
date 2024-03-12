import { FavouriteIcon } from '@/assets/FavouriteIcon';
import { MarveLogo } from '@/assets/MarveLogo';

import styles from './header.module.css';
import Link from 'next/link';

export const Header = () => (
  <div className={styles.container}>
    <Link className={styles.logo} href="/">
      <MarveLogo />
    </Link>
    <div className={styles.favouriteWrapper}>
      <FavouriteIcon />
      <p>3</p>
    </div>
  </div>
);
