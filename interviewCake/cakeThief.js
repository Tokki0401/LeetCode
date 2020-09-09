function cakeThief(cakes, capacity) {
  var maxValueCapacity = new Array(capacity + 1).fill(0);

  for (let i = 0; i <= capacity; i++) {
    var currentMax = 0;

    for (let j = 0; j < cakes.length; j++) {
      var cake = cakes[j];

      if (cake.weight === 0 && cake.value !== 0) {
        return Infinity;
      }

      if (cake.weight <= i) {
        var currentCakeMax = cake.value + maxValueCapacity[i - cake.weight];
        currentMax = Math.max(currentCakeMax, currentMax);
      }

    }

    maxValueCapacity[i] = currentMax;
  }

  return maxValueCapacity[capacity];
}

const test = [
  {weight: 7, value: 160},
  {weight: 2, value: 15},
  {weight: 3, value: 90}
];
console.log(cakeThief(test, 20));