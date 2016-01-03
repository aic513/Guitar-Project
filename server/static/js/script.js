(function () {

  var link = document.querySelector('.info-right');
  var popup = document.querySelector('.write-us');
  var close = popup.querySelector('.write-us-close');
  var form = popup.querySelector('.contact-form-on-button');
  var login = form.querySelector('#login-field');
  var password = form.querySelector('#email-field');
  var storage = localStorage.getItem('login');

  link.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('write-us-show');
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  }, false);

  close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('write-us-show');
  }, false);

  form.addEventListener('submit', function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      popup.classList.add('login-popup-error');
    } else {
      localStorage.setItem('login', login.value);
    }
  }, false);

  window.addEventListener('keydown', function(event) {
    if (event.keyCode == 27 && popup.classList.contains('write-us-show')) {
      popup.classList.remove('write-us-show');
    }
  }, false);

})();


(function () {
  var el = document.querySelector('.main-picture-index') || document.querySelector('.main-picture');

  window.onscroll = function () {
    offset = document.documentElement.scrollTop || document.body.scrollTop;
    el.style.backgroundPosition = 0;
    el.style.backgroundPosition = '50% ' + (offset / 3) + 'px';
  };
})();