#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + : Addition – Add two numbers
 *   - : Subtraction – Subtract one number from another
 *   * : Multiplication – Multiply two numbers
 *   / : Division – Divide one number by another (with division-by-zero handling)
 *
 * Usage:
 *   node src/calculator.js <number> <operator> <number>
 *
 * Examples:
 *   node src/calculator.js 5 + 3    => 8
 *   node src/calculator.js 10 - 4   => 6
 *   node src/calculator.js 6 '*' 7  => 42
 *   node src/calculator.js 20 / 4   => 5
 */

// Addition: add two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: subtract second number from first
function subtract(a, b) {
  return a - b;
}

// Multiplication: multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Division: divide first number by second (handles division by zero)
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Calculate result based on operator
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      throw new Error(`Unknown operator '${operator}'. Supported operators: + - * /`);
  }
}

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error("Usage: node src/calculator.js <number> <operator> <number>");
    console.error("Operators: + - * /");
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Both arguments must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(num1, operator, num2);
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };
