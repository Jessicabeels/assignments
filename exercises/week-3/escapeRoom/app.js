//start with npm init -y


//then npm install readline-sync

var ask = require('readline-sync')

var name = ask.question("What is your name? ");

console.log("Welcome to the Escape Room with a Bear in a hole and only one way out, " + name)

var options = ['put hand in hole', 'find key', 'open door']
var options2 = ['open door with key', 'throw key into a nearby body of water', 'go to the other side of the door and fight the bear']
var gameOver = false 

//game loop more elaborate
// while(!gameOver) {
//     //gameOver = true //ends while loop
//     var userChoice = ask.keyInSelect(options, "What would you like to do?")
//     // console.log(userChoice)
//     if (userChoice  === 0){
//         console.log(" You put your hand in the hole and a bear ate you!!!")
//         gameOver = true //or break
//     } else if(userChoice === 1){
//         console.log( " You found the key! What are you going to do next? ")
//         gameOver = false
//        var userChoice2 = ask.keyInSelect(options2, "Choose an option")
//        if (userChoice2 === 0) {
//            console.log(" Opened door with key! You won!") }
//                else if (userChoice2 === 1 ) {
//                 console.log("You're not the brightest...are you? You're too dumb to play this game")
//                 gameOver = true
//                } else if ( userChoice2 === 2 ){
//                    console.log("You were eaten by a bear, which escaping this game is worth it no matter the method")
//                    gameOver = true
//                } else {
//                 console.log("You. Can't. Escape. this. Game. Until. You...FIND THE KEY")
//                 gameOver = false
//                }
//            } else if (userChoice === 2) {
//             console.log("You. Can't. Escape. this. Game. Until. You...FIND THE KEY")
//             gameOver = false
//            }
//        }
    



//game loop
while(!gameOver) {
    //gameOver = true //ends while loop
    var userChoice = ask.keyInSelect(options, "What would you like to do?")
    // console.log(userChoice)
    if (userChoice  === 0){
        console.log(" You put your hand in the hole and a bear ate you!!!")
        gameOver = true //or break
    } else if(userChoice === 1){
        console.log( " You found the key! You can open the door - you won!")
        gameOver = true
    } else if(userChoice === 2){
        console.log("You can't open a door without a key! Try again")
        gameOver = false
    } else {
        console.log("You. Can't. Escape. this. Game. Until. You...FIND THE KEY")
    }
}