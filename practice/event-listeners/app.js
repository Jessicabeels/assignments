//events and event listeners

var helloBtn = document.getElementById("hello-btn")


//1. What event   
//2.  What do you want to happen on said event
helloBtn.addEventListener("click", sayHello)

//named function
function sayHello() {
    console.log(event)
    alert("Hello")
}


//anonymous function - functions that don't have a name
helloBtn.addEventListener("click", function () {
    //all the things to have happened when button is clicked
    alert("Hello!!!")
})
//if only with this button then use ananoymous bc then we don't have to create another name to keep track of 

//how does javascript listen? in background its always listening in event loop  - running in the background listening for events
    //event bubbling and capturing 


//click ^, submit, hover, keypress, mouseover, mousein, mouseout
//event object => all the information about the given event

function sayHello() {
    console.log(event)
    alert("Hello")
}

helloBtn.addEventListener("click", function(event){
    console.log(event)
})


helloBtn.addEventListener("click",() => sayHello(e, "hello", param3))
//e = event 

window.addEventListener('keypress', function(event){
    console.log(event)
})