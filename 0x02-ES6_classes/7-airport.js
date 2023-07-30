export default class Airport {
  constructor(name, code) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof name === 'string') this._name = name;
    else throw new Error('Name must be a string');

    // eslint-disable-next-line no-underscore-dangle
    if (typeof code === 'string') this._code = code;
    else throw new Error('Code must be a string');
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') this._name = value;
    else throw new Error('Name must be a string');
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') this._code = value;
    else throw new Error('Code must be a string');
  }

  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return `[object ${this._code}]`;
  }
}
