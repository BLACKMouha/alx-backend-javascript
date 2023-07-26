export default function getFullResponseFromAPI(promise) {
  const aPromise = new Promise((resolve, reject) => {
    if (promise) resolve(promise); else reject(Error());
  });
  return aPromise.finally(() => console.log('Got a response from the API'));
}
