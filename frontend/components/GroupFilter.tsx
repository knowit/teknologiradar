import { useRouter } from "next/router";
import { ChangeEvent, memo, useEffect, useMemo, useState } from "react";
import { Group } from "../data/categories";
import styles from "./GroupFilter.module.css";

interface Props {
  groups: Group[];
  onFilterChange: (truthy: string[]) => void;
}

const toInitialFilter = (groups: Group[]) => {
  const filters = groups.reduce<Record<string, boolean>>((acc, curr) => {
    acc[curr.id] = false;
    return acc;
  }, {});
  filters["all"] = true;
  return filters;
};

const GroupFilter = ({ groups, onFilterChange }: Props) => {
  const { pathname } = useRouter();
  const [filters, setFilters] = useState(toInitialFilter(groups));
  const sortedKeys = useMemo(
    () =>
      groups
        .map((g) => g.id)
        .concat("all")
        .sort(),
    [groups]
  );

  useEffect(() => {
    setFilters(toInitialFilter(groups));
  }, [pathname, groups]);

  useEffect(() => {
    const truthy = Object.entries(filters)
      .filter(([, val]) => !!val)
      .map(([key]) => key);

    onFilterChange(truthy);
  }, [onFilterChange, filters]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "all") {
      if (filters["all"]) {
        return;
      }
      setFilters(toInitialFilter(groups));
    } else {
      const truthyValues = Object.values(filters).filter((v) => !!v).length;
      if (truthyValues === 1 && !!filters[e.target.name]) {
        setFilters(toInitialFilter(groups));
      } else {
        setFilters((prev) => ({
          ...prev,
          [e.target.name]: !prev[e.target.name],
          all: false,
        }));
      }
    }
  };
  return (
    <div className={styles.filtersWrapper}>
      <p>Sort</p>
      {sortedKeys.map((key) => (
        <div key={key} className={styles.filter}>
          <label htmlFor={key}>{key}</label>
          <input
            id={key}
            key={key}
            type="checkbox"
            name={key}
            checked={filters[key]}
            onChange={onChange}
          />
        </div>
      ))}
    </div>
  );
};

export default GroupFilter;
