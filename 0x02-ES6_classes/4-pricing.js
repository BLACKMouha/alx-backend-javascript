import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (amount) === 'number') this._amount = amount;
    else throw new TypeError('Amount must be a number');

    // eslint-disable-next-line no-underscore-dangle
    if (currency instanceof Currency) this._currency = currency;
    else throw new TypeError('Curreny must be a currency');
  }

  // getter for amount
  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  // setter for amount
  set amount(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof (value) === 'number') this._amount = value;
    else throw new TypeError('Code must be a number');
  }

  // getter for currency
  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  // setter for currency
  set currency(value) {
    // eslint-disable-next-line no-underscore-dangle
    if (value instanceof Currency) this._currency = value;
    else throw new TypeError('Currency must be a currency');
  }

  displayFullPrice() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${this._currency.name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
