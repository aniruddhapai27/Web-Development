let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let result = document.querySelector(".result");
let msg = document.querySelector(".msg");
let turnX = true; //PlayerX, PlayerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

let draw = () => {
  let flag = 0;
  for (box of boxes) {
    if (box.innerText === "") {
      flag = 1;
    }
  }
  if (flag === 0) {
    result.classList.remove("hide_res");
    msg.innerText = "Draw game";
  }
};

let showWinner = (winner) => {
  result.classList.remove("hide_res");
  msg.innerText = `Winner is ${winner}`;
  disableBoxes();
};

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      } else {
        draw();
      }
    }
  }
};

let resetGame = () => {
  turnX = true;
  enableBoxes();
  result.classList.add("hide_res");
};

resetBtn.addEventListener("click", resetGame);
