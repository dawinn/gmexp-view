'use strict';

(function () {

const navMain = document.querySelector('.menu');
const navToggle = document.querySelector('.menu__toggle');

if (navMain) {
  navMain.classList.remove('menu--nojs');
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('menu--closed')) {
    navMain.classList.remove('menu--closed');
    navMain.classList.add('menu--opened');
  } else {
    navMain.classList.add('menu--closed');
    navMain.classList.remove('menu--opened');
  }
});


const eqiupMenu = document.querySelector('.equipments');
const eqiupToggle = document.querySelector('.equipments__toggle');

if (eqiupMenu) {
  eqiupMenu.classList.remove('equipments--nojs');

  eqiupMenu.addEventListener('click', function() {
    if (eqiupMenu.classList.contains('equipments--closed')) {
      eqiupMenu.classList.remove('equipments--closed');
      eqiupMenu.classList.add('equipments--opened');
    } else {
      eqiupMenu.classList.add('equipments--closed');
      eqiupMenu.classList.remove('equipments--opened');
    }
  });
}


})();
