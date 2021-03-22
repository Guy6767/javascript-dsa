// helper function
function helper(n) {
  const fibs = [1, 1];

  function fib(n, x = 1, y = 1) {
    if (y > n) return;
    fibs.push(x + y);
    fib(n, y, x + y);
  }

  fib(n);
  return fibs;
}

// pure recursion
function fib(n, x = 1, y = 1, fibs = [1, 1]) {
  if (n == 0) return fibs;
  return fib(n - 1, y, x + y, fibs.concat([x + y]));
}

const fibs = fib(30);
console.log(fibs.reduce((str, num) => `${str} ${num}`, ``));
