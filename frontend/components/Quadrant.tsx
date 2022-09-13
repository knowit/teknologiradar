import { memo } from "react";
import { Item } from "../data/categories";
import styles from "./Quadrant.module.css";

interface Props {
  name: string;
  description: string;
  items?: Item[];
}

const Quadrant = ({ name, description, items }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingWrapper}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.quadrantTitle}>{name}</h2>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <ul className={styles.quadrantList}>
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
