import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Home.module.css";
import categories from "../data/categories";
import CategorySelector from "../components/CategorySelector";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <Head>
        <title>{t("pageTitle")}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{t("introduction")}</p>
        </div>

        <div className={styles.categoryWrapper}>
          <CategorySelector categories={Object.values(categories)} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = locale
    ? await serverSideTranslations(locale, ["common", "home"])
    : {};
  return {
    props: {
      ...translations,
    },
  };
};

export default Home;
