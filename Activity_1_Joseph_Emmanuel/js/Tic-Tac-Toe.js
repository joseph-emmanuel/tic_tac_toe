let firstUserSelcted;
let secondUserSelected;
let totalClicks = 0;
let clickedButton;
let xArray = [];
let oArray = [];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
document.getElementById("gameBoard").style.visibility = "hidden";
document.getElementById("cross").onclick = function () {
  addUserChoice(1);
};
document.getElementById("circle").onclick = function () {
  addUserChoice(2);
};

const wrapper = document.getElementById("gameBoard");

wrapper.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  clicksDone(event.target);
});
function addUserChoice(choice) {
  if (choice == 1) {
    firstUserSelcted = "X";
    secondUserSelected = "O";
  } else if (choice == 2) {
    firstUserSelcted = "O";
    secondUserSelected = "X";
  }
  document.getElementById("cross").style.visibility = "hidden";
  document.getElementById("circle").style.visibility = "hidden";
  document.getElementById("mainHead").style.visibility = "hidden";
  document.getElementById("gameBoard").style.visibility = "visible";
}
function clicksDone(card) {
  //   console.log(card);
  let symbol = "";
  totalClicks = totalClicks + 1;
  //   console.log(totalClicks);
  card.innerText = totalClicks % 2 == 0 ? secondUserSelected : firstUserSelcted;
  if (card.innerText == "X") {
    xArray.push(parseInt(card.id));
  } else {
    oArray.push(parseInt(card.id));
  }
  //   card.style.backgroundColor = "gray";
  card.classList.add("disabled");

  case3Mathches();
}

function case3Mathches() {
  for (let index = 0; index < winningConditions.length; index++) {
    if (JSON.stringify(winningConditions[index]) == JSON.stringify(xArray)) {
      document.getElementById("mainHead").innerHTML =
        "User took 'X' won the game";
      document.getElementById("mainHead").style.visibility = "visible";
    } else if (
      JSON.stringify(winningConditions[index]) == JSON.stringify(oArray)
    ) {
      document.getElementById("mainHead").innerHTML =
        "User took 'O' won the game";
      document.getElementById("mainHead").style.visibility = "visible";
    }
  }
}
