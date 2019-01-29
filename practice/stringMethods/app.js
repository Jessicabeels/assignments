// // var myStr = "Sunny Day"
// // console.log(myStr.length - 1);
// // //how you get the length of the string

// // //use `Sunny Day` backtips 


// var myStr = `Sunny Day`
// console.dir(myStr);
// var split = myStr.split('')
// console.log(split)



// // //common string methods

// // myStr = (myStr.toUpperCase());
// // //how to change/mutate the data bc string methods for the most part do not mutate the data
// // console.log(myStr)

// // console.log(myStr.toLowerCase());

// // //,indexOf() => returns the index number of found item, or-1 if not found

// // var randomStr = "abcdefghijklmnop"
// // console.log(randomStr.indexOf("j"));

// // //.slice()


// // var sliceThisString = "bananas"

// // console.log(sliceThisString.slice(1,3))//1 and 3 are begining nd ending points

// // console.log(sliceThisString.slice(2,3))


// // var cutPiece = "kiwis"
// // console.log(cutPiece.slice(1,2));

// // Make a functions that will return any given string into all caps followed by the same string all lowercase.

// //capilizeAndLowercase("Hello") // => "HELLOhello"

// function capitilizeAndLowercase(str) {
//      return str.toLowerCase() + str.toUpperCase();
// }
// console.log(capitilizeAndLowercase("Hello"));

// // Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// function findMiddleIndex (str) {
//     // for (i=0; i < str.length; i++)
//     return Math.floor(str.length/2);
// }
// console.log(findMiddleIndex("Heeeeeeellooo"));

// // Make a function that uses slice() and your other functions you've written to return the first half of the string


// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

// function returnFirstHalf (str) {

//     return str.slice(0, str.length/2);
// }

// console.log(returnFirstHalf("Helllllllloooo"));

// // Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

// // capilizeAndLowercase("Hello") // => "HEllo"
// // capilizeAndLowercase("Hello World") // => "HELLO world"

// function capitilizeAndLowercase (str) {
//     return str.split('');

//     //first change string into an array
//     // return str.splice(0, str.length/2);
//     //then splice the array 


// }

// console.log(capitilizeAndLowerCase("supacalafragilisticexpialadocious"));


//ArrayMethods (non-higher order)

//both strings and arrays have indicies 
//array.length and string.length //only one that doesnt need () like.toLowerCase() needs them  
//indexOf
//.slice



var myArr = ["apple", "orange", "bananas", "pears"]
//specific to Array.methods
    //.push => adds item to end of array

    myArr.push("watermelon")
    console.log(myArr)

    //.pop => removes last item 

    myArr.pop()
    console.log(myArr)
    //.shift => removes first item
    myArr.shift()
    console.log(myArr)
    //.unshift => add item to neginning
    myArr.unshift("tomato")
    console.log(myArr)


    var cars = ["1", "2", "3", "4", "5"]
    // .splice() => removes items from aray and aguments them 
    var splicedElements = cars.splice(1,2, "banana")
    console.log(cars)
    console.log(splicedElements)  

    //play with this

    var str = "hello"
    var arr = str.split("")
    console.log(arr)
    console.log(arr.join(`-`))

    var myStr = "ji hah racecar jip"
    console.log(myStr.split(``).reverse().join(''));

   // or 
    var myStr ="happy"
    var reversed = myStr.split(``).reverse().join('');
    console.log(reversed)