function fizzbuzz(value) {
  if (value % 15 === 0) {
    return "FizzBuzz";
  }
  if (value % 3 === 0) {
    return "Fizz";
  }
  if (value % 5 === 0) {
    return "Buzz";
  }
  return value.toString();
}

module.exports = fizzbuzz;
