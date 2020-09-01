function wordCloudData(sentence) {
  var cloud = {};

  sentence = sentence.split(' ');

  for (let i = 0; i < sentence.length; i++) {
    var lastLetter = sentence[i].charCodeAt(sentence[i].length - 1);
    if (lastLetter > 122 || lastLetter < 97) {
      sentence[i] = sentence[i].slice(0, sentence[i].length - 1);
    }

    var lowerCaseWord = sentence[i].toLowerCase();
    cloud[lowerCaseWord] = cloud[lowerCaseWord] === undefined ? 1 : cloud[lowerCaseWord] + 1;
  }

  return cloud;
}


console.log(wordCloudData("After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar."));

// first split the string by space
// loop through the array

  // check if the last element has a punctuation
    // if so, splice the end

  // otherwise simply add to the hash table
