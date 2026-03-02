const { add, subtract, multiply, divide, calculate } = require("../calculator");

// ──────────────────────────────────────────────
// Addition tests
// ──────────────────────────────────────────────
describe("add", () => {
  test("2 + 3 = 5 (image example)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds negative numbers", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("adds a positive and a negative number", () => {
    expect(add(7, -2)).toBe(5);
  });

  test("adds zero to a number", () => {
    expect(add(5, 0)).toBe(5);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });
});

// ──────────────────────────────────────────────
// Subtraction tests
// ──────────────────────────────────────────────
describe("subtract", () => {
  test("10 - 4 = 6 (image example)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero", () => {
    expect(subtract(8, 0)).toBe(8);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ──────────────────────────────────────────────
// Multiplication tests
// ──────────────────────────────────────────────
describe("multiply", () => {
  test("45 * 2 = 90 (image example)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

// ──────────────────────────────────────────────
// Division tests
// ──────────────────────────────────────────────
describe("divide", () => {
  test("20 / 5 = 4 (image example)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(100, 4)).toBe(25);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("divides a positive by a negative number", () => {
    expect(divide(9, -3)).toBe(-3);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("throws error on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
});

// ──────────────────────────────────────────────
// calculate() integration tests
// ──────────────────────────────────────────────
describe("calculate", () => {
  test("calculates addition with + operator", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("calculates subtraction with - operator", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("calculates multiplication with * operator", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("calculates division with / operator", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("throws error for unknown operator", () => {
    expect(() => calculate(1, "%", 2)).toThrow("Unknown operator '%'");
  });

  test("throws error for division by zero via calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero is not allowed.");
  });
});
