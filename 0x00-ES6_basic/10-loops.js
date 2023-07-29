export default function appendToEachArrayValue(array, appendString) {
  const anArray = [];
  for (const value of array) {
    anArray.push(appendString + value);
  }

  return anArray;
}
