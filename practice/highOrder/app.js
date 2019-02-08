//methods
    //an action, a function in an object

// person.speak()
// //not 
// speak() // thats a function. needs to be attached to an object. 

//higher order methods
    //take one or more functions as an argument
    //return function

//named function
// function myFunc() {

// }

// //anaonymous function
// function() {

// }

//callback function
    //functions that are passed into another function as an argument that are then used(called) in that function )

function compute(num1,num2, callback) {
    return callback(num1, num2)
}

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

console.log(compute(3,5,add)) //8
console.log(compute(6,3, subtract)) //3

//functions are first class in javascript

// console.log(add(1,4))


// function returnNewArray (arr, callback) {
//     var result = []
//     for(var i = 0; i < arr.length; i++){
//         var current = callback(arr[i])
//         if (current !== null) {
//             result.push(current)
//     }
//     return result
// }


// function greaterThan3(num){
//     if (num > 3){
//         return num
//     } else {
//         return null
//     }
// }

// console.log(returnNewArray( [1,2,3,4,5,6], greaterThan3))

//HIgher order array methods

var arr = [1, 2, 3]

// arr.join('')



arr.forEach(function(num){
    console.log(num)
})


// arr[i] 
//there is a for llop that is auto looping through the the array and calling each # to get the index
//basically forEach = forLoop
    //disadvantagess, cant control where you loop, does not decide where. ALso return will not end the function.
    //for each is the only one that doesnt return anything. this doesnt adjust old array. alsways retruns nothing. 

// var arr = [1,2,3,4,5]
// var newArr = []

// arr.forEach(function(num){
//     if(num % 2 === 0){
//         newArr.push(num)
//     }
// })

// console.log(newArr)
// //does same thing as 

// for(var i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         newArr.push(arr[i])
//     }
// }

// console.log(newArr)

// //filter 
// //loops through your array and creates/returns a new array from filtered data

var numbers = [1,2,3,4,5,6,7,8,9,10]

var result = numbers.filter(function(num){
    if(num % 2 === 0){
        return num
    }
})

//doing the same thing as

var evensArr = []
for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 ===0){
        evensArr.push(numbers[i])
    }
}

console.log(numbers)
console.log(result)


var user = [
    {
        name: 'joe',
        age: 20
    },
    {
        name: 'morty',
        age: 13
    },
    {
        name: 'rick',
        age: 70
    },
    {
        name: 'birdman',
        age: 100
    }
]

var peopleOver50 = user.filter(function(user){
    if(user.age > 50){
        return user
    }
})

console.log(peopleOver50)

//if filter ...if evaluate to true, its gonna return whole array even if you just want name like //return user.name

//filter will return the entire 'user', or it will return nothing if user afe not freater than 50

function peopleOver50(arr){
    var over50 = arr.filter(function(user){
        if(user.age > 50){
            return user
        }
    })
    return over50 
}

console.log(peopleOver50(users))

//or 

function peopleOver50(arr){
    return arr.filter(function(user){
        if(user.age > 50){
            return user
        }
    })
}

// .map() => returns a new array containing an item for EVERY item in the array
var usernames = users.map(function(user){
    return user.name
})

console.log(usernames)


//or 

function userNames(arr){
    var usernames = arr.map(function(user){
        return user.name
    })
    
    return usernames
}

console.log(userNames(users))


////////////////later lol 

// users.filter(function(user){
//     if(user.age > 50){
//         return user
//     }
// })

// over50.map