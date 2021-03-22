function power(base, exponent) {
  if (exponent == 0) return 1;
  if (exponent == 1) return base;
  return base * power(base, exponent - 1);
}

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

function productOfArray(array) {
  if (array.length == 1) return array[0];
  return array[0] + productOfArray(array.slice(1));
}

function recursiveRange(n) {
  if (n == 1) return 1;
  return n + recursiveRange(n - 1);
}

function fib(n, x = 1, y = 1) {
  if (n == 1) return x;
  return fib(n - 1, y, x + y);
}

console.log(fib(5));
