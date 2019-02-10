//start with npm init -y

var ask = require('readline-sync')
var sleep=require('sleep')

/////////////////////



// Global variables //
var player = {
    name: '',
    health: 100,
    inventory: ['Valarian Steel', 'Humor', 'Good hair']
}

var enemies = [ 
    {
        name: 'The Night King',
        health: 500,
        inventory: ['Ice Spear', 'Ice Dragon', 'wights']
    },
    {
        name: 'Joffery Lannister',
        health: 200,
        inventory: ['Napolean Complex', 'The Mountain', 'Lannister Gold']
    },
    {
        name: 'Walder Frey',
        health: 300,
        inventory: ['Betrayal', 'Creepiness', 'Being a shady hoe (im still mad)']
    },
    {
        name: 'Cersei Lannister',
        health: 400,
        inventory: ['Wildfire','Clapbacks', 'deviousness ']
    },
    {
        name: 'Stannis Baratheon',
        health: 100,
        inventory: [' Being exceptionally boring', 'Personality of a Lobster','Killing his own daughter and making you briefly pause in shock' ]
    }
]

////////////////////
// Game Functions //
// function walk(){
//      // random number between 1 - 4
//      var chance = Math.floor(Math.random() * 2)
//      var enemyAttack = Math.floor(Math.random(enemies.name) * 4)
//      // if number is 1 === attack
//      if(chance === 1){
//          if(enemyAttack === 0){
//              console.log("You\'\ve been attacked by " + enemies[0].name)
//          } else if (enemyAttack === 1){
//              console.log("Y")
//          }
//        // console.log("You've been ATTTAAACKED by " + enemyAttack)
//      } else {
//          console.log("Nothing happened, uneventful day really.")
//      }
// }

function walk(){
    // random number between 1 - 4
    var chance = Math.floor(Math.random() * 2)
    
    // if number is 1 === attack
    if(chance === 1){
       console.log("You've been ATTTAAACKED")
       fight()
    } else{
        console.log("Nothing happened, uneventful day really.")
        walk()
    } 
}


function fight(){
    var enemyAttack = Math.floor(Math.random(enemies.name) * 4)
    if (enemyAttack === 1){
        console.log("The horrible villian, " + enemies[1].name + " has attacked you!")
        printInventory()
    } else if (enemyAttack === 2){
        console.log("Oh no! " + enemies[2].name + " has attacked you!")
        printInventory()
    } else if (enemyAttack === 3){
        console.log("You're in trouble! Although " + enemies[3].name + " doesn't have Sharks with freaking laser beams, she has " + enemies[3].inventory[1] )
        printInventory()
    } else {
        console.log("Watch out! " + enemies[4].name + " has " +  enemies[4].inventory[2])
    }
}
function printInventory(){
    console.log("You need to know what you have in order to attack")
    console.log("Your inventory has ..." + player.inventory)
    var userChoice = ask.keyInSelect(options2, "What would you like to do?")
    if (userChoice === 0){
        console.log(" You will attack your vicious enemy with " + player.inventory[0])
    } else if (userChoice === 1){
        console.log("Well, you don't have much, but you do have " + player.inventory[1]+ " and your enemy has no percpetion of that")
        console.log("You won, but you lost 50 health")
    } else if (userChoice === 2){
        console.log("You're SOL pal")
        gameOver = true
    }

    }
    
    // var attacking = Math.floor(Math.random()*2)
    // var attacking = true
    // if (attacking === true){
    //     
    //     printInventory()
    // }


// function printInventory(){
//         console.log("Your inventory has ..." + player.inventory)
// }


/////////////////
/// GAME INTRO //

player.name = ask.question("What is your name? ");

console.log("Welcome " + player.name + " to..")
console.log("Choose Your Own Game of Thrones Adventure")
console.log('_____')
console.log('/  O__]')
console.log('/  ___]')
console.log('|   | ') 
console.log('|   | ')
console.log('|   |')
console.log('/   /')
console.log('/   / ') 
console.log('/   /')
console.log("That's a dragon...duh")

var options = ["Walk", "Print your inventory"]
var options2 = ['Valarian Steel', 'Humor', 'Good hair']
var gameOver = false 

/////////////
// GAME LOOP
while(player.health > 0){
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if(userChoice === 0){
       walk()
    } else if(userChoice === 1){
        gameOver = true
        if (gameOver === true) {
            return process.exit(1)
        }
    }
}

