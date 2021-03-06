//the reduce function executes a reducer function that you provide 



//1) Turn an array of numbers into a total of all the numbers

function total(arr) {
    // your code here
    var total = arr.reduce(function (result, item) {
        return result + item
    })
    return total
}

//  console.log(total([1,2,3])); // 6

//2) Turn an array of numbers into a long string of all those numbers.
// function stringConcat(arr) {
//    var newStr = arr.reduce(function(result, item){
//        //result = result what its into, item is label of each iteration
//         return result = result + item.toString()
//    })
//    return newStr
// }

// console.log(stringConcat([1,2,3])); // "123"


//2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    return arr.reduce(function (result, item) {
        //result = result what its into, item is label of each iteration
        return result = result + item.toString()
    })
}

//  console.log(stringConcat([1,2,3])); // "123"

//3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    var voteCount = arr.reduce(function (result, item) {
        if (item.voted === true) {
            return result + 1
        } else {
            return result
        }
    }, 0)
    return voteCount
}

var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];
console.log(totalVotes(voters)); // 7


//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
   var totalCost = arr.reduce(function(result, item) {
       return item.price + result
   }, 0)  
   return totalCost
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

//5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
   var flatArr = arr.reduce(function(result, item){
       return result.concat(item)
    //    return result.split(',')
   })   
return flatArr
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


//6) Given an array of potential voters, return an object representing the results of the vote
//Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   var voterResults = arr.reduce(function(result, item){
       if (item.voted === true && item.age <= 25){
           return ++result 
       } else if (item.voted === true && item.age > 25 && item.age < 36){
           return ++result 
       } else if(item.voted === true && item.age > 36 && item.age < 55){
           return ++result 
       } else {
           return result
       }
   }, 0)
   return voterResults
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/
//////////////////////


axios.get("https://api.vschool").then(function(response){
    // console.log(response.data)
    var todos = response.data
    listTodos(todos)
    // for(var i =0; i < todos.length; i++){
    //     var title = document.createElement('h1')
    //     title.textContent = todos[i].title
    //     todoList.appendChild(title)
    }
}).catch(function(error){
    console.log(error)
})



function listTodos(todos){
    for(var i =0; i < todos.length; i++){
        var title = document.createElement('h1')
        title.textContent = todos[i].title
        todoList.appendChild(title)
}
}
//pull from same url using in postman to show on page. 