/* jshint esversion: 8 */

const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve) => {
    if (success === true) {
      resolve({ data: 'Successful response from the API' }), 0;
    } else {
      resolve();
    }
  });
};

module.exports = getPaymentTokenFromAPI;
