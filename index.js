const totalInput = document.getElementById("inputTotal");
const numOfPeople = document.getElementById("numberPerson");

const calulateButton = document.getElementById("button");
const calulateTip5 = document.getElementById("button5");
const calulateTip10 = document.getElementById("button10");
const calulateTip15 = document.getElementById("button15");
const customTipInput = document.getElementById("customInput");

const amountPerPerson = document.getElementById("result");

calulateButton.addEventListener("click", calculateSplitCustomTip);
calulateTip5.addEventListener("click", () => calculateSplitWithTip(0.05));
calulateTip10.addEventListener("click", () => calculateSplitWithTip(0.1));
calulateTip15.addEventListener("click", () => calculateSplitWithTip(0.15));

function calculateSplitCustomTip() {
  if (customTipInput.value == "") {
    const totalPerPerson = totalInput.value / numOfPeople.value;
    console.log(totalPerPerson);
    amountPerPerson.innerHTML = totalPerPerson;
  } else {
    const customTipPercent = customTipInput.value / 100;
    console.log(customTipPercent);
    const customTipAmount = totalInput.value * customTipPercent;
    console.log(customTipAmount);
    const total = parseInt(totalInput.value) + customTipAmount;
    console.log("total", total);
    const totalPerPerson = total / numOfPeople.value;
    console.log("totalPerPerson", totalPerPerson);
    amountPerPerson.innerText = totalPerPerson;
  }
}

function calculateSplitWithTip(percent) {
  const percentAmount = totalInput.value * percent;
  console.log("percent", percentAmount);
  console.log("percentCal", typeof percentAmount);

  console.log("inputTotal", typeof totalInput);
  const total = parseInt(totalInput.value) + percentAmount;
  console.log("total", total);
  const totalPerPerson = total / numOfPeople.value;
  console.log("totalPerPerson", totalPerPerson);
  amountPerPerson.innerText = totalPerPerson;
}
