// var obj = require('./practice.json')

// console.log(obj)

var num = 10

try {
    //try to find errors
    //have to throw error in the try so the catch will catch it
    if(num < 10){
        throw new Error ('The number is less than 10')
    } else if(num >=10){
        throw new Error ('The number is greater or equal to 10')
        //we use error constructor function 'new Error' to get something that looks more like an error'
    } else {
        console.log("The number is 10")
    }
} catch(error){
    //show the error if 1 occured
    console.log(error)
}
//if no error then catch isnt even triggered , so then finally is thrown
finally {
    console.log("I am running no matter what")
}