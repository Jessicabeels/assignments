//Topics to review
//CSS
//Responsive-design
//-Mobile first, you'll have less CSS to do 
//-learn hiearchy of what will override...order of stylesheet
//Flex-box


//HTML
//Event Listeners
//<input


//node & npm
// console.log(document) //we're not running anything to compile it yet
//index.html, style.css, app.js
//npm is Node package amanger. used to install packages and run scripts
//used to create json, etc. 
//use npm to initialize new node project and answer yes to all of the questions
//npm init -y


//readline 
//npm install readline-sync or npm i readline-sync (--save (not needed anymore but in case u see))
//for typos....npm uninstall readlnie sync

//functions
//constructor functions
//functions


// var myForm = document.my-form //breaks bc - or
// var myForm = document["my-form"]

// myForm.addEventListener("submit", myFunction)
// //not antnomous function, so you can reuse it elsewhere


// function myFunction(e) {
//     e.preventDefault()
//     var firstName = myForm["first-name"]
//     var name = firstName.value
//     //declare inside function so creating it only within function bc only need it there
//     //1 way
//     //myForm.result.value = firstName.value

//     //2 way
//     // var name = firstName.valuemyForm.result.value = firstName.value
//     // document.getElementById('container').textContent = name 


//     //or 3 way
//     document.getElementById('container').innerHTML = '<h1>' + name + '</h1>'
//     var h1 = document.createElement('h1')
//     h1.textContent = name
//     document.getElementById('container').appendChild(h1)
// }

//event loop bubbling v. capturing


///constrctor functions

//write a function that takes an array as an argument, and returns the last item of the array

function lastElement(arr) {
    return arr[arr.length - 1]
}


//or 

function lastElement(arr) {
    return arr.pop()
}

console.log(lastElement([1,2,3])) //3
console.log(lastElement(["cat", "dog", 'octopus', 8,5,2,545,5])) //5
console.log(lastElement([]))  // "pick a better array"


//always have a return in your function to save the data


//order of methods makes a difference on what happens first               





//Constructor Functions //you know if they are contstructors bc capitalization

//mentee
function Vehicle(doors, wheels, year, make, model, seats, color, hornSound ){
    this.doors = doors
    this.wheels = wheels
    this.make = make
    this.model = model
    this.year = year
    this.seats = seats
    this.color = color
    this.hornSound = hornSound
    this.honk = function(){
        console.log(this.hornSound)
    }
}

//with function not in there you can do prototype.
//construtor builds it and prototype brings it to life
//     this.honk = function(){
//         console.log(this.hornSound)
//     }
// }
//mentor //what do cars do? 
Vehicle.prototype.honk = function() {
    console.log(this.hornSound)
}


//4 door, 4 wheeled, jeep, cherokee, 1997, 2 seats, red, meep meep

var jeep = new Vehicle(4,4, "jeep", "cherokee", 1997, 2, "cherry red", "meep meep")
var civic = new Vehicle(4,4, "jeep", "cherokee", 2007, 2, "red", "blarp blarp")
// console.log(jeep)
// console.log(civic)

jeep.honk()
civic.honk()

Vehicle.prototype.honk = function() {
    console.log(this.hornSound)
}
