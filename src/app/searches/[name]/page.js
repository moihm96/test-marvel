import Character from '@/components/Character';

import { searchCharacters } from '@/data/api';

export default async function SearchesPage({ params }) {
  const { name } = params;
  const { characters, count } = await searchCharacters(name);

  return <Character characters={characters} count={count} />;
}
