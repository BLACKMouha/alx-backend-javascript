
/* jshint esversion: 8 */
const Utils = require("./utils");

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping)
  console.log(`The total is: ${sum}`);
};

module.exports = sendPaymentRequestToApi;
