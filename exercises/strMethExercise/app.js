// Make a functions that will return any given string into all caps followed by the same string all lowercase.

//capilizeAndLowercase("Hello") // => "HELLOhello"

function capitilizeAndLowercase(str) {
     return str.toLowerCase() + str.toUpperCase();
}
console.log(capitilizeAndLowercase("Hello"));

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function findMiddleIndex (str) {
    // for (i=0; i < str.length; i++)
    return Math.floor(str.length/2);
}
console.log(findMiddleIndex("Heeeeeeellooo"));

// Make a function that uses slice() and your other functions you've written to return the first half of the string


returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"

function returnFirstHalf (str) {

    return str.slice(0, str.length/2);
}

console.log(returnFirstHalf("Helllllllloooo"));









// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.


// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

arr1 = []



function capitilizeAndLowerCase (str) {
    var arr = str.split("")
    // console.log(arr);
    arr1 = arr.splice(0, str.length/2);
    arr = arr.join().toLowerCase();
    arr1 = arr1.join().toUpperCase();
    var finalStr = arr1 + arr;
    finalStr = finalStr.replace(/,/g, " ");
    //regex pattern
    console.log(finalStr);

}

capitilizeAndLowerCase("Hello World");

///////////in class

function capitilizeAndLowerCase2(str) {
    var middle = Math.floor(str.length / 2)
    var str1 = str.slice(0,middle).toUpperCase()
    var str2 = str.slice(middle).toLowerCase()
    return str1 + str2;
}

capitilizeAndLowerCase2("Hello World");

////////////////What the dude did
// function capitilizeAndLowerCase (str) {
//     var arr = str.split(" ")
//     var newWord =  []
//     for(var i = 0; i < arr[0].length; i++){
//         newWord.push(arr[0][i].toUpperCase())
//     }
//     arr.splice(0, 1, newWord.join(""))
//     console.log(arr);
    // console.log(arr);
    // var arr1 = arr.splice(0, str.length/2).toUpperCase();
    // var arr2 = arr.splice(str.length/2).toLowerCase();

    // arr1.toUpperCase();
    // arr2.toLowerCase();
    // var finalStr = arr1 + arr2;
    //finalStr = finalStr.replace(",", " " );
    // console.log(finalStr.join(','));

    
   
   
//// Make a function that takes any strinf and capitalizes any character that follows a space

function capitalize(str) {
    var splitWords = str.split(' ');
    for(var i = 0; i < splitWords.length; i++) {
        //splitWords[i] = splitWords[i].carAt(0).toUpperCase() + splitWords[i].slice(1);
        //return splitWords.join(' ')
        splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i].slice(1);

    }
    return splitWords.join(' ')
}

console.log(capitalize("hey friends! practice practice practice practice"));















// // ArrayMethods (non-higher order)

// // both strings and arrays have indicies 
// // array.length and string.length //only one that doesnt need () like.toLowerCase() needs them  
// // indexOf
// // .slice



// var myArr = ["apple", "orange", "bananas", "pears"]
// //specific to Array.methods
//     //.push => adds item to end of array

//     myArr.push("watermelon")
//     console.log(myArr)

//     //.pop => removes last item 

//     myArr.pop()
//     console.log(myArr)
//     //.shift => removes first item
//     myArr.shift()
//     console.log(myArr)
//     //.unshift => add item to neginning
//     myArr.unshift("tomato")
//     console.log(myArr)


//     var cars = ["1", "2", "3", "4", "5"]
//     // .splice() => removes items from aray and aguments them 
//     var splicedElements = cars.splice(1,2, "banana")
//     console.log(cars)
//     console.log(splicedElements)  

//     //play with this

//     var str = "hello"
//     var arr = str.split("")
//     console.log(arr)
//     console.log(arr.join(`-`))

//     var myStr = "ji hah racecar jip"
//     console.log(myStr.split(``).reverse().join(''));

//    // or 
//     var myStr ="happy"
//     var reversed = myStr.split(``).reverse().join('');
//     console.log(reversed)