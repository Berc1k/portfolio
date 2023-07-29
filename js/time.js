const addOneZeroIfLessThanTen = (num) => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};
const getHr = () => {
  const time = new Date();
  let hr = time.getHours();
  if (hr > 12) {
    hr = hr - 12;
  }
  return hr;
};

const getMin = () => {
  const time = new Date();
  const min = time.getMinutes();
  return min;
};

const getSec = () => {
  const time = new Date();
  const sec = time.getSeconds();
  return sec;
};

const getTimeOfDay = () => {
  const time = new Date();
  const hr = time.getHours();
  let timeOfDay = "AM";
  if (hr > 11) {
    timeOfDay = "PM";
  }
  return timeOfDay;
};

const setHTML = (hour, minute, second, timeOfDay) => {
  const hr = getById("hr");
  const min = getById("min");
  const sec = getById("sec");
  const tfd = getById("dayTime");

  hr.innerText = addOneZeroIfLessThanTen(hour);
  min.innerText = addOneZeroIfLessThanTen(minute);
  sec.innerText = addOneZeroIfLessThanTen(second);
  tfd.innerText = getTimeOfDay();
};
const setDate = () => {
  const hr = getHr();
  const min = getMin();
  const sec = getSec();
  setHTML(hr, min, sec);
};
setInterval(() => {
  setDate();
}, 1000);
