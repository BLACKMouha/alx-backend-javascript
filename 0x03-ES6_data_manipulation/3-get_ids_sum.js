/* jshint esversion: 6 */

export default function getStudentIdsSum(s) {
  // eslint-disable-next-line arrow-parens
  return s instanceof Array ? s.map(el => el.id).reduce((a, c) => a + c, 0) : 0;
}
