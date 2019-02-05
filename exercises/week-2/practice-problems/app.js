



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

//Make a function that takes an array and returns the average of the array.


// Input: [1, 2, 3]
// Output: 2

// Input: [5, -10, 10, 20]
// Output: 6.25

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let averageArray = function(arr) {
    return arr.reduce(reducer)/arr.length;
  
}

console.log(averageArray([1, 2, 3]))

//Make a function that takes two arrays and returns a single array of the items
// from the arrays added alternatingly.

let combineArrays = function(arr1, arr2) {
    // var average1 = []
    // var average2 = []
    // if (arr1[i] % 2 = 0) {
    //     average1.push(arr1[i])
    // } else if (arr2[i] % 2 != 0) {
    //     average2.push(arr2[i])
    // }

 //nested loop

    // var combine = []
    // for (var i=0;i < arr1.length; i++ ) {
    //     combine.push(arr1[i])
    //     for (var j=0;j <arr2.length; j++) {
    //         combine.push(arr2[j])
    //     }
    // } 
    // return combine



//double loop
    var combine = []
    for ( var i=0,j=0;i < arr1.length, j<arr2.length; i++, j++) {
        combine.push(arr1[i], arr2[j])
    }

    return combine 
}

console.log(combineArrays([1,2,3], [4,5,6]))