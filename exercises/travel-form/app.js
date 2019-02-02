//select the form element
var form = document.info


form.addEventListener("submit", function(e){
    e.preventDefault()    
    //array of name
    var nameInput = form.name.value
    alert(nameInput)

    //array of age

    var ageInput = form.age

    //array of gender
    var genderInput = form.gender

    //array of location 
    var locationInput = form.location.value

    //array of diet
    var dietInput = form.diet

    //create an empty array for results?
    var results = []
})
    //go through the checked elements to see which are checked using a for loop
    for (i=0; i < diet; i++) {
        //if element is checked
        if (diet[i].checked) {
            //doesnt have to = true bc its truthy anyways
            results.push(diet[i].value)
        }
    alert("My age is  " + age.value) 
    alert("My gender is  " + gender.value)
    alet("My location is  " + location.value)



    // alert("favFood " + result + "" + favFoods.value)
    // }

    //clear the container back to an empty div
    container.innerHTML=""
    var finalSum =     
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
    }