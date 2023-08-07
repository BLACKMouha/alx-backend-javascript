/// <reference path="Subject.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java implements Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    getRequirements() {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      return (this.teacher.experienceTeachingJava > 0)
      ? `Available Teacher: ${this.teacher.firstName}`
      : `No available teacher`;
    }
  }
}
