/* jshint esversion: 8 */
const fs = require('fs');

const readDatabase = function readDatabase(filePath) {
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
          }
        }
        resolve(studentsPerField);
      }
    });
  });
};

module.exports = readDatabase;
export default readDatabase;
