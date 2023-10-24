/* jshint esversion: 8 */
const fs = require('fs');

const countStudents = function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const studentsPerField = {};
        const rows = data.split('\n');
        for (let idx = 1; idx < rows.length; idx += 1) {
          const row = rows[idx];
          if (row) {
            const values = row.split(',');
            const firstName = values[0];
            const field = values[3];
            if (Object.prototype.hasOwnProperty.call(studentsPerField, field)) {
              (studentsPerField[field]).push(firstName);
            } else {
              (studentsPerField[field]) = [firstName];
            }
            if (Object.prototype.hasOwnProperty.call(studentsPerField, 'numberOfStudents')) {
              studentsPerField.numberOfStudents += 1;
            } else {
              studentsPerField.numberOfStudents = 1;
            }
          }
        }
        let s = '';
        s += `Number of students: ${studentsPerField.numberOfStudents}\n`;

        for (const i in studentsPerField) {
          if (i !== 'numberOfStudents') {
            const numberOfStudents = (studentsPerField[i]).length;
            const list = (studentsPerField[i]).join(', ');
            s += `Number of students in ${i}: ${numberOfStudents}. List: ${list}\n`;
          }
        }
        s = s.slice(0, s.length - 1);
        console.log(s);
        resolve({ s, DATA: studentsPerField });
      }
    });
  });
};

module.exports = countStudents;
