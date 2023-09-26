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
        let s = `Number of students: ${listCS.length+ listCS.length}\n`;
        s += `Number of students in CS: ${listCS.length}. List: ${listCS.join(', ')}\n`;
        s +=`Number of students in SWE: ${listSWE.length}. List: ${listSWE.join(', ')}`;
        console.log(s);
        resolve(s);
      }
    });
  });
};

module.exports = countStudents;
