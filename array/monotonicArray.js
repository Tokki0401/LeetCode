/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  var path = null;

  if (A.length <= 1) {
      return true;
  } else {
      path = A[0] <= A[A.length - 1] ? 1 : -1;
  }

  if (path === 1) {
      // for loop
      for (let i = 0; i < A.length; i++) {
          if (i+2 === A.length) {
              break;
          }

          if (!(A[i] <= A[i+1] && A[i+1] <= A[i+2])) {
              return false;
          }
      }
  } else {
      for (let i = 0; i < A.length; i++) {
          if (i+2 === A.length) {
              break;
          }

          if (!(A[i] >= A[i+1] && A[i+1] >= A[i+2])) {
              return false;
          }
      }
  }

  return true;

};

/*
[1]
[1,1]
[1,2,6,4]
[1,3,2]
[6,5,4,4]
[6,3,1,-1]
[-3,-3,-3]
[5,-2,2,-7]
*/


// Better Approach

var isMonotonic = function(A) {
  var inc = dec = true;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i+1]) {
      inc = false;
    }
    if (A[i] < A[i+1]) {
      dec = false;
    }
  }

  return inc || dec;
}