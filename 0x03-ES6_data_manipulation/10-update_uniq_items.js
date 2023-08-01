export default function updateUniqueItems(aMap) {
  if (!(aMap instanceof Map)) throw new Error('Cannot process');

  aMap.forEach((value, key) => {
    if (value === 1) {
      aMap.set(key, 100);
    }
  });

  return aMap;
}
