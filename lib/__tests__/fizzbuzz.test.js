const fizzbuzz = require("../fizzbuzz");

describe("fizzbuzz", () => {
  it("returns FizzBuzz when a value is divisible by 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it("returns Fizz when a value is divisible by 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("returns Buzz when a value is divisible by 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it("returns the value as string when a value is not divisible by 3 and 5", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
});
