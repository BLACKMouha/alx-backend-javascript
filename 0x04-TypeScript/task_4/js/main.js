/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function () {
        function Cpp() {
        }
        Cpp.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            return (this.teacher.experienceTeachingC > 0)
                ? "Available Teacher: ".concat(this.teacher.firstName)
                : "No available teacher";
        };
        return Cpp;
    }());
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function () {
        function React() {
        }
        React.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            return (this.teacher.experienceTeachingReact > 0)
                ? "Available Teacher: ".concat(this.teacher.firstName)
                : "No available teacher";
        };
        return React;
    }());
    Subjects.React = React;
})(Subjects || (Subjects = {}));
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function () {
        function Java() {
        }
        Java.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            return (this.teacher.experienceTeachingJava > 0)
                ? "Available Teacher: ".concat(this.teacher.firstName)
                : "No available teacher";
        };
        return Java;
    }());
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />
var cpp = new Subjects.Cpp();
var react = new Subjects.React();
var java = new Subjects.Java();
var cTeacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10,
};
console.log("C++ ".concat(cpp));
cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher());
console.log("React ".concat(react));
react.setTeacher(cTeacher);
console.log(react.getAvailableTeacher());
console.log("Java ".concat(java));
java.setTeacher(cTeacher);
console.log(java.getAvailableTeacher());
module.exports = { cpp: cpp, react: react, java: java, cTeacher: cTeacher };
