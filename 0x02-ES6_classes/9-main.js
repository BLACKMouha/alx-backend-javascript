import { HolbertonClass, StudentHolberton, listOfStudents } from "./9-hoisting";

const listPrinted = listOfStudents.map(
  student => student.fullStudentDescription
);

console.log(listPrinted);
