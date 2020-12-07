
'use strict';

(function () {

  var popup = document.querySelector('.modal');
  var callbackButton = document.querySelector('.button--call-back');
  var overlay = document.querySelector('.overlay');
  var username = popup.querySelector('#name');
  var closeButton = document.querySelector('.modal__close');


  var openPopup = function () {
    popup.classList.add('modal--show');
    overlay.classList.remove('overlay--hidden');
    document.querySelector('body').classList.add('modal--open');
    username.focus();
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    popup.classList.remove('modal--show');
    overlay.classList.add('overlay--hidden');
    document.querySelector('body').classList.remove('modal--open');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  callbackButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
  });

  closeButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  overlay.addEventListener('click', function () {
    closePopup();
  });

  // Значения полей хранятся в LocalStorage //

  var phone = popup.querySelector('#phone');
  var question = popup.querySelector('#question');

  var isStorageSupport = true;
  var storage = {};

  try {
    storage.username = localStorage.getItem('username');
    storage.phone = localStorage.getItem('phone');
    storage.question = localStorage.getItem('question');
  } catch (err) {
    isStorageSupport = false;
  }

  popup.addEventListener('submit', function (evt) {
    if (!username.value || !phone.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('username', username.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('question', question.value);
      }
    }
  });

})();
