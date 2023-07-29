export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departmentKeys = Object.keys(allEmployees);
  let departmentId = 0;
  let employeeId = 0;

  return {
    next: () => {
      // We already iterated over all departments
      if (departmentId > departmentKeys.length - 1) {
        return {
          value: undefined,
          done: true,
        };
      }

      const employees = allEmployees[departmentKeys[departmentId]];
      const employee = employees[employeeId];

      const isLastEmployee = employeeId >= employees.length - 1;

      employeeId += 1;
      if (isLastEmployee) {
        // Reset employee index
        employeeId = 0;
        // Jump to next department
        departmentId += 1;
      }

      return {
        done: false,
        value: employee,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
