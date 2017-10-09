module.exports = function(arr, func, start) {
  let target = start

  arr.forEach(a => {
    target = func(target, a)
  })

  return target
}
