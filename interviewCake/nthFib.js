function fib(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));


// iterative
function fibIterative(n) {
  var fibNumbers = [0, 1];

  if (n === 0 || n === 1) return fibNumbers[n];

  for (let i = 2; i <= n; i++) {
    var prevNum = fibNumbers[i - 1];
    var prevPrevNum = fibNumbers[i - 2];
    fibNumbers.push(prevNum + prevPrevNum);
  }

  return fibNumbers[n];
}

// console.log(fibIterative(0));
// console.log(fibIterative(1));
// console.log(fibIterative(2));
// console.log(fibIterative(3));
// console.log(fibIterative(4));
// console.log(fibIterative(5));



// iterative with space o(1)
function fibIterativeV2(n) {
  if (n === 0 || n === 1) return n;
  var prevPrev = 0, prev = 1, currFibNumber;
  for (let i = 2; i <= n; i++) {
    currFibNumber = prevPrev + prev;
    prevPrev = prev;
    prev = currFibNumber;
  }

  return currFibNumber;
}

console.log(fibIterativeV2(0));
console.log(fibIterativeV2(1));
console.log(fibIterativeV2(2));
console.log(fibIterativeV2(3));
console.log(fibIterativeV2(4));
console.log(fibIterativeV2(5));