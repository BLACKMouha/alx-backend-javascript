export default class Building {
  constructor(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
    }
    else throw new Error('Sqft must be a number');
    if (this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuatiionWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof(value) === 'number') this._sqft = value;
    else throw new Error('Sqft must be a number');
  }

  evacuationWarningMessage() {}
}
