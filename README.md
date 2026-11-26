# JavaScript Interview Preparation – Employee Salary Calculator

A practical JavaScript project developed as part of my JavaScript interview preparation. The application is progressively enhanced by implementing JavaScript concepts through real-world functionality.

## Project Overview

The Employee Salary Calculator calculates employee salary components, deductions, gross salary, and net salary.

Instead of creating separate projects for each learning day, this application is continuously upgraded with new JavaScript concepts and functionalities.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Learning Progress

### Day 01 – JavaScript Fundamentals

**Concepts Covered:**
- Variables: `var`, `let`, and `const`
- Data types and operators
- Primitive and reference data types
- `typeof` operator
- Strict equality (`===`)
- Basic salary calculations

**Functionalities:**
- Employee name and role input
- Basic salary input
- HRA calculation (20% of Basic Salary)
- DA calculation (10% of Basic Salary)
- Gross salary calculation

### Day 02 – Conditions, Loops and Functions

**Concepts Covered:**
- `if`, `else if`, and `else`
- `switch` statements
- Ternary operators
- `for` and `for...of` loops
- Function declarations and expressions
- Arrow functions
- Parameters, arguments and return values
- Default parameters

**New Functionalities:**
- Multiple employee salary processing
- Separate functions for HRA and DA calculations
- Gross salary calculation
- Salary deduction scenarios
- Net salary calculation
- Input validation
- Zero salary handling
- Employee salary summary
- Currency formatting using `Intl.NumberFormat()`

## Salary Calculation Logic

| Component | Calculation |
|---|---|
| HRA | Basic Salary × 20% |
| DA | Basic Salary × 10% |
| Gross Salary | Basic + HRA + DA |
| Deduction | Based on selected scenario |
| Net Salary | Gross Salary − Deduction |

*Deduction percentages are illustrative learning examples, not statutory payroll rules.*

## Project Structure

```text
javascript-interview-preparation/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in your browser.
4. Enter employee details and test the salary calculations.

### Day 03 – JavaScript Arrays and Objects

**Concepts Covered:**
- Array and object creation
- Property access and destructuring
- Spread and rest operators
- Optional chaining
- Object.keys(), Object.values() and Object.entries()
- Mutability, immutability and copying
- Shallow copy vs deep copy
- Array methods: find(), filter(), map() and reduce()

**New Functionalities:**
- Created a structured employee dataset using an array of objects.
- Implemented employee search by ID.
- Implemented immutable employee role updates.
- Created safe copies of employee objects.
- Implemented department-wise employee count and salary calculations.
- Applied reusable JavaScript utility functions.

**Deliverable:** Employee Data Utility Module.

### Day 04 – JavaScript Array Methods and Data Transformation

**Concepts Covered:**
- map(), filter(), find(), findIndex()
- some(), every(), reduce(), sort()
- Callback functions
- Higher-order functions
- Method chaining
- Immutable array transformations

**New Functionalities:**
- Implemented employee search by name.
- Implemented department-wise employee filtering.
- Implemented employee search by ID.
- Implemented employee index identification.
- Implemented salary-based employee sorting.
- Implemented salary validation.
- Calculated total company payroll using reduce().
- Calculated department-wise payroll.
- Generated employee salary summaries using map().
- Tested array transformations without modifying the original dataset.

**Deliverable:** Employee Data Transformation Exercise.

**Testing:** Tested 10 employee data operations using Node.js.

## Learning Objective

To strengthen JavaScript fundamentals, develop logical thinking, write clean and reusable code, and prepare for Frontend Developer and Next.js Engineer interviews through practical implementation.

## GitHub

**Repository:** [JavaScript Interview Preparation](https://github.com/jayantchoudhari25/javascript-interview-preparation)

---

*Continuously learning, coding, improving, and building practical projects.*
