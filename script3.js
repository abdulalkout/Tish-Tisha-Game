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
// const nextButton = document.querySelector("#nextPlayer");

// const box1 = document.getElementById("1");
// const box2 = document.getElementById("2");
// const box3 = document.getElementById("3");
// const box4 = document.getElementById("4");
// const box5 = document.getElementById("5");
// const box6 = document.getElementById("6");
// const box7 = document.getElementById("7");
// const box8 = document.getElementById("8");
// const box9 = document.getElementById("9");

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
if (enableSelectPlacesHandler == true) {
  function selectPlacesHandler(evt) {
    let box = evt.target;
    if (box.getElementsByTagName("img").length > 0) {
      console.log("there is a rock");
    } else {
      let boxID = `${evt.target.id}`;
      let rockImgSelector = document.getElementById(`${boxID}`);
      const rockImg = document.querySelector(currentplayerClass);
      rockImgSelector.appendChild(rockImg);
      box.removeEventListener("click", selectPlacesHandler);
      currentPlayer.decreaseRocks();
      console.log(currentPlayer.rocks);
      if (currentPlayer.rocks <= 0) {
        console.log("rocks finished");
      }
    }
  }

  function selectRocksPlaces(classImg, boxPlaceContent) {
    tishTishaBoxs.forEach((box) => {
      box.addEventListener("click", selectPlacesHandler);
    });
  }
}

//--Event Listeners--//
//--Event Listener for all Boxs--//

console.log(tishTishaBoxs);

// -- Round Loop--//
while (round < 4) {
  selectRocksPlaces(player1Class);
  selectRocksPlaces(player2Class);
  //   let classB = ".rockImg";
  //   playerPlaces(".rockImg");
  //   playerPlaces(".compRockImg");
  break;
  round++;
}
