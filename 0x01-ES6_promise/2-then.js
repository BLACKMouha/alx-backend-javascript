export default function getFullResponseFromAPI(promise) {
  const aPromise = new Promise((resolve) => {
    resolve(promise);
  });
  return aPromise.then(() => ({ status: 200, body: 'Success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
