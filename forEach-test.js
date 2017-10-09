const forEach = require('./forEach')

let i, t, e, d

i = forEach; t = typeof i; e = 'function'
console.log(t === e, 'it exists', t, e)

d = []
i = [ [1,2,3], num => { d.push(num + 1) } ]
t = ( () => { forEach.apply(null, i); return d.join('-') } )()
e = '2-3-4'
console.log(t === e, 'it operates on each', t, e)
