// function play() {
//   const hideHome = document.getElementById("home_screen");
//   hideHome.classList.add("hidden");

//   const showPlayground = document.getElementById("play_ground");
//   showPlayground.classList.remove("hidden");
// }

function handleKeyboard(event) {
  const playerPresed = event.key;

  // escape
  if (playerPresed === "Escape") {
    gameOver();
  }

  // get expected to press
  const currentAlphabetElement = document.getElementById("current_alphabet");
  const current_alphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = current_alphabet.toLocaleLowerCase();

  // check matched or not
  if (playerPresed === expectedAlphabet) {
    // Update score
    const currentScore = scoreUpdate("current_score");
    const updateScore = currentScore + 1;
    setNewScore("current_score", updateScore);

    removeBGcolor(expectedAlphabet);
    continueGame();
  } else {
    // Update life
    const currentLife = scoreUpdate("current_life");
    const updateLife = currentLife - 1;
    setNewScore("current_life", updateLife);

    if (updateLife === 0) {
      gameOver();
    }
  }
}
// capture keyboard key press
document.addEventListener("keyup", handleKeyboard);

function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log(alphabet);
  const setAlphabet = document.getElementById("current_alphabet");
  setAlphabet.innerText = alphabet;
  addBackgroundColor(alphabet);
}

function play() {
  hiddenElement("home_screen");
  hiddenElement("final-score");
  showElement("play_ground");

  // reset score And Life
  setNewScore("current_life", 5);
  setNewScore("current_score", 0);

  continueGame();
}
function gameOver() {
  hiddenElement("play_ground");
  showElement("final-score");

  // set the final score
  const lastScore = scoreUpdate("current_score");
  setNewScore("last_score", lastScore);

  // clear color
  const currentAlphabet = getElementText("current_alphabet");
  removeBGcolor(currentAlphabet);
}
