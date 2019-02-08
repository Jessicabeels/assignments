

//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
    var over5 = arr.filter(function(item){
        if (item >= 5) {
            return item
        }
  })
  return over5
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// or 

// function fiveAndGreaterOnly(arr) {
//     return arr.filter(function(item){
//         if (item >= 5) {
//             return item
//         }
//   })
// }
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


//2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  var evenNums = arr.filter(function(item){
      if (item % 2 === 0){
          return item
      }
  })
  return evenNums
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr) {
  var fiveChars = arr.filter(function(item){
      if (item.length <= 5){
          return item
      }
  })
  return fiveChars
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

//4) Given an array of people objects, return a new array that has filtered out all those 
//who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr){
  var notIlluminati = arr.filter(function(item){
      if (item.member === false ){
          return item
      }
  })
  return notIlluminati
}
// test
console.log(peopleWhoBelongToTheIlluminati([
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Nate Jensen",
        member: true
    }
]));


//5) Filter out all the people who are not old enough to see The Matrix (younger than 18)
function ofAge(arr){
  var youths = arr.filter(function(item){
      if (item.age < 18){ 
          return item
      }
  })
  return youths
}
// test
console.log(ofAge([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));