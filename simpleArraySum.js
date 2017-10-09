const reduce = require('./reduce')

module.exports = function(n, arr) {
  // return 31 // @TDD

  // return reduce(arr, (sum, num) => sum + num, 0) // @SEE reduce-test

  return arr.reduce((sum, num) => sum + num)
}
