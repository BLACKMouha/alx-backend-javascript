/* jshint esversion: 8 */

const http = require('http');
const countStudents = require('./3-read_file_async');

const filePath = process.argv[2] || '';
const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
});

app.on('request', (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else {
    res.write('This is the list of our students\n');
    countStudents(filePath)
      .then((s) => {
        res.end(s);
      })
      .catch((e) => res.end(e.message));
  }
});

app.listen(port, () => {
  console.log('Server running on http://localhost:1245');
});

module.exports = app;
