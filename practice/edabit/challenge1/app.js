//Create a function that takes a number (from 1 to 12) 
//and return its corresponding month name as a string.

// function month_name(num) {
// 	if (num <= 12) {

//     }
// }

//review

//functions
//- declarations
//calling functions

//a function is a collection of statements that we can re-use
//should do something very specific
    //below a function declaration
    //brackets are the scope of the function, everything is local to the function.

    var helloString =  generateHello() //can call above too

function generateHello () {
    var a = "hello"
    return a
}

var helloString = generateHello //without parentheses we're saving in new variable, with () we are calling it
//can use helloString and generateHello to call same function now. Functions can be reassigned like any other data type. 

console.log(helloString())

/////


//return is if we need to use the data, and console.log is if we want to see it. So if we don't return data is not saved and we would not be able to use it later

// var generateGoodbye = function name() { //anyonomous function expression
//     var a = "hi"
//     return a;
// }

function generateHi (name, age) {
    var a = "hi"
    return a + " " + name + ", you're " + age + " years old.";
}



var generateByeBye = function(name, age) {
    var a = "bye bye"
    return a + " " + name + ", you're " + age + " years old.";
}

console.log(generateHi("Rick", 687));
console.log(generateByeBye("Morty", 12));

//when to use an expression v. a declaration 
//declaration is faster? nice to keep all declarations to one place too

//DOM TIME ///////////////////////////

//document.

//what else uses a . ? an object! 

// var display = document.getElementById('container')

// var title = document.createElement('h1')

// //display.textContent = "Hello World" //or

// title.textContent = "Hello World"

// title.style.backgroundColor = "purple"

// // console.log(title)

// display.appendChild(title)

//or just need

var display = document.getElementById('container')

display.innerHTML = "<h1 class='title-class'>Hello World</h1>"

// display.appendChild(title)