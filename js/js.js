$(".mobil-menu").on("click", function () {
    $(".mobil-menu").toggleClass("show");
    $(".list-items").toggleClass("show-menu")
});
$(".list-item").on("click", function () {
    $(".list-items").toggleClass("show-menu");
    $(".mobil-menu").toggleClass("show")
});