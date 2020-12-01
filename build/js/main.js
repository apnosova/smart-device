'use strict';

// Модальное окно //

var ESC_KEYCODE = 27;
var popup = document.querySelector('.modal');
var callbackButton = document.querySelector('.button--call-back');
var overlay = document.querySelector('.overlay');
var username = popup.querySelector('#name');


var openPopup = function () {
  popup.classList.add('modal--show');
  overlay.classList.remove('overlay--hidden');
  document.querySelector('body').classList.add('modal--open');
  username.focus();
};

var closePopup = function () {
  popup.classList.remove('modal--show');
  overlay.classList.add('overlay--hidden');
  document.querySelector('body').classList.remove('modal--open');
};

callbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

var closeButton = document.querySelector('.modal__close');

closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

window.addEventListener('keydown', function (evt) {
  if (evt.code === ESC_KEYCODE) {
    if (popup.classList.contains('modal--show')) {
      evt.preventDefault();
      closePopup();
    }
  }
});

overlay.addEventListener('click', function () {
  closePopup();
});

// Значения полей хранятся в LocalStorage //

var phone = popup.querySelector('#phone');
var question = popup.querySelector('#question');

var isStorageSupport = true;
var storage = {};

try {
  storage.name = localStorage.getItem('userName');
  storage.phone = localStorage.getItem('userPhone');
  storage.question = localStorage.getItem('userQuestion');
} catch (err) {
  isStorageSupport = false;
}

popup.addEventListener('submit', function (evt) {
  if (!name.value || !phone.value || !question.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('question', question.value);
    }
  }
});


// Аккордеон //

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


// Добавление маски для ввода телефона

/* eslint-disable */

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('[type=tel]'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        //'+7(___)___-__-__';
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 4);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
});
