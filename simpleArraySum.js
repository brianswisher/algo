module.exports = function(n, arr) {
  // const reduce = require('./reduce') // @SEE reduce-test
  // return reduce(arr, (sum, num) => sum + num, 0)

  return arr.reduce((sum, num) => sum + num)
}
