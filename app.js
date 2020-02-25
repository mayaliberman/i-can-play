"use strict";
const notes = document.querySelectorAll(".note");
// TODO: Convert to function/loop;
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c2 = document.querySelector(".c2");
const startGameButton = document.querySelector(".start-game");
const gameStatus = document.querySelector(".game-status");
const xylophone = document.querySelector(".xylophone");
let currentLevel = 0;

let score = 0;
let playerPattern = [];
const patterns = [
  [0, 1, 2, 0, 2, 1, 1, 0, 2, 1, 2, 0, 2, 0, 1, 2, 1, 0],
  [0, 1, 3, 0, 3, 1, 1, 0, 3, 1, 3, 0, 3, 0, 1, 3, 1, 0],
  [0, 1, 4, 0, 4, 1, 1, 0, 4, 1, 4, 0, 4, 0, 1, 4, 1, 0],
  [0, 1, 5, 0, 5, 1, 1, 0, 5, 1, 5, 0, 5, 0, 1, 5, 1, 0],
  [0, 1, 6, 0, 6, 1, 1, 0, 6, 1, 6, 0, 6, 0, 1, 6, 1, 0],
  [0, 1, 7, 0, 7, 1, 1, 0, 7, 1, 7, 0, 7, 0, 1, 7, 1, 0]
];
const levels = patterns.length;
const keySounds = { c, d, e, f, g, a, b, c2 };

// TODO: Convert hard coded keys to function
const keysForCurrentLevel = currentLevel => {
  const maxNum = Math.max(...patterns[currentLevel]);
  const numOfKeys = [];
  for (let i = 0; i <= maxNum; i++) {
    numOfKeys.push(i);
  }
  return numOfKeys;
};


function addSounds(sounds) {
 
  for (let sound in sounds) {
    sounds[sound].onclick = () => {
      const mp3 = new Audio();
      mp3.src = `sounds/xylophone-${sound}.mp3`;
      // console.log(mp3.src)
      mp3.play();
    };
  }
}
addSounds(keySounds);

// TODO: Convert for loop to filter on keys array
startGameButton.addEventListener("click", () => {
  const keys = keysForCurrentLevel(currentLevel);
  for (let i = 0; i < notes.length; i++) {
    if (i !== keys[i]) {
      notes[i].style.display = "none";
    }
  }
  startGameButton.style.display = "none";
  checkWin();
});

function checkWin() {
  xylophone.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      playerPattern.push(parseInt(e.target.dataset["key"]));

      if (playerPattern.length === 18) {
        for (let i = 0; i < playerPattern.length; i++) {
          if (playerPattern[i] !== patterns[currentLevel][i]) {
            xylophone.style.display = "none";
            gameStatus.textContent = "Nice Try!";
            gameStatus.style.display = "block";
            startGameButton.style.display = "block";
          } else {
            xylophone.style.display = "none";
            gameStatus.style.display = "block";
            startGameButton.style.display = "block";
            level++;
          }
        }
      }
    }
  });
}

function nextLevel() {
  level++;
  playerPattern = [];
}

function restartGame() {
  xylophone.style.display = "flex";
  gameStatus.style.display = "none";
  playerPattern = [];
}
