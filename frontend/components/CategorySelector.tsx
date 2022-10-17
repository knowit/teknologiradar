import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Category } from '../data/categories';
import styles from './CategorySelector.module.css';

interface Props {
  categories: Category[];
  asButtons?: boolean;
  onClick?: (category: Category) => void;
}

interface CategoryComponentProps {
  category: Category;
  current?: boolean;
  asButton?: boolean;
  onClick: (category: Category) => void;
}

const CategoryComponent = ({ category, current, asButton, onClick }: CategoryComponentProps) => {
  const { t } = useTranslation('common');
  const classNames = `${styles.categoryContent} ${current ? styles.current : undefined} ${asButton ? styles.button : undefined}`;
  if (asButton) {
    return (
      <button onClick={() => onClick(category)} className={classNames}>
        {t(`areaNames.${category.link}`, category.name)}
      </button>
    );
  } else {
    return (
      <Link href={`/category/${category.link}`}>
        <a aria-current={current ? 'page' : undefined} className={classNames}>
          {t(`areaNames.${category.link}`, category.name)}
        </a>
      </Link>
    );
  }
};

const CategorySelector = ({ categories, asButtons, onClick }: Props) => {
  const { query, push } = useRouter();

  const onClicked = (category: Category) => {
    push({ pathname: `/category/${category.link}` }, undefined, {
      shallow: true,
    });
    onClick?.(category);
  };

  const sortedCategories = categories.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <nav>
      <ul className={styles.categoryList}>
        {sortedCategories.map((category) => (
          <li key={category.link} className={styles.categoryListItem}>
            <CategoryComponent category={category} onClick={onClicked} asButton={asButtons} current={category.link === query.id} />
            {category.link === query.id && <div className={styles.activeIndicator} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategorySelector;
