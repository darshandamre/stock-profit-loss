const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#btn-submit");
const output = document.querySelector("#output");

const calculateProfitOrLoss = (sellingPrice, costPrice) => {
  if (sellingPrice > costPrice) {
    let profit = sellingPrice - costPrice;
    let profitPercentage = ((profit / costPrice) * 100).toFixed(2);
    output.innerHTML = `Your profit is ${profit} and your investment has incresed by ${profitPercentage}%`;
  } else if (costPrice > sellingPrice) {
    let loss = costPrice - sellingPrice;
    let lossPercentage = ((loss / costPrice) * 100).toFixed(2);
    output.innerHTML = `Your loss is ${loss} and your investment has decresed by ${lossPercentage}%`;
  } else {
    output.innerHTML = "No profit, No loss";
  }
};

const submitHandler = () => {
  if (
    initialPrice.value === "" ||
    quantity.value === "" ||
    currentPrice.value === ""
  ) {
    return (output.innerHTML = "Please enter all values");
  }

  if (initialPrice.value < 0 || quantity.value < 0 || currentPrice.value < 0) {
    return (output.innerHTML = "Please enter positive values");
  }
  let costPrice = initialPrice.value * quantity.value;
  let sellingPrice = currentPrice.value * quantity.value;

  calculateProfitOrLoss(sellingPrice, costPrice);
};

submitBtn.addEventListener("click", submitHandler);
