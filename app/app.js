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


$(".counter-minus").click(function(event) {
    var value = $(event.target).parents(".counter").find(".counter-value").val();
    value = parseInt(value);

    console.log(value);

    if (value >= 1) {
        $(event.target).parents(".counter").find(".counter-value").val(--value);
    }
});

$(".counter-plus").click(function(event) {
    var value = $(event.target).parents(".counter").find(".counter-value").val();
    value = parseInt(value);

    console.log(value);

    $(event.target).parents(".counter").find(".counter-value").val(++value);

});


$(document).ready(function() {

    $(".single-column__table").hover(function(){
            $(event.target).parents(".single-column__table").find(".table-price").css("background", "#5d8900");
        },
        function() {
            $(event.target).parents(".single-column__table").find(".table-price").css("background", "white");
        }
    );

    $(".single-column__table").hover(function(){
            $(event.target).parents(".single-column__table").find(".table-price").css("color", "white");
        },
        function() {
            $(event.target).parents(".single-column__table").find(".table-price").css("color", "#0E69A0");
        }
    );

});

$(".radio-btn").click(function() {
    $(event.target).parents(".choice-box").find(".radio-btn__check").toggle(".checked");
    if($(".checked")) {
        $(event.target).parents(".single-column__table").find(".table-price").css("background", "#5d8900");
        $(event.target).parents(".single-column__table").find(".table-price").css("color", "white");

        $(event.target).parents(".single-column").find(".single-column__table").css("box-shadow", "0 8px 12px 0 rgba(0,0,0,0.2)");
    }

    else {
        $(event.target).parents(".single-column").find(".single-column__table").css("box-shadow", "none");

    }


});

