const QuotesIds = {
  dailyMemoDay: "dailyMemoDay",
  dailyMemoDateNumber: "dailyMemoDateNumber",
  dailyMemoBottom: "dailyMemoBottom",
  dailyInspirationalQuote: "dailyInspirationalQuote",
};

const setQuoteDate = () => {
  const dailyMemoDay = getById(QuotesIds.dailyMemoDay);
  const dailyMemoDateNumber = getById(QuotesIds.dailyMemoDateNumber);

  const date = new Date().toDateString();
  const dateArray = date.split(" ");
  dailyMemoDay.innerText = `${dateArray[0]} ${dateArray[1]}`;
  dailyMemoDateNumber.innerText = `${dateArray[2]}`;
};

const getInspirationalQuote = () => {
  fetch("https://type.fit/api/quotes").then((data) => {
    data
      .json()
      .then((data) => {
        const randomQoute = getRandomIndexFromArray(data).text;
        getById(QuotesIds.dailyInspirationalQuote).innerText = randomQoute;
      })
      .catch((err) => console.log(err));
  });
};

getInspirationalQuote();
setQuoteDate();
