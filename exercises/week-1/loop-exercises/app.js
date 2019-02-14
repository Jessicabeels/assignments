//Write a function that accepts a string as input. Write a loop and
//add each letter of the string to an array. Then return the that new array.

function stringArray(str) {
    for (var i = 0; i < str.length; i++) {
        return str.split('')
    }

}

console.log(stringArray("YIppppppeeeeee yay!!!"))

//Write a function that accepts a string and a single character as inputs. 
//Write a loop that iterates over the string, and returns the position 
//of the first occurrence of the specified character. If the character 
//is not found, tell that to the user by returning "Character not found!".

function charOccur(string, char) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return string[i].indexOf(char)
        } else {
            return "character not found"
        }
    }
}

console.log(charOccur('YEEEEEEEEEET', 'Y'))

//Write a function that accepts an array of numbers as a parameter.
//Return "Found 42!" when the number 42 is found, return "42 not found!" 
//if it is not in the array.

var arr = [1,42,53,1214,64,2]

function found42(nums) {
    for(var i = 0; i < nums.length; i++){
        if (nums[i] = 42){
            return "Found 42!"
        } else {
            return "42 not found"
        }
    }
}

console.log(found42(arr))

//Write a function that accepts 10 numbers in an array and then prints out
// the smallest number out of the ten without using Math.min()


var arr1 = [10,2,3,4,5,6,7,8,9,1]

function get10(arr){
    var smallest
    for (var i = 0; i < arr.length; i++){
        smallest ++
        if ( arr[i] > smallest){
             smallest = arr[i]
        }
    }

    for (var i = 0; i < arr.length; i++){
        if (arr[i] < smallest && arr[i] > 0) {
            smallest = arr[i]
        }
    }

    return smallest
}

console.log(get10(arr1))