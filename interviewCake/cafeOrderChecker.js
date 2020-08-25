// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

// Ex.   Take Out Orders: [1, 3, 5]
//        Dine In Orders: [2, 4, 6]
//         Served Orders: [1, 2, 4, 6, 5, 3]

function orderChecker(takeOut, dineIn, served) {
  var x = dineIn.length - 1, y = takeOut.length - 1;

  for (let i = served.length - 1; i >= 0; i--) {
    if (served[i] === dineIn[x]) {
      x--;
    } else if (served[i] === takeOut[y]) {
      y--;
    } else {
      return false;
    }
  }

  return x === -1 && y === -1 ? true : false;
}

console.log(orderChecker([1,3,5],[2,4,6],[1,2,4,6,5,3]))
console.log(orderChecker([17,8,24],[12,19,2],[17,8,12,19,24,2]))
console.log(orderChecker([17,15,5,44,32],[6],[17,6,15,5,44,32]))