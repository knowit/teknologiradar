import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import CategorySelector from "../../components/CategorySelector";
import ExplanationQuadrants from "../../components/ExplanationQuadrants";
import categories, { Item } from "../../data/categories";
import type { Category } from "../../data/categories";
import styles from "../../styles/Category.module.css";
import { useCallback, useMemo, useState } from "react";
import Quadrants from "../../components/Quadrants";
import GroupFilter from "../../components/GroupFilter";

interface Props {
  category: Category;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const categoryKeys = Object.keys(categories);
const categoryValues = Object.values(categories);

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = categoryKeys.map((category) => ({
    params: { id: category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const id = params?.id;
  const category = id ? categories[id] : undefined;

  if (!category) {
    return { notFound: true };
  } else return { props: { category } };
};

const Category: NextPage<Props> = ({ category: categoryProp }) => {
  const [category, setCategory] = useState<Category>(categoryProp);
  const allItems = useMemo(
    () => category.groups.flatMap((g) => g.items),
    [category]
  );
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
      console.log(groups);
      if (groups[0] === "all") {
        setItems(allItems);
      } else {
        const newItems = groups.map((g) => itemsByCategory[g]).flat();
        console.log(newItems);
        setItems(newItems);
      }
    },
    [itemsByCategory, allItems]
  );

  return (
    <>
      <div className={styles.leftAligned}>
        <h2>Filter by Work area</h2>
        <CategorySelector
          categories={categoryValues}
          asButtons
          onClick={setCategory}
        />
        <GroupFilter groups={category.groups} onFilterChange={onFilterChange} />
      </div>
      <div className={styles.separator} />
      <Quadrants items={items} />
      <ExplanationQuadrants />
    </>
  );
};

export default Category;
