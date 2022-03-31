//JS FOR REACT NATIVE.
var x = 30 //var variable declaration has many issues such as it is globally scoped(hoisting),redeclaration is allowed
let y = 50 //let solved the issues of var.
const z = 20 //this is used to keep the variable name constant,we cannot reassign any other value to that var name.
console.log(x) //used as print command in js
console.log(y)
console.log(z)

//in modern js const and let are used and const is used mostly bcos it is more predictable.
//main difference b/w const and let is we cannot reassign value for variable name defined using const.

//Template literals=${...} //used for injecting values of variables,expressions or js code.
const name = 'mihir'
const age = 21
const weight = 50
const greet = `I am ${name} 
my age is ${ age }`
const diet = `after deiting my weight is ${weight-10}`
console.log(greet)
console.log(diet)

//Conditionals,truthy and false values.
const username = "" //"",false,undefined,null,0.
if (!username) {
    console.log(`user doesn't exist`)
}

//ternary-operators(?-if,:-else)
const n = 13
const user = n >= 18 ? `adult` : `child`
console.log(user)
    //for single line statements we use ternary operators or else we use if-else statement

//short circuiting.(using operators like ||(or) and &&(and)).
const emailverified = false
const name1 = "mihir"
const username1 = (emailverified && name1) || "user"
console.log(username1)