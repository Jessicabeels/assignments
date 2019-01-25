// //string
// //boolen
// //number


// //Array - List - Collection 
// [true, "string", 10, {name: "Nate"}, [1,2,3]]
// var names = ["joe", 'j', 'harry']


// //Object 
 






// //Operators: + - / * % ++ --
// //% modulo returns remainder

// //comparsion operator
// // ==, ===, !, !=, <, >, <=, >=


var person = {
    name: "John",
    age: 21,
    isAlive: true,
    speak: function() {
        console.log("hey");
    }, 
    address: {
        street: "south",
        number: "233",
        State:"AK"
    }
    }

console.log(person.address.street);

console.log(person.speak()); 
// or just bc console.log is already in function of speak
person.speak();

// Dot Notation
console.log(person.age++);// ???? should be 22
person.name //John

//bracket Notation 
person["name"] //John
person["age"] //21



var num = 10;
num/=2;
console.log(num)

//Arrays
var names = ["RIck", "Morty", "Birdman", "Pickle Rick"]//length 4

console.log(names[2]); // to call Birdman

/*

yooyoyoyo
yoyo
yo
*/

//Data Types in JS

//Primitive: Boolean, String, Number

//Complex: Object, Array

// complex data types hold collections of primative data types.

// Data from an object

var person = {
    name: "Steve"
}

console.log(person.name)
console.log(person["name"])

//Data from an array 
var numbers = [1,2,3,4,45,6]
console.log(numbers[4]);

