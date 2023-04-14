const mouse = {
  x: undefined,
  y: undefined,
};

addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const calculator = document.querySelector(".calculator");

function rotate() {
  requestAnimationFrame(rotate);

  const calcCenter = {
    x:
      calculator.getBoundingClientRect().x +
      calculator.getBoundingClientRect().width / 2,

    y:
      calculator.getBoundingClientRect().y +
      calculator.getBoundingClientRect().height / 2,
  };

  const cursorDistance = Math.sqrt(
    (mouse.x - calcCenter.x) ** 2 + (mouse.y - calcCenter.y) ** 2
  );

  console.log(cursorDistance);
}
rotate();
