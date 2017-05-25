$(".menu-icon").click(function () {
    $(".navbar-mobile").toggleClass("hidden");
});


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


$(".choose-input").click(function(event) {
    event.stopPropagation();
    $(event.target).find(".checkbox-checked").toggle(".checked");
    $(event.target).find("input[type='checkbox']").trigger('click');
});



$(".main-choice").click(function() {
    $(".main-choice").find("input").prop("checked", false);
    $(".main-choice").removeClass("checked");
    $(event.target).addClass("checked");
    $(event.target).find("input").prop("checked", true);
});


$(".reload-page").click(function(){
    location.reload();
})

$(".otherLocation").change(function(e) {
    e.preventDefault();
    var container = $(".otherLocationContainer");
    if(e.target.checked){
        container.show();
    } else {
        container.hide();
    }
});

$(".selectAll").change(function(e) {
    e.preventDefault();
    if(e.target.checked){
        $(".singleSelect").each(function(index, item){
            $(item).prop('checked', true);
        });
    }
});