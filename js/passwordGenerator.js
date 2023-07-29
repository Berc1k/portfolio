// class name id="upperCaseLettersCheckbox"
//upperCaseLetters

const getAllFields = () => {
  return {
    upperCaseLetters: getById("upperCaseLetters"),
    lowerCaseLetters: getById("lowerCaseLetters"),
    passwordNumbers: getById("passwordNumbers"),
    specialCharacters: getById("specialCharacters"),
  };
};

const setTextOfGenerator = (allFields) => {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUWVXYZ";
  const lowerCase = upperCase.toLowerCase();
  const upperCaseLetters = "upperCaseLetters";
  const lowerCaseLetters = "lowerCaseLetters";
  const passwordNumbers = "passwordNumbers;";
  for (let key in allFields) {
    const element = allFields[key];
    if (key === upperCaseLetters) {
      element.innerText = upperCase;
    } else if (key === lowerCaseLetters) {
      element.innerText = lowerCase;
    } else if (key === passwordNumbers) {
      element.innerText = "1234567890";
    } else {
      element.innerText = "!@#$%^&*()-=[];',./_+{}:<>?";
    }
  }
};

const getCheckedBoxes = () => {
  const upperCaseLettersCheckbox = getById("upperCaseLettersCheckbox");
  const lowerCaseLettersCheckbox = getById("lowerCaseLettersCheckbox");
  const passwordNumbersCheckbox = getById("passwordNumbersCheckbox");
  const specialCharactersCheckbox = getById("specialCharactersCheckbox");

  const upperIsChecked = upperCaseLettersCheckbox.checked;
  const lowerIsChecked = lowerCaseLettersCheckbox.checked;
  const numsIsChecked = passwordNumbersCheckbox.checked;
  const charIsChecked = specialCharactersCheckbox.checked;

  const allCheckedValues = [];

  if (upperIsChecked) {
    allCheckedValues.push("upperCaseLetters");
  }
  if (lowerIsChecked) {
    allCheckedValues.push("lowerCaseLetters");
  }
  if (numsIsChecked) {
    allCheckedValues.push("passwordNumbers");
  }
  if (charIsChecked) {
    allCheckedValues.push("specialCharacters");
  }

  return allCheckedValues;
};

const setPasswordOptions = () => {
  const allFields = getAllFields();
  setTextOfGenerator(allFields);
};

const getRandomCharacters = (array, rc = "") => {
  let randomCharacters = rc;
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUWVXYZ";
  const lowerCase = upperCase.toLowerCase();
  array.forEach((data) => {
    if (data === "upperCaseLetters") {
      const char = getRandomCharacterFromString(upperCase);
      randomCharacters += char;
    } else if (data === "lowerCaseLetters") {
      const char = getRandomCharacterFromString(lowerCase);
      randomCharacters += char;
    } else if (data === "passwordNumbers") {
      const char = getRandomCharacterFromString("1234567890");
      randomCharacters += char;
    } else {
      const char = getRandomCharacterFromString("!@#$%^&*()-=[];',./_+{}:<>?");
      randomCharacters += char;
    }
  });
  if (randomCharacters.length < 8) {
    return getRandomCharacters(array, randomCharacters);
  } else {
    return randomCharacters;
  }
};

setPasswordOptions();
const generatePassword = () => {
  const AllBoxesChecked = getCheckedBoxes();
  if (AllBoxesChecked.length < 1) return;
  const password = getRandomCharacters(AllBoxesChecked);
  const passwordBtn = getById("passwordBtn");
  passwordBtn.innerText = password;
};

const copyPassword = () => {
  const passwordBtn = getById("passwordBtn").innerText;

  navigator.clipboard
    .writeText(passwordBtn.innerText)
    .then(() => {
      getById("passwordBtn").innerText = "Copied";
      setInterval(() => {
        getById("passwordBtn").innerText = passwordBtn;
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
    });
};
