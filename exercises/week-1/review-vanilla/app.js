

// // console.log("Hello World");


// // if(2 === 3) {
// //     console.log("If statement 1 is true")
// // } else  if (5 >= 10){
// //     console.log("Else statement 2 is true")
// // } else if(true) {
// //     console.log("Else Statement is run")
// // } else {
// //     console.log("Else statement is run")
// // }

// // //the first question that evaluates to true is the only one, will ignore the rest

// // if (2=3)
// // //wont work bc assigning not comparing


// // var person = {
// //     name: "Peach",
// //     age: 10
// // }

// // if (person.age >= 18) {
// //     console.log(person.name + " is old enough to go to the R movie")
// // } else {
// //     console.log("Go home youth")
// // }


// //truthy falsey

// // if(25){
// //     console.log("True")
// // }

// //truthy: almost everything except 6 falsy
// //falsy: 0, false, " "' ', null, undefined, NaN (not a number, an error when you multiply 5*butterflies) 


// var age = 7;
// console.log(age);

// //null is defining value but not giving anything


// if (0) {
//     console.log("1")
// } else if (null) {
//     console.log("2")
// } else {
//     console.log("3")
// }
// //eval to statment 3



// // conditional operators
// // > < >= <= == === ! != !==
// // == is not strictly equal
// // === is strictly equal 
// //&& ||


// //eval to false
// if (true && false) {
//     console.log("1")
// }

// var favoriteColor = 'blue'
// if(favoriteColor === green) {
//     console.log("Yo")
// }

// //or 


// //switch statement is strictly equal tp 
// switch(favoriteColor) {
//     case "blue":
//         console.log("fa color is green")
//         break;
//     case "red": 
//         console.log("red")
//         break;

//         //without BREAK would just be continued logging bc when true just keeps going


// var num = 10;

// // if (num===10) {
// //     return true;
// // } else {
// //     return false
// // }

// // //or 

// console.log(num === 10);

// //ternary operator 
// num === 10 ? console.log("num is 10") : console.log("the number is not 10")

//FUnctions 

//1. Write a function that uses a for loop to return a new
//array with the numbers 0 - 100 inside of it

// function generateArr() {

//     var result = [];
//     for(var i = 0; i < 100; i++) {
//         result.push(i)
//     }
//     return result.join(' ')
// }
// //make a function 
// //make an empty array
// //use a for loop to go throw numbers 0-100
//     //push current number into empty array
// // return thr final value in the now not empty array

// //log the function call to the console
// console.log(generateArr())

// var newArr = generateArr


// var matrix = [ 
//     [1,2,3, 6,7],
//     [4,5,6],
//     [7,8,9]

// ]


// console.log(matrix[0],[2])
// console.log(matrix[1], [1])
// console.log(matrix [2], [3])


var matrix = []
var k = 0

for(var i = 0; i < 10; i++){
    matrix[i] = [] // matrix === [[]]
    for(var j = 0; j < 10; j++ ) {
        // matrix[i][j] = j 
        matrix[i][j] = 0
    // console.log(j)
    }
}
//starts with i loop and then j loops 3 times. for every time i runs 1x, j runs 3x

console.log(matrix)

