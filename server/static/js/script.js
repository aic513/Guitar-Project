(function() {

    var link = document.querySelector('.info-right');
    var popup = document.querySelector('.write-us');
    var close = popup.querySelector('.write-us-close');
   
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

    window.addEventListener('keydown', function(event) {
        if (event.keyCode == 27 && popup.classList.contains('write-us-show')) {
            popup.classList.remove('write-us-show');
        }
    }, false);


})();
