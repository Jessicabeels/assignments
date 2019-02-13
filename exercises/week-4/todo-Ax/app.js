var xhr = new XMLHttpRequest()
//Axios
//thenable , do this, then when youre back, do the following

//npm init -y
//npm install axios



xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState ===4){
        var jsonData = xhr.responseText
        var starWarsData = JSON.parse(jsonData)
        console.log(data)
        listDataToDOM(starWarsData.objects[0].people)
    }
}

// xhr.open("GET", "https://swapi.co/api/people/", true)

// xhr.send()


// function listDataToDOM(starWarsArr){
//     for (var i = 0; i < starWarsArr.length; i++){
//         var people = starWarsArr[i]
//         console.log(starWarsArr)
//     }
// }