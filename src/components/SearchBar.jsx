'use client';

import styles from './searchBar.module.css';
import { SearchIcon } from '@/assets/SearchIcon';
import { useCountContext } from '@/context/countContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const SearchBar = () => {
  const [querySearch, setQuerySearch] = useState('');
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key == 'Enter' && querySearch.trim() != '') {
      router.push(`/searches/${querySearch}`);
    }
  };

  const { count } = useCountContext();

  return (
    <div>
      <div className={styles.container}>
        <SearchIcon />
        <input
          value={querySearch}
          type="text"
          placeholder="SEARCH A CHARACTER..."
          onChange={(e) => setQuerySearch(e.target.value)}
          onKeyDown={handleSearch}
          className={styles.input}
        />
      </div>
      <p className={styles.results}>{count} results</p>
    </div>
  );
};
