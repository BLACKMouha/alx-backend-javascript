export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
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

            employeeId++;
            if (isLastEmployee) {
                // Reset user index
                employeeId = 0;
                // Jump to next city
                departmentId++;
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

// userNamesGroupedByLocation[Symbol.iterator] = function() {
//     const cityKeys = Object.keys(this);
//     let cityIndex = 0;
//     let userIndex = 0;
    
//     return {
//         next: () => {
//             // We already iterated over all cities
//             if (cityIndex > cityKeys.length - 1) {
//                 return {
//                     value: undefined,
//                     done: true,
//                 };
//             }

//             const users = this[cityKeys[cityIndex]];
//             const user = users[userIndex];

//             const isLastUser = userIndex >= users.length - 1;

//             userIndex++;
//             if (isLastUser) {
//                 // Reset user index
//                 userIndex = 0;
//                 // Jump to next city
//                 cityIndex++;
//             }
            
//             return {
//                 done: false,
//                 value: user,
//             };
//         },
//     };
// };
