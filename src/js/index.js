function changeNodeContent(node, content, screenSize) {
  if ($(window).width() < screenSize) {
    $(node).contents().last()[0].textContent = "";
  }
  if ($(window).width() > screenSize) {
    $(node).contents().last()[0].textContent = content;
  }
}

function toggleMenu() {
  $(".menu-btn").click(function (e) {
    $(".header__menu").slideToggle(400);
    e.preventDefault();
  });
}

$(".hero-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnDotsHover: true,
  dotsClass: "hero-slider__dots",
});

$(".projects-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnDotsHover: true,
  prevArrow: ".projects-slider__btn--prev",
  nextArrow: ".projects-slider__btn--next",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

/*Закрыть модальное окно */
$(".close-modal").click(function (e) {
  $(this).parents(".modal").css({ animation: "close-modal 0.5s ease" });
  setTimeout(() => {
    $(this).parents(".modal__wrapper").css({ display: "none " });
  }, 300);

  e.preventDefault();
});

/*Открыть модальное окно в соответствии с слайдом*/
$(".projects-slider__item").click(function (e) {
  let projectNum;
  $(this).attr("id", function (i, val) {
    projectNum = val.match(/\d$/gm)[0];
  });
  $(`#modal-project-${projectNum}`).css({ display: "block" });
  $(`#modal-project-${projectNum} .modal`).css({
    animation: "open-modal 0.3s ease",
  });
});

/*Слайдеры в модальных окнах */
$("#modal-project-1 .modal-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnDotsHover: true,
  prevArrow: "#modal-project-1 .modal-slider__btn--prev",
  nextArrow: "#modal-project-1 .modal-slider__btn--next",
});
$("#modal-project-2 .modal-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnDotsHover: true,
  prevArrow: "#modal-project-2 .modal-slider__btn--prev",
  nextArrow: "#modal-project-2 .modal-slider__btn--next",
});
$("#modal-project-3 .modal-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnDotsHover: true,
  prevArrow: "#modal-project-3 .modal-slider__btn--prev",
  nextArrow: "#modal-project-3 .modal-slider__btn--next",
});
$("#modal-project-4 .modal-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnDotsHover: true,
  prevArrow: "#modal-project-4 .modal-slider__btn--prev",
  nextArrow: "#modal-project-4 .modal-slider__btn--next",
});
$("#modal-project-5 .modal-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnDotsHover: true,
  prevArrow: "#modal-project-5 .modal-slider__btn--prev",
  nextArrow: "#modal-project-5 .modal-slider__btn--next",
});
$("#modal-project-6 .modal-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnDotsHover: true,
  prevArrow: "#modal-project-6 .modal-slider__btn--prev",
  nextArrow: "#modal-project-6 .modal-slider__btn--next",
});

$(window).resize(function () {
  changeNodeContent(".menu-btn", "menu", 577);
});
changeNodeContent(".menu-btn", "menu", 577);
toggleMenu();
