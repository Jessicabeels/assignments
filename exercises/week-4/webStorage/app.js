//Web storage
    //databases //
    //cookies //basic info

    //local storage
        //permanent until deleted
    //session storage
        //deletes itself when session ends (when browser is closed)
    
//they can only store strings ...json can store only strings, we have to turn arrays and objects into strings. 

localStorage.name = "steve"
//local.storage.setItem("name", "Joe") 
localStorage.setItem("age", 20)
var friends = ['maty', 'bill', 'mark']
var address = {
    city: "SLC",
    st: "UTAH strreet",
    zip: "84111"
}

localStorage.setItem.friends = JSON.stringify(friends)
localStorage.setItem('address', JSON.stringify(address))
JSON.parse(data)

//are these all jusr different ways of doing the same thing?

//doing all this bc data maintains on a refresh
//look under application on inspect

var name = localStorage.name
var friendsArr = JSON.parse(localStorage.friends)
var addressObj = JSON.parse(localStorage.getItem('address'))

console.log(name)
console.log(friendsArr)
console.log(addressObj)




