var ol = 20;
var circleInterval = setInterval(circleAnimation, 50);

function circleAnimation() {
  ol++;
  //ol += ol += 0.2; // same
  document.getElementById('circle').style.left = ol + 'px';
  if (ol > 8000 / 50) {
    clearInterval(circleInterval);
    document.getElementById('circle').style.backgroundColor = 'dimgrey';
  }
}
