/* jshint esversion: 8 */
const fs = require('fs');

const countStudents = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, { encoding: 'utf-8', flags: 'r' });
    const rows = content.split('\n');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
