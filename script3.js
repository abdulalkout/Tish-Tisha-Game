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
const player2Class = ".compRockImg";
let currentplayerClass = player1Class;
let currentPlayer = player1;
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
  } else {
    let boxID = `${evt.target.id}`;
    let rockImgSelector = document.getElementById(`${boxID}`);
    const rockImg = document.querySelector(currentplayerClass);
    rockImgSelector.appendChild(rockImg);
    checkRocksShape(
      currentplayerClass,
      rockImgSelector,
      rockImg,
      currentPlayer
    );
    box.removeEventListener("click", selectPlacesHandler);
    currentPlayer.decreaseRocks();
    console.log(currentPlayer.rocks);
    if (currentPlayer.rocks <= 0) {
      console.log("rocks finished");
      currentPlayer = player2;
      currentplayerClass = player2Class;
    }
  }
}

function selectRocksPlaces(classImg, boxPlaceContent) {
  tishTishaBoxs.forEach((box) => {
    box.addEventListener("click", selectPlacesHandler);
  });
}

function disableFunction() {
  enableSelectPlacesHandler = false;
  console.log(enableSelectPlacesHandler);
}

function creatNewRock() {
  let newRock = document.createElement("img");
  newRock.setAttribute("src", "https://i.gifer.com/1Vho.gif");
  newRock.setAttribute("class", "rockImg");
  let newRockParent = document.querySelector(".plyer1Rocks");
  newRockParent.appendChild(newRock);
}

function checkRocksShape(
  currentplayerClass,
  rockImgSelector,
  rockImg,
  currentPlayer
) {
  if (currentplayerClass === ".rockImg") {
    // Check rows
    if (
      box1.getElementsByTagName("img").length > 0 &&
      box2.getElementsByTagName("img").length > 0 &&
      box3.getElementsByTagName("img").length > 0
    ) {
      console.log("cant do that");
      rockImgSelector.removeChild(rockImg);
      currentPlayer.rocks++;
      creatNewRock();
    }
    if (
      box4.getElementsByTagName("img").length > 0 &&
      box5.getElementsByTagName("img").length > 0 &&
      box6.getElementsByTagName("img").length > 0
    ) {
      console.log("cant do that");
    }
    if (
      box7.getElementsByTagName("img").length > 0 &&
      box8.getElementsByTagName("img").length > 0 &&
      box9.getElementsByTagName("img").length > 0
    ) {
      console.log("cant do that");
    }
    //check Culomns
    if (
      box1.getElementsByTagName("img").length > 0 &&
      box3.getElementsByTagName("img").length > 0 &&
      box6.getElementsByTagName("img").length > 0
    ) {
      console.log("cant do that");
    }
  } else {
    return true;
  }
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

function imageMoveHandle(e) {
  imgIdToMoveFrom = e.target.parentNode.id;
  console.log(imgIdToMoveFrom);
  e.stopPropagation();
  console.log("imag");
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "5") {
      // Handle the up arrow key
      console.log("Up arrow key pressed");
      let thisBox = document.getElementById(imgIdToMoveFrom);
      thisBox.textContent = "5";
      creatNewRock();
      //   checkImptySpace(imgIdToMoveFrom, "up");
    } else if (evt.key === "ArrowDown") {
      // Handle the down arrow key
      console.log("Down arrow key pressed");
    } else if (evt.key === "ArrowLeft") {
      // Handle the left arrow key
      console.log("Left arrow key pressed");
    } else if (evt.key === "ArrowRight") {
      // Handle the right arrow key
      console.log("Right arrow key pressed");
    }
  });
}

function plyerRocksImgListener() {
  plyer1RocksImgArr.forEach((rock) => {
    rock.addEventListener("click", imageMoveHandle);
  });
}
//--Event Listeners--//
//--Event Listener for all Boxs--//

console.log(tishTishaBoxs);

// -- Round Loop--//
while (round < 3) {
  selectRocksPlaces(player1Class);
  plyerRocksImgListener();
  round++;
  console.log(`round : ${round}`);
}

//---Code Googled--//
// for arrow keys --//
// https://plainenglish.io/blog/how-to-detect-arrow-key-presses-in-javascript-2c38192de0e8
