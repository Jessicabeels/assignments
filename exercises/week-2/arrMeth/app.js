var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Remove the last item from the vegetable array. no //lectuce
console.log(vegetables.splice(-1));

//Remove the first item from the fruit array. 
console.log(fruit.shift()) //banana
console.log(fruit) //"apple", "orange", "watermelon"
// //put banana back for the rest of the exercises

// fruit.unshift('banana')
// console.log(fruit)

//Find the index of "orange."
console.log(fruit.indexOf('orange')) //1

//Add that number to the end of the fruit array.
//using 2 array methods at a time
var newIndex = fruit.indexOf('orange')
fruit.push(newIndex)

console.log(fruit) //[ 'apple', 'orange', 'watermelon', 1 ]

//Use the length property to find the length of the vegetable array.

console.log(vegetables.length) //3

//Add that number to the end of the vegetable array.

var vegLength = vegetables.length
var newVegDex = vegetables.push(vegLength) 
// console.log(vegetables.push(newVegDex))

console.log(vegetables) //carrot, tomato, pepper, 3


//Put the two arrays together into one array. Fruit first. Call the new Array "food".

var food = fruit.concat(vegetables) 
console.log(food)
// [ 'apple',
//   'orange',
//   'watermelon',
//   1,
//   'carrot',
//   'tomato',
//   'pepper',
//   3 ]





//Remove 2 elements from your new array starting at index 4 with one method.

console.log(food.splice(4, 2)) //[ 'carrot', 'tomato' ]
console.log(food) // [ 'apple', 'orange', 'watermelon', 1, 'pepper', 3 ]

//reverse

console.log(food.reverse())

//Turn the array into a string and return it.

console.log(food.join()) //[ 3, 'pepper', 1, 'watermelon', 'orange', 'apple' ]