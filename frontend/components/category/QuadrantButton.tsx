import { useTranslation } from 'next-i18next';
import { ElementType } from 'react';
import { CollapseIcon, ExpandIcon } from '../icons';
import styles from './Quadrant.module.css';
import { QuadrantType } from './Quadrants';

interface Props {
  id: QuadrantType;
  title: string;
  canExpand: boolean;
  selectedValue: QuadrantType | null;
  onClick?: () => void;
}

const QuadrantButton = ({ id, title, canExpand, selectedValue, onClick }: Props) => {
  const { t } = useTranslation('category');

  const isExpanded = id === selectedValue;
  const icon = isExpanded ? <CollapseIcon /> : <ExpandIcon />;
  const label = canExpand ? (isExpanded ? t('buttons.collapse') : t('buttons.expand')) : undefined;
  const titleClass = `${styles.titleWrapper} ${isExpanded ? styles.titleExpanded : ''}`;
  const role = canExpand ? 'button' : 'presentation';
  const buttonClass = [styles.toggleButtonWrapper, canExpand ? styles.toggleButton : ''].join(' ');

  return (
    <div role={role} onClick={onClick} aria-label={label} className={buttonClass}>
      <div className={titleClass}>
        <h2 id={id} className={styles.quadrantTitle}>
          {title}
        </h2>
        {canExpand && <span aria-hidden="true">{icon}</span>}
      </div>
    </div>
  );
};

export default QuadrantButton;
