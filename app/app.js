$(".menu-icon").click(function () {
    $(".navbar-mobile").toggleClass("hidden");
});




//$(document).ready(function () {
//
//    $(".cookie-alert__btn").click(function () {
//        $(".cookie-alert").hide();
//        localStorage.setItem("accepted", "true");
//    });
//        localStorage.getItem("accepted");
//    console.log(localStorage.getItem("accepted"));
//    if (localStorage.getItem("accepted") === "true") {
//        $(".cookie-alert").hide();
//    }
//});


$(document).ready(function () {
    if(localStorage.getItem("accepted") !== "true") {
        $(".cookie-alert").show();
    }
    else {
        $(".cookie-alert").hide();
    }
    $(".cookie-alert__btn").click(function () {
        localStorage.setItem("accepted", "true");
        $(".cookie-alert").hide();
    });
    console.log(localStorage.getItem("accepted"));
});


