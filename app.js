(function () {
  /** @type {HTMLCanvasElement} */
  var canvas = document.getElementById('animated-canvas');
  var context = canvas.getContext('2d');
  const { width: w, height: h } = context.canvas;
  const { PI: π } = Math;
  var anim = null;

  let numBalls = 1 + Math.floor(Math.random() * 4);
  let balls = Array(numBalls).fill({
    velocity: 50,
    x: 60,
    acceleration: null,
  });

  balls = balls.map((ball) => ({
    ...ball,
    acceleration: Math.random(),
  }));

  function drawCircle(x, y, radius) {
    console.log(y);
    context.fillStyle = 'crimson';
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * π);
    context.fill();
  }

  function animate(time) {
    context.clearRect(0, 0, w, h);
    balls.forEach((ball, idx) => {
      if (ball.x > w) {
        ball.x = -50;
      }
      ball.velocity += ball.acceleration;
      ball.x += ball.velocity;
      drawCircle(ball.x, (idx + 1) * 50 + 50, 25);
    });

    anim = requestAnimationFrame(animate);
  }
  anim = requestAnimationFrame(animate);
})();
