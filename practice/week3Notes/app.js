//MUTABILITY/////////////////////////////////////////////////////////////////////////



///primative data types
//     var str = "Hello" //String
//     str = "goodbye"
//     // now pointing to goobye




//     var myString = "pool";
//     console.log(myString[0]); //prints p
//     myString[0] = 't';
//     console.log(myString); //what prints here? /// pool
//     //since its a primative data type you cant separate into secific piece must replace fully


// var myArr = ['mango', 'banana', 'orange'];
// console.log(myString[0]); //prints p
// myString[0] = 't';
// console.log(myString); //mango 


// var myArr = ['mango', 'banana', 'orange'];
// console.log(myString[0]); //prints p
// myString[0] = 's';
// console.log(myString); //not sanana, can't swap out part of a string. 


// var greeting = 'hello'
// var b = greeting
// greeting = goodbye
// console.log(b)
// console.log(greeting)



// //passed by reference or value? passing by names vs. whats in them. Like calling cindy 'cindy' or 'blonde girl'
// var arr = [1, 2, 3]
// var anotherArr = arr

// console.log(anotherArr)


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var allEvens = numbers.every(function (number) {
    if (number % 2 === 0) {
        return number
    }
})
console.log(allEvens)

/////////

var atLeast1EvenNumber = numbers.some(function(number){
    if (number % 2 === 0){
        return number
    }
})

console.log(atLeast1EvenNumber)


// find

var foundNum = numbers.find(function(num){
    return num === 7
})

console.log(foundNum)

//find index
var foundNumIndex = numbers.findIndex(function(num){
    return num === 7
})

console.log(foundNumIndex)

//sort 
var numbers = [2,343,534,7, 7,7,7,7,7,7,645,34,256,674,5]

var sorted = numbers.sort(function(a,b){
    // return a - b
    //return a+b
    return b - a
})
console.log(sorted)

//reduce
var total = numbers.reduce(function(final, num){
    return final += num
})

// console.log(total)

//add 0 to start at 0

// var total = numbers.reduce(function(final, num){
//     return final += num
// } ,0)

// console.log(total)

var numCountObj = numbers.reduce(function(finalObj, num){
    if(!finalObj[num]) { //finalObj. "5"  {"5": 1, "20": 1}
        finalObj[num] = 1
    } else {
        finalObj[num]++
    }
    return finalObj
}, {}) //second argument returns an object

console.log(numCountObj)