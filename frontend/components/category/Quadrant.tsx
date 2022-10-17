import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import { Item } from '../../data/categories';
import { useMedia } from 'react-use';
import styles from './Quadrant.module.css';
import QuadrantButton from './QuadrantButton';
import { groupedQuadrants, QuadrantType } from './Quadrants';
import { CloseIcon } from '../icons';

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

const Quadrant = ({ id, name, description, items, setExpandedId, expandedId, index }: Props) => {
  // If any expanded and viewport change to mobile, reset expansion
  const isMobileViewport = useMedia('(max-width: 768px)');

  const { t } = useTranslation('category');
  const descriptionId = `${id}_description`;
  const isExpanded = expandedId === id;

  const showQuadrant =
    expandedId === null ||
    isExpanded ||
    isMobileViewport ||
    !groupedQuadrants.includes(id) ||
    !groupedQuadrants.includes(expandedId);

  const titleClass = `${styles.titleWrapper} ${isExpanded ? styles.titleExpanded : ''}`;
  const quadrantWrapperClass = isExpanded
    ? `${styles.quadrandExpanded} ${styles[`quadrant_${index}`]}`
    : '';

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
                  <span className={styles.closeButtonText}>{t('buttons.close')}</span>
                  <CloseIcon />
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
