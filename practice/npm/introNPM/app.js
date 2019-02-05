var readline = require('readline-sync')

//no html its all in node
// console.log(readline)


var name = readline.question("WHat is your name?")

console.log("Hello " + name)

//from readline.question

var answer = readline.keyInYN("Do you like node?")
console.log(answer)


var animals = ["Buffalo", "Sheep", "Bird", "Pig", "Snake"]
var favAnimal = readline.keyInSelect(animals, "what is your favorite animal?")
// console.log(animals[favAnimal])
