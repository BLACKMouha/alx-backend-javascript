/* jshint esversion: 8 */

const http = require('http');
const countStudents = require('./3-read_file_async');

async function handleRoutes(res) {
  try {
    if (res.req.url === '/students' && res.req.method === 'GET') {
      const data = await countStudents(process.argv[2]);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${data}`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(error.toString());
    console.error(error.toString());
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
