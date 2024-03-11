import { HeroesCard } from '@/components/heroesCard';
import styles from './page.module.css';
import { fetchHeroes } from '@/data/getHeroes';

export default async function Home() {
  const heroes = await fetchHeroes();
  return (
    <div className={styles.container}>
      {heroes.map((hero) => {
        return <HeroesCard key={hero.id} hero={hero} />;
      })}
    </div>
  );
}
