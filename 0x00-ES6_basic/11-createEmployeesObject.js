export default function createEmployeesObject(department, employees) {
    const departmentNameEmployees = {
        [department]: employees,
    }

    return departmentNameEmployees;
}
