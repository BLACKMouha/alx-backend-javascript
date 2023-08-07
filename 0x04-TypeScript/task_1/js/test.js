"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
console.log((0, main_1.printTeacher)(director1.firstName, director1.lastName));
var student = new main_1.StudentClass('Black', 'Mouha');
console.log(student.workOnHomework());
console.log(student.displayName());
