/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();
const cTeacher: Subjects.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
}

console.log(`C++ ${cpp}`);
cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher());

console.log(`React ${react}`);
react.setTeacher(cTeacher);
console.log(react.getAvailableTeacher());

console.log(`Java ${java}`);
java.setTeacher(cTeacher);
console.log(java.getAvailableTeacher());

module.exports = { cpp, react, java, cTeacher };
