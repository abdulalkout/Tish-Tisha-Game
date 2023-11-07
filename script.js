class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.rocks = 3;
  }
}

class Computer {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.rocks = 3;
  }

  PlaceTheRocks() {
    let numberOfBox = Math.floor(Math.random() * 9) + 1;
    console.log(numberOfBox);
    const rockImg = document.querySelector(".compRockImg");
    // const rockImgSelector = document.querySelector("")
    // rockImgSelector.appendChild(rockImg);
  }
}

const plyer1 = new Player("abdul");
const plyer2 = new Player("Plyer2");
const comp = new Computer("AI-Player");
let rockNumber = 1;
let round = 1;
let BoxId = 0;
//------------------------------DOM---------------------------------//
//--Queries --//
const tishTishaBoxs = document.querySelectorAll(".tishTishaBox");
const player1RocksArr = document.querySelectorAll(".plyer1Rocks");

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
// function selectRocksPlaces(classImg, boxPlaceContent) {
//   tishTishaBoxs.forEach((box) => {
//     console.log(box);
//     if (box.getElementsByTagName("img").length > 0) {
//       console.log("there is a rock");
//       box.removeEventListener();
//     } else {
//       box.addEventListener("click", (evt) => {
//         let boxID = `${evt.target.id}`;
//         let rockImgSelector = document.getElementById(`${boxID}`);
//         const rockImg = document.querySelector(classImg);
//         rockImgSelector.appendChild(rockImg);
//       });
//     }
//   });
// }

function selectRockBox(box, imgClassName, boxNumber) {
  box.addEventListener("click", (e) => {
    let rockImg = document.querySelector(imgClassName);
    if (tishTishaBoxs[boxNumber].getElementsByTagName("img").length > 0) {
      console.log("there is an img");
      return;
    }
    tishTishaBoxs[boxNumber].appendChild(rockImg);
  });
}

function playerPlaces(imgClassName) {
  selectRockBox(boxsArr[0], imgClassName, 0);
  selectRockBox(boxsArr[1], imgClassName, 1);
  selectRockBox(boxsArr[2], imgClassName, 2);
  selectRockBox(boxsArr[3], imgClassName, 3);
  selectRockBox(boxsArr[4], imgClassName, 4);
  selectRockBox(boxsArr[5], imgClassName, 5);
  selectRockBox(boxsArr[6], imgClassName, 6);
  selectRockBox(boxsArr[7], imgClassName, 7);
  selectRockBox(boxsArr[8], imgClassName, 8);
}
//--Event Listeners--//
//--Event Listener for all Boxs--//

console.log(tishTishaBoxs);

// for (let i = 0; i <= boxsArr.length; i++) {
//   selectRockBox(boxsArr[i], ".rockImg", i);
// }

// -- Round Loop--//
while (round < 4) {
  playerPlaces(".rockImg");
  //   selectRocksPlaces(".rockImg");
  //   selectRocksPlaces(".compRockImg");
  break;
  round++;
}
