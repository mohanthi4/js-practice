function rock_paper_scissors(player1, player2, player1Power = 0, player2Power = 0) {
  console.log("use only lower case and spell corectly : rock , paper , scissors ");
  const player1response = prompt(`${player1} enter your weapon :`).trim();
  console.clear();
  console.log("use only lower case and spell corectly : rock , paper , scissors ");
  const player2response = prompt(`${player2} enter your weapon :`).trim();
  console.clear();

  if (player1response === player2response) {
    console.log("both have 0 points");
  }

  player1Power = player1Power + weaponFightOfPlayer1(player1response, player2response);
  player2Power = player2Power + weaponFightOfPlayer2(player1response, player2response);

  if (typeof player1Power !== "number" || typeof player2Power !== "number") {
    console.log("try again.....");
    return;
  }

  if (confirm ("do you want to continue ?")) {
    return rock_paper_scissors(player1,player2,player1Power, player2Power);
  }
  
  console.clear();
  console.log(`${player1} : ${player1Power}`);
  console.log(`${player2} : ${player2Power}`);
  
  let winner = player1Power > player2Power ? player1 : player2;
  winner = player1Power === player2Power ? "both are winners" : winner;
  console.log(`🥳 congratulations ${winner} 😇`);
  return;
}

function weaponFightOfPlayer1(player1response, player2response) {
  if (player1response === "paper" && player2response === "rock") {
    console.log(`player1 wins`);
    return 1;
  }

  if (player1response === "rock" && player2response === "scissors") {
    console.log(`player1 wins`);
    return 1;
  }

  if (player1response === "scissors" && player2response === "paper") {
    console.log(`player1 wins`);
    return 1;
  }

  if (player1response !== "rock" && player1response !== "paper" && player1response !== "scissors") {
    console.log("given invalid weapon check again");
    return "";
  }
  return 0;
}

function weaponFightOfPlayer2(player1response, player2response) {
  if (player1response === "rock" && player2response === "paper") {
    console.log(`player2 wins`);
    return 1;
  }

  if (player1response === "scissors" && player2response === "rock") {
    console.log(`player2 wins`);
    return 1;
  }

  if (player1response === "paper" && player2response === "scissors") {
    console.log(`player2 wins`);
    return 1;
  }

  if (player2response !== "rock" && player2response !== "paper" && player2response !== "scissors") {
    console.log("given invalid weapon check again");
    return "";
  }

  return 0;
}

function newGame() {
  console.clear();
  console.log("welcome to rock , paper, scissors game:");
  const player1 = prompt("enter name of 1st player:");
  const player2 = prompt("enter name of 2nd player:");
  console.clear();
  rock_paper_scissors(player1, player2);
}

newGame();
