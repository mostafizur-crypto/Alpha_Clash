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

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //   get a random index
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}
