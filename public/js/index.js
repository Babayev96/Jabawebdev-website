// slider
$(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav"
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    slide: "div",
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '50px',
    prevArrow: "<img src='../img/arrowleft.png' class='prev' alt='1'>",
    nextArrow: "<img src='../img/arrowright.png' class='next' alt='2'>",
  });