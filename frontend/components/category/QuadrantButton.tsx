import { useTranslation } from 'next-i18next';
import styles from './Quadrant.module.css';
import { QuadrantType } from './Quadrants';

interface Props {
  id: QuadrantType;
  selectedValue: QuadrantType | null;
  onClick: () => void;
}

const ExpandSvg = () => {
  return (
    <svg width="15" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0V1H12.293L8 5.291L8.707 6L13 1.707V5H14V0H9Z" />
      <path d="M6 8.708L5.296 8L1 12.293V9H0V14H5V13H1.707L6 8.708Z" />
    </svg>
  );
};

const CollapseSvg = () => {
  return (
    <svg width="15" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9V10H4.293L0 14.291L0.707 15L5 10.707V14H6V9H1Z" />
      <path d="M15 0.708L14.296 0L10 4.293V1H9V6H14V5H10.707L15 0.708Z" />
    </svg>
  );
};

const QuadrantButton = ({ id, selectedValue, onClick }: Props) => {
  const { t } = useTranslation('category');
  const button = id === selectedValue ? <CollapseSvg /> : <ExpandSvg />;
  const label = id === selectedValue ? t('buttons.collapse') : t('buttons.expand');
  return (
    <div role="button" className={styles.toggleButton} onClick={onClick} aria-label={label}>
      <div aria-hidden="true">{button}</div>
    </div>
  );
};

export default QuadrantButton;
