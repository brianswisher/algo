const simpleArraySum = require('./simpleArraySum')

let i, t, e

i = simpleArraySum; t = typeof i; e = 'function'
console.log(t === e, 'module exists', t, e)

i = [ 6, [1,2,3,4,10,11] ]; t = simpleArraySum.apply(null, i); e = 31
console.log(t === e, 'module works w/ 6 pos', t, e)

i = [ 5, [2,3,4,10,11] ]; t = simpleArraySum.apply(null, i); e = 30
console.log(t === e, 'module works w/ 5 pos', t, e)

i = [ 4, [3,4,10,11] ]; t = simpleArraySum.apply(null, i); e = 28
console.log(t === e, 'module works w/ 4 pos', t, e)

i = [ 3, [4,10,11] ]; t = simpleArraySum.apply(null, i); e = 25
console.log(t === e, 'module works w/ 3 pos', t, e)

i = [ 2, [10,11] ]; t = simpleArraySum.apply(null, i); e = 21
console.log(t === e, 'module works w/ 2 pos', t, e)

i = [ 2, [10,-11] ]; t = simpleArraySum.apply(null, i); e = -1
console.log(t === e, 'module works w/ 2; 1 pos & 1 neg', t, e)
