/* jshint esversion: 8 */
const fs = require('fs');

const countStudents = function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const rows = data.split('\n');
        const listCS = [];
        const listSWE = [];
        for (let i = 1; i < rows.slice(1).length; i += 1) {
          if (rows[i] !== '') {
            const values = rows[i].split(',');
            const firstName = values[0];
            const field = values[3];
            if (field.toUpperCase() === 'CS') {
              listCS.push(firstName);
            } else {
              listSWE.push(firstName);
            }
          }
        }
        console.log(`Number of students: ${listSWE.length + listCS.length}`);
        console.log(`Number of students in CS: ${listCS.length}. List: ${listCS.join(', ')}`);
        console.log(`Number of students in SWE: ${listSWE.length}. List: ${listSWE.join(', ')}`);
        const s = `Number of students: ${listSWE.length + listCS.length}
Number of students in CS: ${listCS.length}. List: ${listCS.join(', ')}
Number of students in SWE: ${listSWE.length}. List: ${listSWE.join(', ')}`;
        resolve(data);
      }
    });
  });
};

module.exports = countStudents;
