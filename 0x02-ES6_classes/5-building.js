export default class Building {
  constructor(sqft) {
    if (typeof (sqft) === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._sqft = sqft;
      if (this.constructor !== Building && !this.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    } else throw new Error('Sqft must be a number');
  }

  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }

  set sqft(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (value) === 'number') this._sqft = value;
    else throw new Error('Sqft must be a number');
  }
}
