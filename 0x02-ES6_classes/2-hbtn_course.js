export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof (length) === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }

    if (students instanceof Array) {
      // eslint-disable-next-line no-underscore-dangle
      this._students = students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  // getter for name
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  // setter for name
  set name(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (value) === 'string') this._name = value;
    else throw new TypeError('Name must be a string');
  }

  // getter for length
  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  // setter for length
  set length(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (value) === 'number') this._length = value;
    else throw new TypeError('Length must be a number');
  }

  // getter for students
  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  // setter for students
  set students(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (value instanceof Array) this._students = value;
    else throw new TypeError('Students must be an array');
  }
}
