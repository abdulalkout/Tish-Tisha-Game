class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.rocks = 3;
  }

  decreaseRocks() {
    this.rocks = this.rocks - 1;
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
    console.log(numberOfBox);
    const rockImg = document.querySelector(".compRockImg");
    // const rockImgSelector = document.querySelector("")
    // rockImgSelector.appendChild(rockImg);
  }

  decreaseRocks() {
    this.rocks = this.rocks - 1;
  }
}

const player1 = new Player("abdul");
const player2 = new Player("Player2");
const comp = new Computer("AI-Player");
const player1Class = ".rockImg";
const player1ClassWithNoDot = "rockImg";
const player2Class = ".compRockImg";
let currentplayerClass = player1Class;
let currentPlayer = player1;
const playerClassArr = [player1Class, player2Class];
const plyerClassesNamesArr = ["rockImg", "compRockImg"];
let rockNumber = 1;
let round = 1;
let enableSelectPlacesHandler = true;
//------------------------------DOM---------------------------------//
//--Queries --//
const tishTishaBoxs = document.querySelectorAll(".tishTishaBox");
const player1RocksArr = document.querySelectorAll(".plyer1Rocks");

const player1Button = document.querySelector("#placeTheRocks");

const plyer1RocksImgArr = document.querySelectorAll(".rockImg");
const plyer2RocksImgArr = document.querySelector(".plyer2Rocks");

// const plyer1RocksImgArr = [
//   document.querySelector("#Player1Rock1"),
//   document.querySelector("#Player1Rock2"),
//   document.querySelector("#Player1Rock3"),
// ];

let currentPlayerRockArr = plyer1RocksImgArr;

const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const box4 = document.getElementById("4");
const box5 = document.getElementById("5");
const box6 = document.getElementById("6");
const box7 = document.getElementById("7");
const box8 = document.getElementById("8");
const box9 = document.getElementById("9");

const boxsArr = [
  document.getElementById("1"),
  document.getElementById("2"),
  document.getElementById("3"),
  document.getElementById("4"),
  document.getElementById("5"),
  document.getElementById("6"),
  document.getElementById("7"),
  document.getElementById("8"),
  document.getElementById("9"),
];

//--Functions--//
function selectPlacesHandler(evt) {
  let box = evt.target;
  if (box.getElementsByTagName("img").length > 0) {
    console.log("there is a rock");
    return;
  } else {
    let boxID = `${evt.target.id}`;
    let rockImgSelector = document.getElementById(`${boxID}`);
    let rockImg = document.querySelector(currentplayerClass);
    rockImgSelector.appendChild(rockImg);
    // checkRocksShape(
    //   currentplayerClass,
    //   rockImgSelector,
    //   rockImg,
    //   currentPlayer
    // );
    box.removeEventListener("click", selectPlacesHandler);
    currentPlayer.decreaseRocks();
    // console.log(currentPlayer.rocks);
    if (currentPlayer.rocks <= 0) {
      console.log("rocks finished");
      currentPlayer = player2;
      currentplayerClass = player2Class;
    }
  }
  box.removeEventListener("click", selectPlacesHandler);
}

function selectRocksPlaces() {
  tishTishaBoxs.forEach((box) => {
    box.addEventListener("click", selectPlacesHandler);
  });
}

function disableFunction() {
  enableSelectPlacesHandler = false;
  console.log(enableSelectPlacesHandler);
}

function creatNewRock(currentplayerClass) {
  let newRock = document.createElement("img");
  newRock.setAttribute("src", "https://i.gifer.com/1Vho.gif");
  //   const newCurrentplayerClass = currentplayerClass.slice(1);
  newRock.setAttribute("class", "rockImg");
  let newRockParent = document.querySelector(".plyer1Rocks");
  newRockParent.appendChild(newRock);
  return newRock;
}

function checkRocksShape(
  currentplayerClass,
  rockImgSelector,
  rockImg,
  currentPlayer
) {
  playerClassArr.forEach((playerClass) => {
    if (currentplayerClass === playerClass) {
      // Check rows
      if (
        box1.getElementsByTagName("img").length &&
        box2.getElementsByTagName("img").length > 0 &&
        box3.getElementsByTagName("img").length > 0
      ) {
        console.log("cant do that");
        console.log(box1);
        rockImgSelector.removeChild(rockImg);
        currentPlayer.rocks++;
        creatNewRock(currentplayerClass);
      } else if (
        box4.getElementsByTagName("img").length > 0 &&
        box5.getElementsByTagName("img").length > 0 &&
        box6.getElementsByTagName("img").length > 0
      ) {
        console.log("cant do that");
        console.log("cant do that");
        rockImgSelector.removeChild(rockImg);
        currentPlayer.rocks++;
        creatNewRock();
      } else if (
        box7.getElementsByTagName("img").length > 0 &&
        box8.getElementsByTagName("img").length > 0 &&
        box9.getElementsByTagName("img").length > 0
      ) {
        console.log("cant do that");
      } else if (
        box1.getElementsByTagName("img").length > 0 &&
        box4.getElementsByTagName("img").length > 0 &&
        box7.getElementsByTagName("img").length > 0
      ) {
        console.log("cant do that");
      } else if (
        box2.getElementsByTagName("img").length > 0 &&
        box5.getElementsByTagName("img").length > 0 &&
        box8.getElementsByTagName("img").length > 0
      ) {
        console.log("cant do that");
      } else if (
        box3.getElementsByTagName("img").length > 0 &&
        box6.getElementsByTagName("img").length > 0 &&
        box9.getElementsByTagName("img").length > 0
      ) {
        console.log("cant do that");
      }
      //Change class for player 2
      // currentplayerClass = player2Class;
    } else {
      return;
    }
  });
}

function checkImptySpace(imgIdToMoveFrom, arrowDiriction) {
  if (arrowDiriction === "up") {
    if (
      imgIdToMoveFrom === 1 ||
      imgIdToMoveFrom === 2 ||
      imgIdToMoveFrom === 3
    ) {
      console.log("cant go up");
    }
  }
}

function moveRock(boxIdToMoveFrom, box, rockIdToMove) {
  let thisBox = document.getElementById(boxIdToMoveFrom);
  thisBox.textContent = boxIdToMoveFrom;
  const rock = document.getElementById(rockIdToMove);
  console.log(rockIdToMove);
  //   box.textContent = "";
  if (rock) {
    box.appendChild(rock);
  }
}

function imageMoveHandle(e) {
  boxIdToMoveFrom = e.target.parentNode.id;
  let rockIdToMove = e.target.id;
  console.log(rockIdToMove);
  e.stopPropagation();
  document.addEventListener("keydown", (evt) => {
    switch (evt.key) {
      case "1":
        moveRock(boxIdToMoveFrom, box1, rockIdToMove);
        break;
      case "2":
        moveRock(boxIdToMoveFrom, box2, rockIdToMove);
        break;
      case "3":
        moveRock(boxIdToMoveFrom, box3, rockIdToMove);
        break;
      case "4":
        moveRock(boxIdToMoveFrom, box4, rockIdToMove);
        break;
      case "5":
        moveRock(boxIdToMoveFrom, box5, rockIdToMove);
        break;
      case "6":
        moveRock(boxIdToMoveFrom, box6, rockIdToMove);
        break;
      case "7":
        moveRock(boxIdToMoveFrom, box7, rockIdToMove);
        break;
      case "8":
        moveRock(boxIdToMoveFrom, box8, rockIdToMove);
        break;
      case "9":
        moveRock(boxIdToMoveFrom, box9, rockIdToMove);
        break;
    }
  });
}

function plyerRocksImgListener() {
  currentPlayerRockArr.forEach((rock) => {
    rock.addEventListener("click", imageMoveHandle);

    // console.log(currentPlayerRockArr);
  });
  //   currentPlayerRockArr = plyer2RocksImgArr;
  //   console.log(currentPlayerRockArr);
}

const rock1 = document.getElementById("Player1Rock1");
const rock2 = document.getElementById("Player1Rock2");
const rock3 = document.getElementById("Player1Rock3");

function placeRock(rockIdToMove, rock) {
  document.addEventListener("keydown", (evt) => {
    switch (evt.key) {
      case "1":
        box1.appendChild(rock);
        break;
      case "2":
        moveRock(boxIdToMoveFrom, box2, rockIdToMove);
        break;
      case "3":
        moveRock(boxIdToMoveFrom, box3, rockIdToMove);
        break;
      case "4":
        moveRock(boxIdToMoveFrom, box4, rockIdToMove);
        break;
      case "5":
        moveRock(boxIdToMoveFrom, box5, rockIdToMove);
        break;
      case "6":
        moveRock(boxIdToMoveFrom, box6, rockIdToMove);
        break;
      case "7":
        moveRock(boxIdToMoveFrom, box7, rockIdToMove);
        break;
      case "8":
        moveRock(boxIdToMoveFrom, box8, rockIdToMove);
        break;
      case "9":
        moveRock(boxIdToMoveFrom, box9, rockIdToMove);
        break;
    }
  });
}
//--Event Listeners--//
//--Event Listener for all Boxs--//
console.log(tishTishaBoxs);

// selectRocksPlaces();
// plyerRocksImgListener();

// -- Round Loop--//
// while (round < 3) {
//   round++;
//   console.log(`round : ${round}`);
// }

//---Code Googled--//
