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

var enemyChosen = {
    name: '',
    health: '',
    inventory: ['']
}

var enemies = [{
        name: 'The Night King',
        health: 500,
        inventory: ['Ice Spear', 'Ice Dragon', 'Wights']
    },
    {
        name: 'Joffery Lannister/Barathian',
        health: 200,
        inventory: ['a Napolean Complex', 'The Mountain', 'Lannister Gold']
    },
    {
        name: 'Walder Frey',
        health: 300,
        inventory: ['Betrayal', 'Creepiness', 'Being a shady hoe (im still mad)']
    },
    {
        name: 'Cersei Lannister',
        health: 400,
        inventory: ['Wildfire', 'Clapbacks', 'Deviousness ']
    },
    {
        name: 'Stannis Baratheon',
        // health: 100,
        inventory: [' Being exceptionally boring ', 'Personality of a Lobster ', 'Killing his own daughter and making you briefly pause in shock ']
    }
]

////////////////////
// Game Functions //

function walk() {
    // random number between 1 - 4
    var chance = Math.floor(Math.random() * 2)

    // if number is 1 === attack
    if (chance === 1) {
        console.log("You've been ATTTAAACKED")
        sleep.sleep(1);
        attack()
    } else {
        console.log("Nothing happened, uneventful day really.")
        sleep.sleep(1);
        ask.keyInSelect(options, "What would you like to do? ")
        // ask.keyIn( 'W', "What would you like to do? " )
    }
}


function attack() {
    var enemyAttack = Math.floor(Math.random(enemies.name) * 4)
    if (enemyAttack === 0) {
        console.log("The horrible villian, " + enemies[0].name + " has attacked you!")
        enemyChosen = enemies[0]
        sleep.sleep(2);
        fight()
    } else if (enemyAttack === 1) {
        console.log("Oh no! " + enemies[1].name + " has attacked you!")
        enemyChosen = enemies[1]
        sleep.sleep(2);
        fight()
    } else if (enemyAttack === 2) {
        console.log("You're in trouble! Although " + enemies[2].name + " doesn't have Sharks with freaking laser beams, he has " + enemies[2].inventory[1])
        enemyChosen = enemies[2]
        sleep.sleep(2);
        fight()
    } else if (enemyAttack === 3) {
        console.log("Watch out! " + enemies[3].name + " has " + enemies[3].inventory[1])
        enemyChosen = enemies[3]
        fight()
    } else {
        console.log("The terrible " + enemies[4].name + " has unleashed their inventory of " + enemies[4].inventory)
        // enemyChosen = enemies[4].push(enemyChosen)
        enemyChosen = enemies[4]
        sleep.sleep(2);
        fight()

    }
}

function fight() {
    var toFight = ask.keyInYN('Do you want to defend yourself?')
    sleep.sleep(1);
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
        sleep.sleep(1);
        var fightBack = ask.keyInYN('Are you a quitter?')
        if (fightBack) {
            console.log("You died")
            console.log(" _____  ")
            console.log("/  +  \ ")
            console.log("| ~~~ | ")
            console.log("|R.I.P| ")
            console.log("|_____| ")
            return process.exit(1)
        } else {
            console.log("Fight for your life!")
            printInventory()
        }
    }
}


function asessInventory() {

    var userChoice = ask.keyInSelect(player.inventory, "What weapon will you choose?")
    if (userChoice <= 4) {
        console.log(" You will attack your enemy " + enemyChosen.name + " with " + player.inventory[userChoice])
        sleep.sleep(1);
        enemyFight()
    } else if (userChoice > 4){
        console.log("You're SOL pal. You died.")
        console.log(" _____  ")
        console.log("/  +  \ ")
        console.log("| ~~~ | ")
        console.log("|R.I.P| ")
        console.log("|_____| ")

        gameOver = true
        return process.exit(1)
    }

    // if (userChoice === 0) {
    //     console.log(" You will attack your enemy " + enemyChosen.name + " with " + player.inventory[0])
    //     sleep.sleep(1);
    //     enemyFight()
    // } else if (userChoice === 1) {
    //     console.log("Well, you don't have much, but you do have " + player.inventory[1] + " and " + enemyChosen.name + " has no perception of that")
    //     sleep.sleep(1);
    //     enemyFight()
    // } else if (userChoice === 2) {
    //     console.log("You're SOL pal. Your hair isn't actually that great. You died.")
    //     console.log(" _____  ")
    //     console.log("/  +  \ ")
    //     console.log("| ~~~ | ")
    //     console.log("|R.I.P| ")
    //     console.log("|_____| ")

    //     gameOver = true
    //     return process.exit(1)
    // } else if (userChoice === 3) {
    //     console.log(" You will attack your enemy " + enemyChosen.name + " with " + player.inventory[3])
    //     sleep.sleep(1);
    //     enemyFight()
    // } else if (userChoice === 4){
    //     console.log(" Fight " + enemyChosen.name + "to the death with " + player.inventory[4])
    //     sleep.sleep(1);
    //     enemyFight()
    // } else if (userChoice ==5){
    //     console.log(" Attack " + enemyChosen.name + " with " + player.inventory[5])
    //     sleep.sleep(1);
    //     enemyFight()
    // }

}

function printInventory() {
    console.log("You need to know where you're at in order to attack")
    sleep.sleep(1);
    print = ask.question("Type print to get your inventory:  ")
    sleep.sleep(1);
    if (print) {
        console.log(player.name + ", you have " + player.inventory + " and your health is " + player.health)
        sleep.sleep(2);
        asessInventory()
    }
}





function enemyFight() {
    var attacking = Math.floor(Math.random() * 3)
    sleep.sleep(1);
    console.log("          /| ________________")
    console.log("    O|===|* >________________ >")
    console.log("          \|                   ")
    console.log("                                               ________________|\'")
    console.log("                                              < ________________< * |===|0")
    console.log("                                                               |/                ")

    if (attacking === 0) {
        console.log("The Battle has finished!")
        var playerDamage = Math.floor(Math.random() * 100)
        player.health =- playerDamage
        sleep.sleep(1);
        console.log("(___  \( )/  ___)")
        console.log("   (___ | | ___) ")
        console.log("      /'| ('\    ")
        console.log("     ( (| |) )   ")
        console.log("      `.!' .'    ")
        console.log("       / .'\     ")
        console.log("       \|/ /     ")
        console.log("        /.<      ")	
        console.log("       (| |)     ")
        console.log("        | '      ")
        console.log("        `-'      ")
        sleep.sleep(1);
        console.log("You health is now " + player.health)
        sleep.sleep(1);
        enemyInventory()
    } else if (attacking === 1) {
        console.log("They got you!")
        sleep.sleep(1);
        var playerDamage = Math.floor(Math.random() * 100)
        player.health = player.health - playerDamage
        // player.health = Math.floor(Math.random() * 100)
        console.log("(___  \( )/  ___)")
        console.log("   (___ | | ___) ")
        console.log("      /'| ('\    ")
        console.log("     ( (| |) )   ")
        console.log("      `.!' .'    ")
        console.log("       / .'\     ")
        console.log("       \|/ /     ")
        console.log("        /.<      ")	
        console.log("       (| |)     ")
        console.log("        | '      ")
        console.log("        `-'      ")
        sleep.sleep(1);
        console.log("Your health is now " + player.health)
        sleep.sleep(1);
        enemyInventory()
    } else if (attacking === 2) {
        console.log("Your enemy did some damage!")
        sleep.sleep(1);
        var playerDamage = Math.floor(Math.random() * 100)
        player.health = player.health - playerDamage
        // player.health = Math.floor(Math.random() * 100)
        console.log("(___  \( )/  ___)")
        console.log("   (___ | | ___) ")
        console.log("      /'| ('\    ")
        console.log("     ( (| |) )   ")
        console.log("      `.!' .'    ")
        console.log("       / .'\     ")
        console.log("       \|/ /     ")
        console.log("        /.<      ")	
        console.log("       (| |)     ")
        console.log("        | '      ")
        console.log("        `-'      ")
        sleep.sleep(1);
        console.log("Your health is now " + player.health)
        sleep.sleep(1);
        enemyInventory()
    }

}

function enemyInventory() {
    sleep.sleep(1);

    if (player.health > 0) {
        console.log("Great work " + player.name + ", you now have access to the inventory of your defeated enemy, " + enemyChosen.name)
        sleep.sleep(1);
        console.log("You now also have " + enemyChosen.inventory + " in your inventory!")
        player.inventory = player.inventory.concat(enemyChosen.inventory)
        player.health += 10
        console.log("(___  \( )/  ___)")
        console.log("   (___ | | ___) ")
        console.log("      /'| ('\    ")
        console.log("     ( (| |) )   ")
        console.log("      `.!' .'    ")
        console.log("       / .'\     ")
        console.log("       \|/ /     ")
        console.log("        /.<      ")	
        console.log("       (| |)     ")
        console.log("        | '      ")
        console.log("        `-'      ")
        console.log("And you've gained 10+ health! Making your total health " + player.health)
    } else {
        console.log(" _____  ")
        console.log("/  +  \ ")
        console.log("| ~~~ | ")
        console.log("|R.I.P| ")
        console.log("|_____| ")
        console.log("Your health is too low! You died!! RIP")

    }
}




/////////////////
/// GAME INTRO //

player.name = ask.question("Hello player1. What is your name? ");

console.log("Welcome " + player.name + " to..")
sleep.sleep(1);
console.log("Choose Your Own Game of Thrones Adventure")
sleep.sleep(1);
console.log('_____         _____          _____')
console.log('/  O__]       /  O__]       /  O__]')
console.log('/  ___]       /  ___]       /  ___]')
console.log('|   |         |   |         |   | ')
console.log('|   |         |   |         |   | ')
console.log('|   |         |   |         |   |')
console.log('/   /         /   /         /   /')
console.log('/   /         /   /         /   /')
console.log('/   /         /   /         /   /')
// sleep.msleep(50)
//sleep.usleep()
sleep.sleep(2);
console.log("Those are Danerys 3 dragons...duh. Let's get started")

var options = ["Walk", "Exit Game"]
// var options2 = ['Valarian Steel', 'Humor', 'Good hair', '']
// var options3 = ["The Night King", "Joffrey Lannister", "Walder Frey", "Cersei Lannister", "Stannis Baratheon"]
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
            console.log("Goodbye!")
            console.log(" _____  ")
            console.log("/  +  \ ")
            console.log("| ~~~ | ")
            console.log("|R.I.P| ")
            console.log("|_____| ")
            return process.exit(1)
        }
    }
}