const topScreen = document.querySelector(".screen__top");
const bottomScreen = document.querySelector(".screen__bottom");

function updateScreen(subject, txt) {
  if (subject.innerText.length === 9) return;

  subject.innerText += txt;
}

function clear() {
  topScreen.innerText = "";
  bottomScreen.innerText = "";
}

function operation(txt) {
  if (topScreen.innerText !== "") {
    equals();
  }

  topScreen.innerText = bottomScreen.innerText + " " + txt;
  bottomScreen.innerText = "";
}

function specialOperation(operation) {
  switch (operation) {
    case "+/-":
      bottomScreen.innerText = parseFloat(bottomScreen.innerText) * -1;
      break;
    case "%":
      bottomScreen.innerText = parseFloat(bottomScreen.innerText) / 100;
      break;
  }
}

function equals() {
  const operation = topScreen.innerText.slice(topScreen.innerText.length - 1);
  const firstValue = parseFloat(topScreen.innerText);
  const secondValue = parseFloat(bottomScreen.innerText);

  clear();
  switch (operation) {
    case "+":
      updateScreen(bottomScreen, firstValue + secondValue);
      break;
    case "-":
      updateScreen(bottomScreen, firstValue - secondValue);
      break;
    case "x":
      updateScreen(bottomScreen, firstValue * secondValue);
      break;
    case "÷":
      updateScreen(bottomScreen, firstValue / secondValue);
      break;
  }
}

document.querySelector(".clear").addEventListener("click", clear);
document.querySelector(".btn-equals").addEventListener("click", equals);
document.querySelectorAll(".btn-special").forEach((btn) => {
  btn.addEventListener("click", () => specialOperation(btn.innerText));
});
document.querySelectorAll(".btn-operation").forEach((btn) => {
  btn.addEventListener("click", () => operation(btn.innerText));
});
document.querySelectorAll(".btn-number").forEach((num) => {
  num.addEventListener("click", () => {
    updateScreen(bottomScreen, num.innerText);
  });
});
