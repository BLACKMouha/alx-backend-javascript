/* jshint esversion: 8 */

const http = require('node:http');

const port = 1245;
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.port = port;
  res.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
