console.log("The Preliminaries")
// Write an if statement that prints "is greater than" if 5 is greater than 3


if (5 > 3) {
    console.log("5 is greater than 3");
}

// Write an if statement that prints "is the length" if the length of "cat" is 3

var cat = "cat"
if (cat.length = 3) {
    console.log(cat.length + " is the length of cat")
}

// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.

var cat = "cat";
var dog = "dog";

if (cat !== dog) {
    console.log("not the same")
}

console.log("Bronze Medal")

// Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.


var person = {
  name: "Bobby",
  age: 12
}

if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movies")
} else {
    console.log(person.name + " is not allowed to go to the movies")
}


// Using that same object, only allow them into the movie if their name starts with "B"

nameArray = ["B", "o", "b", "b", "y"];
nameArray.toLowerCase;

if (person.name[0] === "B") {
    console.log("Hi " + person.name + " you can come to the movies because your name starts with a B")
}

// Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.

if (person.name[0] === "B" && person.age > 18) {
    console.log("Hi " +person.name + " you can come to the movies because you're older than 18 and your name starts with a B") 
} else {
    console.log("Sorry " + person.name + " you can't come to the movies because you're either not older than 18 or you name does not start with a B")
}

console.log("Silver Medal")


// Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

if (1 === "1") {
    console.log("loose")
} else if (1 == "1" ) {
    console.log("abstract")
} else {
    console.log("Not equal at all")
}


// Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4 // OR!!!

// 3 * 4 is greater than 10 and 5 plus 10 is greater than 10.

if (1 <= 2  &&  2 == 4) {
    console.log("Yes");
} else if (3*4 > 10 && 5+10 > 10) {
    console.log("Yeet");
}

console.log("Gold medal")

// Write an if statement that checks to see if "dog" is a string


var foo = "dog";

if ( typeof foo === 'string' ) {
    console.log("ya");
}
// Write an if statement that checks to see if "true" is a boolean


var fooFoo = true; 

if (typeof fooFoo === "boolean") {
    console.log("true");
}

// Write an if statement that checks to see if a variable has been defined or not

var Goo = "";

if (Goo !== 'undefined'  ) {
    console.log("defined");
} else {
    console.log("undefined");
}

//how do we make it undefined without an error message? 

// Write an if statement comparing letters to numbers using < and >. Try to figure out what letters are going to be "greater than" other numbers or letters. For example: is "s" greater than 12?

if ( "s" > 12) {
    console.log("S is greater than 12");
} else {
    console.log("S is less than 12");
}


if ("a" < "h") {
    console.log("a is greater than h");
} else {
    console.log("a is less than h");
}

if (4 < 5 < 6) {
    console.log()//true bc 4 less than 5 which is true which is 1 which is less than 6
}

// Write a ternary statement that console.logs whether a number is odd or even. For example:
var myNum = 19;
// Write your ternary here to log if `myNum` is odd or even.



// if (myNum%2 ==0) {
//     console.log("true");
// } else {
//     console.log("false");
// }

myNum%2 === 0 ? console.log("true") : console.log("false");







//extraaaaaa

// A user selects 5 ingredients in a list of ingredients and clicks a button to give those ingredients an "added" status.

// You would loop through an array of checkedIngredients and add a isAdded property to each.

ingredients = ["sugar", "flour", "butter", "cake mix", "baking soda"]

for (i=0; i<ingredients.length; i++) {
    console.log(ingredients[i])
}

var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

for (i=0; i<eventsAtWork.length; i++) {
    if (eventsAtWork[i] === "party") {
        console.log("partayyyyy")
    }
}

var booleans = [true, true, false, true, false, false, false]
var truBoo = []

for (i=0; i<booleans.length; i++) {
    if (booleans === true) {
        var count = booleans.filter(function(s) {return s.value;}).length;
        
    }
}
console.log("True: " + count);

// var arrayObj = [
//     {"id": 1, "value": true},
//     {"id": 2, "value": false},
//     {"id": 3, "value": true}
//   ]
  
//   // Count true items
//   var count = arrayObj.filter(function(s) { return s.value; }).length;
  
//   // Result
//   console.log("#True: " + count)
  