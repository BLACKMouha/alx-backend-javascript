import { Teacher, Directors, printTeacher, StudentClass } from "./main";
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher(director1.firstName, director1.lastName));

const student = new StudentClass('Black', 'Mouha');

console.log(student.workOnHomework());
console.log(student.displayName());

