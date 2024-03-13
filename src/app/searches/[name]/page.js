import Characters from '@/components/Characters';

import { searchCharacters } from '@/data/api';

export default async function SearchesPage({ params }) {
  const { name } = params;
  const { characters, count } = await searchCharacters(name);

  return <Characters characters={characters} count={count} />;
}
