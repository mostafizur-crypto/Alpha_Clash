function hiddenElement(elementID) {
  const hideHome = document.getElementById(elementID);
  hideHome.classList.add("hidden");
}
function showElement(elementID) {
  const hideHome = document.getElementById(elementID);
  hideHome.classList.remove("hidden");
}
function addBackgroundColor(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("bg-orange-400");
}
function removeBGcolor(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("bg-orange-400");
}

// Score update function

function scoreUpdate(element) {
  const currentScoreElement = document.getElementById(element);
  const currentScoreText = currentScoreElement.innerText;
  const currentScore = parseInt(currentScoreText);
  return currentScore;
}
function setNewScore(elementID, Value) {
  const element = document.getElementById(elementID);
  element.innerText = Value;
}
function getElementText(elementID) {
  const element = document.getElementById(elementID);
  const text = element.innerText;
  return text;
}

// Life Update
function lifeUpdate(element) {}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //   get a random index
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}
