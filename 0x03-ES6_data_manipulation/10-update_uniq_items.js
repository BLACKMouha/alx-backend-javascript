export default function updateUniqueItems(aMap) {
  aMap.forEach((value, key) => {
    if (value === 1) {
      aMap.set(key, 100);
    }
  });

  return aMap;
}
