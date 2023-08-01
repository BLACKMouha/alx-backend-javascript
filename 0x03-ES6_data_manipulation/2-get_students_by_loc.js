/* jshint esversion: 6 */

export default function getStudentsByLocation(a, f) {
  // eslint-disable-next-line arrow-parens
  return a instanceof Array && typeof f === 'string' ? a.filter(el => el.location === f) : [];
}
