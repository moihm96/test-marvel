'use client';

import { useFavoriteContext } from '@/context/favoriteContext';
import Character from '@/components/Character';
import { usePathname } from 'next/navigation';

const FavoritePage = () => {
  const { favorites } = useFavoriteContext();
  const pathName = usePathname();
  return (
    <Character
      characters={favorites}
      count={favorites.length}
      pathName={pathName}
    />
  );
};

export default FavoritePage;
