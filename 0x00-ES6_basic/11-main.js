import createEmployeesObject from './11-createEmployeesObject.js';

const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

Object.entries(employees).forEach(([department, listEmployees]) => {
    console.log(department, listEmployees)
});
