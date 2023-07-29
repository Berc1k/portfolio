const allFieldEntered = (cost, tip, numberOfPeople) => {
  const hasCostValue = cost.value > 0;
  const hasTipValue = tip.value > 0;
  const hasNumberPeopleValue = numberOfPeople.value > 0;
  return hasCostValue && hasTipValue && hasNumberPeopleValue;
};

const setSplitAmount = (cost, tip, numberOfPeople) => {
  const c = parseFloat(cost.value);
  const t = parseFloat(tip.value);
  const n = parseFloat(numberOfPeople.value);
  const total = (c * t + c) / n;

  const pay = getById("pay");
  pay.innerText = "$" + total.toFixed(2);
};

const calculateTip = () => {
  const cost = getById("cost");
  const tip = getById("tip");
  const numberOfPeople = getById("numberOfPeople");

  const hasAllFields = allFieldEntered(cost, tip, numberOfPeople);
  if (hasAllFields) {
    setSplitAmount(cost, tip, numberOfPeople);
  }
};
