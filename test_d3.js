let d3 = require('d3')
console.log(d3.version)           // => 3.5.17

let xScale = d3.scale.linear().domain([0, 10]).range([0, 100])
console.log(xScale(5))            // => 50

console.log(d3.min([2,4,1,3]))    // => 3
console.log(d3.max([2,4,1,3]))    // => 3
console.log(d3.extent([2,4,1,3])) // => [ 1, 4 ]
console.log(d3.sum([2,4,1,3]))    // => 10
console.log(d3.mean([2,4,1,3]))    // => 2.5
console.log(d3.median([2,4,1,3]))    // => 2.5
console.log(d3.quantile([1,2,3,4], 0.25))    // => 1.75

hash = {x: 1, y: 2}
console.log(d3.keys(hash))      // => [ 'x', 'y' ]
console.log(d3.values(hash))    // => [ 1, 2 ]
console.log(d3.entries(hash))    // => [ { key: 'x', value: 1 }, { key: 'y', value: 2 } ]
console.log(d3.map([2, 3], function(d){return d * 2}))    // => d3_Map { _: { '4': 2, '6': 3 } }

// v = [
//   [{y:1},{y:2}],
//   [{y:3},{y:4}],
// ]
// console.log(d3.extent(v, function(d){return d.y}))

v = [1, 4]
console.log(v[0])

date = new Date()
m = date.getMonth() + 0
date.setMonth(m)
v = d3.time.format("%Y-%m")(date)
console.log(v)
