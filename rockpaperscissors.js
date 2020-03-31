const getUserChoice = userInput  => {
    userInput = userInput.toLowerCase()
    
    if(userInput === 'rock'|| userInput === 'paper'|| userInput === 'scissors' ) {
      return userInput;
    }
    
    else {
      console.log('Error! You must choose Rock, Paper, or Scissors');
    }
  };
  
  function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        return 'Error!';
        break;
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    }
    
    if (userChoice == 'bomb') {
      return 'You are DA BOMB! You won!';
    }
    
    if (userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'The computer has won!';
      }
      else if (computerChoice === 'scissors') {
        return 'You won!';
      }
    }
    
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You win!';
      }
      else if (computerChoice === 'scissors') {
        return 'The computer has won!';
      }
    }
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You win!';
      }
      else if (computerChoice === 'rock') {
        return 'The computer has won!';
      }
      
    }
  }
  
  function playGame() {
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    
    console.log('Your choice was: ' + userChoice);
    console.log('The computer choice was: ' + computerChoice);
    
    console.log(determineWinner(userChoice, computerChoice));
    
  }
  
  playGame();
  
  
  