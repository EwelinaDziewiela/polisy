$(".menu-icon").click(function () {
    $(".navbar-mobile").toggleClass("hidden");
});


$(document).ready(function() {


    var cookieAlert = $('<div class="cookie-alert">' +
        '<p class="cookie-alert__text">Zbieramy cookies cokolwiek to znaczy.' +
        '<a href="" class="cookie-alert__policy">Akceptujesz naszą politykę prywatności i cookies?</a></p>' +
        '<p class="cookie-alert__btn"><a class="cookie-alert__link">akceptuję!</a></p>' +
        '</div>'
        );

    $(".cookie-alert__wrapper").append(cookieAlert);

    $(".cookie-alert__btn").click(function() {
        $(".cookie-alert__wrapper").children(cookieAlert).remove();


    })

});