

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

