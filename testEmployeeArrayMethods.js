
import { employees } from "./employeeData.js";

import {
    searchEmployees,
    filterByDepartment,
    getEmployeeById,
    getEmployeeIndex,
    hasEmployeeAboveSalary,
    allEmployeesHaveValidSalary,
    sortEmployeesBySalary,
    calculateDepartmentPayroll,
    getEmployeeSalarySummaries
} from "./employeeArrayMethods.js";


// TEST 1: Search employee by name
console.log("1. Search Employee:");

console.table(searchEmployees("rah"));


// TEST 2: Filter by department
console.log("2. Engineering Employees:");

console.table(filterByDepartment("Engineering"));


// TEST 3: Find employee by ID
console.log("3. Find Employee:");

console.log(getEmployeeById(102));


// TEST 4: Find employee index
console.log("4. Employee Index:");

console.log(getEmployeeIndex(103));


// TEST 5: Check if an employee earns above ₹60,000
console.log("5. Salary Condition:");

console.log(hasEmployeeAboveSalary(60000));


// TEST 6: Check whether all salaries are valid
console.log("6. Validate All Salaries:");

console.log(allEmployeesHaveValidSalary());


// TEST 7: Sort employees by salary
console.log("7. Salary Sorting:");

console.table(sortEmployeesBySalary("desc"));


// TEST 8: Department-wise payroll
console.log("8. Department Payroll:");

console.table(calculateDepartmentPayroll());


// TEST 9: Employee salary summaries
console.log("9. Salary Summaries:");

console.table(getEmployeeSalarySummaries());


// TEST 10: Verify original array was not modified
console.log("10. Original Dataset:");

console.table(employees);
