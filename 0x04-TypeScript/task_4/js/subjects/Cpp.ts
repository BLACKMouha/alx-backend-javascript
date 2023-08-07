/// <reference path="Subject.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp implements Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher() {
      return  (this.teacher.experienceTeachingC > 0)
        ? `Available Teacher: ${this.teacher.firstName}`
        : `No available teacher`;
    }
  }
}
