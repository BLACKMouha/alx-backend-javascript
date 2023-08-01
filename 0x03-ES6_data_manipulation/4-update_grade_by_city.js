/* jshint esversion: 6 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  // eslint-disable-next-line arrow-parens
  return students.filter(student => student.location === city)
    // eslint-disable-next-line arrow-parens
    .toSorted((x, y) => x.id - y.id).map(student => {
      // eslint-disable-next-line arrow-parens
      newGrades.toSorted((a, b) => a.studentId - b.studentId).forEach(newGrade => {
        // eslint-disable-next-line arrow-parens
        if (newGrades.map(newGrade => newGrade.studentId).includes(student.id)) {
          // eslint-disable-next-line no-param-reassign
          if (student.id === newGrade.studentId && !student.grade) student.grade = newGrade.grade ? newGrade.grade : 'N/A';
          // eslint-disable-next-line no-param-reassign
        } else student.grade = 'N/A';
      });
      return student;
    });
}
