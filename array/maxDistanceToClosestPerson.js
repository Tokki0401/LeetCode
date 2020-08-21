/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  // create variables of count = 0, max = 0, init = -1, answer = 0;
  var count = 0, init = answer = -1;

  for (let i = 0; i < seats.length; i++) {
      if (seats[i] === 1) {
          if (init === -1) {
              answer = count;
          } else {
              answer = Math.max(answer, Math.ceil(count / 2));
          }
          init = i, count = 0;
      } else {
          count++;
      }
  }

  answer = Math.max(answer, count);
  return answer;
};

/* Test case
[0,0,1]
[0,1,0,0,0]
[1,0,1]
[0,1,0,0,1,0,0]
*/