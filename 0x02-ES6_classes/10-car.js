/* jshint esversion: 6 */

export default class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof brand === 'string') this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    else this._brand = undefined;

    // eslint-disable-next-line no-underscore-dangle
    if (typeof motor === 'string') this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    else this._motor = undefined;

    // eslint-disable-next-line no-underscore-dangle
    if (typeof color === 'string') this._color = color;
    // eslint-disable-next-line no-underscore-dangle
    else this._color = undefined;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
