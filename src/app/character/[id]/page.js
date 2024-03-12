import CharacterCard from '@/components/CharacterCard';
import { fetchCharacter } from '@/data/api';

export default async function CharacterPage({ params }) {
  const { id } = params;
  const { character, comics } = await fetchCharacter(id);
  return (
    <div>
      <CharacterCard character={character} comics={comics} />
    </div>
  );
}
