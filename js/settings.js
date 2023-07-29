const resetScores = () => {
  if (getById("mgReset").checked) {
    localStorage.removeItem("mgHighScore");
  }

  if (getById("tttReset").checked) {
    localStorage.removeItem("TicTacToeScore");
  }

  if (getById("wamReset").checked) {
    localStorage.removeItem("whakAMoleScore");
  }
  window.location.reload();
};
