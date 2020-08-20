/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  var answer = '';

  for (let i = 0; i < s.length; i++) {
      var prevLetter = answer[answer.length - 1] || '';

      if (prevLetter !== s[i] && prevLetter.toLowerCase() === s[i].toLowerCase()) {
          answer = answer.slice(0, answer.length - 1);
      } else {
          answer = answer.concat(s[i]);
      }
  }
  return answer;
};

/*
"leEeetcode"
"abBAcC"
"AABb"
*/