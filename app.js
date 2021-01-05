var rotatingSquare = (function () {
  // only export what's necessary
  'use strict';

  var rotatingSquare = document.getElementById('web-animation').animate(
    [
      {
        backgroundColor: '#000000',
        opacity: 1.0,
        transform: 'rotate(0deg) translate3D(0,0,0)',
        //easing: 'ease-out',
      },
      {
        backgroundColor: '#440000',
        opacity: 0.3,
      },
      {
        backgroundColor: '#000000',
        opacity: 1.0,
        transform: 'rotate(360deg) translate3D(0,0,0)',
        //easing: 'ease-in',
      },
    ],
    {
      duration: 500,
      iterations: 1000,
      easing: 'ease-in-out',
    }
  );
  return rotatingSquare;
})();
