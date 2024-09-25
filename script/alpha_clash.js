// function play() {
//   const hideHome = document.getElementById("home_screen");
//   hideHome.classList.add("hidden");

//   const showPlayground = document.getElementById("play_ground");
//   showPlayground.classList.remove("hidden");
// }

function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log(alphabet);
  const setAlphabet = document.getElementById("current_alphabet");
  setAlphabet.innerText = alphabet;
  addBackgroundColor(alphabet);
}

function play() {
  hiddenElement("home_screen");
  showElement("play_ground");
  continueGame();
}
