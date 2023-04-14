// Initialize Mouse object. Current x and y props will be overwritten to the cursor's x and y coordinates
const mouse = {
  x: undefined,
  y: undefined,
};

// Sets mouse x and y to cursor's x and y
addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Grab the calculator element from the HTML
const calculator = document.querySelector(".calculator");

// A function which is constantly being called, which rotates the calculator based on the cursor's position
function rotate() {
  requestAnimationFrame(rotate);

  const calculatorRect = calculator.getBoundingClientRect();

  // Gets the x and y distance from the calculator's center to the cursor
  const cursorDistance = {
    x: calculatorRect.x + calculatorRect.width / 2 - mouse.x,
    y: calculatorRect.y + calculatorRect.height / 2 - mouse.y,
  };

  // Sets a rotation value for the calculator based on the cursor's position. (the multiplier "15" is just a magic number that makes the rotation look clean)
  calculator.style.transform = `rotateY(${cursorDistance.x / -15}deg) rotateX(${
    cursorDistance.y / 15
  }deg)`;
}
rotate();
