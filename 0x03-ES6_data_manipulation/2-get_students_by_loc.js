/* jshint esversion: 6 */

export default function getStudentsByLocation(a, f) {
  return a instanceof Array && typeof f === 'string' ? a.filter(el => el.location === f) : [];
}
