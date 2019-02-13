

var xhr= new XMLHttpRequest()
//this built in javascript contructor creates new object 2 make ajax request

xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4){
        var jsonData  = xhr.responseText
        var pokemonData = JSON.parse(jsonData)
        // console.log(data)
        listDataToDOM(pokemonData.objects[0].pokemon)
    }
}


xhr.open("GET", "https://api.vschool.io/pokemon", true) //true enables sync
//this is an GET, it could be a post, but we want to get information from the url, and
//we want it to sync constantly 
xhr.send()


function listDataToDOM(pokemonArr){
    for (var i = 0; i < pokemonArr.length; i++){
    // console.log(pokemonArr)
         //see array in the console //step 1
    var pokemon = pokemonArr[i]

    // //html elements
    var name = document.createElement('h2')
    var url = document.createElement('p')
    var details = document.createElement('h1')



    // //edit elements
    name.textContent = pokemon.name
    url.textContent = pokemon.resource_uri
    details.textContent = pokemon.details

    // //add to container
    container.appendChild(name)
    container.appendChild(url)
    container.appendChild(details)


    }



 }


 
