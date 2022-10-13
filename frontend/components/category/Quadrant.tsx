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
  index?: number;
}

const CloseSvg = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 8"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.66683 1.27337L8.72683 0.333374L5.00016 4.06004L1.2735 0.333374L0.333496 1.27337L4.06016 5.00004L0.333496 8.72671L1.2735 9.66671L5.00016 5.94004L8.72683 9.66671L9.66683 8.72671L5.94016 5.00004L9.66683 1.27337Z" />
    </svg>
  );
};

const Quadrant = ({ id, name, description, items, setExpandedId, expandedId, index }: Props) => {
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
  const quadrantWrapperClass = isExpanded ? `${styles[`quadrant_${index}`]}` : '';

  return (
    <>
      {showQuadrant && (
        <div className={[styles.wrapper, quadrantWrapperClass].join(' ')}>
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
            <div className={styles.descriptionWrapper}>
              <p id={descriptionId} className={styles.description}>
                {description}
              </p>
              {isExpanded && (
                <div
                  role="button"
                  className={styles.closeButton}
                  onClick={() => setExpandedId(null)}
                >
                  {t('buttons.close')}
                  <CloseSvg />
                </div>
              )}
            </div>
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
