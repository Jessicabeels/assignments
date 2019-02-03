document
window

//select form element
var form = document.info


    


form.addEventListener ("submit", function(e){
    e.preventDefault()
//clear the container back to an empty div
    container.innerHTML=" "
//grab the inputs value
// variable new name = document name.input name.value
    var nameInputFirst = form.first.value
    var nameInputLast = form.last.value
    var ageInput = form.age.value
    var genderInput = form.gender.value
    var locationInput = form.location.value
    var dietInput = form.diet
    
    var dietArr = []
    for(var i = 0; i < dietInput.length; i++){
        // check for the checked elements
        if(dietInput[i].checked){
        // if element is checked, add it to a new array
            dietArr.push(dietInput[i].value)
        }
    }

    console.log(dietArr)
    alert("First Name: " + nameInputFirst + " Last Name: " + nameInputLast + " Age: " + ageInput + " Gender: " + genderInput + " Location: " + locationInput + " Dietary Restrictions: " + dietArr) 
})




