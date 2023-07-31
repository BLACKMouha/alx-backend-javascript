import { HolbertonClass, StudentHolberton, listOfStudents } from "./9-hoisting";

console.log(listOfStudents.length);

const listPrinted = listOfStudents.map(
  student => student.fullStudentDescription
);

console.log(listPrinted);
