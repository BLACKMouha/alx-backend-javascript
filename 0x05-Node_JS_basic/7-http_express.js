/* jshint esversion: 8 */

const url = require('url');
const express = require('express');
const countStudents = require('./3-read_file_async');

const filePath = process.argv[2] || '';

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students/:major?', (req, res) => {
  console.log(req.url);
  const parseURL = url.parse(req.url, true);
  const major = parseURL.pathname.split('/')[2];
  console.log('Path:', major);
  res.write('This is the list of our students\n');
  countStudents(filePath)
    .then((data) => {
      if (major) {
        const listOfStudents = data.DATA[major];
        res.end(`Number of students in ${major}: ${listOfStudents.length}. List: ${listOfStudents.join(', ')}`);
      } else res.end(data.s);
    })
    .catch((e) => res.end(e.message));
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

module.exports = app;
