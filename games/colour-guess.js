function randomColourNumber() {
  const randomNumber = Math.ceil(Math.random() * 10);

  if (randomNumber <= 7) {
    return randomNumber;
  }

  return randomColourNumber();
}

function randomColour() {
  let colourValues = [];

  switch (randomColourNumber()) {
    case 1:
      colourValues = ["red", 1];
      return colourValues;
    case 2:
      colourValues = ["orange", 2];
      return colourValues;
    case 3:
      colourValues = ["yellow", 3];
      return colourValues;
    case 4:
      colourValues = ["green", 4];
      return colourValues;
    case 5:
      colourValues = ["blue", 5];
      return colourValues;
    case 6:
      colourValues = ["indigo", 6];
      return colourValues;
    case 7:
      colourValues = ["violet", 7];
      return colourValues;
  }
}

function guessTheColour(colour, colourNumber, attempts = 3) {
  const colourGuess = prompt("guess one of the rainbow colour:");

  if (colourGuess === colour) {
    console.log("wow 🤩 you rock it 🤟");

    if(confirm("want to play again:"))
    {
      return newGame();
    }

    return;
  }

  if (attempts === 2) {
    const clueMessage = clue(colourNumber);
    console.log(`Clue :${clueMessage}`);
  }

  if (attempts === 1) {
    console.log(`Actual colour is ${colour}`)
    console.log("Better luck next time 🐣");

    if(confirm("want to play again:"))
    {
      return newGame();
    }

    return;
  }

  return guessTheColour(colour, colourNumber, attempts - 1);
}

function clueNumber() {
const randomNumber = Math.ceil(Math.random() * 10);

  if (randomNumber <= 2) {
    return randomNumber;
  }

  return clueNumber();
}

function redColourClue() {
  switch(clueNumber()) {
    case 1:
      return "In some Asian cultures, it signifies good luck, celebration, and tradition."; 
    case 2:
      return "It is one of the first colors babies can see after black and white";
  }
}

function orangeColourClue() {
  switch(clueNumber()) {
    case 1:
      return "It is a warm color that can create a cozy and inviting atmosphere. "; 
    case 2:
      return "It's used for safety gear like life preservers and safety vests. ";
  }
}

function yellowColourClue() {
  switch(clueNumber()) {
    case 1:
      return "It has sometimes been associated with negative traits like cowardice or poor character. "; 
    case 2:
      return "It is widely linked to sunshine, cheerfulness, and positivity.";
  }
}

function greenColourClue() {
  switch(clueNumber()) {
    case 1:
      return " It is strongly associated with nature, life, vitality, and freshness. "; 
    case 2:
      return " In some cultures, it is associated with luck and money.";
  }
}

function blueColourClue() {
  switch(clueNumber()) {
    case 1:
      return "It can make spaces feel cooler, which is why it's used in some home decor for that effect. "; 
    case 2:
      return " In Hinduism, the color of Lord Krishna, representing love, compassion, and divinity. ";
  }
}

function indigoColourClue() {
  switch(clueNumber()) {
    case 1:
      return "To create it, the most common method is mixing blue and red"; 
    case 2:
      return "It became known as `blue gold` ";
  }
}

function violetColourClue() {
  switch(clueNumber()) {
    case 1:
      return "On a conventional color wheel, it is located between blue and red."; 
    case 2:
      return "It is also the name of the flower from which the color gets its name. ";
  }
}

function clue(colourNumber) {
  switch (colourNumber) {
    case 1:
      return redColourClue();
    case 2:
      return orangeColourClue();
    case 3:
      return yellowColourClue();
    case 4:
      return greenColourClue();
    case 5:
      return blueColourClue();
    case 6:
      return indigoColourClue();
    case 7:
      return violetColourClue();
  }
}

function newGame() {
  console.clear();
  const colourValues = randomColour();
  guessTheColour(colourValues[0], colourValues[1]);
}

newGame();
