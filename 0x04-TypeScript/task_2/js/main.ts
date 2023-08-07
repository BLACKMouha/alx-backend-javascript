export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee (salary: number | string) {
  if (typeof salary === 'string') salary = parseInt(salary);
    return (salary < 500) ? new Teacher() : new Director;
}

export function isDirector(employee: Director | Teacher) {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects) {
  return `Teaching ${todayClass}`;
}
