// number of islands

// given 2D dimension of 1 and 0
// 1 = land
// 0 = water

// land is formed by connecting horizontal and/or vertical

// [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]                          1

// [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]                          3

// I = nested 2D array with 1 = land, 0 = water
// O = number of islands
// C = no T or S complexity, 12:30 pm, thought process
// E = no island possible,


// double for loop


// object [0][0], [1][1] [1][2] [2][2]

// iterate through this object [0][0]   [0][1] [1][0]
// if there is none, increment answer variable
// else
// store that index, and go to that index, check if there is any adjacent island
// if there is none, icrement, otherwise keep

// a second object that stores any adjacent islands that I've visited
// when doing the iteration through the first object, if the index is in 2nd object then simply skip/continue

// [ [1 0 0]            2
//   [0 1 1]
//   [0 0 1] ]   2
function island(array) {
  // create objectA                [0][0], [1][1] [1][2] [2][2]

  // for loop through outer array (i)
    // for loop through inner array (j)
      // if [i][j] is equal to 1
        // store the index into objectA     key = 'ij' value = true

  // create objectB
  // create ans variable

  // for loop through objectA
    // if condition checking if current key is in objectB
      // continue;

    // create var i = key[0];
    // create var j = key[1];

    // recursion(i, j + 1);
    // recursion(i, j - 1);
    // recursion(i + 1, j);
    // recursion(i - 1, j);


    // "some sort of recursion function"
      // insert into objectB
      // check if check if any adjacent key is within objectA  X 4 for 4 adjacent sides

      // increment answer

  // return answer
}

// delete key*