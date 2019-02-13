var axios = require('axios')
//Axios
//thenable , do this, then when youre back, do the following

//npm init -y
//npm install axios


// GET

axios.get("https://swapi.co/api/people/").then(function(response){
    console.log(response.data) //ListToDo(responsedata)
}).catch(function(error){
    console.log("error.response.status")
})
// need to account that what we want might now be there, so we use catch

// var newDataForDatabase = {
//     title: "New Todo"
// }



// axios.get("url/ID").then(function(response){
//     console.log(response.data)
// }).catch(function(error){
//     console.log(error)
// })


// //POST
// //URL //Data to POST - (OBJ)
// axios.post('url', newDataForDatabase).then(function(response){

// })

// var updates = {
//     title: "I'm done"
// }

// //PUT
//     //URL/ID  //Data to update with - {OBJ}
// axios.put("url/ID", updates).then(function(respone){

// })

// //DELETE
// axios.delete("url/ID").then(function(response){

// })
