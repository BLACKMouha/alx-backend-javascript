
/* jshint esversion: 8 */
const process = require('process');

function displayMessage() {
  if (process.argv.length >= 3) {
    console.log(process.argv[2]);
  } else {
    console.log('Hello NodeJS!');
  }
}
displayMessage();
