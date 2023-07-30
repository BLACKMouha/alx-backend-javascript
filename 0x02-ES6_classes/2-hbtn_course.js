export default class HolbertonCourse {
  constructor (name, length, students) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof(name) === 'string') {
      this._name = name;
    } else  {
      throw new TypeError('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    if (typeof(length) === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
  // getter for name
  get name() {
    return this._name;
  }
  // setter for name
  set name(value) {
    if (typeof(value) === 'string') this._name = value;
    else  throw new TypeError('Name must be a string');
  }
  
  // getter for length
  get length() {
    return this._length;
  }
  // setter for length
  set length(value) {
    if (typeof(value) === 'number') this._length = value;
    else  throw new TypeError('Length must be a number');
  }
  
  // getter for students
  get students() {
    return this._students;
  }
  // setter for students
  set students(value) {
    if (value instanceof  Array) this._students = value;
    else  throw new TypeError('Students must be an array');
  }
}
