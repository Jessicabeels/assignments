//////////////Conditionals lesson: 
////////if this happens, then this happens
/////if you get a C or above, you pass the class
////////if you drink water, you stay hydrated, else, you become dehydrated
/////////if you go to V school, you become a developer, else, you do what you were doing before


// the anatomy of a conditional 
//If (condition) {
    //thing that happens based on condition
//} else {
    // thing that happens whether or not opposite of condition
//}




var person= {
    name: "Suzy",
    age: 105,
    driversLicense: "Suspended"

}

if (person.age >=90) {
    console.log( person.name + " your driver's license needs to be renewed every year")
} else if ( person.age >=80) {
    console.log("Driver's license needs to be renewed every 10 years")
} else {
    console("Renew your driver's license at the regular rate")
}
///switch statement
////////////lets do another exmple


var cheese = 'Cheddar';

if (cheese) {
    console.log('Yay! Cheese available for making cheese on toast.');
  } else {
    console.log('No cheese on toast for you today.');



//conditionals are: whether or not something happens based on a condition. 



function goToVSchool(time) {
    if (time >= "9am") {
        console.log("start class")
    } else if (time === "6pm") {
        console.log("End of class")
    } else {
        console.log("You're probably studying anyways")
    }
}

goToVSchool(time = "9am");

// if (val === 1) {
//      console.log(“apple”);
//    } else if (val === 2) {
//      console.log(“beet”);
//    } else {
//     answer = “carrot”;
//    }
   
//    //A more efficient switch statement:
   
//    switch (val) {
//     case 1:
//     answer = “apple”;
//     break;
//     case 2:
//     answer = “beet”;
//     break;
//     default:
//     answer = “carrot”;
//    }


////1.
//str is our parameter
function upperCaseStr (str) {
    return str.toUpperCase();
}
//
console.log(upperCaseStr("good morning"));

/////2.

function reverseMe(str){
    // var splitString = str.split("");
    // // return splitString;
    // var reverseArray = splitString.reverse();
    // // return reverseArray;
    // var joinArray = reverseArray.join("");
    // return joinArray;
    return str.split("").reverse().join("");
}
  }


// console.log(reverseMe("please may I have more coffee"));

// ////////////3.

// function sliceMe (str, num) {
//     return str.slice(0, num);
// }

// console.log(sliceMe("This is the string to slice", 10))