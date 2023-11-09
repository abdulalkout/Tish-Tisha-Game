// //---Variable Initiations
// let eventListenerActive = true;

// //------Queries
// const box1 = document.getElementById("1");
// const box2 = document.getElementById("2");
// const box3 = document.getElementById("3");
// const box4 = document.getElementById("4");
// const box5 = document.getElementById("5");
// const box6 = document.getElementById("6");
// const box7 = document.getElementById("7");
// const box8 = document.getElementById("8");
// const box9 = document.getElementById("9");

// //------Functions

// const rock1 = document.getElementById("Player1Rock1");
// const rock2 = document.getElementById("Player1Rock2");
// const rock3 = document.getElementById("Player1Rock3");
// const rockCheckArr = [
//   { name: "rock1", rock: document.getElementById("Player1Rock1") },
//   { name: "rock2", rock: document.getElementById("Player1Rock2") },
//   { name: "rock3", rock: document.getElementById("Player1Rock3") },
// ];

// function placeRock(rock) {
//   let rockArr = rockCheckArr.filter(function (searchRock) {
//     if (searchRock.name === rock) {
//       return searchRock;
//     }
//   });
//   document.addEventListener("keydown", (evt) => {
//     if (!eventListenerActive) {
//       return;
//     }
//     console.log(rockArr[0]);
//     if (rock === rockArr[0].name) {
//       switch (evt.key) {
//         case "1":
//           if (box1.getElementsByTagName("img").length) {
//             break;
//           } else {
//             box1.appendChild(rockArr[0].rock);
//           }
//           break;
//         case "2":
//           if (box2.getElementsByTagName("img").length) {
//             break;
//           } else {
//             box2.appendChild(rockArr[0].rock);
//           }
//           break;
//         case "3":
//           if (box3.getElementsByTagName("img").length) {
//             break;
//           } else {
//             box3.appendChild(rockArr[0].rock);
//           }
//           break;
//         case "4":
//           box4.appendChild(rockArr[0].rock);
//           break;
//         case "5":
//           box5.appendChild(rockArr[0].rock);
//           break;
//         case "6":
//           box6.appendChild(rockArr[0].rock);
//           break;
//         case "7":
//           box7.appendChild(rockArr[0].rock);
//           break;
//         case "8":
//           box8.appendChild(rockArr[0].rock);
//           break;
//         case "9":
//           box9.appendChild(rockArr[0].rock);
//           break;
//       }
//     }
//   });
// }

// // To disable the event listener
// function disableEventListener() {
//   eventListenerActive = false;
// }

// // To enable the event listener
// function enableEventListener() {
//   eventListenerActive = true;
// }
