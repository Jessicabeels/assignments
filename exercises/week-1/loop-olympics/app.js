
var peopleArray = [{
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]


// Write a loop that will print out all the names of the people of the people array


//   for (i=0;i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name + " " + peopleArray[i].occupation)
//   }


// // Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// names = [];
// occupations = [];

// for (i=0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
//     }

//     console.log(names);
//     console.log(occupations);


// // Write a loop that pushes every other name to an array starting with "Harrison Ford", 
//and every other occupation to another array starting with "Singer".
// // ????????


var array1 = [];
  var array2 = [];
  for (i = 0; i > peopleArray.length; i++) {
    if (i% 2){
      array2.push(peopleArray[i].occupation)
    } else{
      array1.push(peopleArray[i].name)
    }
  }

  // console.log("\n3: ");
  console.log("array1 =" + array1 )
  console.log("array2 =" + array2)

// function pushNameArray(peopleArray) {
//   
    
    
//     (peopleArray[i].name % 2 == 0) {
//       harrison.push(peopleArray[i].slice(i));
//       console.log(harrison);
//     } else {
//       if (peopleArray[i].occupation % 2 != 0) {
//         singer.push(peopleArray[i].slice(i));
//         console.log(singer);
//       } else {
//         console.log("error")
//       }
//     }
//   }
// }

// console.log(pushNameArray());

// // }
// //harrison.push(peopleArray.splice(i % 2 ==0));

// // mondo way of finding odd and even

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // // filter out all elements that are located at an even index in the array.

// // let x = arr.filter((element, index) => {
// //   return index % 2 === 0;
// // })

// // console.log(x) 
// // // [1, 3, 5, 7, 9]


// //The gold medals 


// //Write a loop that pushes every other name to an array starting with "Harrison Ford",
// // and every other occupation to another array starting with "Singer".
// // var namesArr = []
// // var occupationsArr = []




// // function pushNameArray( ) {
//   for (i=0; i <peopleArray.length; i++) {
//     if (peopleArray[i] % 2 === 0) {
//       namesArr.push(peopleArray[i].name) 
//       console.log(namesArr)
//     } else if (peopleArray[i] % 2 != 0){
//       occupationsArr.push(peopleArray[i].occupation)
//       console.log(occupationsArr)
//     }
//   }
// }

// pushNameArray(peopleArray);