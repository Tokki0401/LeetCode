/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  var ans = [];
  for (let i = 0; i < nums1.length; i++) {
      ans.push(finder(nums1[i]));
  }

  function finder(val) {
      var start = nums2.indexOf(val);
      for (let i = start; i < nums2.length; i++) {
          if (nums2[i] > val) {
              return nums2[i];
          }
      }

      return -1;
  }

  return ans;
};