// var form = document.getElementById("my-form")
// var nameInput = document.getElementById("name-input")
// console.dir(name)

// var name = nameInput.value
//running right as the page loads, so thats why nothing is showing up in console
//SO how do we suspend an event to happen at a certain point in time...eventListener


// var person = {
//     name: "Joe"
// }
// //like
// person.name
// person["name"]



// var form = document.myform

// var nameInput = form.name
// var ageInput = form.age

// // console.log(nameInput)


// //Submit Event

//     form.addEventListener("submit", function(event) {
//         event.preventDefault()
//         // console.log(nameInput.value)
//         alert("Hi, I am " + nameInput.value + " , and I am " + ageInput.value + " years old")
//     })


//Part 2. 

var form = document.myform 

form.addEventListener("submit", function(e) {
    e.preventDefault()

    var favFoods = form.favFoods
    var mostFavFood = form.mostFavFood
    var result = []
    var chosenMonth = form.month.value
    
    console.log(mostFavFood)
    for(var i = 0; i < favFoods.length; i++) {
        var result = []
        //every time we go through the loop we'll be oberrding so we have to declare b4 for loop 
        //check for the checked elements
        //if element is cheacked add it to a new array
        if (favFoods[i].checked === true) 
        //could do just (favFoods[i].checked bc is truthy
        {
            result.push(favFoods[i])
        }
    }

    //console log the final check array 
    return result;
})

console.log("My fav foods"  + favFoods )
console.log()
console.log()
// review how to check console for dom and get that long list of stuuff


//radio help

