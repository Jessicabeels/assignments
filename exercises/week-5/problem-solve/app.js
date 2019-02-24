//Write a function that takes an array of numbers 
//and returns the largest (without using Math.max())

let big =[4, 5, 1, 3]

function findLarge(arr)
{
    var max = 0;
    // var a = array.length;
    for (var i=0;i<arr.length;i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}

console.log(findLarge(big))

//Write a function that takes an array of words and a character 
//and return each word that has that letter present.

const getChar = (arr) => {
    // let charArr = arr.sort()
    if (arr.typeOf === "string") {
        return arr
         }
   
}

console.log(getChar(["#3", "$$$", "C%4!", "Hey!"],"!"))


//Write a function that takes a num1 and num2 and 
//returns whether num1 is divisible by num2.



const isDivisible = (num1, num2) => {
   let divNum = num1 % num2 
   if (divNum % 2 === 0 ){
        return true
   } else {
       return false
   }
}

console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3))// => true
console.log(isDivisible(15, 4)) // => false