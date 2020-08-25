

function mergeArrays(arr1, arr2) {
  var i = 0, j = 0;
  var mergedArr = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] === undefined) {
      mergedArr.push(arr2[j++]);
    } else if (arr2[j] === undefined) {
      mergedArr.push(arr1[i++]);
    } else if (arr1[i] >= arr2[j]) {
      mergedArr.push(arr2[j++]);
    } else {
      mergedArr.push(arr1[i++]);
    }

  }

  // check if arr1 or arr2 is still left
  // if (i !== arr1.length) {
  //   mergedArr = mergedArr.concat(arr1.slice(i));
  // } else {
  //   mergedArr = mergedArr.concat(arr2.slice(j));
  // }
  return mergedArr;
}

var testArr1 = [3,4,6,10,11,15,23,50];
var testArr2 = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(testArr1, testArr2));