import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import CategorySelector from '../../components/CategorySelector';
import ExplanationQuadrants from '../../components/category/ExplanationQuadrants';
import type { Category } from '../../data/categories';
import categories, { Item } from '../../data/categories';
import styles from '../../styles/Category.module.css';
import { useCallback, useMemo, useState } from 'react';
import Quadrants from '../../components/category/Quadrants';
import GroupFilter from '../../components/category/GroupFilter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { locales } from '../_app';
import { InfoModalProvider } from '../../components/InfoModal';

interface Props {
  category: Category;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const categoryKeys = Object.keys(categories);
const categoryValues = Object.values(categories);

export const getStaticPaths: GetStaticPaths<Params> = async ({ locales, defaultLocale }) => {
  if (locales) {
    const paths = locales.flatMap((locale) =>
      categoryKeys.flatMap((category) => ({
        params: { id: category },
        locale,
      }))
    );

    return { paths, fallback: false };
  } else if (defaultLocale) {
    const paths = categoryKeys.flatMap((category) => ({
      params: { id: category },
      locale: defaultLocale,
    }));
    return { paths, fallback: false };
  } else {
    const paths = categoryKeys.map((category) => ({
      params: { id: category },
    }));
    return { paths, fallback: false };
  }
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params, locale }) => {
  const id = params?.id;
  const category = id ? categories[id] : undefined;

  const translations = locale ? await serverSideTranslations(locale, locales) : {};

  if (!category) {
    return { notFound: true };
  } else
    return {
      props: {
        category,
        ...translations,
      },
    };
};

const Category: NextPage<Props> = ({ category: categoryProp }) => {
  const { t } = useTranslation(['category', 'common']);
  const [category, setCategory] = useState<Category>(categoryProp);
  const allItems = useMemo(() => category.groups.flatMap((g) => g.items), [category]);
  const [items, setItems] = useState<Item[]>(allItems);
  const itemsByCategory = useMemo(
    () =>
      category.groups.reduce<Record<string, Item[]>>((acc, curr) => {
        acc[curr.id] = curr.items;
        return acc;
      }, {}),
    [category]
  );

  const onFilterChange = useCallback(
    (groups: string[]) => {
      if (groups[0] === 'all') {
        setItems(allItems);
      } else {
        const newItems = groups.map((g) => itemsByCategory[g]).flat();
        setItems(newItems);
      }
    },
    [itemsByCategory, allItems]
  );

  return (
    <>
      <Head>
        <title>
          {t('category:pageTitle', {
            area: t(`common:areaNames.${category.link}`, category.name),
          })}
        </title>
      </Head>
      <InfoModalProvider>
        <main className={styles.main}>
          <div>
            <h2 className={styles.categoryHeader}>{t('filterByArea')}</h2>
            <CategorySelector categories={categoryValues} asButtons onClick={setCategory} />
          </div>
          <GroupFilter groups={category.groups} onFilterChange={onFilterChange} />
          <div className={styles.separator} />
          <Quadrants items={items} />
          <ExplanationQuadrants />
        </main>
      </InfoModalProvider>
    </>
  );
};

export default Category;
