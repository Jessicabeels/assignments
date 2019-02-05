var form = document.biz
//bring in the form biz as declared in index.html


//add an event listener to check for when inputs are being made 
form.addEventListener("submit", function (event) {
    //prevent auto refresh
    event.preventDefault()
    // Clear the current container back to an empty div
    var countBombs = form.bombs.value
    var countCheeps = form.cheeps.value
    var countGoombas = form.goombas.value
    container.innerHTML = ""
    //add the inputs values together
    var finalCount = Number(countGoombas * 5) + Number(countBombs * 7) + Number(countCheeps * 11);
    console.log(countBombs)
    console.log(finalCount)
    console.log(typeof finalCount)
    //create a  element to put input in
    var inputPlace = document.createElement("inputPlace")
    //give element stuff from input
    inputPlace.textContent = "$" + finalCount
    //append child
    container.appendChild(inputPlace)



})