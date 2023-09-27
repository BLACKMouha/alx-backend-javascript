/* jshint esversion: 8 */

const http = require('http');
const countStudents = require('./3-read_file_async');

function handleRoutes(res) {
  if (res.req.url === '/students' && res.req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((s) => {
        res.end(`${s}`);
      })
      .catch((e) => { res.end(e.message); });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
}

const port = 1245;
const app = http.createServer((req, res) => {
  console.log(req.url);
  res.port = 1245;
  handleRoutes(res);
});

app.listen(port, () => { console.log(`Server running at http://localhost:${port}`); });

module.exports = app;
