/* jshint esversion: 6 */

export default function cleanSet(set, startString) {
  const cleanString = [];

  if (!(set instanceof Set) || (typeof startString !== 'string')
      || (typeof startString === 'string' && startString.length === 0)) {
    return '';
  }

  set.forEach((string) => {
    if (string && string.startsWith(startString)) {
      cleanString.push(string.slice(startString.length));
    }
  });

  return cleanString.join('-');
}
