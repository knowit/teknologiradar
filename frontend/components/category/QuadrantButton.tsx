import { useTranslation } from 'next-i18next';
import { ElementType } from 'react';
import { CollapseIcon, ExpandIcon } from '../icons';
import styles from './Quadrant.module.css';
import { QuadrantType } from './Quadrants';

interface Props {
  id: QuadrantType;
  title: string;
  selectedValue: QuadrantType | null;
  onClick: () => void;
}

const QuadrantButton = ({ id, title, selectedValue, onClick }: Props) => {
  const { t } = useTranslation('category');

  const button = id === selectedValue ? <CollapseIcon /> : <ExpandIcon />;
  const label = id === selectedValue ? t('buttons.collapse') : t('buttons.expand');
  const isExpanded = id === selectedValue;
  const titleClass = `${styles.titleWrapper} ${isExpanded ? styles.titleExpanded : ''}`;

  return (
    <button onClick={onClick} aria-label={label} className={styles.toggleButton}>
      <div className={titleClass}>
        <h2 id={id} className={styles.quadrantTitle}>
          {title}
        </h2>
        <span aria-hidden="true">{button}</span>
      </div>
    </button>
  );
};

export default QuadrantButton;
