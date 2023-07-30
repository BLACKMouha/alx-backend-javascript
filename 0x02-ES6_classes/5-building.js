export default class Building {
  constructor(sqft) {
    if (typeof (sqft) === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      this._sqft = sqft;
    } else throw new Error('Sqft must be a number');

    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
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

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
