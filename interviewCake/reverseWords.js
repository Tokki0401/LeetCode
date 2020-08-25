

function reverseWords(message) {
  // join the message and split by space (' ');
  message = message.join('').split(' ');

  var start = 0, end = message.length - 1;

  // swap first and last element and work my way towards middle
  while (start < end) {
    const temp = message[start];
    message[start++] = message[end], message[end--] = temp;
  }

  return message;
}

var test = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];
console.log(reverseWords(test));