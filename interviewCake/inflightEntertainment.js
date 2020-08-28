function moviePicker(movies, flightTime) {
  var secondMovie = new Set();

  for (let i = 0; i < movies.length; i++) {
    var flightTimeLeft = flightTime - movies[i];

    if (secondMovie.has(flightTimeLeft)) {
      return true;
    }

    secondMovie.add(movies[i]);
  }

  return false;
}

console.log(moviePicker([6,1,4,9,5,8], 15));