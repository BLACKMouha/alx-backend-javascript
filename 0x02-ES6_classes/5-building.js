export default class Building {
  constructor(sqft) {
    if (typeof (sqft) === 'number') {
      this._sqft = sqft;
      if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuatiionWarningMessage');
      }
    }
    else throw new Error('Sqft must be a number');
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
