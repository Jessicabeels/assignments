const asciiConvert = (c) => {
    return c.charCodeAt(0)
}


console.log(asciiConvert('A m / [ '))



// function numberSyllables(word) {
//     let splitted = word.split('')
//     let count = 1
//     if(splitted.charCodeAt(1)){
//         return count++
//     } 
// }


// console.log(numberSyllables('buf-fet'))



function missingAngle(angle1, angle2) {
    let sum = angle1 + angle2
    let angle3 = 180 - sum
    if ( angle3 > 90){
        return 'obtuse'
    } else if (angle3 === 90){
        return 'right'
    } else if (angle3 < 90){
        return 'acute'
    }
}


console.log(missingAngle(45, 45))

const syllaCount = (word) => {
    return word.split('-').length
}

console.log(syllaCount('on-o-mat-o-poe-ia'))


function numberArgs(...args) {
	return args.length
}

console.log(numberArgs("1", "2", "3", " 4"))


//additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]

function additiveInverse(arr) {
	return arr.map ( x => x * -1)
}

console.log(additiveInverse([-25, 17, 4, -57]))


const fizzBuzz = () => {
    for (let num = 0; num <= 100; num++){
        if (num % 5  && num % 3){ 
            console.log('fizzbuzz')
        } else if (num %  3){
            console.log('fizz')
        } else if ( num % 5){
            console.log('buzz')
        } else {
            console.log(num)
        }
}

}

console.log(fizzBuzz(100))

//You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) 
//on your farm. Return the total number of legs on your farm.

const numLegs = (chickens, cows, pigs) => {
    let legsC = chickens * 2
    let legsCow = cows * 4
    let legsPigs = pigs * 4
    return legsC + legsCow  + legsPigs
}


console.log(numLegs(5, 2, 8))


//triArea(3, 2) ➞ 3

const triArea = (base, height) => {
    return (base * height) / 2
}

console.log(triArea(10, 10))

//concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
function concat(arr1, arr2) {
	return arr1.concat(arr2)
}

console.log(concat([1, 3, 5], [2, 6, 8]))


//smallerNum("21", "44") ➞ "21"

const smallerNum = (n1, n2) => {
   return Math.min(n1, n2).toString()
}

console.log(smallerNum('1500', '16'))


//reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

const revArr = (arr) => {
    return arr.reverse()
}

console.log(revArr([ 1, 2, 3, 4]))

const nextElement = (arr) => {
    let increment =  -1 * (arr[arr.length - 2] - arr[arr.length -1])
    return increment + arr[arr.length - 1]
}

console.log(nextElement([2, 2, 2, 2, 2]))

//check([1, 2, 3, 4, 5], 3) ➞ true

const checkElement  = ( arr, el) => {
   if (arr.includes(el)){
       return true
   } else {
       return false
   }
}
// console.log(checkElement([1, 2, 3, 4, 5], 3))


// //existsHigher([5, 3, 15, 22, 4], 10) ➞ true
// const existsHigher = (arr, el) => {
//     if (arr.some()){
//         return true
//     } else  {
//         return false
//     }
    
// }

// console.log(existsHigher([5, 3, 15, 22, 4], 10))

//match("hello", "hELLo") ➞ true
const Match = (s1, s2) => {
    if (s1.toLowerCase( ) === s2.toLowerCase()){
        return true
    } else {
        return false
    }
}

// console.log(Match("hello", "hELLo"))

//kToK(4, 2) ➞ true

const kToK = (n,k) => {
    if(Math.pow(k,k) === n){
        return true
    } else {
        return false
    }
}

// console.log(kToK(4, 2))

let x = /\d/
x = 'pg14950v'
console.log(x)

//differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

const differenceMaxMin = (arr) => {
    let result = Math.max(...arr) - Math.min(...arr)
    return result
}

console.log(differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21]))

//additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]

const addInverse = (arr) => {
    return arr.map ( i => i * -1)
}

console.log(addInverse([5, -7, 8, 3]))

function removeVowels(str) {
    return str.replace(/[aeiou]/g, "")
  }

  console.log(removeVowels('apple'))

  //sameCase("hello") ➞ true

  const sameCase = (str) => {
      if (/^[a-z]+$/.test(str) || (/^[A-Z]+$/.test(str))){
          return true
      } else {
          return false
      }
  }

  console.log(sameCase('HELLO'))

  function isOmnipresent(arr, val) {
    for ( let i = 0; i < 100; i++){
        if (arr[i].includes( val)){
            return true
        } else {
            return false
        }
    }
	
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 9))

// retrieveMajor("6.1.9") ➞ "6"

// retrieveMinor("6.1.9") ➞ "1"

// retrievePatch("6.1.9") ➞ "9"

const retrieveMajor = (str) => {
    let splitted = str.split('.')
    return splitted[0]
}

console.log(retrieveMajor("6.1.9"))

const retrieveMinor = (str) => {
    let splitted = str.split('.')
    return splitted[1]
}

console.log(retrieveMinor("6.1.9"))

const retrievePatch = (str) => {
    let splitted = str.split('.')
    return splitted[2]
}

console.log(retrievePatch("6.1.9"))