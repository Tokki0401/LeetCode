function topScore(scores, highestScore) {
  const scoreCounts = new Array(highestScore + 1).fill(0);

  scores.forEach(score => {
    scoreCounts[score]++;
  })

  const sortedScore = [];

  for (let i = highestScore; i >= 0; i--) {
    const count = scoreCounts[i];

    for (let j = 0; j < count; j++) {
      sortedScore.push(i);
    }
  }

  return sortedScore;
}

console.log(topScore([11,33,44,15,65,40,40,40,44,90,11,90,90], 100))