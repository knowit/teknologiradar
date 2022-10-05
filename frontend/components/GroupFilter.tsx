import { group } from "console";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Group } from "../data/categories";
import Checkbox from "./Checkbox";
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
    <div
      className={styles.filtersWrapper}
      role="group"
      aria-labelledby="filter-label"
    >
      <div id="filter-label" className={styles.filterLabel}>
        Filter by
      </div>
      {sortedKeys.map((key) => (
        <Checkbox
          id={key}
          key={key}
          checked={filters[key]}
          onChange={onChange}
          label={key}
        />
      ))}
    </div>
  );
};

export default GroupFilter;
