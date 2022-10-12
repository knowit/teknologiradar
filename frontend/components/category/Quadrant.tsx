import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import { Item } from '../../data/categories';
import styles from './Quadrant.module.css';
import QuadrantButton from './QuadrantButton';
import { groupedQuadrants, QuadrantType } from './Quadrants';

interface Props {
  id: QuadrantType;
  name: string;
  description: string;
  items?: Item[];
  /** Callback on expand / collapse */
  setExpandedId: (id: QuadrantType | null) => void;
  expandedId: QuadrantType | null;
}

const Quadrant = ({ id, name, description, items, setExpandedId, expandedId }: Props) => {
  const pinnedQuadrants: Array<QuadrantType> = [QuadrantType.Priorities, QuadrantType.Hold];

  const { t } = useTranslation('category');
  const descriptionId = `${id}_description`;
  const isExpanded = expandedId === id;

  const showQuadrant =
    expandedId === null ||
    isExpanded ||
    !groupedQuadrants.includes(id) ||
    !groupedQuadrants.includes(expandedId);

  const titleClass = `${styles.titleWrapper} ${isExpanded ? styles.expanded : ''}`;

  return (
    <>
      {showQuadrant && (
        <div className={styles.wrapper}>
          <div className={styles.headingWrapper}>
            <div className={titleClass}>
              <h2 id={id} className={styles.quadrantTitle}>
                {name}
              </h2>
              <QuadrantButton
                id={id}
                selectedValue={expandedId}
                onClick={() => setExpandedId(isExpanded ? null : id)}
              />
            </div>
            <p id={descriptionId} className={styles.description}>
              {description}
            </p>
          </div>
          <ul className={styles.quadrantList} aria-labelledby={id} aria-describedby={descriptionId}>
            {items ? (
              items?.map((item) => (
                <li key={item.name} className={styles.quadrantListItem}>
                  {item.name}
                </li>
              ))
            ) : (
              <p>{t('noContent')}</p>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default memo(Quadrant);
