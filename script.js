
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

// Reusable salary calculation function
function calculateSalary(basicSalary) {

    const hra = basicSalary * 0.20;
    const da = basicSalary * 0.10;

    const grossSalary = basicSalary + hra + da;

    return {
        basicSalary,
        hra,
        da,
        grossSalary
    };
}


const testEmployees = [
    {
        name: "Rahul Sharma",
        role: "Frontend Developer",
        basicSalary: 50000
    },
    {
        name: "Amit Verma",
        role: "React Developer",
        basicSalary: 65000
    },
    {
        name: "Priya Singh",
        role: "UI Developer",
        basicSalary: 40000
    }
];

testEmployees.forEach(function(employee) {

    const salary = calculateSalary(employee.basicSalary);
    console.log("-------------------------");
    console.log("Employee:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic:", salary.basicSalary);
    console.log("HRA:", salary.hra);
    console.log("DA:", salary.da);
    console.log("Gross:", salary.grossSalary);

});


// Form submission
salaryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    const employeeName = employeeNameInput.value.trim();
    const employeeRole = employeeRoleInput.value.trim();
    const basicSalary = Number(basicSalaryInput.value);

    // Input validation
    if (!employeeName || !employeeRole) {
        showError("Please enter employee name and role.");
        return;
    }

    if (
        basicSalaryInput.value.trim() === "" ||
        !Number.isFinite(basicSalary) ||
        basicSalary <= 0
    ) {
        showError("Please enter a valid salary greater than zero.");
        return;
    }

    // Calculate salary
    const salary = calculateSalary(basicSalary);

    // Display result
    errorMessage.textContent = "";
    result.hidden = false;

    employeeDetails.textContent =
        `Employee: ${employeeName} | Role: ${employeeRole}`;

    basicResult.textContent =
        `Basic Salary: ₹${salary.basicSalary.toFixed(2)}`;

    hraResult.textContent =
        `HRA (20%): ₹${salary.hra.toFixed(2)}`;

    daResult.textContent =
        `DA (10%): ₹${salary.da.toFixed(2)}`;

    grossResult.textContent =
        `Gross Salary: ₹${salary.grossSalary.toFixed(2)}`;
});

// Error handling function
function showError(message) {
    errorMessage.textContent = message;
    result.hidden = true;
}
