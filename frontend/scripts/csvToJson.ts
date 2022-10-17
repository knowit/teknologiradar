import { readFileSync, writeFileSync } from 'fs';
import { capitalize } from 'lodash';
import { groupBy } from '../util/helpers';

const validStatuses = ['TEST', 'KEEP', 'ADOPT', 'TRIAL', 'HOLD'];

const replacer = (key: string, value: string) => {
  if (key === 'priority') {
    return value === 'TRUE' ? true : false;
  }
  return value;
};

const [fields, ...values] = readFileSync('data.csv').toString().split('\r');
const splitFields = fields.split('|');
const objects: Record<string, string>[] = values.map((value) => {
  const valueAsArray = value.replaceAll('\n', '').split('|');
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
      name: capitalize(key),
      link: key,
      groups: byType.map((items) => ({
        name: capitalize(items[0].type),
        id: items[0].type.replaceAll(' ', '-').replaceAll('/', '-'),
        items: items
          .filter((item) => item.status && validStatuses.includes(item.status.toUpperCase())) // Ignore if not valid status
          .map(({ item, status, priority, reason_no, reason_en }) => ({
            name: item,
            status: status.toUpperCase(),
            priority,
            reason_no: reason_no,
            reason_en: reason_en,
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
  reason_no?: string;
  reason_en?: string;
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
