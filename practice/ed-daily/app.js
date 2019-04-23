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
