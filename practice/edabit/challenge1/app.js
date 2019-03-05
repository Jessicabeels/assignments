// //Create a function that takes a number (from 1 to 12) 
// //and return its corresponding month name as a string.

// // function month_name(num) {
// // 	if (num <= 12) {

// //     }
// // }

// //review

// //functions
// //- declarations
// //calling functions

// //a function is a collection of statements that we can re-use
// //should do something very specific
// //below a function declaration
// //brackets are the scope of the function, everything is local to the function.

// var helloString = generateHello() //can call above too

// function generateHello() {
// 	var a = "hello"
// 	return a
// }

// var helloString = generateHello //without parentheses we're saving in new variable, with () we are calling it
// //can use helloString and generateHello to call same function now. Functions can be reassigned like any other data type. 

// console.log(helloString())

// /////


// //return is if we need to use the data, and console.log is if we want to see it. So if we don't return data is not saved and we would not be able to use it later

// // var generateGoodbye = function name() { //anyonomous function expression
// //     var a = "hi"
// //     return a;
// // }

// function generateHi(name, age) {
// 	var a = "hi"
// 	return a + " " + name + ", you're " + age + " years old.";
// }



// var generateByeBye = function (name, age) {
// 	var a = "bye bye"
// 	return a + " " + name + ", you're " + age + " years old.";
// }

// console.log(generateHi("Rick", 687));
// console.log(generateByeBye("Morty", 12));

// //when to use an expression v. a declaration 
// //declaration is faster? nice to keep all declarations to one place too

// //DOM TIME ///////////////////////////

// //document.

// //what else uses a . ? an object! 

// // var display = document.getElementById('container')

// // var title = document.createElement('h1')

// // //display.textContent = "Hello World" //or

// // title.textContent = "Hello World"

// // title.style.backgroundColor = "purple"

// // // console.log(title)

// // display.appendChild(title)

// //or just need

// // var display = document.getElementById('container')

// // display.innerHTML = "<h1 class='title-class'>Hello World</h1>"

// // display.appendChild(title)


// //Create a function that takes a number (from 1 to 12) and return its corresponding month name as a string.

// // function month_name(num) {
// // 	var monthArray = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// // 	var month = monthArray[num -1]
// // 	return month
// // }

// // console.log(month_name(7));

// //Create a function that takes an array of numbers. Return the largest number in the array.


// function findLargestNum(arr) {
// 	var arrMax = Math.max.apply(null, arr)
// 	return arrMax
// }

// console.log(findLargestNum())


// //Create a function that returns the number of argument it was called with.


// function reverse(bool) {
// 	if (bool === true) {
// 		return 'false'
// 	} else if (bool === false) {
// 		return 'true'
// 	} else {
// 		return 'boolean expected'
// 	}
// }

// console.log(reverse(true))


// //Create a function that takes an array of numbers 
// //and returns the smallest number in the set.

// var arrTest = [34, -345, -1, 100]

// function findSmallestNum(arr) {
// 	return Math.min.apply(null, arr)

// }

// console.log(findSmallestNum([34, -345, -1, 100]))

// //Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.


// function Go(num) {

// 	if (num >= 1 && num <= 60) {
// 		var str = "-" 
// 		return str.repeat(num)
// 	} else {
// 		return error
// 	}

// }

// console.log(Go(5))


// //Create a function that accepts a string (of a persons first and last name) 
// //and returns a string with the first and last name swapped.

// function firstLast(str){
// 	return str.split(' ').reverse()
// }

// console.log(firstLast("Donald Trump"))


// //Create a function to multiply all values in an array by the amount of values in that array.

// //MultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

// // function MultiplyByLength(arr) {
// // 	var sum = []
// // 	for (var i = 0; i < arr.length; i++) {
// // 		var num = arr.length
// // 		sum = arr[i] * num
// // 	}
// // 	return sum
// // }

// // console.log(MultiplyByLength([2, 3, 1, 0]))

// function MultiplyByLength(arr) {
// 	var num = arr.length 
// 	for (var i = 0; i< arr.length; i++){
// 		var newArr = arr.splice() 
// 		return newArr;
// 	}

// }

// console.log(MultiplyByLength([2, 3, 1, 0]))

// function Person  (name, isAlive, hairColor){
// 	this.name = name;
// 	this.isAlive = isAlive;
// 	this.hairColor = hairColor;
// 	this.speak =  function(){
// 		return "Hello"
// 	}


// }

// console.log(Person("Jessica", true, "blonde"))
// var jess = new Person("Jessica", true, "blonde")

// var matrix = []
// for(var i = 0; i < matrix.length; i++){
// 	for(var j=0; j < matrix.length; i++){
// 		return matrix[0][0]
// 	}
// }

// var matrix= [
// 	[0,0,0],
// 	[0,0,0],
// 	[0,0,0]
// ]


// for (var i = 0; i < matrix.length; i++) {
// 	for (var j = 0; j < matrix.length; i++) {
// 		console.log(matrix)
// 	}

// }





// var arr = [3, 5, 7, 9];

// for(var i=0; i<arr.length; i++) {
// 	var lic = arr.length
// 	return arr[i] = arr[i] * lic;
// }
// console.log(arr);


var arr = [3, 5, 7, 9];

var sums = arr.map(function(element) {
	return element*2;
});
console.log(sums);

function MultiplyByLength(arr) {
	var sums = arr.map(function(element) {
		var nums = element*2;
		return sums * nums
	})
	
	
}

console.log(MultiplyByLength(arr))


function MultiplyByLength(arr) {
	return arr.map(x => x * arr.length);
  }

  console.log(MultiplyByLength(arr))


function AlphabetSoup(str) {
	var res = str.split("")
	res.sort()
	var foo  = res.join('')
	return foo
}

console.log(AlphabetSoup("javascript"))


arr1 = [1,2,3,4]
function firstLast(arr) {
	return [arr[0], arr[arr.length - 1]]

}

console.log(firstLast(arr1))



function nameShuffle(str) {
	var res = str.split(' ').reverse()
	return res
}

console.log(nameShuffle('Bernie Sanders'))

//Create a function that takes an array of strings.
//Return all words in the array that are exactly
//four letters.

let fourArr = ['jazz', 'quiz', 'jump']
function isFourLetters(arr) {
	
	var res = arr.filter(word => word.length === 4)
	return res
}

console.log(isFourLetters(fourArr))


// let arrEvens = [1,2,3,4,5,6,7,8]
// function noOdds(arr) {
// 	let evens = []
// 	for( var i =0; i < arr.length; i++){
// 		if ( arr[i] % 2 === 0){
// 			evens.push(a[i])
			
// 		}
// 		return evens
// 	}
	
	
// }

// console.log(noOdds(arrEvens))

// let arrEvens = [1,2,3,4,5,6,7,8]
// function noOdds(arr) {
// 	b = [];
//  	for (var i = 0; i < arr.length; ++i) { 
// 		if ((arr[i] % 2) ! = 1)
// {

// }	}
	
// }

// console.log(noOdds(arrEvens))


// "b" will now hold all the even values of "a"

var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

var evenNumbers = function(arr) {
	let evens = []
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) != 1) {
            evens.push(arr[i]);
				// console.log(evens);
        }
        
    }
	return evens
};

console.log(evenNumbers(nums));
// console.log(evens);
// console.log(odds);

// Write a short program that prints each number from 1 to 100 on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

const FizzBuzz = () => {
	for (let i = 0; i < 100; i++){
		if ( i % 5 === 0  &&  i % 3 === 0){
			console.log("fizzbuzz")
		} else if ( i % 5 === 0){
			console.log("buzz")
		} else if ( i % 3 === 0){
			console.log("Fizz")
		} else ( console.log(i))
	}
}

FizzBuzz()

const FizzBuzzed = () => {
	for (let i = 0; i < 100; i++){
		if (i % 3 === 0 && i % 5 === 0){
			console.log("fizzbuzz")
		} else if (i % 3 === 0) {
			console.log("fizz")
		} else if ( i % 5 === 0){ 
			console.log('buzz')
		} else (console.log(i))
	}
}

FizzBuzzed()

// function minMax(arr) {
// 	nums = []
// 		let mins = Math.min(...arr)		
// 		let maxs = Math.max(...arr)
// 		return nums.concat(mins + maxs)
// }
// minMax()


function filterArray(arr) {
	let newArr = []
	for (let i =0; i < arr.length; i++){
		for (let j = 0; i < arr.length; j++){
		if (arr[i] >= 0){
			newArr.push(arr[i])
		}
		return arr
	}
	}
}

console.log(filterArray[1, 34, 'yo', 58])


function sum(num) {
    let res = 0;
    for (let i=0; i < num.length; i--) {
        res += num[i];
    }
    return res;
}
 
// let num = 600

console.log(sum(600, 70))        // 5
// console.log(sum(-10, 1));       // -9
// console.log(sum(1, 1, 1, 1));   // 4
// console.log(sum());             // 0



// const reducer = (accumlator,currentValue) => accumlator + currentValue

// const sumRec = (num) => {
// 	let res = num.split('')
// 	return res
// }


// let num = [1,2,3,4]
// console.log(sumRec(num))

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

var n =  123456789;
var digits = (""+n).split("");
