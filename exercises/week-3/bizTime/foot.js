///////////////////FORM2//////////////////////////

var footForm = document.foot

footForm.addEventListener('submit', function(e) {
  e.preventDefault()
  //clear container back to an empty div when done //maybe not? have a running list
  container2.innerHTML = " "
  // grab inputs value //variable new name = document name . input name . value
  var nameInput =foot.first.value
  // console.log(nameInput)
  // console.log(nameInput)
  var endPrint = ("Thank you " + nameInput + " for your support for Courtney's Foot. Please also venmo her $5000 dollars.")
  nameInput.value = ""
  //create element
  var h2Thing = document.createElement('h2')
  //Give element content
  h2Thing.textContent = endPrint
  //append child
  container2.appendChild(h2Thing)
})


///////////////////FORM2//////////////////////////