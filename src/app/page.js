import Character from '@/components/Character';
import { fetchCharacters } from '@/data/api';

export default async function Home() {
  const { characters, count } = await fetchCharacters();
  return <Character characters={characters} count={count} />;
}
