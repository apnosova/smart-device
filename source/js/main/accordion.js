
'use strict';

(function () {

  var accordionItems = document.querySelectorAll('.accordion__item');

  var accordions = document.querySelectorAll('.accordion__button');

  [].forEach.call(accordionItems, function (item) {
    item.classList.remove('accordion__item--nojs');
  });

  [].forEach.call(accordions, function (elem) {
    elem.addEventListener('click', function () {
      elem.parentNode.classList.toggle('accordion__item--active');

      closePanel(elem);

    });
  });

  var closePanel = function (item) {

    var context = item.parentNode;

    [].forEach.call(accordionItems, function (elem) {
      if (elem !== context) {
        elem.classList.remove('accordion__item--active');
      }
    });
  };


})();
