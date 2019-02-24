//Use the Rest Operator to help this function return an array of animals, 
//no matter how many animals are passed to it:

let animals = ["dog", "cat", "mouse", "jackolope", "platypus"]

function collectAnimals(...arr) {  
    return arr
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

//Write a function that returns a food object with the array names as properties
// using Object Literals:

function combineFruit(fruit, sweets, vegetables){
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

const vacation = [  
  {location: "Burly Idaho"},
  {duration: "2 weeks"}
];


function parseSentence(){
const [{location}] = vacation
const [{duration}] = vacation
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence())
