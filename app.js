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
let currentRock;
let round = 1;
let currentPlayer = player1;
let moveHereState = false;
//-------------------Query Selectors---------------//
let roc = document.createElement("div");
roc.setAttribute("class", "rock1");
roc.setAttribute("id", "one");

let roc2 = document.createElement("div");
roc2.setAttribute("class", "rock2");
roc2.setAttribute("id", "two");

let roc3 = document.createElement("div");
roc3.setAttribute("class", "rock3");
roc3.setAttribute("id", "three");

let roc4 = document.createElement("div");
roc4.setAttribute("class", "rock4");
roc4.setAttribute("id", "one");

let roc5 = document.createElement("div");
roc5.setAttribute("class", "rock5");
roc5.setAttribute("id", "two");

let roc6 = document.createElement("div");
roc6.setAttribute("class", "rock6");
roc6.setAttribute("id", "three");

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
  // console.log("Current Rock : ", currentRock);
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

const moveHereStateHandlerSet = () => {
  moveHereState = false;
  // Check winner State
};

const startGame = () => {
  for (let i = 1; i <= 3; i++) {
    if (currentPlayer === player1) {
      console.log("player 1 turn");
      currentPlayer === player2;
      return;
    } else {
      console.log("player 1 turn");
      currentPlayer === player1;
    }
    round++;
  }
};

startGame();

//------------------------Event Listeners--------------//
