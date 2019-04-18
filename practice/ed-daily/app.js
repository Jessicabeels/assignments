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