/// <reference path="Subject.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React implements Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }

    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      return (this.teacher.experienceTeachingReact > 0)
      ? `Available Teacher: ${this.teacher.firstName}`
      : `No available teacher`;
    }
  }
}
