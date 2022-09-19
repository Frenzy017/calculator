// Declaring variables

const screen = document.querySelector(".screen");
let buffer = "";
let operator = "";
let operatorCounter = Number(0);
let previousNumber;

// Adding eventListener to every button

function buttonHandler() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      handleInput(e.target.innerText);
    });
  });
}

buttonHandler();

// Input value number or not

function handleInput(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

// If input received a number

function handleNumber(value) {
  if (buffer === 0) {
    buffer = value;
  } else {
    buffer = buffer + value.toString();
  }
  rerender();
}

// Updating display

function rerender() {
  screen.innerText = buffer;
}

// If input value received any symbol

function handleSymbol(value) {
  switch (value) {
    case "÷":
    case "*":
    case "-":
    case "+":
      // Operate instantly if counter bigger than 1

      if (operatorCounter >= 1) {
        calculate();
      }

      operator = value;
      previousNumber = buffer;
      buffer = "";
      screen.innerText = previousNumber;
      operatorCounter += 1;
      break;
    case "CE":
      buffer = 0;
      previousNumber = 0;
      rerender();
      break;
    case "DEL":
      if (screen.innerText.length < 2) {
        buffer = 0;
      } else {
        buffer = buffer.slice(0, -1);
      }
      rerender();
      break;
    case "=":
      calculate();
  }
}

// Calculate values, updating input Value, resetting operator

function calculate() {
  if (operator === null) {
    return;
  } else {
    switch (operator) {
      case "+":
        screen.innerText = parseInt(previousNumber) + parseInt(buffer);
        break;
      case "-":
        screen.innerText = parseInt(previousNumber) - parseInt(buffer);
        break;
      case "*":
        screen.innerText = parseInt(previousNumber) * parseInt(buffer);
        break;
      case "÷":
        screen.innerText = parseInt(previousNumber) / parseInt(buffer);
        break;
    }

    buffer = screen.innerText;
    operator = null;
  }
}
