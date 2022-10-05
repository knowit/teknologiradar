import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import categories from "../data/categories";
import CategorySelector from "../components/CategorySelector";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionWrapper}>
        <p className={styles.description}>
          Velkommen til Knowit Techradar. Punktene på radaren er resultatet av
          interne workshops og flere runder med teamene våre. Dette
          representerer vår kompetanse, kunnskap og det vi tror er essensielt i
          nær fremtid.
        </p>
      </div>

      <div className={styles.categoryWrapper}>
        <CategorySelector categories={Object.values(categories)} />
      </div>
    </div>
  );
};

export default Home;
