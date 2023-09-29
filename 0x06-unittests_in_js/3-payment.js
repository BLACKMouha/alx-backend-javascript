
/* jshint esversion: 8 */
const Utils = require("./utils");

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sum = Utils.calculNumber('SUM', totalAmount, totalShipping)
  console.log(`The total is: ${sum}`);
  return sum;
};

module.exports = sendPaymentRequestToApi;
