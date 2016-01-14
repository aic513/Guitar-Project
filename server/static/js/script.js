(function () {

  var link = document.querySelector('.info-right');
  var popup = document.querySelector('.write-us');
  var close = popup.querySelector('.write-us-close');
  var form = popup.querySelector('.contact-form-on-button');
  var name = form.querySelector('#name-field');
  var email = form.querySelector('#post-field');
  var storage = localStorage.getItem('login');

  link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('write-us-show');
    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
  }, false);

  close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('write-us-show');
  }, false);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!name.value || !email.value) {
      popup.classList.add('login-popup-error');

    } else {
      localStorage.setItem('login', name.value);
      document.querySelector('.contact-form-on-button').style.display = 'none';
      document.querySelector('.contact-form-wait-text').style.display = 'block';

      var data = {
        user: form.login.value,
        email: form.email.value,
        phone: form.number.value
      };
      request(data, function (response) {
        document.querySelector('.contact-form-wait-text').style.display = 'none';
        document.querySelector('.contact-form-send-text').style.display = 'block';
      });
    }
  }, false);

  function request(data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", form.action);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
    });
    xhr.send(JSON.stringify(data));
  }

  window.addEventListener('keydown', function (event) {
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
