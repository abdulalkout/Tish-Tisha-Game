//--------------------------Classes-----------------------------//
class Player {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }

  increaseScore() {
    this.score++;
  }
}

class Rock {
  constructor(elementType, elementClass, elementId) {
    this.elementType = elementType;
    this.elementClass = elementClass;
    this.elementId = elementId;
  }

  generateRock() {
    let newRock = document.createElement(this.elementType);
    newRock.setAttribute("class", `${this.elementClass} rocks`);
    newRock.setAttribute("id", this.elementId);
    return newRock;
  }
}

//---------------------------Initiate Variables ------------------------------//
let player1 = new Player("Host");
let player2 = new Player("Opponent");
let currentRock;
let round = 1;
let currentPlayer = player1;
let moveHereState = false;

const box1 = document.getElementById("a1");
const box2 = document.getElementById("a2");
const box3 = document.getElementById("a3");
const box4 = document.getElementById("b1");
const box5 = document.getElementById("b2");
const box6 = document.getElementById("b3");
const box7 = document.getElementById("c1");
const box8 = document.getElementById("c2");
const box9 = document.getElementById("c3");

const boxsArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

//-----------------------------Query Selectors----------------------//
let roc1 = new Rock("div", "rock1", "one");
let rock1 = roc1.generateRock();

let roc2 = new Rock("div", "rock2", "two");
let rock2 = roc2.generateRock();

let roc3 = new Rock("div", "rock3", "three");
let rock3 = roc3.generateRock();

let roc4 = new Rock("p", "rock4", "four");
let rock4 = roc4.generateRock();

let roc5 = new Rock("p", "rock5", "five");
let rock5 = roc5.generateRock();

let roc6 = new Rock("p", "rock6", "six");
let rock6 = roc6.generateRock();

//---- Screen Query Selectors ---//
const reset = document.querySelector(".restartButton");
const gameUpdate = document.querySelector(".gameUpdate");
const roundsUpdate = document.querySelector(".rounds");
const playerOnePoints = document.querySelector(".player1Points");
const playerTwoPoints = document.querySelector(".player2Points");
const gameRules = document.querySelector("#gameRules");
const gameInstructions = document.querySelector("#gameInstructions");
const playersName = document.querySelector("#playersName");

//----------------------------Functions-------------------------------//
const createPlayers = () => {
  const inputPlayer1 = document.querySelector(".inputPlayer1").value;
  const inputPlayer2 = document.querySelector(".inputPlayer2").value;
  const playersName = document.querySelector(".playersName");
  player1 = new Player(inputPlayer1);
  player2 = new Player(inputPlayer2);
  playersName.style.display = "none";
  updateScreenScores();
  roundsUpdate.textContent = `${player2.name} turn`;
  return player1, player2;
};

const setCurrent = (num) => {
  if (num === 1) {
    currentRock = rock1;
  }
  if (num === 2) {
    currentRock = rock2;
  }
  if (num === 3) {
    currentRock = rock3;
  }
  if (num === 4) {
    currentRock = rock4;
  }
  if (num === 5) {
    currentRock = rock5;
  }
  if (num === 6) {
    currentRock = rock6;
  }
};

const moveHere = (currentRockChosen, id) => {
  if (!moveHereState) {
    return;
  }
  let currentMove = document.querySelector(`#${id}`);
  let playerTry = 0;
  if (
    currentMove.getElementsByTagName("div").length ||
    currentMove.getElementsByTagName("p").length
  ) {
    console.log("cant do that");
  } else {
    currentMove.append(currentRockChosen);
  }
};

const moveHereStateHandler = () => {
  moveHereState = true;
};

const resetBoxs = () => {
  let i = 1;
  boxsArr.forEach((box) => {
    box.textContent = i;
    i++;
  });
};

const restartButton = () => {
  location.reload();
};

const quitButton = (quiterNumber) => {
  if (quiterNumber === 1) {
    updateGameText(`${player2.name} won the game`);
  } else if (quiterNumber === 2) {
    updateGameText(`${player1.name} won the game`);
  }
  const restartTimeout = setTimeout(restartButton, 2000);
};

const updateGameText = (txt) => {
  gameUpdate.style.display = "block";
  let text = document.createElement("p");
  text.textContent = txt;
  gameUpdate.textContent = "Game Update";
  gameUpdate.appendChild(text);
};

const removeGameUpdate = () => {
  gameUpdate.style.display = "none";
};

const updateScreenScores = () => {
  playerOnePoints.textContent = `${player1.name} : ${player1.score}/3`;
  playerTwoPoints.textContent = `${player2.name} : ${player2.score}/3`;
};

const theWinnerFunction = (tagName) => {
  if (tagName === "div") {
    updateGameText(`${player1.name} won the round`);
    const player1RoundWon = setTimeout(resetBoxs, 1000);
    let removeUpdateTimeout = setTimeout(removeGameUpdate, 2000);
    player1.increaseScore();
    if (player1.score === 2) {
      updateGameText(`${player1.name} won the game`);
      reset.style.display = "block";
    }
  } else {
    updateGameText(`${player2.name} won the round`);
    const player2RoundWon = setTimeout(resetBoxs, 1000);
    let removeUpdateTimeout = setTimeout(removeGameUpdate, 2000);
    player2.increaseScore();
    if (player2.score === 2) {
      updateGameText(`${player2.name} won the game`);
      reset.style.display = "block";
    }
  }
  updateScreenScores();
};

const winTheRound = (tagName) => {
  if (
    box1.getElementsByTagName(tagName).length &&
    box2.getElementsByTagName(tagName).length > 0 &&
    box3.getElementsByTagName(tagName).length > 0
  ) {
    theWinnerFunction(tagName);
  } else if (
    box4.getElementsByTagName(tagName).length > 0 &&
    box5.getElementsByTagName(tagName).length > 0 &&
    box6.getElementsByTagName(tagName).length > 0
  ) {
    theWinnerFunction(tagName);
  } else if (
    box7.getElementsByTagName(tagName).length > 0 &&
    box8.getElementsByTagName(tagName).length > 0 &&
    box9.getElementsByTagName(tagName).length > 0
  ) {
    theWinnerFunction(tagName);
  } else if (
    box1.getElementsByTagName(tagName).length > 0 &&
    box4.getElementsByTagName(tagName).length > 0 &&
    box7.getElementsByTagName(tagName).length > 0
  ) {
    theWinnerFunction(tagName);
  } else if (
    box8.getElementsByTagName(tagName).length > 0 &&
    box5.getElementsByTagName(tagName).length > 0 &&
    box2.getElementsByTagName(tagName).length > 0
  ) {
    theWinnerFunction(tagName);
  } else if (
    box9.getElementsByTagName(tagName).length > 0 &&
    box6.getElementsByTagName(tagName).length > 0 &&
    box3.getElementsByTagName(tagName).length > 0
  ) {
    theWinnerFunction(tagName);
  }
};

const moveHereStateHandlerSet = () => {
  moveHereState = false;
  if (currentPlayer === player1) {
    winTheRound("div");
    console.log("player 2 turn");
    roundsUpdate.textContent = `${player2.name} turn`;
    currentPlayer = player2;
  } else {
    winTheRound("p");
    console.log("player 1 turn");
    roundsUpdate.textContent = `${player1.name} turn`;
    currentPlayer = player1;
  }
};

updateScreenScores();

//------------------------Event Listeners--------------//
document.addEventListener("keydown", (evt) => {
  switch (evt.key) {
    case "Enter":
      gameRules.style.display = "none";
      gameInstructions.style.display = "none";
      playersName.style.display = "none";
    case "n":
      gameRules.style.display = "none";
    case "m":
      playersName.style.display = "none";
  }
});
