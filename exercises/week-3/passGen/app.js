function passwordGen (num) {
    var randomPass = Math.random().toString(36).slice(-num)
    return randomPass
}

console.log(passwordGen(16))

//////////////////////

function passwordGen (str, num) {
    var numRandom = Math.random().toString(36).slice(-num)
    var shuffled = str.split('').sort(function(){return 0.5-Math.random()}).join('');
    return shuffled
    // if (str.length < num) {
    //     var result = console.log((shuffled + numRandom).slice(-num))
    //     return result
    // }
    
}

console.log(passwordGen("yellow",16))


//randomize str
//take str & math.random and combine 

//if string.length < num
//combine str + num

//else str = num
//str.length

//str.length > num
//use slice