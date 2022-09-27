import { memo } from "react";
import { Item } from "../data/categories";
import styles from "./Quadrant.module.css";

interface Props {
  id: string;
  name: string;
  description: string;
  items?: Item[];
}

const Quadrant = ({ id, name, description, items }: Props) => {
  const descriptionId = `${id}_description`;
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
      <ul
        className={styles.quadrantList}
        aria-labelledby={id}
        aria-describedby={descriptionId}
      >
        {items ? (
          items?.map((item) => (
            <li key={item.name} className={styles.quadrantListItem}>
              {item.name}
            </li>
          ))
        ) : (
          <p>Her var det ingenting!</p>
        )}
      </ul>
    </div>
  );
};

export default memo(Quadrant);
