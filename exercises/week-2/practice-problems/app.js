// Make a function that takes a string and returns that string reversed.

let reverseStr = function(str) {
    var rStr = str.split('').reverse().toString().replace(/,/g, '');
    console.log(rStr);
    
}

reverseStr("A string to be reversed");

// Make a function that takes a string and returns true if 
//the string could be a number else return false.

let isNum = function(str) {
    if (isNaN(str)) {
        return 'false';
    } else {
        return 'true';
    }
}

console.log(isNum("3"));

//Make a function that takes a number and returns true 
//if the number is even else return false.

let isEven = function(num) {
    if (num % 2 === 0) {
        return 'true';
    } else {
        return false;
    }
}

console.log(isEven(8));

//Make a function that takes a number and 
//returns true if the number is even else return false.