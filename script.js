
// ==========================================
// 1. DOM ELEMENT SELECTION
// ==========================================

const salaryForm = document.getElementById("salaryForm");

const employeeNameInput = document.getElementById("employeeName");
const employeeRoleInput = document.getElementById("employeeRole");
const basicSalaryInput = document.getElementById("basicSalary");

const errorMessage = document.getElementById("errorMessage");
const result = document.getElementById("result");

const employeeDetails = document.getElementById("employeeDetails");
const basicResult = document.getElementById("basicResult");
const hraResult = document.getElementById("hraResult");
const daResult = document.getElementById("daResult");
const grossResult = document.getElementById("grossResult");


// ==========================================
// 2. APPLICATION DATA
// ==========================================

const employees = [
  {
    id: 1,
    name: "Jay C",
    role: "Frontend Developer",
    basicSalary: 50000,
    deductionScenario: "standard",
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "React Developer",
    basicSalary: 65000,
    deductionScenario: "reduced",
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "UI Developer",
    basicSalary: 40000,
    deductionScenario: "exempt",
  },
];


// ==========================================
// 3. REUSABLE CALCULATION FUNCTIONS
// ==========================================

// Calculate HRA
function calculateHRA(basicSalary, percentage = 20) {
  return (basicSalary * percentage) / 100;
}

// Calculate DA
function calculateDA(basicSalary, percentage = 10) {
  return (basicSalary * percentage) / 100;
}

// Calculate Gross Salary
function calculateGrossSalary(basicSalary, hra, da) {
  return basicSalary + hra + da;
}

// Get Deduction Rate
function getDeductionRate(scenario = "standard") {
  switch (scenario) {
    case "standard":
      return 5;

    case "reduced":
      return 2;

    case "exempt":
      return 0;

    default:
      return null;
  }
}

// Calculate Deduction
function calculateDeduction(grossSalary, deductionRate = 5) {
  return (grossSalary * deductionRate) / 100;
}

// Calculate Net Salary
function calculateNetSalary(grossSalary, deduction) {
  return grossSalary - deduction;
}


// ==========================================
// 4. BUSINESS LOGIC
// ==========================================

function calculateEmployeeSalary(employee) {

  // Validate employee object
  if (!employee || typeof employee !== "object" || Array.isArray(employee)) {
    return {
      success: false,
      error: "Invalid employee record",
    };
  }

  // Extract employee properties
  const {
    name,
    role,
    basicSalary,
    deductionScenario = "standard",
  } = employee;

  // Validate employee details
  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof role !== "string" ||
    !role.trim()
  ) {
    return {
      success: false,
      error: "Employee name and role are required",
    };
  }

  // Validate basic salary
  if (
    typeof basicSalary !== "number" ||
    !Number.isFinite(basicSalary) ||
    basicSalary < 0
  ) {
    return {
      success: false,
      error: "Salary must be a valid non-negative number",
    };
  }

  // Calculate salary components
  const hra = calculateHRA(basicSalary);

  const da = calculateDA(basicSalary);

  const grossSalary = calculateGrossSalary(
    basicSalary,
    hra,
    da
  );

  // Get deduction percentage
  const deductionRate = getDeductionRate(deductionScenario);

  if (deductionRate === null) {
    return {
      success: false,
      error: "Invalid deduction scenario",
    };
  }

  // Calculate deductions
  const deduction = calculateDeduction(
    grossSalary,
    deductionRate
  );

  // Calculate net salary
  const netSalary = calculateNetSalary(
    grossSalary,
    deduction
  );

  // Return calculated employee salary
  return {
    success: true,
    employeeName: name,
    role,
    basicSalary,
    hra,
    da,
    grossSalary,
    deductionRate,
    deduction,
    netSalary,
  };
}


// ==========================================
// 5. UTILITY FUNCTIONS
// ==========================================

// Format currency
function formatCurrency(amount, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Display error message
function showError(message) {
  errorMessage.textContent = message;
  result.hidden = true;
}


// ==========================================
// 6. DISPLAY FUNCTIONS
// ==========================================

function displaySalary(employee) {

  console.log("------------------------------");

  console.log(`Employee: ${employee.employeeName}`);

  console.log(`Role: ${employee.role}`);

  console.log(`Basic Salary: ${formatCurrency(employee.basicSalary)}`);

  console.log(`HRA: ${formatCurrency(employee.hra)}`);

  console.log(`DA: ${formatCurrency(employee.da)}`);

  console.log(`Gross Salary: ${formatCurrency(employee.grossSalary)}`);

  console.log(
    `Deduction (${employee.deductionRate}%): ${formatCurrency(employee.deduction)}`
  );

  console.log(`Net Salary: ${formatCurrency(employee.netSalary)}`);
}


// ==========================================
// 7. PROCESS ALL EMPLOYEES
// ==========================================

function processAllEmployees(employeeList = []) {

  if (!Array.isArray(employeeList)) {
    console.error("Employee list must be an array");
    return;
  }

  for (const employee of employeeList) {

    const salaryResult = calculateEmployeeSalary(employee);

    if (!salaryResult.success) {
      console.error(
        employee?.name || "Unknown Employee",
        salaryResult.error
      );

      continue;
    }

    displaySalary(salaryResult);
  }
}


// ==========================================
// 8. FORM SUBMISSION EVENT
// ==========================================

salaryForm.addEventListener("submit", function (event) {

  event.preventDefault();

  // Get form values
  const employeeName = employeeNameInput.value.trim();

  const employeeRole = employeeRoleInput.value.trim();

  const basicSalary = Number(basicSalaryInput.value);

  // Validate employee name and role
  if (!employeeName || !employeeRole) {
    showError("Please enter employee name and role.");
    return;
  }

  // Validate salary
  if (
    basicSalaryInput.value.trim() === "" ||
    !Number.isFinite(basicSalary) ||
    basicSalary <= 0
  ) {
    showError("Please enter a valid salary greater than zero.");
    return;
  }

  // Create employee object
  const employee = {
    name: employeeName,
    role: employeeRole,
    basicSalary,
    deductionScenario: "standard",
  };

  // Calculate salary using common business logic
  const salary = calculateEmployeeSalary(employee);

  if (!salary.success) {
    showError(salary.error);
    return;
  }

  // Clear error and show result
  errorMessage.textContent = "";

  result.hidden = false;

  // Display salary details
  employeeDetails.textContent =
    `Employee: ${salary.employeeName} | Role: ${salary.role}`;

  basicResult.textContent =
    `Basic Salary: ${formatCurrency(salary.basicSalary)}`;

  hraResult.textContent =
    `HRA (20%): ${formatCurrency(salary.hra)}`;

  daResult.textContent =
    `DA (10%): ${formatCurrency(salary.da)}`;

  grossResult.textContent =
    `Gross Salary: ${formatCurrency(salary.grossSalary)}`;

});


// ==========================================
// 9. APPLICATION INITIALIZATION
// ==========================================

processAllEmployees(employees);
