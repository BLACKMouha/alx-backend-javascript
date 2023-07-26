export default function handleResponseFromAPI(promise) {
  const aPromise = new Promise((resolve) => {
    resolve(promise);
  });
  return aPromise.then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
