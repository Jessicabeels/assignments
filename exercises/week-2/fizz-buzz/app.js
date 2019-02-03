//fizz buzz

//create a function where every number divisable by 3 is replaced by "fizz", and every one divisible by 5 is replaced with "buzz", if its divisible by both print "fizzbuzz"

function fizzBuzzReplace() {
    var newStr = "" 
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            newStr = newStr + "FizzBuzz "
        } else if (i % 5 === 0) {
            newStr = newStr + "buzz "
        } else if (i % 3 === 0) {
            newStr = newStr + "fizz "
        } else {
             newStr = newStr + i + " "
        }   
    }
    // console.log("returns " + newStr)
    console.log("returns " + newStr.split("  "))
}

fizzBuzzReplace(15);

//every time console.log runs it prints a line, and if you want all on one line then you need 1 console.log //anytime it looks like 1 line its likely a string