//start with npm init -y

var ask = require('readline-sync')
var sleep = require('sleep')

/////////////////////



// Global variables //
var player = {
    name: '',
    health: 100,
    inventory: ['Valarian Steel', ' Humor', ' Good hair']
}

var enemies = [{
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
        inventory: ['Wildfire', 'Clapbacks', 'deviousness ']
    },
    {
        name: 'Stannis Baratheon',
        health: 100,
        inventory: [' Being exceptionally boring', 'Personality of a Lobster', 'Killing his own daughter and making you briefly pause in shock']
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

function walk() {
    // random number between 1 - 4
    var chance = Math.floor(Math.random() * 2)

    // if number is 1 === attack
    if (chance === 1) {
        console.log("You've been ATTTAAACKED")
        attack()
    } else {
        console.log("Nothing happened, uneventful day really.")
        ask.keyInSelect(options, "What would you like to do? ")
        // ask.keyIn( 'W', "What would you like to do? " )
    }
}


function attack() {
    var enemyAttack = Math.floor(Math.random(enemies.name) * 4)
    if (enemyAttack === 1) {
        console.log("The horrible villian, " + enemies[1].name + " has attacked you!")
        fight()
    } else if (enemyAttack === 2) {
        console.log("Oh no! " + enemies[2].name + " has attacked you!")
        fight()
    } else if (enemyAttack === 3) {
        console.log("You're in trouble! Although " + enemies[3].name + " doesn't have Sharks with freaking laser beams, she has " + enemies[3].inventory[1])
        fight()
    } else {
        console.log("Watch out! " + enemies[4].name + " has " + enemies[4].inventory[2])
        fight()
    }
}

function fight() {
    var toFight = ask.keyInYN('Do you want to defend yourself, or run?')
    if (toFight) {
        console.log("Let's get it! Prepare for battle ")
        printInventory()
    } else {
        run()
    }
}

function run() {
    var running = Math.floor(Math.random() * 2)
    if (running === 1) {
        console.log("You got away! Continue on in your journey")
        walk()
    } else {
        console.log("You didn't escape! You can either fight or accept your defeat.")
        var fightBack = ask.keyInYN('Are you a quitter?')
        if (fightBack) {
            console.log("You died")
            return process.exit(1)
        } else {
            console.log("Fight for your life!")
            printInventory()
        }
    }
}


function asessInventory() {

    var userChoice = ask.keyInSelect(options2, "What weapon will you choose?")
    if (userChoice === 0) {
        console.log(" You will attack your vicious enemy with " + player.inventory[0])
        enemyFight()
    } else if (userChoice === 1) {
        console.log("Well, you don't have much, but you do have " + player.inventory[1] + " and your enemy has no perception of that")
        enemyFight()
    } else if (userChoice === 2) {
        console.log("You're SOL pal. Your hair isn't actually that great. You died.")

        gameOver = true
        return process.exit(1)
    }

}

function printInventory(){
    console.log("You need to know where you're at in order to attack")
    print = ask.question("Type print to get your inventory:  ") 
    if (print){
        console.log(player.name + ", you have " + player.inventory + " and your health is " + player.health) 
        asessInventory()
    }
}





function enemyFight() {
    var attacking = Math.floor(Math.random() * 3)
    if (attacking === 0) {
        console.log("The Battle has finished!")
        player.health = Math.floor(Math.random() * 100)
        console.log("You health is now " + player.health)
        enemyInventory()
    } else if (attacking === 1) {
        console.log("They hit you! Or more like gave you a light slap")
        player.health = Math.floor(Math.random() * 100)
        console.log("You health is now " + player.health)
        enemyInventory()
    } else if (attacking === 2) {
        console.log("Your enemy did some damage!")
        player.health = Math.floor(Math.random() * 100)
        console.log("You health is now " + player.health)
        enemyInventory()
    }

}

function enemyInventory() {
    console.log("Great work " + player.name + ", you now have access to the inventory of your defeated enemy")
    var snoopStuff = ask.keyInSelect(options3, "I suffer from short term memory loss like dory in finding nemo. Can you remind me who you just defeated?")
    if (snoopStuff === 0) {
        console.log("Your enemy The Night King had some cool stuff.You now have " + enemies[0].inventory)
        player.inventory = enemies[0].inventory.concat(player.inventory)
        return player.inventory
        // return enemies[0].inventory.push(player.inventory)
    } else if (snoopStuff === 1) {
        console.log("Your enemy " + enemies[1].name + " had some cool stuff. You now have " + enemies[1].inventory)
        player.inventory = enemies[1].inventory.concat(player.inventory)
        return player.inventory
    } else if (snoopStuff === 2) {
        console.log("Your enemy " + enemies[2].name + " had some cool stuff. You now have " + enemies[2].inventory)
        player.inventory = enemies[2].inventory.concat(player.inventory)
        return player.inventory
    } else if (snoopStuff === 3) {
        console.log("Your enemy " + enemies[3].name + " had some cool stuff. You now have " + enemies[3].inventory)
        player.inventory = enemies[3].inventory.concat(player.inventory)
        return player.inventory
    } else if (snoopStuff === 4) {
        console.log("Your enemy " + enemies[4].name + " had some cool stuff. You now have " + enemies[4].inventory)
        player.inventory = enemies[4].inventory.concat(player.inventory)
        return player.inventory
    }
}




/////////////////
/// GAME INTRO //

player.name = ask.question("Hello player1. What is your name? ");

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
console.log("That's a dragon...duh. Let's get started")

var options = ["Walk", "Exit Game"]
var options2 = ['Valarian Steel', 'Humor', 'Good hair']
var options3 = ["The Night King", "Joffrey Lannister", "Walder Frey", "Cersei Lannister", "Stannis Baratheon"]
var gameOver = false

/////////////
// GAME LOOP
while (player.health > 0) {
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if (userChoice === 0) {
        walk()
    } else if (userChoice === 1) {
        gameOver = true
        if (gameOver === true) {
            return process.exit(1)
        }
    }
}