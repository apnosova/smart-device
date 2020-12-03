'use strict';

// Аккордеон //

(function () {

  var accordionItems = document.querySelectorAll('.accordion__item');

  var accordions = document.querySelectorAll('.accordion__button');

  accordionItems.forEach(function (elem) {
    elem.classList.remove('accordion__item--nojs');
  });

  accordions.forEach(function (elem) {
    elem.addEventListener('click', function () {
      elem.parentNode.classList.toggle('accordion__item--active');
    });
  });

})();
