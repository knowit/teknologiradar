export const groupBy = <T, KeyType extends keyof any>(
  collection: T[],
  func: (item: T) => KeyType
): Record<KeyType, T[]> => {
  return collection.reduce<Record<KeyType, T[]>>((acc, curr) => {
    const value = func(curr);
    const accValue = acc[value];
    if (accValue) {
      acc[value] = accValue.concat(curr);
    } else {
      acc[value] = [curr];
    }
    return acc;
  }, {} as Record<KeyType, T[]>);
};
