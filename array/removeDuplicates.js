/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var index = 1;
  var total = 1;
  while (index < nums.length) {
      if (nums[index] !== nums[index - 1]) {
          total++;
      }
      index++;
  }

  return total
};