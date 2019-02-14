//Loop through the following array and count how many "computers" there are.
// Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]


function loopArrs(arr) {
    var count = 0
    for (var i = 0; i < arr.length; i++ ){
        if (arr[i] === 'computer'){
             count++
        }
    }
    return count
}
console.log(loopArrs(officeItems))

//Loop through the following array and log to the console "old enough" if 
//they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  function oldEnough(arr){
      for (var i = 0; i < arr.length; i++){
          if (arr[i].age >=18){
              console.log( "Hey " + arr[i].name + " you're " + arr[i].age + " years old! You can go to the movie" )
             } else {
                 console.log("Hey " + arr[i].name + " you're only " + arr[i].age + " years old! Begone youth")
             }
      }
  }

 oldEnough(peopleWhoWantToSeeMadMaxFuryRoad)