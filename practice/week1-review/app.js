// // terminal 
// //cd - navigating/changing directory cd .. or cd ../.. to go double back
// //ls- list current directory 
// //pwd - present working directory 
// //rm - file removal 
// //rm -rf: remove a directory 
// //mkdir: make directory
// // touch: make file
// //code . : make a file 

// //CLI: command line interface: node/npm, git


// //Github: upload/share code => repository => Version Control

// //HTML

// // var hat = {
// //     brand: "C.C",
// //     threadcount: 300,
// //     doesItHaveBobble: true,
// //     hatWears: ["Jess", "Olivia", "Victoria"],
// //     hatFrom: {
// //         city: "SLC",
// //         State: "UT"
// //     },
// //     hatOn: function () {
// //         return ("My head is warm");
// //     }
// // }

// // console.log(hat.hatOn());

// // //or 

// // var result = cord.break()
// // console.log(result);

// // //no console log in your finished product. its just for you...looks like your notes

// // console.log(hat["length"])


// //conventions
// // for (let i = 0; i < 10; i ++) {

// // }
// //
// // if() {

// // } else if () {

// // } else{

// // }

// //beautify with shift + option + f


// //option + z is to wrap text

// var i; //do declare var i insted of just i. if I dont declare it js will declare it for me and itll be global and free game for everyone
// for (var i=100; i > 0; i -=5) {
//     console.log(i);
// }

// //create an array
// var arr = ["kombucha", "coffee", "water", "coconut water"]

// console.log(arr[2]);

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// var str = "Some string"
// // get the letter E 
// // console.log(str[e])
// //strings are indexed the same way as an array 

// for (var i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


//Objects

    //Pass by value: boolean, number, string
    //Pass by reference:


    var a = "string";
    var b = a;
    a = "another string"

    console.log(a)
    console.log(b)
// b is still looking at the orginal = pass by value

//pass by reference
    var person = {
        name: "stevie",
        age: 2
    }

    var otherPerson = person
    otherPerson.name = "brian"

    console.log(person.name) //brian
    console.log(otherPerson.name) //brian 


    var tiger = {
        species: "cat",
        name: "tony the tiger",
        legs: 4,
        roar: function (){
            console.log( this.name + " says Rooooooar, and he has " + this.legs + " legs.")
            //within an object .this referes to within the object itself
        },
        legs: 4
    }
    

 tiger.roar();
    //roar(); ///does not work... undefined 

