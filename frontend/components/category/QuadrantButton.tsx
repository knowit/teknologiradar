import { useTranslation } from 'next-i18next';
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
    <div role="button" className={styles.toggleButton} onClick={onClick} aria-label={label}>
      <div aria-hidden="true">{button}</div>
    </div>
  );
};

export default QuadrantButton;
