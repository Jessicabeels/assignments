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


// const fizzBuzz = () => {
//     for (let num = 0; num <= 100; num++){
//         if (num % 5  && num % 3){ 
//             console.log('fizzbuzz')
//         } else if (num %  3){
//             console.log('fizz')
//         } else if ( num % 5){
//             console.log('buzz')
//         } else {
//             console.log(num)
//         }
// }

// }

// console.log(fizzBuzz(100))

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

//addUp(4) ➞ 10

const addUp = (num) => {
  return(num*(num+1))/2
}

console.log(addUp(600))

// calcDeterminant([
//     [5, 3],
//     [3, 1]
//   ]) ➞ -4

const calcDeterminant =(M) => {
    return  (M[0][0]*M[1][1])-(M[0][1]*M[1][0]);
}

console.log(calcDeterminant( [
    [1, 2],
    [3, 4]
  ]))


  

  const hashPlusCount = str => [
      (str.match(/#/g) || []).length,
      (str.match(/\+/g) || []).length,
  ]

  console.log(hashPlusCount("##+++#"))

  //addEnding(["clever", "meek", "hurried", "nice"], "ly")
//➞ ["cleverly", "meekly", "hurriedly", "nicely"]



const addEnding = (arr, end) => {
    let result = []
    for (let i = 0; i < arr.length; i++){
        result[i] = arr[i] + end
    }
    return result
  
}

console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"))

function checkAllEven(arr) {
    
    if( arr.every( x=> x % 2 === 0)){
        return true
    } else {
        return false
    }
  }

  console.log(checkAllEven([ 2, 2, 4]))

  //joinPath("portion1", "portion2") ➞ "portion1/portion2"


//   const joinPath = (portion1, portion2) => {
//       if (portion2.startsWith("/") || portion1.endsWith("/")){
//           return portion1.concat(portion2)
//       } else if (!portion1.endsWith("/") || !portion2.startsWith("/")){
//         return portion1.concat("/" + portion2)
//       } else if (portion2.startsWith("/") && portion1.endsWith("/")){
//           return portion1.replace('/', '//').concat(+ portion2)
//       }
      
    
//   }

//   console.log(joinPath("portion1/", "/portion2"))

//   function joinPath(portion1, portion2) {
// 	let p1 = portion1.includes('/')? portion1.slice(0,-1) : portion1
// 	let p2 = portion2.includes('/')? portion2.slice(1) : portion2
// 	return `${p1}/${p2}`
// }

const joinPath = (portion1, portion2) => {
    let p1 = portion1.includes('/')? portion1.slice(0,-1) : portion1
    let p2 = portion2.includes('/')? portion2.slice(1) : portion2
    return `${p1}/${p2}`
}

console.log(joinPath("portion1/", "/portion2"))

//firstArg(1, 2, 3) ➞ 1

//lastArg(1, 2, 3) ➞ 3

const firstArg = (...arr) => {
    return arr.shift()
}

console.log(firstArg(1, 2, 3))

const lastArg = (...arr) => {
    return arr.pop()
}

console.log(lastArg(1, 2, 3))

//firstVowel("apple") ➞ 0

const firstVowel = (str) => {
    return str.search('a'|| 'e'|| 'i'|| 'o'|| 'u')
    // for (let i =0; i < str.length; i++ ){
    //     if (str.search('a'|| 'e'|| 'i'|| 'o'|| 'u')){
    //         return str.indexOf(str[i])
    //     }
    // }
    
}

console.log(firstVowel('hello'))


console.log('hi bye hiii')

console.log('sfgjhksdfghsfjhkg')

console.log("i need to code more")



function nextEdge(side1, side2) {
	let res = (side1 + side2) - 1
	return res
}

console.log(nextEdge(1,6))


const helloName = name => {
    return "Hello " + name
}



console.log(helloName("Gerald"))

//volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10



function volumeOfBox(sizes) {
	return sizes.width * sizes.length * sizes.height;
}

console.log(volumeOfBox(6))


const fizzBuzz = (i) => {
    for ( let i = 0; i <= 100; i++ ){
        if(i % 5 === 0){
            console.log("fizz")
        }else if (i % 3 === 0){
            console.log("buzz")
        } else if (i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz")
        } else {
            console.log(i)
        }
    }
    
}

console.log(fizzBuzz())


//stackOfBoxes(3) -> 7
//stackOfBoxes(4) -> 13

const stackOfBoxes = (n) => {
	return Math.pow(n, 2)
}

console.log(stackOfBoxes(2))



// isBetween(start_word, end_word, word)
// Examples
// isBetween("apple", "banana", "azure") ➞ true

// isBetween("monk", "monument", "monkey") ➞ true

// isBetween("bookend", "boolean", "boost") ➞ false


const isBetween = (w1, w2, mid) => {

    if (w1 < mid && mid  < w2 ){
        return true
    }  else {
        return false
    }

}

console.log(isBetween("apple", "banana", "azure") )

// const alpsha = (w1, w2) => {
//     if (w1 < w2){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(alpsha('Z', 'A'))

// const sorting = () => {

// }