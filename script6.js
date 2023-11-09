// class Player {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//     this.rocks = 3;
//   }

//   decreaseRocks() {
//     this.rocks = this.rocks - 1;
//   }
// }

// class Computer {
//   constructor(name, score, rocks = 3) {
//     this.name = name;
//     this.score = score;
//     this.rocks = rocks;
//   }

//   PlaceTheRocks() {
//     let numberOfBox = Math.floor(Math.random() * 9) + 1;
//     console.log(numberOfBox);
//     const rockImg = document.querySelector(".compRockImg");
//     // const rockImgSelector = document.querySelector("")
//     // rockImgSelector.appendChild(rockImg);
//   }

//   decreaseRocks() {
//     this.rocks = this.rocks - 1;
//   }
// }

// const player1 = new Player("abdul");
// const player2 = new Player("Player2");
// const comp = new Computer("AI-Player");

// const player1Class = ".rockImg";
// const player2Class = ".compRockImg";

// const player1ClassWithNoDot = "rockImg";
// const player2ClassWithNoDot = "compRockImg";

// const playerClassArr = [player1Class, player2Class];
// const plyerClassesNamesArr = ["rockImg", "compRockImg"];
// let rockNumber = 1;
// let round = 1;
// let enableSelectPlacesHandler = true;
// let enableSelectMoveHandler = true;

// let currentplayerClass = player1Class;
// let currentPlayerClassWithNoDot = player1ClassWithNoDot;
// let currentPlayer = player1;

// //------------------------------DOM---------------------------------//
// //--Queries --//
// const tishTishaBoxs = document.querySelectorAll(".tishTishaBox");
// const player1RocksArr = document.querySelectorAll(".plyer1Rocks");

// const player1Button = document.querySelector("#placeTheRocks");

// const plyer1RocksImgArr = document.querySelectorAll(".rockImg");
// const plyer2RocksImgArr = document.querySelector(".plyer2Rocks");
// let currentPlayerRockArr = plyer1RocksImgArr;

// // const plyer1RocksImgArr = [
// //   document.querySelector("#Player1Rock1"),
// //   document.querySelector("#Player1Rock2"),
// //   document.querySelector("#Player1Rock3"),
// // ];
// const rock1 = document.getElementById("Player1Rock1");
// const rock2 = document.getElementById("Player1Rock2");
// const rock3 = document.getElementById("Player1Rock3");

// const box1 = document.getElementById("1");
// const box2 = document.getElementById("2");
// const box3 = document.getElementById("3");
// const box4 = document.getElementById("4");
// const box5 = document.getElementById("5");
// const box6 = document.getElementById("6");
// const box7 = document.getElementById("7");
// const box8 = document.getElementById("8");
// const box9 = document.getElementById("9");

// //--Functions--//
// function diableSelectPlacesHandler() {
//   enableSelectPlacesHandler = false;
// }

// function selectPlacesHandler(evt) {
//   if (!enableSelectPlacesHandler) {
//     return;
//   }
//   let box = evt.target;
//   if (box.getElementsByTagName("img").length > 0) {
//     console.log("there is a rock");
//     return;
//   } else {
//     let boxID = `${evt.target.id}`;
//     let rockImgSelector = document.getElementById(`${boxID}`);
//     let rockImg = document.querySelector(currentplayerClass);
//     rockImgSelector.appendChild(rockImg);
//     // checkRocksShape(
//     //   currentplayerClass,
//     //   rockImgSelector,
//     //   rockImg,
//     //   currentPlayer
//     // );
//     // box.removeEventListener("click", selectPlacesHandler);
//     currentPlayer.decreaseRocks();

//     if (currentPlayer.rocks <= 0) {
//       console.log("rocks finished");
//       currentPlayer = player2;
//       currentplayerClass = player2Class;
//     }
//   }
//   //   box.removeEventListener("click", selectPlacesHandler);
// }

// function selectRocksPlaces() {
//   tishTishaBoxs.forEach((box) => {
//     box.addEventListener("click", selectPlacesHandler);
//   });
// }

// function creatNewRock() {
//   let newRock = document.createElement("img");
//   newRock.setAttribute("src", "https://i.gifer.com/1Vho.gif");
//   //   const newCurrentplayerClass = currentplayerClass.slice(1);
//   newRock.setAttribute("class", "rockImg");
//   // let newRockParent = document.querySelector(".plyer1Rocks");
//   // newRockParent.appendChild(newRock);
//   return newRock;
// }

// function checkRocksShape(
//   currentplayerClass,
//   rockImgSelector,
//   rockImg,
//   currentPlayer
// ) {
//   playerClassArr.forEach((playerClass) => {
//     if (currentplayerClass === playerClass) {
//       // Check rows
//       if (
//         box1.getElementsByTagName("img").length &&
//         box2.getElementsByTagName("img").length > 0 &&
//         box3.getElementsByTagName("img").length > 0
//       ) {
//         console.log("cant do that");
//         console.log(box1);
//         rockImgSelector.removeChild(rockImg);
//         currentPlayer.rocks++;
//         creatNewRock(currentplayerClass);
//       } else if (
//         box4.getElementsByTagName("img").length > 0 &&
//         box5.getElementsByTagName("img").length > 0 &&
//         box6.getElementsByTagName("img").length > 0
//       ) {
//         console.log("cant do that");
//         console.log("cant do that");
//         rockImgSelector.removeChild(rockImg);
//         currentPlayer.rocks++;
//         creatNewRock();
//       } else if (
//         box7.getElementsByTagName("img").length > 0 &&
//         box8.getElementsByTagName("img").length > 0 &&
//         box9.getElementsByTagName("img").length > 0
//       ) {
//         console.log("cant do that");
//       } else if (
//         box1.getElementsByTagName("img").length > 0 &&
//         box4.getElementsByTagName("img").length > 0 &&
//         box7.getElementsByTagName("img").length > 0
//       ) {
//         console.log("cant do that");
//       } else if (
//         box2.getElementsByTagName("img").length > 0 &&
//         box5.getElementsByTagName("img").length > 0 &&
//         box8.getElementsByTagName("img").length > 0
//       ) {
//         console.log("cant do that");
//       } else if (
//         box3.getElementsByTagName("img").length > 0 &&
//         box6.getElementsByTagName("img").length > 0 &&
//         box9.getElementsByTagName("img").length > 0
//       ) {
//         console.log("cant do that");
//       }
//       //Change class for player 2
//       // currentplayerClass = player2Class;
//     } else {
//       return;
//     }
//   });
// }

// // function moveRock(boxIdToMoveFrom, box, rockIdToMove) {
// //   let thisBox = document.getElementById(boxIdToMoveFrom);
// //   thisBox.textContent = boxIdToMoveFrom;
// //   const rock = document.getElementById(rockIdToMove);
// //   console.log(rockIdToMove);
// //   //   box.textContent = "";
// //   if (rock) {
// //     box.appendChild(rock1);
// //   }
// // }

// function rockMoveHandle(e) {
//   if (!enableSelectMoveHandler) {
//     return;
//   }
//   boxIdToMoveFrom = e.target.parentNode.id;
//   console.log(boxIdToMoveFrom);
//   let rockIdToMove = e.target.id;
//   let rockToMove = e.target;
//   console.log(rockToMove);
//   e.stopPropagation();

//   document.addEventListener("keydown", (evt) => {
//     if (!enableSelectMoveHandler) {
//       return;
//     }
//     if (evt.key === "1") {
//       if (box1.getElementsByTagName("img").length) {
//         return;
//       } else {
//         enableSelectMoveHandler = false;
//         box1.appendChild(rockToMove);
//       }
//     } else if (evt.key === "2") {
//       if (box2.getElementsByTagName("img").length) {
//         return;
//       } else {
//         enableSelectMoveHandler = false;
//         box2.appendChild(rockToMove);
//       }
//     } else if (evt.key === "3") {
//       if (box3.getElementsByTagName("img").length) {
//         return;
//       } else {
//         enableSelectMoveHandler = false;
//         box3.appendChild(rockToMove);
//       }
//     } else if (evt.key === "4") {
//       if (box4.getElementsByTagName("img").length) {
//         return;
//       } else {
//         enableSelectMoveHandler = false;
//         box4.appendChild(rockToMove);
//       }
//     } else if (evt.key === "5") {
//       if (box5.getElementsByTagName("img").length) {
//         return;
//       } else {
//         enableSelectMoveHandler = false;
//         box5.appendChild(rockToMove);
//       }
//     } else if (evt.key === "6") {
//       if (box6.getElementsByTagName("img").length) {
//         return;
//       } else {
//         enableSelectMoveHandler = false;
//         box6.appendChild(rockToMove);
//       }
//     } else if (evt.key === "7") {
//       if (box7.getElementsByTagName("img").length) {
//         return;
//       } else {
//         enableSelectMoveHandler = false;
//         box7.appendChild(rockToMove);
//       }
//     } else if (evt.key === "8") {
//       if (box8.getElementsByTagName("img").length) {
//         return;
//       } else {
//         enableSelectMoveHandler = false;
//         box8.appendChild(rockToMove);
//       }
//     } else if (evt.key === "9") {
//       if (box9.getElementsByTagName("img").length) {
//         return;
//       } else {
//         enableSelectMoveHandler = false;
//         box9.appendChild(rockToMove);
//       }
//     }
//   });
// }
// // const nextPlayer = document.querySelector("#movePlayer");
// // console.log(nextPlayer);
// // nextPlayer.removeEventListener("click", moveRock1);
// const rocksArr = [rock1, rock2, rock3];
// function moveRock1() {
//   rocksArr.forEach((rock) => {
//     rock.addEventListener("click", rockMoveHandle);
//   });
//   //   rock1.addEventListener("click", rockMoveHandle);
// }
// // function moveRock2() {
// //   rock2.addEventListener("click", rockMoveHandle);
// // }
// // function moveRock3() {
// //   rock3.addEventListener("click", rockMoveHandle);
// // }

// function disableSelectMoveFunction() {
//   enableSelectMoveHandler = true;
// }

// // function moveRock(boxIdToMoveFrom, box, rockIdToMove) {
// //   let thisBox = document.getElementById(boxIdToMoveFrom);
// //   thisBox.textContent = boxIdToMoveFrom;
// //   let rock = creatNewRock();
// //   box.textContent = "";
// //   box.appendChild(rock);
// // }

// // function diableMoveHandler() {
// //   enableSelectMoveHandler = false;
// // }
// // function enableMoveHandler() {
// //   enableSelectMoveHandler = true;
// // }

// //--Event Listeners--//
// //--Event Listener for all Boxs--//
// console.log(tishTishaBoxs);
// selectRocksPlaces();

// // -- Round Loop--//
// // while (round < 3) {
// //   round++;
// //   console.log(`round : ${round}`);
// // }

// //---Code Googled--//

// // switch (evt.key) {
// //     case "1":
// //       if (box1.getElementsByTagName("img").length) {
// //         break;
// //       } else {
// //         enableSelectMoveHandler = false;
// //         box1.appendChild(rockToMove);
// //       }
// //       break;
// //     case "2":
// //       if (box2.getElementsByTagName("img").length) {
// //         break;
// //       } else {
// //         enableSelectMoveHandler = false;
// //         box2.appendChild(rockToMove);
// //       }
// //       break;
// //     case "3":
// //       if (box3.getElementsByTagName("img").length) {
// //         break;
// //       } else {
// //         enableSelectMoveHandler = false;
// //         box3.appendChild(rockToMove);
// //       }
// //       break;
// //     case "4":
// //       if (box4.getElementsByTagName("img").length) {
// //         break;
// //       } else {
// //         enableSelectMoveHandler = false;
// //         box4.appendChild(rockToMove);
// //       }
// //       break;
// //     case "5":
// //       if (box5.getElementsByTagName("img").length) {
// //         break;
// //       } else {
// //         enableSelectMoveHandler = false;
// //         box5.appendChild(rockToMove);
// //       }
// //       break;
// //     case "6":
// //       if (box6.getElementsByTagName("img").length) {
// //         break;
// //       } else {
// //         enableSelectMoveHandler = false;
// //         box6.appendChild(rockToMove);
// //       }
// //       break;
// //     case "7":
// //       if (box7.getElementsByTagName("img").length) {
// //         break;
// //       } else {
// //         enableSelectMoveHandler = false;
// //         box7.appendChild(rockToMove);
// //       }
// //       break;
// //     case "8":
// //       if (box8.getElementsByTagName("img").length) {
// //         break;
// //       } else {
// //         enableSelectMoveHandler = false;
// //         box8.appendChild(rockToMove);
// //       }
// //       break;
// //     case "9":
// //       if (box9.getElementsByTagName("img").length) {
// //         break;
// //       } else {
// //         enableSelectMoveHandler = false;
// //         box9.appendChild(rockToMove);
// //       }
// //       break;
// //   }
