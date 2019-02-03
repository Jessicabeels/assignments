var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    //creating a function with the parameters people and alphabet
    var matrix = []
    for (i = 0; i < people.length; i++) {
        //go through the array of people
        matrix.push(people[i])

        for (j = 0; j < alphabet.length; j++) {
            matrix.push(alphabet[j].toUpperCase())
        }
    }
    return matrix
}

console.log(forception(people, alphabet));