//JS FOR REACT NATIVE.
var x = 30 //var variable declaration has many issues such as it is globally scoped(hoisting),redeclaration is allowed

//let is block-scoped. var is function scoped. let does not allow to redeclare variables. var allows to redeclare variables.
let y = 50 //let solved some issues of var,but let variables can also be declared withou initialization.
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
const greet = `I am ${name} my age is ${ age }`
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

console.log(person1);
console.log(member); //now in the output we'll see that after changing value in the member variable the value of the person1 variable also changes,this is because both of the variables reference the same object.

//arrays.
const arr = [10, 30]
const arr2 = arr
arr.push = 50
console.log(arr2)

//Spread operator(...obj)(this operator is used to copy properties of one object in another or also to spread out elements of an iterable object such as an array, map, or set.)
const user1 = {
    userid: 123,
    username: "Monika",
    password: "12345",
    item: "book"
}
const cart = {
    ...user1, //we can also overide any of the properties of the object that has been copied using spread operator in the new object property section.
    item: "shoes"
}

console.log(cart)

//arrays,map and filter methods.

//arrays
const numbers = [10, 20, 30, 40]
console.table(numbers)

/*METHODS USED FOR LOOPING AN ARRAY INSTEAD OF NORMAL METHODS.*/

//Firstly, to loop through an array by using the forEach method, you need a callback function (or anonymous function):
//The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:
//That's all we need to do for looping through the array:
numbers.forEach(num => {
    console.log(num)
})

//array.map(){super important topic}
//The Array.map() method allows you to iterate over an array and modify its elements using a callback function. The callback function will then be executed on each of the array's elements.
//The main benefit of using map is that it makes a whole new array instead of pushing new values in the old array.
const employees = [
    { name: "suresh", salary: 1000 },
    { name: "ramesh", salary: 2000 },
    { name: "puresh", salary: 3000 },
]
const emp = employees.map(item => {
    item.salary += 1000
    return item //returns new array.
})
console.log(emp)

//Array.filter()
//The way the filter() method works is very simple. It entails filtering out one or more items (a subset) from a larger collection of items (a superset) based on some condition/preference.
//The filter method creates a new array and returns all of the items which pass the condition specified in the callback.
const users = [
    { id: 1, sal: 1000 },
    { id: 2, sal: 2000 },
    { id: 3, sal: 3000 },
]
const newuser = users.filter(item => item.sal > 1000)
console.log(newuser)
    /*
    //.then(),.catch(){1st method to handle promises.}
    const fetchpost = () => {
        //fetch('url')
        //this command is used for creating a network request from the url in the().
        fetch(`https://jsonplaceholder.typicode.com/posts`) //this line of code returns 'promise'.

        //'promise' is nothing but a asynchronous task which takes time to complete.
        //'promise' can either get resolved or rejected.
        //if it gets resolved then.
        //.then(res => { console.log(res) })
        //this line of command doesn't provide us with anything meaningful.

        .then(res => res.json()) //this json() again returns a promise to handle this promise we again use a then.

        .then(result => { console.log(result) }) //this .then() is used to get the result of the previous promise which got resolved.

        //if the promise gets rejected then we can use .catch() to get the error.
        .catch(err => { console.log(err) })
    }*/

//try{},catch(){},async,await.[this is the second method used to handle promises.]
const fetchpost = async() => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const result = await res.json()
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    } //this is the cleanest and most efficient way to handle promises.

//Styling console.log()
console.log('%cI am Ramesh and %cmy status is coder.', 'color:red;font-size:25px', 'background:green')