import { useTranslation } from 'next-i18next';
import { memo, useMemo } from 'react';
import { Item } from '../../data/categories';
import { groupBy } from '../../util/helpers';
import Quadrant from './Quadrant';
import styles from './Quadrants.module.css';

interface Props {
  items: Item[];
}
const Quadrants = ({ items }: Props) => {
  const { t } = useTranslation('category');
  const groupedByStatus = useMemo(() => groupBy(items, (item) => item.status), [items]);

  const prioritizedItems = useMemo(() => items.filter((item) => !!item.priority), [items]);

  return (
    <div className={styles.quadrantsWrapper}>
      <Quadrant id="priorities" name={t('priorities.title')} description={t('priorities.description')} items={prioritizedItems} />
      <div className={styles.quadrantGrouping}>
        <Quadrant id="keep" name={t('keep.title')} description={t('keep.description')} items={groupedByStatus['KEEP']} />
        <Quadrant id="adopt" name={t('adopt.title')} description={t('adopt.description')} items={groupedByStatus['ADOPT']} />
        <Quadrant id="trial" name={t('trial.title')} description={t('trial.description')} items={groupedByStatus['TRIAL']} />
        <Quadrant id="test" name={t('test.title')} description={t('test.description')} items={groupedByStatus['TEST']} />
      </div>
      <Quadrant id="hold-phase-out" name={t('hold.title')} description={t('hold.description')} items={groupedByStatus['HOLD']} />
    </div>
  );
};

export default memo(Quadrants);
