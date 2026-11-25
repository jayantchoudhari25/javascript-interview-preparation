
import { employees } from "./employeeData.js";

import {
    findEmployee,
    createSafeCopy,
    updateEmployeeRole,
    calculateDepartmentTotals
} from "./employeeUtils.js";


// Test 1: Find employee
const employee = findEmployee(102);

console.log("Employee Found:", employee);


// Test 2: Create safe copy
const safeCopy = createSafeCopy(employee);

safeCopy.role = "Technical Lead";

console.log("Original:", employee.role);
console.log("Copied:", safeCopy.role);


// Test 3: Update employee role
const updatedEmployees = updateEmployeeRole(
    102,
    "Senior Backend Developer"
);

console.log("Original Employees:", employees);

console.log("Updated Employees:", updatedEmployees);


// Test 4: Department totals
const departmentTotals = calculateDepartmentTotals();

console.log("Department Totals:", departmentTotals);
