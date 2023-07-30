export default class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (code) === 'string') this._code = code;
    else throw new TypeError('Code must be a string');

    // eslint-disable-next-line no-underscore-dangle
    if (typeof (name) === 'string') this._name = name;
    else throw new TypeError('Name must be a string');
  }

  // getter for code
  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  // setter for code
  set code(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (value) === 'string') this._code = value;
    else throw new TypeError('Code must be a string');
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

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}
