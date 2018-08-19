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
    let innerHeight = document.documentElement.clientHeight;

    parentElem.insertBefore(btnUp, parentElem.firstElementChild);
    parentElem.insertBefore(anchorTop, parentElem.btnUp);

    btnUp.classList.toggle(`link--show`, pageY > innerHeight);
  }


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

    if (1) {
      const touchsurface = document.createElement('div');
      touchsurface.classList.add(`equipments__touchsurface`);
      eqiupMenu.insertBefore(touchsurface, eqiupMenu.firstElementChild);

      const notice = document.createElement('div');
      notice.classList.add(`notice`);
      notice.innerHTML = `<p>Смахните вправо, чтобы открыть каталог.</p><button class='link  notice__link-close'>OK</button>`;
      eqiupMenu.insertBefore(notice, eqiupMenu.firstElementChild);

      notice.querySelector(`.notice__link-close`).addEventListener(`click`, function(e) {
        e.preventDefault();
        notice.parentNode.removeChild(notice);
      })
      //
      window.addEventListener('load', function(){
        // const touchsurface = document.querySelector('body');
        let startX = 0;
        let startY = 0;
        let dist = 0;
        const threshold = 60; // минимальное расстояние для swipe
        const allowedTime = 200; // максимальное время прохождения установленного расстояния
        let elapsedTime = 0;
        let startTime = 0;

        function handleswipe(isRightSwipe){
            switchEquipMenu(eqiupMenu, isRightSwipe);
        }

        touchsurface.addEventListener('touchstart', function(e){
            touchsurface.innerHTML = ''
            var touchobj = e.changedTouches[0]
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // время контакта с поверхностью сенсора
            e.preventDefault()
        }, false)

        touchsurface.addEventListener('touchmove', function(e){
            e.preventDefault() // отключаем стандартную реакцию скроллинга
        }, false)

        touchsurface.addEventListener('touchend', function(e){
            var touchobj = e.changedTouches[0]
            dist = touchobj.pageX - startX // получаем пройденную дистанцию
            elapsedTime = new Date().getTime() - startTime // узнаем пройденное время
            // проверяем затраченное время,горизонтальное перемещение >= threshold, и вертикальное перемещение <= 100
            var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
            handleswipe(swiperightBol)
            e.preventDefault()
        }, false)

      }, false)

    }

  }






})();
