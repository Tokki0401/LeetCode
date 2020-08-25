function reverseString(arr) {
  var start = 0, end = arr.length - 1;

  while (start < end) {
    const temp = arr[start];
    arr[start++] = arr[end], arr[end--] = temp;
  }

  return arr;
}

var test = ['a','c','t','s','p'];
console.log(reverseString(test))

test = ['a','b','t','F'];
console.log(reverseString(test))