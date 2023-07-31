export class HolbertonClass {
  constructor(year, location) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof year === 'number') this._year = year;
    else throw new Error('Year must be a number');

    // eslint-disable-next-line no-underscore-dangle
    if (typeof location === 'string') this._location = location;
    else throw new Error('Location must be a string');
  }

  get year() {
    // eslint-disable-next-line no-underscore-dangle
    return this._year;
  }

  get location() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    // eslint-disable-next-line no-underscore-dangle
    if (typeof firstName === 'string' ) this._firstName = firstName;
    else throw new Error('Firstname must be a string');

    // eslint-disable-next-line no-underscore-dangle
    if (typeof lastName === 'string') this._lastName = lastName;
    else throw new Error('Lastname must be a string');

    // eslint-disable-next-line no-underscore-dangle
    if (holbertonClass instanceof HolbertonClass) this._holbertonClass = holbertonClass;
    else throw new Error('HolbertonClass must be an HolbertonClass instance');
  }

  get fullName() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    // eslint-disable-next-line no-underscore-dangle
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass._year} - ${this._holbertonClass._location}`;
  }
}



const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
