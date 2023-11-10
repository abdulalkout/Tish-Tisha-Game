//--------------------------Classes-----------------------------//
class Player {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
    this.rocks = 3;
  }

  decreaseRocks() {
    this.rocks = this.rocks - 1;
  }

  increaseScore() {
    this.score++;
  }
}

class Computer {
  constructor(name, score, rocks = 3) {
    this.name = name;
    this.score = score;
    this.rocks = rocks;
  }

  PlaceTheRocks() {
    let numberOfBox = Math.floor(Math.random() * 9) + 1;
    // const rockImgSelector = document.querySelector("")
    // rockImgSelector.appendChild(rockImg);
  }

  increaseScore() {
    this.score++;
  }
}
//-----------------Initiate Variables -------------------------//
const player1 = new Player("Abdul");
const player2 = new Player("Player");
const player1Class = "rounded";
const player2Class = "square";
let currentRock;
let round = 1;
let currentPlayer = player1;
let moveHereState = false;
let currentClass = player1Class;

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
//-------------------Query Selectors---------------//
let roc = document.createElement("div");
roc.setAttribute("class", "rock1 rounded");
roc.setAttribute("id", "one");

let roc2 = document.createElement("div");
roc2.setAttribute("class", "rock2 rounded");
roc2.setAttribute("id", "two");

let roc3 = document.createElement("div");
roc3.setAttribute("class", "rock3 rounded");
roc3.setAttribute("id", "three");

let roc4 = document.createElement("p");
roc4.setAttribute("class", "rock4 square");
roc4.setAttribute("id", "four");

let roc5 = document.createElement("p");
roc5.setAttribute("class", "rock5 square");
roc5.setAttribute("id", "five");

let roc6 = document.createElement("p");
roc6.setAttribute("class", "rock6 square");
roc6.setAttribute("id", "six");

//----------------------------Functions-------------------//
const setCurrent = (num) => {
  if (num === 1) {
    currentRock = roc;
  }
  if (num === 2) {
    currentRock = roc2;
  }
  if (num === 3) {
    currentRock = roc3;
  }
  if (num === 4) {
    currentRock = roc4;
  }
  if (num === 5) {
    currentRock = roc5;
  }
  if (num === 6) {
    currentRock = roc6;
  }
};

const moveHere = (whichRock, id) => {
  if (!moveHereState) {
    return;
  }
  let currentMove = document.querySelector(`#${id}`);
  currentMove.append(whichRock);
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

const theWinnerFunction = (tagName) => {
  if (tagName === "div") {
    console.log("Player1 wins");
    const player1RoundWon = setTimeout(resetBoxs, 2000);
    player1.increaseScore();
    if (player1.score === 2) {
      console.log("player 1 win the game");
    }
  } else {
    console.log("Player 2 Wins");
    const player2RoundWon = setTimeout(resetBoxs, 2000);
    player2.increaseScore();
    if (player2.score === 2) {
      console.log("player 2 win the game");
    }
  }
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
    console.log(box1.getElementsByClassName(currentClass));
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
    currentClass = player1Class;
    currentPlayer = player2;
  } else {
    winTheRound("p");
    console.log("player 1 turn");
    currentClass = player2Class;
    currentPlayer = player1;
  }
};

// const startGame = () => {
//   for (let i = 1; i <= 3; i++) {
//     if (currentPlayer === player1) {
//       console.log("player 1 turn");
//       currentPlayer = player2;
//       return;
//     } else {
//       console.log("player 1 turn");
//       currentPlayer = player1;
//     }
//     round++;
//   }
// };

// startGame();

//------------------------Event Listeners--------------//
