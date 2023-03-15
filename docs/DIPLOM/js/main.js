$(function () {
  var mixer = mixitup(".plans__items");

  $(".plans__filter-btn").on("click", function () {
    $(".plans__filter-btn").removeClass("plans__filter-btn--active");
    $(this).addClass("plans__filter-btn--active");
  });
});
