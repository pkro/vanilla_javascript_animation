# Notes

*See other branches for examples of different forms of animations*
## JS animation foundations

### requestAnimationFrame

- updates animation each frame, matching display refresh rate
- more efficient in the JS loop than settimeout

### cancelAnimationFrame

- seems optional, answer: *"To sum up, you SHOULD use cancelAnimationFrame to prevent side effects from a function auto-scheduled with requestAnimationFrame, and you CAN optionally use it to (micro-)optimize by avoiding its execution even if it has no side effects."* 
  *https://stackoverflow.com/questions/27108333/why-would-i-ever-need-to-cancelanimationframe*

### web animations api

- basically the same as doing it by css / keyframes; keyframes can be defined in array of keyframe objects

  var rotatingSquare = document.getElementById('web-animation');

      rotatingSquare.animate([
        {
          backgroundColor: '#000000',
        },
        {
          backgroundColor: '#440000',
        },
        {
          backgroundColor: '#000000',
        },
      ],
      {
        duration: 1000,
        iterations: 7
      });

- without timings the defined keyframes are spaced equally (with 3 keyframes for example at 0%, 50%, 100%)
- The Element interface's animate() method is a shortcut method which creates a new Animation, applies it to the element, then plays the animation. It returns the created Animation object instance (so be sure to assign it to a variable, as the element returned by getElementById (or similar) will not have the animation methods if animate wasn't called on it first)
  
# Sidenotes

- element.style.width seems to return an empty string when reading it, workaround was element.offsetWidth