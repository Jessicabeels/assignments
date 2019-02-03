// You will have one section (<div>) for each math operation (so 3 sections) total
// Each section has two inputs to take the first and second numbers
// Each section will have a button to perform the operation
// You will inject the result into the HTML (not an alert)
// Your website will have 3 colors
// Your website will have proper padding/spacing to lay things out nicely

// new  =    doc. name
var addForm = document.add

var addInput1 = addForm.add1
var addInput2 = addForm.add2

var subForm = document.sub 

var subInput1 = subForm.sub1
var subInput2 = subForm.sub2

var multForm = document.mult

var multInput1 = multForm.mult1
var multInput2 = multForm.mult2






addForm.addEventListener("submit", function(event) {
    event.preventDefault()
    // Clear the current container back to an empty div
    container.innerHTML = ""
    //add the inputs values together
    var finalSum = Number(addInput1.value) + Number(addInput2.value)    
    // grab the input's value
    //i did this globally above
    // // Clear the user input after grabbing the value
    addForm.add1.value = ""
    addForm.add2.value = ""
    //create element
    var h1Thing = document.createElement('h1');
    // Give the element content
    // Text, attributes, classes, eventlisteners
    h1Thing.textContent = finalSum
    h1Thing.classList.add("main-title")
    // Append child
    container.appendChild(h1Thing)

}) 

subForm.addEventListener("submit", function(event) {
    event.preventDefault()
    // Clear the current container back to an empty div
    container.innerHTML = ""
    var finalSum = Number(subInput1.value) - Number(subInput2.value)    
    // grab the input's value
    //i did this globally above
    // // Clear the user input after grabbing the value
    subForm.sub1.value = ""
    subForm.sub2.value = ""
    //create element
    var h1Thing = document.createElement('h1');
    // Give the element content: Text, attributes, classes, eventlisteners
    h1Thing.textContent = finalSum
    h1Thing.classList.add("main-title")
    // Append child
    container.appendChild(h1Thing)
}) 


multForm.addEventListener("submit", function(event) {
    event.preventDefault()
    // Clear the current container back to an empty div
    container.innerHTML = ""
    var finalSum = Number(multInput1.value) * Number(multInput2.value)    
    // grab the input's value
    //i did this globally above
    // // Clear the user input after grabbing the value
    multForm.mult1.value = ""
    multForm.mult2.value = ""
    //create element
    var h1Thing = document.createElement('h1');
    // Give the element content: Text, attributes, classes, eventlisteners
    h1Thing.textContent = finalSum
    // Append child
    container.appendChild(h1Thing)

}) 


