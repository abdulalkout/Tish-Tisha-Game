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
const box4 = document.getElementById("b4");
const box5 = document.getElementById("b5");
const box6 = document.getElementById("b6");
const box7 = document.getElementById("c7");
const box8 = document.getElementById("c8");
const box9 = document.getElementById("c9");

const boxsArr = [
  document.getElementById("a1"),
  document.getElementById("a2"),
  document.getElementById("a3"),
  document.getElementById("b4"),
  document.getElementById("b5"),
  document.getElementById("b6"),
  document.getElementById("c7"),
  document.getElementById("c8"),
  document.getElementById("c9"),
];
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

// let one = document.getElementById("playerOne");
// let two = document.getElementById("playerOne");
// let three = document.getElementById("playerOne");
// const player1RockArr = [one, two, three];
const winTheRound = () => {
  if (
    box1.getElementsByTagName("div").length &&
    box2.getElementsByTagName("div").length > 0 &&
    box3.getElementsByTagName("div").length > 0
  ) {
    console.log(one);
    console.log(box1.getElementsByClassName(currentClass));
    console.log(`winnn ${player1}`);
  }
  if (
    box4.getElementsByTagName("div").length > 0 &&
    box5.getElementsByTagName("div").length > 0 &&
    box6.getElementsByTagName("div").length > 0
  ) {
    console.log(one);
    console.log(box1.getElementsByClassName(currentClass));
    console.log(`winnn ${player1}`);
  }
  if (
    box7.getElementsByTagName("div").length > 0 &&
    box8.getElementsByTagName("div").length > 0 &&
    box9.getElementsByTagName("div").length > 0
  ) {
    console.log(one);
    console.log(box1.getElementsByClassName(currentClass));
    console.log(`winnn ${player1}`);
  }
  //check Culomns
  if (
    box1.getElementsByTagName("div").length > 0 &&
    box3.getElementsByTagName("div").length > 0 &&
    box6.getElementsByTagName("div").length > 0
  ) {
    console.log(one);
    console.log(box1.getElementsByClassName(currentClass));
    console.log(`winnn ${player1}`);
  }
};

const moveHereStateHandlerSet = () => {
  moveHereState = false;
  if (currentPlayer === player1) {
    console.log("player 2 turn");
    currentClass = player1Class;
    currentPlayer = player2;
  } else {
    console.log("player 1 turn");
    currentClass = player2Class;
    currentPlayer = player1;
  }
  // Check winner State
  winTheRound();
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
