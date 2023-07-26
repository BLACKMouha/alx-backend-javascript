export default function getFullResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error());
    }
  }).finally(console.log('Got a response from the API'));
}
