'use-client';
import { SearchIcon } from '@/assets/SearchIcon';
import { useState } from 'react';

export const SearchBar = () => {
  const [querySearch, setQuerySearch] = useState('');
  return (
    <div>
      <SearchIcon />
      <input
        value={querySearch}
        type="text"
        placeholder="SEARCH A CHARACTER..."
      />
    </div>
  );
};
