//Log to the console every Wizard in the array using forEach().

var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"] 

wizards.forEach(function(item){
    console.log(item)
})

var wizards = [
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]
//   Log to the console every wizard's name.

wizards.forEach(function(item){
    console.log(item.name)
})
  
//   Add an isAlive property to every wizard, setting it to true.

wizards.forEach(function(item){
    item.isAlive = true
})

console.log(wizards)
  
//   Make a new array of all the Wizards that are "neutral good".
console.log("/////////////////")

var goodArr = []

wizards.forEach(function(item){
   
    if (item.alignment === 'neutral good'){
        goodArr.push(item)
        return goodArr
        
    }
})

console.log(goodArr)
  
//   Find the index of a wizard that is "lawful good".
// console.log(wizards.findIndex(function))



  
//   Return a Boolean that states whether or not all the wizards are alive.
  
//   Return a Boolean that states whether or not at least one wizard is "neutral good".
  
//   Check every "alignment" for every wizard. Kill every "neutral good" wizard. (Modify every "neutral good" wizard's isAlive property to false.)
  
//   Return a Boolean that states whether or not all the wizards are alive.
  
//   Return a Boolean that states whether or not some of the wizards are alive.
  
  