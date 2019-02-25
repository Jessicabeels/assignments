//Use the Rest Operator to help this function return an array of animals, 
//no matter how many animals are passed to it:

let animals = ["dog", "cat", "mouse", "jackolope", "platypus"]

function collectAnimals(...arr) {
    return arr
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

//Write a function that returns a food object with the array names as properties
// using Object Literals:

function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrot"]))


//Use destructuring to fill in the blanks and use the property names as variables:

const vacation = [{
        location: "Burly Idaho"
    },
    {
        duration: "2 weeks"
    }
];


function parseSentence() {
    const [{
        location
    }, {
        duration
    }] = vacation
    // const [{duration}] = vacation
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence())

//Use destructuring to make this code ES6:

// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }

function returnFirst(items) {
    const [firstItem] = items /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(["carrit", "tomat", "tomato soup"]))

//Write destructuring code to assign variables that will help us return the expected string.
// Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [firstFav, secondFav, thirdFav] = arr


    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}. `
}

console.log(returnFavorites(favoriteActivities))


//Use the Rest and Spread Operator to help take any number
// of arrays, and return one array. You will need to change how 
//the arrays are passed in. You may write it assuming you will 
//always recieve three arrays if you would like to.
function combineAnimals() {
    return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

const product = (a, b, c, d, e) => {
    const numbers = [a, b, c, d, e];

    return numbers.reduce((acc, number) => {
        return acc * number;
    }, 1)
}

console.log(product())



const unshift = (array, a, b, c, d, e) => {
    return [a, b, c, d, e, ...array]
}

console.log(unshift(realAnimals, 766, 79, 89, 689, 78, 34, 5, 4, "fig"))

////Destructure
// const populatePeople = (names) => {
//         return names.map(function (name) {
//                 name = name.split(" ");
//                 // your code
//                 return {
//                     firstName,
//                     lastName
//                 };

//             }
  

//      populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
        //[
        //  {firstName: "Frank", lastName: "Peterson"},
        //  {firstName: "Suzy", lastName: "Degual"},
        //  {firstName: "Liza", lastName: "Jones"},
        //]