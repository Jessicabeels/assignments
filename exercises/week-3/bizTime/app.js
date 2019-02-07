//////////////////////////////////////////STICKY//////////////////////////////////////////////////////////////

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
  myFunction()
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//////////////////////////////////////////STICKY//////////////////////////////////////////////////////////////



//////////////////////////////////////////PHOTO GRID//////////////////////////////////////////////////////////////
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
//////////////////////////////////////////PHOTO GRID//////////////////////////////////////////////////////////////




///////////////////////////////////FORM //////////////////////////////

contact.addEventListener("submit", function (e) {
  e.preventDefault()
  //clear the container back to an empty div
  container.innerHTML = " "
  //grab the inputs value
  // variable new name = document name.input name.value
  var nameInputFirst = contact.first.value
  var phoneInput = contact.phone.value
  var serviceInput = contact.service.value
  var finalPrint = (" Name: " + nameInputFirst + " Phone Number: " + phoneInput + " Service: " + serviceInput)
  // // Clear the user input after grabbing the value
  nameInputFirst.value = ""
  phoneInput.value = ""
  serviceInput = ""
  //create element
  var h1Thing = document.createElement('h1');
  // Give the element content: Text, attributes, classes, eventlisteners
  h1Thing.textContent = finalPrint
  // h1Thing.classList.add("main-title")
  // Append child
  container.appendChild(h1Thing)


})

///////////////////FORM//////////////////////////

foot.addEventListener('submit', function(e) {
  e.preventDefault()
  //clear container back to an empty div when done //maybe not? have a running list
  container2.innerHTML = " "
  // grab inputs value //variable new name = document name . input name . value
  var nameInput =foot.firstLast.value
  // console.log(nameInput)
  var endPrint = ("Thank you " + nameInput + " for your support for Courtney's Foot. Please also venmo her $5000 dollars.")
  // nameInput.value = ""
  //create element
  var h2Thing = document.createElement('h2')
  //Give element content
  h2Thing.textContent = endPrint
  //append child
  container2.appendChild(h2Thing)
})