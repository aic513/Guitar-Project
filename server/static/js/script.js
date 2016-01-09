// Функция вывода формы обратной связи на главной картинке

(function() {

    var link = document.querySelector('.info-right');
    var popup = document.querySelector('.write-us');
    var close = popup.querySelector('.write-us-close');

    link.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.add('write-us-show');
    }, false);

    close.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.remove('write-us-show');
    }, false);

    window.addEventListener('keydown', function(event) {
        if (event.keyCode == 27 && popup.classList.contains('write-us-show')) {
            popup.classList.remove('write-us-show');
        }
    }, false);


})();


// Функция вывода формы обратного звока

(function() {

    var tel = document.querySelector('.contact-right');
    var popup_tel = document.querySelector('.tel-write-us');
    var close = popup_tel.querySelector('.call-us-close');

    tel.addEventListener('click', function(event) {
        event.preventDefault();
        popup_tel.classList.add('contact-right-show');
    }, false);

    close.addEventListener('click', function(event) {
        event.preventDefault();
        popup_tel.classList.remove('contact-right-show');
    }, false);

    window.addEventListener('keydown', function(event) {
        if (event.keyCode == 27 && popup.classList.contains('contact-right-show')) {
            popup_tel.classList.remove('contact-right-show');
        }
    }, false);


})();
