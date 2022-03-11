var x = 30 //var variable declaration has many issues such as it is globally scoped(hoisting),redeclaration is allowed
let y = 50 //let solved the issues of var.
const z = 20 //this is used to keep the variable name constant,we cannot reassign any other value to that var name.
console.log(x) //used as print command in js
console.log(y)
console.log(z)

//in modern js const and let are used and const is used mostly bcos it is more predictable.
//main difference b/w const and let is we cannot reassign value for variable name defined using const.

//Template literals=${...}
const name = 'mihir'
const age = 21
const greet = `I am ${name} my age is ${ age }`
console.log(greet)