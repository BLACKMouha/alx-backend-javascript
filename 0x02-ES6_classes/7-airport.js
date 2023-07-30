export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') this._name = name;
    else throw new Error('Name must be a string');

    if (typeof code === 'string') this._code = code;
    else throw new Error('Code must be a string');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') this._name = value;
    else throw new Error('Name must be a string');
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string') this._code = value;
    else throw new Error('Code must be a string');
  }

  toString() {
    return `[object ${this._code}]`;
  }
}