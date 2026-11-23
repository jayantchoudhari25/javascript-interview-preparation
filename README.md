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

## Upcoming Learning Goals

- Day 03 – JavaScript Arrays and Objects
- Day 04 – DOM Manipulation and Events
- Day 05 – Scope, Hoisting and Closures
- Day 06 – Array Methods (`map`, `filter`, `reduce`)
- Day 07 – Callbacks and Higher-Order Functions
- Future – Promises, Async/Await, ES6+, TypeScript, React.js and Next.js

## Learning Objective

To strengthen JavaScript fundamentals, develop logical thinking, write clean and reusable code, and prepare for Frontend Developer and Next.js Engineer interviews through practical implementation.

## GitHub

**Repository:** [JavaScript Interview Preparation](https://github.com/jayantchoudhari25/javascript-interview-preparation)

---

*Continuously learning, coding, improving, and building practical projects.*
