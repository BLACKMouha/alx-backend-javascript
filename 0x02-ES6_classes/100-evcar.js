import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    // eslint-disable-next-line no-underscore-dangle
    if (typeof range === 'string') this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
