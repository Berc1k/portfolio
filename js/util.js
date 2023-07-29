const offscreen = "offscreen";

const toggleAttribute = (ele, attr, value = "") => {
  const hasAttribute = ele.hasAttribute(attr);
  if (hasAttribute) {
    ele.removeAttribute(attr);
  } else {
    ele.setAttribute(attr, value);
  }
};

const getById = (id) => {
  const ele = document.getElementById(id);
  return ele;
};

const getRandomCharacterFromString = (string) => {
  const index = Math.floor(Math.random() * string.length);
  return string[index];
};

const getRandomIndexFromArray = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};
const removeAttr = (ele, attr) => {
  ele.removeAttribute(attr);
};

const setAttr = (ele, attr, value = "") => {
  ele.setAttribute(attr, value);
};

const addClass = (ele, className) => {
  ele.classList.add(className);
};

const removeClass = (ele, className) => {
  ele.classList.remove(className);
};

const hideElementById = (id) => {
  getById(id).classList.add("displayNone");
};

const showElementById = (id) => {
  getById(id).classList.remove("displayNone");
};
