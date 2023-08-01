/* jshint esversion: 6 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .toSorted((x, y) => x.id - y.id).map((student) => {
      newGrades.toSorted((a, b) => a.studentId - b.studentId).forEach((newGrade) => {
        if (newGrades.map((newGrade) => newGrade.studentId).includes(student.id)) {
          // eslint-disable-next-line no-param-reassign
          if (student.id === newGrade.studentId && !student.grade) student.grade = newGrade.grade ? newGrade.grade : 'N/A';
          // eslint-disable-next-line no-param-reassign
        } else student.grade = 'N/A';
      });
      return student;
    });
}
