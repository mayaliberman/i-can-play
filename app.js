'use strict';
const c = document.querySelector('.c');
const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const highC = document.querySelector(".high-c");

const patterns = [
  [0, 1, 2, 0, 2, 1, 1, 0, 2, 1, 2, 0, 2, 0, 1, 2, 1, 0],
  [0, 1, 3, 0, 3, 1, 1, 0, 3, 1, 3, 0, 3, 0, 1, 3, 1, 0],
  [0, 1, 4, 0, 4, 1, 1, 0, 4, 1, 4, 0, 4, 0, 1, 4, 1, 0],
  [0, 1, 5, 0, 5, 1, 1, 0, 5, 1, 5, 0, 5, 0, 1, 5, 1, 0],
  [0, 1, 6, 0, 6, 1, 1, 0, 6, 1, 6, 0, 6, 0, 1, 6, 1, 0],
  [0, 1, 7, 0, 7, 1, 1, 0, 7, 1, 7, 0, 7, 0, 1, 7, 1, 0]
  
];

c.onclick = () => {
   const sound = new Audio(); // create the audio
    sound.src = "sounds/xylophone-c.mp3";  
    sound.play();
}
d.onclick = () => {
  const sound = new Audio(); // create the audio
  sound.src = "sounds/xylophone-d1.mp3";
  sound.play();
};
e.onclick = () => {
  const sound = new Audio(); // create the audio
  sound.src = "sounds/xylophone-e1.mp3";
  sound.play();
};
f.onclick = () => {
  const sound = new Audio(); // create the audio
  sound.src = "sounds/xylophone-f.mp3";
  sound.play();
};
g.onclick = () => {
  const sound = new Audio(); // create the audio
  sound.src = "sounds/xylophone-g.mp3";
  sound.play();
};
a.onclick = () => {
  const sound = new Audio(); // create the audio
  sound.src = "sounds/xylophone-a.mp3";
  sound.play();
};
b.onclick = () => {
  const sound = new Audio(); // create the audio
  sound.src = "sounds/xylophone-b.mp3";
  sound.play();
};
highC.onclick = () => {
  const sound = new Audio(); // create the audio
  sound.src = "sounds/xylophone-c2.mp3";
  sound.play();
};