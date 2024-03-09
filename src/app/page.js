import { fetchHeroes } from "@/data/getHeroes";
import styles from "./page.module.css";

export default async function Home() {
  const heroes = await fetchHeroes();
  return (
    <main className={styles.main}>
      <div>
        {heroes && heroes.map((hero) => (
          <div>{hero.name}</div>
        ))}
      </div>
    </main>
  );
}
