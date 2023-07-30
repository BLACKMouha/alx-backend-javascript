export default class HolbertonClass {
  constructor(size, location) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof size === 'number') this._size = size;
    else throw new Error('Size must be a number');

    // eslint-disable-next-line no-underscore-dangle
    if (typeof location === 'string') this._location = location;
    else throw new Error('Location must be a number');
  }

  get size() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  set size(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'number') this._size = value;
    else throw new Error('Size must be a number');
  }

  get location() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }

  set location(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof value === 'string') this._location = value;
    else throw new Error('Location must be a string');
  }

  valueOf() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }
}
