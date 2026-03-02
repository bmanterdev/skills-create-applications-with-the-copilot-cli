#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + : Addition – Add two numbers
 *   - : Subtraction – Subtract one number from another
 *   * : Multiplication – Multiply two numbers
 *   / : Division – Divide one number by another (with division-by-zero handling)
 *   % : Modulo – Return the remainder of dividing one number by another
 *   ** : Exponentiation – Raise a number to the power of another
 *   sqrt : Square root – Calculate the square root of a number
 *
 * Usage:
 *   node src/calculator.js <number> <operator> <number>
 *   node src/calculator.js sqrt <number>
 *
 * Examples:
 *   node src/calculator.js 5 + 3    => 8
 *   node src/calculator.js 10 - 4   => 6
 *   node src/calculator.js 6 '*' 7  => 42
 *   node src/calculator.js 20 / 4   => 5
 *   node src/calculator.js 10 % 3   => 1
 *   node src/calculator.js 2 '**' 8 => 256
 *   node src/calculator.js sqrt 16  => 4
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

// Modulo: return the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

// Exponentiation: raise base to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root: return the square root of n (handles negative numbers)
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
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
    case "%":
      return modulo(num1, num2);
    case "**":
      return power(num1, num2);
    default:
      throw new Error(`Unknown operator '${operator}'. Supported operators: + - * / % **`);
  }
}

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  // Handle sqrt (single operand)
  if (args.length === 2 && args[0] === "sqrt") {
    const n = parseFloat(args[1]);
    if (isNaN(n)) {
      console.error("Error: Argument must be a valid number.");
      process.exit(1);
    }
    try {
      const result = squareRoot(n);
      console.log(`sqrt(${n}) = ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    process.exit(0);
  }

  if (args.length !== 3) {
    console.error("Usage: node src/calculator.js <number> <operator> <number>");
    console.error("       node src/calculator.js sqrt <number>");
    console.error("Operators: + - * / % **");
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
