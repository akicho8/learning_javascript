let o = new A();

var v1 = 1

function A() {
  v1 = 2
  console.log("A")
  console.log(v1)
}

console.log(v1)
console.log(o.v1)

// なんとエラー
// ["a", "b"].forEach(function(e){
//   console.log(e)
// })

v = ["a", "b"]
v.forEach(function(e){
  console.log(e)
})

v = ["a", "b"]
v.forEach(function(e, i){
  console.log(e, i)
})
