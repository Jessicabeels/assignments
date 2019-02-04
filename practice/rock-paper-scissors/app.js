function getUserChoice (userInput){
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors') {
      return userInput;
    } else {
      conosle.log("error");
    }
  }
  
  //console.log(getUserChoice("rock"))
  
  function getComputerChoice() {
    //the random number will be between 0-1 so if you multiply it by 3, then the number will be between 0-2, which one of the numbers between 0-2 will be an indicator of one of the 3 choices of rock paper scissors, since starts at 0.
    var ranNum = Math.floor(Math.random()*3)
    if (ranNum === 0 ) {
      return 'rock'
    } else if (ranNum === 1) {
      return 'paper'
    } else if (ranNum === 2) {
      return 'scissors'
    } else {
      return 'error'
    }; 
  }
  
   //console.log(getComputerChoice());
  
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice){
      return 'tie';
   } 
    if (userChoice === 'rock' && computerChoice === 'paper') {
     return 'computer won!';
   } else if (userChoice === 'paper' && computerChoice === 'rock') {
     return 'user won!';
   } else if (userChoice === 'scissors' && computerChoice === 'paper') {
     return 'user won!'; 
   } else if (userChoice === 'rock'&& computerChoice == 'scissors') {
     return 'user won!';
   } else if (userChoice === 'paper' && computerChoice === 'scissors') {
     return 'computer won!';
   } else if (userChoice ==='scissors' && computerChoice === 'rock') {
     return 'computer won!';
   } else {
     return 'error!';
   }
  }
  //console.log(determineWinner('scissors', 'paper'));
  
  function playGame() {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
        console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice))
  };
    
  playGame();
    