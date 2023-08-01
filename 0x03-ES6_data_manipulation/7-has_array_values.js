/* jshint esversion: 6 */

export default function hasValuesFromArray(set, array) {
  const setArray = new Set(array);
  for (const el of setArray) {
    if (!set.has(el)) return false;
  }
  return true;
}
