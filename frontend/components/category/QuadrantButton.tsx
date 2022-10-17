import { useTranslation } from 'next-i18next';
import { ElementType } from 'react';
import { CollapseIcon, ExpandIcon } from '../icons';
import styles from './Quadrant.module.css';
import { QuadrantType } from './Quadrants';

interface Props {
  id: QuadrantType;
  selectedValue: QuadrantType | null;
  onClick: () => void;
}

const QuadrantButton = ({ id, selectedValue, onClick }: Props) => {
  const { t } = useTranslation('category');

  const button = id === selectedValue ? <CollapseIcon /> : <ExpandIcon />;
  const label = id === selectedValue ? t('buttons.collapse') : t('buttons.expand');

  return (
    <button onClick={onClick} aria-label={label} className={styles.toggleButton}>
      <div aria-hidden="true">{button}</div>
    </button>
  );
};

export default QuadrantButton;
