(function () {
'use strict';

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


  const anchorTop = document.createElement(`a`);
  anchorTop.setAttribute(`id`,`#top`);
  const btnUp = document.createElement(`a`);
  btnUp.innerHTML = `^Вверх`.trim();
  btnUp.classList.add(`link`);
  btnUp.classList.add(`link--up`);
  btnUp.setAttribute(`href`,anchorTop.getAttribute(`id`));

  const parentElem = document.querySelector('.content');
  window.onscroll = function() {
    let pageY =
                window.pageYOffset
                || document.documentElement.scrollTop;
    let innerHeight = document.documentElement.clientHeight / 2;

    parentElem.insertBefore(btnUp, parentElem.firstElementChild);
    parentElem.insertBefore(anchorTop, parentElem.btnUp);

    btnUp.classList.toggle(`link--show`, pageY > innerHeight);
  }


  const isVisible = function (target) {
    // Все позиции элемента
    const targetPos = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      };
    // Получаем позиции окна
    const windowPos = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    return (targetPos.bottom > windowPos.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPos.top < windowPos.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPos.right > windowPos.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPos.left < windowPos.right);  // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код

  };

  const eqiupMenu = document.querySelector('.equipments');
  const switchEquipMenu =  function(menu, on = false) {
    menu.classList.toggle('equipments--closed', !on);
    menu.classList.toggle('equipments--opened', on);
  };

  if (eqiupMenu) {
    const eqiupToggle = document.querySelector('.equipments__toggle');
    eqiupMenu.classList.remove('equipments--nojs');

    eqiupToggle.addEventListener('click', function() {
      switchEquipMenu(eqiupMenu, eqiupMenu.classList.contains('equipments--closed'));
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const touchsurface = document.createElement('div');
      touchsurface.classList.add(`equipments__touchsurface`);
      touchsurface.classList.add(`link`);
      touchsurface.innerHTML = `Каталог`;
      eqiupMenu.insertBefore(touchsurface, eqiupMenu.firstElementChild);

      touchsurface.addEventListener('click', function() {
        switchEquipMenu(eqiupMenu, eqiupMenu.classList.contains('equipments--closed'));
      });

      touchsurface.classList.toggle(`link--show`, !isVisible(eqiupToggle));

      // Запускаем функцию при прокрутке страницы
      window.addEventListener('scroll', function() {
        touchsurface.classList.toggle(`link--show`, !isVisible(eqiupToggle));
      });

    }

  }






})();
