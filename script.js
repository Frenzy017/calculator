const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operand]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-reset]");
const textElement = document.querySelector("[data-text]");

let result;
let secondResult;

function calculator() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let value = (textElement.value = button.innerText);

      if (result === undefined) {
        result = value;
      } else {
        result += value;
      }
      textElement.value = result;
    });
  });
  clear();
  deleted();
  compute();
}
calculator();

function clear() {
  allClearButton.addEventListener("click", () => {
    textElement.value = "";
    result = "";
  });
}

function deleted() {
  deleteButton.addEventListener("click", () => {
    let deletedValue = (textElement.value = textElement.value.slice(0, -1));
    result = deletedValue;
  });
}

function compute(operand) {
  

  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let value = (textElement.value = button.innerText);

      result += value;
      operand = value;

      secondResult += value
      console.log(secondResult);
    });
  });
}
