var ol = 0;
var circleInterval;
var isPlaying = false;
var playingBG = document.getElementById('circle').style.backgroundColor;
var stoppedBG = 'dimgrey';

document.getElementById('circle').style.backgroundColor = stoppedBG;

function circleAnimation(time) {
  ol++;
  document.getElementById('circle').style.left = ol + 'px';
  circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked() {
  isPlaying = !isPlaying;
  console.log(this.type);
  if (isPlaying) {
    document.getElementById('circle').style.backgroundColor = playingBG;
    circleInterval = requestAnimationFrame(circleAnimation);
  } else {
    document.getElementById('circle').style.backgroundColor = stoppedBG;
    cancelAnimationFrame(circleInterval);
  }
}

document.getElementById('circle').addEventListener('click', mouseClicked);
