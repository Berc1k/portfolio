const displayNone = "displayNone";

const medidtaationStrings = {
  meditationStart: "meditationStart",
  meditationDirections: "meditationDirections",
  breatheIn: "breatheIn",
  breatheOut: "breatheOut",
};

const resetMeditation = () => {
  getById(medidtaationStrings.breatheOut).classList.add(displayNone);
  getById(medidtaationStrings.meditationStart).classList.remove(displayNone);
};
const showBreatheIn = () => {
  getById(medidtaationStrings.breatheIn).classList.remove(displayNone);
  getById(medidtaationStrings.breatheOut).classList.add(displayNone);
};

const showBreatheOut = () => {
  getById(medidtaationStrings.breatheOut).classList.remove(displayNone);
  getById(medidtaationStrings.breatheIn).classList.add(displayNone);
};

const meditationStartBtn = () => {
  getById(medidtaationStrings.meditationStart).classList.add(displayNone);
  getById(medidtaationStrings.meditationDirections).classList.remove(
    displayNone
  );
};

const showArrows = () => {
  showBreatheIn();
  setTimeout(() => {
    showBreatheOut();
  }, 3000);
};
const startMeditation = () => {
  let delay = 0;
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      showArrows();
    }, delay);
    delay += 6000;
  }
  setTimeout(() => {
    resetMeditation();
  }, delay);
};

const meditationStart = () => {
  getById(medidtaationStrings.meditationDirections).classList.add(displayNone);
  startMeditation();
};
