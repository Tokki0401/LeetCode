/**
 * @param {number[]} nums
 * @return {number}
 */

// Hashing Method
// Time O(n), Space(n)

 var majorityElement = function(nums) {
  var majority = Math.ceil(nums.length / 2);
  var reference = {};

  for (let i = 0; i < nums.length; i++) {
      if (!reference[nums[i]]) {
          reference[nums[i]] = 1;
      } else {
          reference[nums[i]] = ++reference[nums[i]];
      }

      if (reference[nums[i]] === majority) {
          return nums[i];
      }
  }
};

// T = O(n);
// S = O(n);
// Edge
// [1,1,1]
// [2,2,2,4]
// [1,2,1,2,1]
// [-1, -1, 3]


// Moore Voting Method
// Time O(n), Space(1)