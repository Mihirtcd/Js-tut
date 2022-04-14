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

//objects(non-primitive datatype)
var person = { //person is an object which has the following key value pairs.
    name2: "Mihir",
    age1: 20,
    details: {
        status: "coder" //nested object(object inside an object.)
    }
}
var { name2, age1, details: { status } } = person //this is called object destructuring(taking out key values from the object).
console.log(`I am ${name2}`)
console.log(`my age is ${age1}`)
console.log(`my status is ${status}`)
    //if we declare the values of the key beforehand then:
var name2 = "Mohit"
var age1 = 40
var person = { name2, age1 }
console.log(person)
    //if i want to change the name of the keys during execution then:
var { name2: namee, age1: ageeee } = person
console.log(`I am ${namee}`)
console.log(`my age is ${ageeee}`)

//ARROW FUNCTIONS.
const intro = ({ name3, age3 }) => ({ result: `My name is ${name3}and my age is ${age3}.` }) //here we have used the arrow function and also made the line of code more efficient and good looking,also this function is returning an object using a destructured object.
console.log(intro({ name3: "Mihir ", age3: 20 }).result)

//PRIMITIVE VS REFERENCE AND SPREAD OPERATORS.
//NON PRIMITIVE DATA-TYPES.(object,arrays)
let person1 = { //object.
    name4: 'John',
    age4: 25,
};

let member = person1; //here we assigned person1 variable to member variable.

member.age4 = 26; //now we changed the value of age4 property in the member variable.

console.log(person);
console.log(member); //now in the output we'll see that after changing value in the member variable the value of the person variable also changes,this is because both of the variables reference the same object.

//arrays.
const arr = [10, 30]
const arr2 = arr
arr.push = 50
console.log(arr2)

//Spread operator(...obj)(this operator is used to copy properties of one object in another or also to spread out elements of an iterable object such as an array, map, or set.)
const user1 = {
    userid: 123,
    username: "Monika",
    password: "12345"
}
const cart = {
    ...user1 //we can also overide any of the properties of the object that has been copied using spread operator in the new object property section.
}

console.log(cart)