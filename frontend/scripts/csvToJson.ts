import { readFileSync, writeFileSync } from 'fs';
import { groupBy } from '../util/helpers';

const replacer = (key: string, value: string) => {
  if (key === 'priority') {
    return value === 'TRUE' ? true : false;
  }
  return value;
};

const [fields, ...values] = readFileSync('data.csv').toString().split('\r');
const splitFields = fields.split(',');
const objects: Record<string, string>[] = values.map((value) => {
  const valueAsArray = value.replace('\n', '').split(',');
  return splitFields.reduce<Record<string, string>>((acc, curr, i) => {
    acc[curr] = valueAsArray[i];
    return acc;
  }, {});
});

const groupedByArea = groupBy(objects, (obj) => obj['area']);
const withGroupedTypes = Object.entries(groupedByArea).reduce<Record<string, object>>(
  (acc, curr) => {
    const [key, entries] = curr;
    const byType = Object.values(groupBy(entries, (entry) => entry.type));
    acc[key] = {
      name: key,
      link: key,
      groups: byType.map((items) => ({
        name: items[0].type,
        id: items[0].type,
        items: items.map(({ item, status, priority }) => ({
          name: item,
          status,
          priority,
        })),
      })),
    };

    return acc;
  },
  {}
);

const categoriesData = JSON.stringify(withGroupedTypes, replacer);

const entireFile = `
// This is an automatically generated file.
// Please do not adjust it without adjusting the script.
export type Status = "TEST" | "KEEP" | "ADOPT" | "TRIAL" | "HOLD";
export interface Item {
  name: string;
  status: Status;
  priority?: boolean;
}
export interface Group {
  name: string;
  id: string;
  items: Item[];
}
export interface Category {
  name: string;
  link: string;
  groups: Group[];
}

const categories: Record<string, Category> = ${categoriesData};

export default categories;
`;

writeFileSync('./data/categories.ts', entireFile);
