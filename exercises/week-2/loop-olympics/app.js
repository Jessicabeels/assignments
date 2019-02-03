

// Write a loop that will print out all the names of the people of the people array

var peopleArray = [
    {
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

  for (i=0;i < peopleArray.length; i++) {
      console.log(peopleArray[i].name + " " + peopleArray[i].occupation)
  }


// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
names = [];
occupations = [];

for (i=0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
    }

    console.log(names);
    console.log(occupations);


// Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
// ????????
harrison = [];
for(i+0; i >peopleArray.length;i++) {
    if (i % 2 == 0) {
        harrison.push(peopleArray.splice(i));
    }

    console.log(harrison);
    
    
}
//harrison.push(peopleArray.splice(i % 2 ==0));

// mondo way of finding odd and even

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // filter out all elements that are located at an even index in the array.

// let x = arr.filter((element, index) => {
//   return index % 2 === 0;
// })

// console.log(x) 
// // [1, 3, 5, 7, 9]


//The gold medals 

// 