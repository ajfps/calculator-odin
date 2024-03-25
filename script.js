document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector(".screen");
  const text = document.querySelector(".text");
  const subtext = document.querySelector(".subtext");

  const numberButtons = document.querySelectorAll(".numbers");
  const operatorButtons = document.querySelectorAll(".operators");

  const dotButton = document.querySelector(".dot");

  const clear = document.querySelector(".clear");
  const equals = document.querySelector(".equals");

  let firstNumber = null;
  let result = null;
  let operator = null;
  let secondNumber = null;

  let isEvaluated = false; 

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (isEvaluated) {
        text.textContent = "";
        subtext.textContent = "";
        firstNumber = null;
        result = null;
        operator = null;
        secondNumber = null;
        isEvaluated = false;
      }

      if (text.textContent.length < 6) {
        if (!operator) {
          text.textContent += buttonText;
          firstNumber = parseFloat(text.textContent);
        } else {
          text.textContent += buttonText;
          secondNumber = parseFloat(text.textContent.slice(1));
          result = calculateResults(firstNumber, secondNumber, operator);
          subtext.textContent = result;
        }
      }
    });
  });

  dotButton.addEventListener("click", () => {
    const buttonText = dotButton.textContent;

    if (!text.textContent.includes(".")) {
      text.textContent += buttonText;
    }
  });

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const newOperator = button.textContent;

      if (operator !== null && isEvaluated) {
        firstNumber = result;
        isEvaluated = false;
      }

      operator = newOperator;
      subtext.textContent = firstNumber;
      text.textContent = operator;
    });
  });

  function calculateResults(firstNum, secondNum, operator) {
    let calculatedResult;

    if (operator === "+") {
      calculatedResult = firstNum + secondNum;
    } else if (operator === "-") {
      calculatedResult = firstNum - secondNum;
    } else if (operator === "×") {
      calculatedResult = firstNum * secondNum;
    } else if (operator === "/") {
      calculatedResult = firstNum / secondNum;
    }
    result = calculatedResult;
    return calculatedResult;
  }

  clear.addEventListener("click", () => {
    text.textContent = "";
    subtext.textContent = "";
    result = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    isEvaluated = false; 
  });

  equals.addEventListener("click", () => {
    if (firstNumber !== null && operator !== null && secondNumber !== null) {
      result = calculateResults(firstNumber, secondNumber, operator);
      text.textContent = Math.round(result * 100) / 100;
      subtext.textContent = "";

      isEvaluated = true;
    }
  });
});
