(function () {
  var ol = 0;
  var circleInterval;
  var isPlaying = false;
  const circle = document.getElementById('circle');
  var playingBG = circle.style.backgroundColor;
  var stoppedBG = 'dimgrey';
  var growthDirection = -1;
  var circleSize = (initialSize = circle.offsetWidth);

  circle.style.backgroundColor = stoppedBG;

  function circleAnimation(time) {
    ol++;
    if (circleSize >= initialSize) {
      circleSize = circleSize * 1 + growthDirection * 1;
    }
    circle.style.left = ol + 'px';
    circle.style.width = circle.style.height = circleSize + 'px';
    circleInterval = requestAnimationFrame(circleAnimation);
  }

  function mouseClicked() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      growthDirection *= -1; // only change when moving
      circle.style.backgroundColor = playingBG;
      circleInterval = requestAnimationFrame(circleAnimation);
    } else {
      circle.style.backgroundColor = stoppedBG;
      cancelAnimationFrame(circleInterval);
    }
  }

  circle.addEventListener('click', mouseClicked);
})();
