const audioEl = new Audio("Assets/Audio/heather-lyrics.mp3");
const playDiv = document.querySelector(".reldiv");
const polyElem = document.querySelector(".polyOne");

let isPlaying = false;

playDiv.addEventListener("click", async () => {
  if (!isPlaying) {
    isPlaying = true;
    await audioEl.play();
    polyElem.setAttribute("points", "0, 0, 100 0, 100, 100, 0 ,100");
  } else {
    isPlaying = false;
    audioEl.pause();
    polyElem.setAttribute("points", "100, 50, 0, 0, 0 100");
  }
});
