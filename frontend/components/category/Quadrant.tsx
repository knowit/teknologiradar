import { useTranslation } from 'next-i18next';
import { memo, useState } from 'react';
import { useRouter } from 'next/router';
import { Item } from '../../data/categories';
import styles from './Quadrant.module.css';
import { useInfoModal } from '../InfoModal/InfoModalProvider';

interface Props {
  id: string;
  name: string;
  description: string;
  items?: Item[];
}

const Quadrant = ({ id, name, description, items }: Props) => {
  const { t } = useTranslation('category');
  const { locale } = useRouter();
  const descriptionId = `${id}_description`;

  const { open: openModal, modalContent } = useInfoModal();

  return (
    <div className={styles.wrapper}>
      <div className={styles.headingWrapper}>
        <div className={styles.titleWrapper}>
          <h2 id={id} className={styles.quadrantTitle}>
            {name}
          </h2>
        </div>
        <p id={descriptionId} className={styles.description}>
          {description}
        </p>
      </div>
      <ul className={styles.quadrantList} aria-labelledby={id} aria-describedby={descriptionId}>
        {items ? (
          items?.map((item, index) => {
            const descriptionText = locale === 'nb' ? item.reason_no : item.reason_en;
            const hasDescription = descriptionText && descriptionText.length > 0;
            const role = hasDescription ? 'button' : 'listitem';
            const active = modalContent.title === item.name;

            const itemClass = [styles.quadrantListItem, hasDescription ? styles.description : '', active ? styles.activeListItem : ''].join(' ');

            return (
              <>
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
              </>
            );
          })
        ) : (
          <p>{t('noContent')}</p>
        )}
      </ul>
    </div>
  );
};

export default memo(Quadrant);
