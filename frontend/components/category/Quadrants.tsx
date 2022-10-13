import { useTranslation } from 'next-i18next';
import { memo, useEffect, useMemo, useState } from 'react';
import { useMedia } from 'react-use';
import { Item, Status } from '../../data/categories';
import { groupBy } from '../../util/helpers';
import Quadrant from './Quadrant';
import styles from './Quadrants.module.css';

export enum QuadrantType {
  Priorities = 'PRIORITIES',
  Keep = 'KEEP',
  Adopt = 'ADOPT',
  Trial = 'TRIAL',
  Test = 'TEST',
  Hold = 'HOLD',
}

export const groupedQuadrants: Array<QuadrantType> = [
  QuadrantType.Keep,
  QuadrantType.Adopt,
  QuadrantType.Trial,
  QuadrantType.Test,
];

interface Props {
  items: Item[];
}

const Quadrants = ({ items }: Props) => {
  const { t } = useTranslation('category');

  // If any expanded and viewport change to mobile, reset expansion
  const isMobileViewport = useMedia('(max-width: 768px)');
  useEffect(() => {
    if (isMobileViewport) setExpandedId(null);
  }, [isMobileViewport]);

  const groupedByStatus = useMemo(() => groupBy(items, (item) => item.status), [items]);
  const prioritizedItems = useMemo(() => items.filter((item) => !!item.priority), [items]);

  const [expandedId, setExpandedId] = useState<QuadrantType | null>(null);

  const quadrantGroupingClass = `${styles.quadrantGrouping} ${
    expandedId && groupedQuadrants.includes(expandedId) ? styles.expanded : ''
  }`;

  return (
    <div className={styles.quadrantsWrapper}>
      <Quadrant
        id={QuadrantType.Priorities}
        name={t('priorities.title')}
        description={t('priorities.description')}
        items={prioritizedItems}
        setExpandedId={(value) => setExpandedId(value)}
        expandedId={expandedId}
      />
      <div className={quadrantGroupingClass}>
        {groupedQuadrants.map((quadrant, index) => (
          <Quadrant
            key={quadrant}
            id={quadrant}
            name={t(`${(quadrant as string).toLowerCase()}.title`)}
            description={t(`${(quadrant as string).toLowerCase()}.description`)}
            items={groupedByStatus[quadrant as Status]}
            setExpandedId={(value) => setExpandedId(value)}
            expandedId={expandedId}
            index={index}
          />
        ))}
      </div>
      <Quadrant
        id={QuadrantType.Hold}
        name={t('hold.title')}
        description={t('hold.description')}
        items={groupedByStatus['HOLD']}
        setExpandedId={(value) => setExpandedId(value)}
        expandedId={expandedId}
      />
    </div>
  );
};

export default memo(Quadrants);
