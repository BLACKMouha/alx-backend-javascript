/* jshint esversion: 8 */

const http = require('http');

const port = 1245;
const app = http.createServer((req, res) => {
  res.port = port;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port, () => { console.log(`Server running at http://localhost:${port}`); });

module.exports = app;
