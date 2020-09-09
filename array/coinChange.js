// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.


var coinChange = function(coins, amount) {
  var coinCombination = new Array(amount + 1).fill(Infinity);
  coinCombination[0] = 0;
  for (let val = 1; val <= amount; val++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= val) {
        coinCombination[val] = Math.min(coinCombination[val], 1 + coinCombination[val - coins[j]]);
      }
    }
  }

  return coinCombination[amount] > amount ? -1 : coinCombination[amount];
};

console.log(coinChange([1,2,5], 11));
console.log(coinChange([2], 3));