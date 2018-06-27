

var navMain = document.querySelector('.menu');
var navToggle = document.querySelector('.menu__toggle');

navMain.classList.remove('menu--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('menu--closed')) {
    navMain.classList.remove('menu--closed');
    navMain.classList.add('menu--opened');
  } else {
    navMain.classList.add('menu--closed');
    navMain.classList.remove('menu--opened');
  }
});

