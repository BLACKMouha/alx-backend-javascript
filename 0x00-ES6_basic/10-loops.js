export default function appendToEachArrayValue(array, appendString) {
    for (let item of array.entries()) {
      array[item[0]] = appendString + item[1];
    }

    return array;
}
  