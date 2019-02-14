// // //ESMASCRIPT 6 ES6

// // //const & let variable declarations

// // // var name = "rick"
// // // var age = 20


// // const dob = "junr 10,1923"
// // let  age = 30
// // age++

// // //Scope
// //     //Global and local & lexical(bracket)
// //     //with same bracket level
// // function myFunction(){
// //     let a;
// //     if(10 === 10){
// //         a = "Hello"
// //     }
// //     console.log(a)
// // }


// // function myFunction(){
// //     const a;
// //     if(10 === 10){
// //         a = "Hello"
// //     }
// //     console.log(a)
// // }
// // //wont work - const has to be defined when its declared

// // //use let with for loop
// // function myFunction(){
// //     console.log(greeting) //works because you can reference an outer scope
// //     if(2 === 2){
// //         let local = 'dog'
        
// //     }
// //     return local//does not work bwcause you cannot reference an inner scope
// // }

// // //console.log(myFunction())//doesnt work

// //always const
// //- const readline sync
// //- function expression
// // const myFunction2 = function(){
// //     console.log('function expression')
// // }
// // //function declaration
// // function myFunction(){

// // }
// // // //arrow functions(fat arrow functions)

// // // ->
// // // =>

// // function add(num1, num2){
// //     return num1 + num2
// // }


// // //function with this argument that will return this
// // const subtract = (num1, num2) => {
// //     return num1 - num2
// // }

// // console.log(subtract(5,3))

// // const subtract = (num1, num2) =>  num1 - num2
// // //dont need return, {} with out other stuff

// // const multiply = (num1, num2) => num1 * num2

// // //same as

// // const multiply = function(num1, num2){
// //     return num1 * num2
// // }

// // const returnLastIndex = (arr) => arr[arr.length - 1]

// //function expressions can replace 'function' with '=>'
//     //single parameter do not need ()
//     //=> has implicit return (adding curly brackets voids out return)
//     //does not include 'this'

// const arr = [1,2,3,4,5,6]

// const evens = arr.filter(function(num){
//     if (num % 2 === 0){
//         return num
//     }
// })

// //same
// // const evens = arr.filter( num => num % 2 === 0 && num)
// // //if === &&
// // const evens = arr.filter( num => num % 2 === 0 ? num : num + 2)
// // //else
// // console.log(evens)


// // const arr = [1,2,3]

// // const plus2 = arr.map(function(num){
// //     return num + 2
// // })
// // //same

// // const plus2ES6 = arr.map(num => num + 2)

// // console.log(plus2ES6)

// ///////

// // const num = [1,2,3,4,5,6,7,8,9,10]

// // const sum = num.reduce(function(total, num){
// //     return total + num
// // },0)
// // console.log(sum)
// // const sumES6 = num.reduce((total, num) => total + num, 0)
// // const sumES6 = num.reduce((total, num) => {
// //     if(num % 2 === 0){
// //         total += num
// //     }
// //     return total 
// // },0)

// // console.log(sumES6)

// // ///sort

// // const unsorted = [5,23,67,223,4,56,21]
// // const sorted = unsorted.sort(function(a,b){
// //     return a-b
// // })

// // console.log(sorted)

// // const sortES6 = unsorted.sort((a, b) => a - b)
// // console.log(sortedES6)










// // //default parameters

// //function declaration

// function sum(num1, num2){
//     return num1 + num2
// }

// console.log(sum(1))//NaN

// //0 is the deafult if no argument is passed thru, if it is itll overwrite the default
// function sum(num1 = 0, num2 = 0){
//     return num1 + num2
// }

// console.log(sum(1, 76))

// //same 
// // const sum = (num1 = 0) => num1 + num2

// //string template literals
// const person = {
//     name: "Morty",
//     age: 13,
//     isScared: true,
//     catchPhrase: "awh jeez"
// }

// //can person.name = "rick"
// //values in the objects are fair game to change
// //cannot person = [12,3,4,567,3]

// console.log("Hi my name is " + person.name + " , and i am " + person.age + " , an my catchphrase is" + person.catchPhrase)
// console.log(`
// Hi my name is ${person.name} , and i am ${person.age} , an my catchphrase is ${person.catchPhrase}`)
// // ` ` = ${ }

let name = "John"
let age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

console.log(runForLoop())


///////////////////////////////////////////////////
const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }



const mapVegetables = (arr) => arr.map((carrot) => ({type: "carrot", name: carrot}))

// console.log(mapVegetables(carrots))
///////////////////////

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return !!person.friendly
//     })
// }



const filterForFriendly= (arr) => arr.filter((person) => (!!person.friendly))

console.log(filterForFriendly(people))


//Re-write the following functions to be arrow functions:

// function doMathSum(a, b) {
//     return a + b
// }


const doMathSum = (a,b) => a + b

console.log(doMathSum(1,3))

/////////////////////////////

// var produceProduct = function(a, b) {
//     return a * b
// }

const produceProduct = (a,b) => a * b

console.log(produceProduct(3,3))

//Write a printString function that takes firstName, lastName, and age as parameters 
//and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100




const printString = (firstName = "Jane", lastName = "Doe", age="100") =>  `Hi ${firstName} ${lastName}, how does it feel to be ${age} `

const person = {
    firstName: "Kat",
    lastName: "Stark",
    age: 100,
}

console.log(printString())
console.log(printString("Kat", "Stark", 100))

//Task 5 Use the shorthand syntax to make the following filter take up one line.
// Copy and paste the array to test it.

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

const filterForDogs = (arr) => arr.filter(animal => (animal.type === "dog") ? true : false)
        

console.log(filterForDogs(animals))


//Template Literals
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 

