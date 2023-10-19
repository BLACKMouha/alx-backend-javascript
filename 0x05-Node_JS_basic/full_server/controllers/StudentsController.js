/* jshint esversion: 8 */

import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2].toString())
      .then((studentsPerFields) => {
        const sortedKeys = Array.from(Object.keys(studentsPerFields)).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
        const orderedStudentsPerFields = {};
        sortedKeys.forEach((key) => {
          orderedStudentsPerFields[key] = studentsPerFields[key];
        });
        let s = 'This is the list of our students\n';
        for (const i in orderedStudentsPerFields) {
          if (i) {
            const numberOfStudents = (orderedStudentsPerFields[i]).length;
            const list = (orderedStudentsPerFields[i]).join(', ');
            s += `Number of students in ${i}: ${numberOfStudents}. List: ${list}\n`;
          }
        }
        s = s.slice(0, s.length - 1);
        res.status(200).send(s);
      })
      .catch((e) => {
        console.log(e.message);
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (!major) {
      this.getAllStudents(req, res);
      return;
    }
    readDatabase(process.argv[2].toString())
      .then((data) => {
        if (major && !(major in data)) {
          res.status(500).send('Major parameter must be CS or SWE');
          return;
        }
        const listOfStudents = (data[major]).join(', ');
        res.status(200).send(`List: ${listOfStudents}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
export default StudentsController;
