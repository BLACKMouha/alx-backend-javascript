/* jshint esversion: 6 */

export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || (typeof startString !== 'string')
    || startString.length === 0) return '';

  const cleanArray = [];

  set.forEach((string) => {
    if (string.startsWith(startString)) cleanArray.push(string.slice(startString.length));
  });

  return cleanArray.join('-');
}
