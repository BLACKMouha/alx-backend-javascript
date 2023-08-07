/// <reference path="Teacher.ts" />
namespace Subjects {
  export interface Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void;
  }
}
