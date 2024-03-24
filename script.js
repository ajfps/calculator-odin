document.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector(".screen");
  const text = document.querySelector(".text");
  const subtext = document.querySelector(".subtext");

  const numberButtons = document.querySelectorAll(".numbers");
  const operatorButtons = document.querySelectorAll(".operators");

  let firstNumber;
  let operator;

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "+") {
        if (text.textContent) {
          if (!operator) {
            firstNumber = parseInt(text.textContent);
            subtext.textContent = firstNumber;
            text.textContent = "";
            operator = "+";
          } else {
            secondNumber = parseInt(text.textContent);
            firstNumber += secondNumber;
            subtext.textContent = firstNumber;
            text.textContent = "";
          }
        }
      } else if (button.textContent === "-") {
        if (text.textContent) {
          if (!operator) {
            firstNumber = parseInt(text.textContent);
            subtext.textContent = firstNumber;
            text.textContent = "";
            operator = "-";
          } else {
            secondNumber = parseInt(text.textContent);
            firstNumber -= secondNumber;
            subtext.textContent = firstNumber;
            text.textContent = "";
          }
        }
      } else if (button.textContent === "×") {
        if (text.textContent) {
          if (!operator) {
            firstNumber = parseInt(text.textContent);
            subtext.textContent = firstNumber;
            text.textContent = "";
            operator = "*";
          } else {
            secondNumber = parseInt(text.textContent);
            firstNumber *= secondNumber;
            subtext.textContent = firstNumber;
            text.textContent = "";
          }
        }
      } else {
        if (text.textContent) {
            if (!operator) {
              firstNumber = parseInt(text.textContent);
              subtext.textContent = firstNumber;
              text.textContent = "";
              operator = "/";
            } else {
              secondNumber = parseInt(text.textContent);
              firstNumber /= secondNumber;
              subtext.textContent = firstNumber;
              text.textContent = "";
            }
          }
      }
    });
  });

  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      buttonText = button.textContent;

      if (text.textContent.length < 6) {
        text.textContent += buttonText;
      }
    });
  });
});
