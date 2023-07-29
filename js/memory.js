//mgDirections
//mgHomeScreen
const mg_nodisplay = "nodisplay";
const mgStrings = {
  nodisplay: "nodisplay",
  mgDirections: "mgDirections",
  mgHomeScreen: "mgHomeScreen",
  mgBoard: "mgBoard",
  memoryHighlight: "memoryHighlight",
  cpuClick: "cpuClick",
  mgCount: "mgCount",
  mgHighScore: "mgHighScore",
};

const mgCPUOptions = [
  "mgTopLeft",
  "mgTopRight",
  "mgBottomLeft",
  "mgBottomRight",
];

let cpuMoves = [];
let clickIndex = 0;
let isCPUMove = true;

const setHighScore = (score) => {
  const highScore = localStorage.getItem(mgStrings.mgHighScore);
  if (score) {
    localStorage.setItem(mgStrings.mgHighScore, score);
  } else if (!highScore) {
    localStorage.setItem(mgStrings.mgHighScore, 0);
  }
  getById(mgStrings.mgHighScore).innerText = localStorage.getItem(
    mgStrings.mgHighScore
  );
};
setHighScore();

const incrementGuesses = () => {
  const mgCount = getById(mgStrings.mgCount);
  const currentNumber = parseInt(mgCount.innerText);
  mgCount.innerText = currentNumber + 1;
  const highScore = localStorage.getItem(mgStrings.mgHighScore);
  if (highScore < currentNumber + 1) {
    setHighScore(currentNumber + 1);
  }
};

const showMGDirections = () => {
  removeAttr(getById(mgStrings.mgDirections), mg_nodisplay);
  setAttr(getById(mgStrings.mgHomeScreen), mg_nodisplay);
};

const highlightCPUMove = (move) => {
  addClass(getById(move), mgStrings.cpuClick);
  setTimeout(() => {
    removeClass(getById(move), mgStrings.cpuClick);
  }, 500);
};

const cpuMove = () => {
  isCPUMove = true;

  const move = getRandomIndexFromArray(mgCPUOptions);
  cpuMoves.push(move);
  let delay = 0;

  cpuMoves.forEach((box) => {
    setTimeout(() => {
      highlightCPUMove(box);
    }, delay);
    delay += 1000;
  });

  setTimeout(() => {
    isCPUMove = false;
  }, delay - 1000);
};

const memoryGameStart = () => {
  setAttr(getById(mgStrings.mgDirections), mg_nodisplay);
  removeAttr(getById(mgStrings.mgBoard), mg_nodisplay);
  setTimeout(() => {
    cpuMove();
  }, 1000);
};

const addHighlight = (id) => {
  addClass(getById(id), mgStrings.memoryHighlight);
};
const removeHighlight = (id) => {
  removeClass(getById(id), mgStrings.memoryHighlight);
};

const gameOver = () => {
  setAttr(getById(mgStrings.mgBoard), mg_nodisplay);
  removeAttr(getById(mgStrings.mgHomeScreen), mg_nodisplay);
  clickIndex = 0;
  cpuMoves = [];
  isCPUMove = true;
  getById(mgStrings.mgCount).innerText = 0;
};
const makeMemoryGuess = (id) => {
  if (isCPUMove) return;
  if (id === cpuMoves[clickIndex]) {
    console.log("correct move");
    clickIndex++;
    if (clickIndex === cpuMoves.length) {
      clickIndex = 0;
      isCPUMove = true;
      setTimeout(() => {
        cpuMove();
      }, 1000);
      incrementGuesses();
    }
  } else {
    gameOver();
  }
};
