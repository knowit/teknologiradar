import { memo, useMemo } from "react";
import { Category, Item } from "../data/categories";
import { groupBy } from "../util/helpers";
import Quadrant from "./Quadrant";
import styles from "./Quadrants.module.css";

interface Props {
  items: Item[];
}
const Quadrants = ({ items }: Props) => {
  const groupedByStatus = useMemo(
    () => groupBy(items, (item) => item.status),
    [items]
  );

  const prioritizedItems = useMemo(
    () => items.filter((item) => !!item.priority),
    [items]
  );

  return (
    <div className={styles.quadrantsWrapper}>
      <Quadrant
        name="Priorities"
        description="Technologies that we want to prioritize and use more"
        items={prioritizedItems}
      />
      <div className={styles.quadrantGrouping}>
        <Quadrant
          name="Keep"
          description="Technologies that we want to prioritize and use more"
          items={groupedByStatus["KEEP"]}
        />
        <Quadrant
          name="Adopt"
          description="Technologies that we want to prioritize and use more"
          items={groupedByStatus["ADOPT"]}
        />
        <Quadrant
          name="Trial"
          description="Technologies that we want to prioritize and use more"
          items={groupedByStatus["TRIAL"]}
        />
        <Quadrant
          name="Test"
          description="Technologies that we want to prioritize and use more"
          items={groupedByStatus["TEST"]}
        />
      </div>
      <Quadrant
        name="Hold-Phase Out"
        description="Technologies that we want to prioritize and use more"
        items={groupedByStatus["HOLD"]}
      />
    </div>
  );
};

export default memo(Quadrants);
