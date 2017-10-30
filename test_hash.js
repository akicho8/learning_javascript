let a;

a = {key1: "v"}
console.log(a)

a = {}
a.key1 = "v"
console.log(a)

a = {}
a["key1"] = "v"
console.log(a)

a = {}
a[[0, 0]] = "v"
a[[0, 1]] = "v"
console.log(a)
