import { useTranslation } from 'next-i18next';
import { memo } from 'react';
import { useRouter } from 'next/router';
import { Item } from '../../data/categories';
import { useMedia } from 'react-use';
import styles from './Quadrant.module.css';
import { useInfoModal } from '../InfoModal/InfoModalProvider';
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
  const { locale } = useRouter();
  const descriptionId = `${id}_description`;

  const { open: openModal, modalContent } = useInfoModal();
  const isExpanded = expandedId === id;

  const showQuadrant =
    expandedId === null ||
    isExpanded ||
    isMobileViewport ||
    !groupedQuadrants.includes(id) ||
    !groupedQuadrants.includes(expandedId);

  const quadrantWrapperClass = isExpanded
    ? `${styles.quadrandExpanded} ${styles[`quadrant_${index}`]}`
    : '';

  return (
    <>
      {showQuadrant && (
        <div className={[styles.wrapper, quadrantWrapperClass].join(' ')}>
          <div className={styles.headingWrapper}>
            <QuadrantButton
              id={id}
              title={name}
              selectedValue={expandedId}
              onClick={() => setExpandedId(isExpanded ? null : id)}
            />
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
              items?.map((item, index) => {
                const descriptionText = locale === 'nb' ? item.reason_no : item.reason_en;
                const hasDescription = descriptionText && descriptionText.length > 0;
                const role = hasDescription ? 'button' : 'listitem';
                const active = modalContent.title === item.name;

                const itemClass = [
                  styles.quadrantListItem,
                  hasDescription ? styles.description : '',
                  active ? styles.activeListItem : '',
                ].join(' ');

                return (
                  <li
                    key={index}
                    className={itemClass}
                    role={role}
                    {...(hasDescription && {
                      onClick: () => {
                        openModal({ title: item.name, message: descriptionText });
                      },
                    })}
                  >
                    {item.name}
                  </li>
                );
              })
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
