
/* jshint esversion: 8 */
const process = require('process');

function displayMessage() {
  if (process.argv.length >= 3) {
    process.stdout.write(process.argv[2] + '\n');
  } else {
    process.stdout.write('Hello NodeJS!\n');
  }
}
displayMessage();
