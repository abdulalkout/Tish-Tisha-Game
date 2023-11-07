// class Player {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//     this.rocks = 3;
//   }

//   decreaseRocks() {
//     this.rocks--;
//   }
// }

// class Computer {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//     this.rocks = 3;
//   }

//   PlaceTheRocks() {
//     let numberOfBox = Math.floor(Math.random() * 9) + 1;
//     console.log(numberOfBox);
//     const rockImg = document.querySelector(".compRockImg");
//     // const rockImgSelector = document.querySelector("")
//     // rockImgSelector.appendChild(rockImg);
//   }

//   decreaseRocks() {
//     this.rocks--;
//   }
// }

// const plyer1 = new Player("abdul");
// const plyer2 = new Player("Plyer2");
// const comp = new Computer("AI-Player");
// let rockNumber = 1;
// let round = 1;

// //------------------------------DOM---------------------------------//
// //--Queries --//
// const tishTishaBoxs = document.querySelectorAll(".tishTishaBox");
// const player1RocksArr = document.querySelectorAll(".plyer1Rocks");

// let boxs = Array.from(document.getElementsByClassName("tishTishaBox"));
// const player1Img = "X";
// const player2Img = "O";
// let currentPlayer = player1Img;

// let boxSpaces = Array(9).fill(null);

// //--Functions--//

// const startGame = () => {
//   boxSpaces
//     .filter((box) => box !== null) // Filter out null values
//     .forEach((box) => box.addEventListener("click", boxClicked));
// };

// function boxClicked(e) {
//   const id = e.target.id;

//   if (!boxSpaces[id]) {
//     boxSpaces[id] = currentPlayer;
//     e.target.textContext = currentPlayer;

//     currentPlayer = currentPlayer == player1Img ? player2Img : player1Img;
//   }
// }

// startGame();

// //--Event Listeners--//
// //--Event Listener for all Boxs--//
