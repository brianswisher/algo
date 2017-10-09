const reduce = require('./reduce')

let i, t, e

i = reduce; t = typeof i; e = 'function'
console.log(t === e, 'it exists', t, e)

i = [ [1,2,3], (sum, num) => sum + num, 0 ]; t = reduce.apply(null, i); e = 6
console.log(t === e, 'it adds up to six', t, e)

i = [ [1,2,3], (acc, num) => { acc[num] = num; return acc }, {} ]
t = Object.keys( reduce.apply(null, i) ).join('-')
e = '1-2-3'
console.log(t === e, 'it adds keys to obj', t, e)
