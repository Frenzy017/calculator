


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operand]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-reset]");
const textElement = document.querySelector("[data-text]");

let inputValue; // textShown
let firstNum;
let secondNum;
let operator = "";
let accumulation = 0;

clear();
deleted();

function operate(operator, firstNum, secondNum) {
  if (operator === "+") {
    accumulation = Number(firstNum + secondNum);
  } else if (operator === "-") {
    accumulation = Number(firstNum - secondNum);
  } else if (operator === "÷") {
    accumulation = Number(firstNum / secondNum);
  } else if (operator === "&times") {
    accumulation = Number(firstNum * secondNum);
  }
}

function clear() {
  allClearButton.addEventListener("click", () => {
    textElement.value = "";
    inputValue = "";
  });
}

function deleted() {
  deleteButton.addEventListener("click", () => {
    let deletedValue = (textElement.value = textElement.value.slice(0, -1));
    inputValue = deletedValue;
  });
}

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btnValue = (textElement.value = button.innerText);

    if (inputValue === undefined) {
      inputValue = btnValue;
    } else {
      inputValue += btnValue;
    }
    textElement.value = inputValue;
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {

    if()
    
  });
});
