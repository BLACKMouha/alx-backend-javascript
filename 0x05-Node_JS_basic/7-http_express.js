/* jshint esversion: 8 */

const express = require('express');
const countStudents = require('./3-read_file_async');

const filePath = process.argv[2] || '';

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.end("Hello Holberton School!");
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(filePath)
    .then((s) => res.end(s))
    .catch((e) => res.end(e.message));
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

module.exports = app;
