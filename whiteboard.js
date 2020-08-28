// decode string

// encoded string given => return decoded string

// input = string input, combination of numbers and character in "3[a]2[bc]"

// turn it into a decoded string
// [a] will be repeated number before square letter

// Ex.
// I = "3[a]2[bc]"
// O = "aaabcbc"
// C = no constraints, thought process, 12:00 PM
// E = no empty string,

// I = "3[a2[c]]"
// O = accaccacc

// start from beginning
// if I run into a number => store it to a variable = coefficient
// have a boolean that turns true if element is '['

// if the boolean is true and current element is not ']'
// concatenate the current element to a variable called temp        temp = a   coefficient 3
// else
//   concatenated into answer varialbe = run a helper function that takes in (coeff, temp) return  coeff * temp as a string
//   set the boolean back to false, set temp to "";


// var answer = '';

// for loop through backwards
  // if current index is '[' or ']'
    // continue;
  // else if ( Number(arr[i]))
    // answer = helper function (Number(arr[i]), answer)   ===> for loop through number of times to multiply answer
  // else
    // answer = arr[i] + answer

// https://leetcode.com/problems/decode-string/


