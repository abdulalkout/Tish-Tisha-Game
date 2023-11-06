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
}

const plyer1 = new Player("abdul");
const comp = new Computer("AI-Player");
let rockNumber = 1;

//------------------------------DOM---------------------------------//
//--Queries --//
const tishTishaBoxs = document.querySelectorAll(".tishTishaBox");

//--Functions--//

//--Event Listeners--//

function selectRocksPlaces(rockNumber) {
  tishTishaBoxs.forEach((box) => {
    box.addEventListener("click", (evt) => {
      console.log(evt.target.id);
      let boxID = `${evt.target.id}`;
      let rockImgSelector = document.getElementById(`${boxID}`);
      // const rockImg = document.createElement("img");
      // rockImg.setAttribute("alt", "ROCK");
      const rockImg = document.querySelector(".rockImg");
      rockImgSelector.appendChild(rockImg);
    });
  });
}

selectRocksPlaces();
