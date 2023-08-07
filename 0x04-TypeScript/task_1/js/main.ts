export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [attributeString: string]: any,
  [attributeNumber: number]: any,
  [attributeSymbol: symbol]: any,
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher (firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
