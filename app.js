"use strict";
const notes = document.querySelectorAll(".note");

// TODO: Convert to function/loop;

// const createNotesVariables = (keys) => {
//   for(let key in keys) {
//     const [key] = document.querySelector(`.${key}`);
//   }
// }
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c2 = document.querySelector(".c2");
const playGameButton = document.querySelector(".start-game");
const gameStatus = document.querySelector(".game-status");
const xylophone = document.querySelector(".xylophone");
let currentLevel = 0;

const keySounds = { c, d, e, f, g, a, b, c2 };

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

// TODO: Convert hard coded keys to function
const keysForCurrentLevel = currentLevel => {
  const maxNum = Math.max(...patterns[currentLevel]);
  const numOfKeys = [];
  for (let i = 0; i <= maxNum; i++) {
    numOfKeys.push(i);
  }
  console.log(numOfKeys);
  return numOfKeys;
};

const addSounds = sounds => {
  for (let sound in sounds) {
    sounds[sound].onclick = () => {
      const mp3 = new Audio();
      mp3.src = `sounds/xylophone-${sound}.mp3`;

      mp3.play();
    };
  }
};
addSounds(keySounds);

// TODO: Convert for loop to filter on keys array
playGameButton.addEventListener("click", () => {
  if (!displayGameStatus) {
    restartGame();
  } else {
    const keys = keysForCurrentLevel(currentLevel);
    for (let i = 0; i < notes.length; i++) {
      if (i !== keys[i]) {
        notes[i].style.display = "none";
      } else {
        notes[i].style.display = "block";
      }
    }
    playGameButton.style.display = "none";
     gameStatus.style.display = "none";
  }

  
  listenToNoteClicks();
});

const listenToNoteClicks = () => {
  xylophone.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      playerPattern.push(parseInt(e.target.dataset["key"]));
      console.log(playerPattern)
    }
    if (playerPattern.length === 18) {
      if (playerPattern.every((element, i) => patterns[currentLevel][i] === element)) {
        return displayGameStatus(true);
      }
      return displayGameStatus(false);
    }
  });
};

const displayGameStatus = didUserWin => {
  if (didUserWin === false) {
    xylophone.style.display = "none";
    gameStatus.textContent = "Nice Try!";
    gameStatus.style.display = "block";
    playGameButton.style.display = "block";
    playGameButton.textContent = 'Play Again!'
    restartGame();
    
  } else {
    xylophone.style.display = "none";
    gameStatus.style.display = "block";
    playGameButton.style.display = "block";
    playGameButton.textContent = "Next Level";
    nextLevel();
    
  }
};

const nextLevel = () => {
  playerPattern.splice(0, playerPattern.length)
  if (currentLevel <= patterns.length - 1) {
    currentLevel++;
    xylophone.style.display = "flex";
    keysForCurrentLevel(currentLevel);
    gameStatus.style.disply = "none";
    console.log(playerPattern, 'player pattern')
  } else {
     xylophone.style.display = "none";
    gameStatus.style.display = "block";
    gameStatus.textContent = "Game Over!";
     playGameButton.style.display = "block";
    playGameButton.textContent = "Play Again";
    restartGame();
   
  }
};

const restartGame = () => {
  xylophone.style.display = "flex";
  const xsylophoneKeys = xylophone.children;
    for(let key of xsylophoneKeys) {
    key.style.display = 'block';
  }
  gameStatus.style.display = "none";
  playerPattern.splice(0, playerPattern.length);
  console.log(playerPattern);
  currentLevel = 0;
};
