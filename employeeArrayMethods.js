
import { employees } from "./employeeData.js";

// 1. Search employees by name
export function searchEmployees(searchText, employeeList = employees) {

    const searchValue = searchText.trim().toLowerCase();

    if (!searchValue) {
        return [];
    }

    return employeeList.filter((employee) =>
        employee.name.toLowerCase().includes(searchValue)
    );

}


// 2. Filter employees by department
export function filterByDepartment(department, employeeList = employees) {

    return employeeList.filter((employee) =>
        employee.department.toLowerCase() === department.trim().toLowerCase()
    );

}


// 3. Find employee by ID
export function getEmployeeById(employeeId, employeeList = employees) {

    return employeeList.find((employee) =>
        employee.id === employeeId
    );

}


// 4. Find employee index
export function getEmployeeIndex(employeeId, employeeList = employees) {

    return employeeList.findIndex((employee) =>
        employee.id === employeeId
    );

}


// 5. Check if any employee earns above a given salary
export function hasEmployeeAboveSalary(minSalary, employeeList = employees) {

    return employeeList.some((employee) =>
        employee.basicSalary > minSalary
    );

}


// 6. Check if all employees have valid salaries
export function allEmployeesHaveValidSalary(employeeList = employees) {

    return employeeList.every((employee) =>
        Number.isFinite(employee.basicSalary) &&
        employee.basicSalary > 0
    );

}


// 7. Sort employees by salary
export function sortEmployeesBySalary(
    order = "desc",
    employeeList = employees
) {

    if (!["asc", "desc"].includes(order)) {
        throw new Error("Order must be asc or desc");
    }

    return [...employeeList].sort((a, b) => {

        return order === "asc"
            ? a.basicSalary - b.basicSalary
            : b.basicSalary - a.basicSalary;

    });

}


// 8. Calculate department-wise payroll
export function calculateDepartmentPayroll(employeeList = employees) {

    return employeeList.reduce((result, employee) => {

        const department = employee.department;

        const basicSalary = employee.basicSalary;
        const hra = basicSalary * 0.20;
        const da = basicSalary * 0.10;

        const grossSalary = basicSalary + hra + da;

        if (!result[department]) {

            result[department] = {
                employeeCount: 0,
                totalBasicSalary: 0,
                totalGrossSalary: 0
            };

        }

        result[department].employeeCount++;

        result[department].totalBasicSalary += basicSalary;

        result[department].totalGrossSalary += grossSalary;

        return result;

    }, {});

}


// 9. Create employee salary summaries using map()
export function getEmployeeSalarySummaries(employeeList = employees) {

    return employeeList.map((employee) => {

        const { id, name, role, department, basicSalary } = employee;

        const hra = basicSalary * 0.20;
        const da = basicSalary * 0.10;

        return {
            id,
            name,
            role,
            department,
            basicSalary,
            grossSalary: basicSalary + hra + da
        };

    });

}
