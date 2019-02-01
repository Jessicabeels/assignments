// Select needed elements
var container = document.getElementById("container");
var form = document.nameForm

// How to visualize what your 'form' object looks like from the HTML
// var form = {
//     alias: {
//         value: "nate"
//     }
// }


// Add Submit event to the form and reference our function to run
form.addEventListener("submit", addNameToDOM)

// Function is a collection  of statements
function addNameToDOM(e){
    e.preventDefault()
    // Clear the current container back to an empty div
    container.innerHTML = ""

    // grab the input's value
    var userInput = form.alias.value

    // Clear the user input after grabbing the value
    form.alias.value = ""

    // Create element
    var h1Thing = document.createElement('h1');

    // Give the element content
    // Text, attributes, classes, eventlisteners
    h1Thing.textContent = userInput
    h1Thing.classList.add("main-title")

    // Append child
    container.appendChild(h1Thing)
}






