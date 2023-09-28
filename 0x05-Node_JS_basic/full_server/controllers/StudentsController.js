/* jshint esversion: 8 */

import url from 'url';
import readDatabase from '../utils';

const filePath = process.argv[2] || '';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(filePath)
      .then((studentsPerFields) => {
        const sortedKeys = Array.from(Object.keys(studentsPerFields)).sort((a, b) => {
          a.localeCompare(b, 'en', { sensitivity: 'base' });
        });
        const orderedStudentsPerFields = {};
        sortedKeys.forEach((key) => {
          orderedStudentsPerFields[key] = studentsPerFields[key];
        });
        let s = 'This is the list of our students\n';
        for (const i in orderedStudentsPerFields) {
          const numberOfStudents = (orderedStudentsPerFields[i]).length;
          const list = (orderedStudentsPerFields[i]).join(', ');
          s += `Number of students in ${i}: ${numberOfStudents}. List: ${list}\n`;
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
    const urlParts = url.parse(req.url, true).split('/');
    const major = urlParts[2] || '';
    if (!major) {
      this.getAllStudents(req, res);
      return;
    }
    readDatabase(filePath)
      .then((data) => {
        const numberOfStudents = (data[major]).length;
        const listOfStudents = (data[major]).join(', ');
        s += `Number of students in ${i}: ${numberOfStudents}. List: ${listOfStudents}\n`;
      })
      .catch((e) => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
export default StudentsController;
