import { employees } from "./employeeData.js";

// 1. Find employee by ID
export function findEmployee(employeeId) {
  return employees.find((employee) => {
    return employee.id === employeeId;
  });
}

// 2. Create a safe copy of employee data

export function createSafeCopy(employee) {
  if (!employee) {
    return null;
  }

  return structuredClone(employee);
}

// 3. Update employee role without modifying original data

export function updateEmployeeRole(employeeId, newRole) {
  if (typeof newRole !== "string" || !newRole.trim()) {
    return employees;
  }
  return employees.map((employee) => {
    if (employee.id === employeeId) {
      return {
        ...employee,
        role: newRole.trim(),
      };
    }

    return employee;
  });
}

// 4. Calculate department-wise totals
export function calculateDepartmentTotals(employeeList = employees) {

    return employeeList.reduce((departmentTotals, employee) => {

        const department = employee.department;

        if (!departmentTotals[department]) {

            departmentTotals[department] = {
                employeeCount: 0,
                totalBasicSalary: 0,
                totalGrossSalary: 0
            };

        }

        const hra = employee.basicSalary * 0.20;
        const da = employee.basicSalary * 0.10;

        const grossSalary =
            employee.basicSalary + hra + da;

        departmentTotals[department].employeeCount++;

        departmentTotals[department].totalBasicSalary +=
            employee.basicSalary;

        departmentTotals[department].totalGrossSalary +=
            grossSalary;

        return departmentTotals;

    }, {});

}