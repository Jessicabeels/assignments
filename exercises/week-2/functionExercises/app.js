// Write a function that accepts two numbers as parameters, and returns the sum.

function getSum (a,b) {
    return a + b;
}

console.log(getSum(3,6));

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// function getLargest (a,b,c) {
//     //math object (max)
//     //for loop
//     //if statements
//     if ( a > b && a > c) {
//         return a;
//     } else if (b > c && b > a) {
//         return b;
//     } else if ( c > a && c > b){
//         return c;
//     }
// }

//math.max
// function getLargest (a,b,c,d, e,) {
//     return Math.max(a,b,c, d, e);
// }
// console.log(getLargest(18,12,453,69,4328));

//for loop



function getLargest(a,b,c,) {
    var numsArray = [a, b, c]
    var largest = 0;
    //0 as a starting point, its your first largest, but then you compare it and reassign it to the next one
    for (i=0; i < numsArray.length; i++) {
        if ( numsArray[i] > largest) {
            largest = numsArray[i]
        }

    }
    return largest; 
}

console.log(getLargest(12,23,456));


// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");




function isEven (i) {
    if (i % 2 === 0 ) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(isEven(8));

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function string20Check (str) {
    if (str.length <= 20) {
        return "str";
    } else {
        return str.slice(0, str.length / 2);
    }
}

console.log(string20Check("supercalafrajalistickittrialadocious"));

// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.


// function fibonacci(num){
//     var a = 1, b = 0, temp;
  
//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
  
//     return b;
//   }

// //   console.log(fibonacci(8));

// function fibonacci(a) {
    
// }


// // Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )

// function freqLetter (str) {
//     if ( i )
// }

// freqLetter("supercalafragilisticexpialadious");