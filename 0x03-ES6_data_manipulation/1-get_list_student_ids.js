/* jshint esversion: 6 */

export default function getListStudentIds(arr) {
  // eslint-disable-next-line arrow-parens
  return arr instanceof Array ? arr.map(el => el.id) : [];
}
