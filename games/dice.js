function diceRolls() {
  const randomNumber = Math.ceil(Math.random() * 10);

  if (randomNumber <= 6) {
    return randomNumber;
  }

  return diceRolls();
}

function guessDiceRolls(rolledNumber,attempts = 2) {
  const response = prompt(`Guess number that dice rolls :`);
  const numberGuess = parseInt(response);

  if (numberGuess === rolledNumber) {
    console.log("👏 hurray! your guess is right ");

    if(confirm("want to play again:"))
    {
      return newGame();
    }

    return;
  } 

  if (attempts === 1) {
    console.log("🤜 oops! you kicked out...");

    if(confirm("want to play again:"))
    {
      return newGame();
    }

    return;
  } 
    
  return guessDiceRolls(rolledNumber,attempts - 1);
}

function newGame() {
  console.clear();
  console.log("Welcome to dice game :");
  guessDiceRolls(diceRolls());
}

newGame();
