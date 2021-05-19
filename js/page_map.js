/*function addClass() {
  const moreinfo = document.querySelector('#info');
  addEventListener.addEventListener('click', () => {
    moreinfo.classList.add('.bg');

  })

}
window.onload = addClass;*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};
$(document).ready(function () {
  $(".academic").click(function () {
    $(".box1").animate({
      width: '100%',
      //height: '400px'
    }, 2000);

    $(".content-after").animate({
      opacity: '0',
      fontSize: '1rem'
    }, 3000);

  });
});
$(".namm").click(function () {
  $(".box2").animate({
    width: '100%'
  }, 2000);
});
$(".vorhees").click(function () {
  $(".box3").animate({
    width: '100%'
  }, 2000);
});
$(".library").click(function () {
  $(".box4").animate({
    width: '100%'
  }, 2000);
});
$(".general").click(function () {
  $(".box5").animate({
    width: '100%'
  }, 2000);
});
$(".pearl").click(function () {
  $(".box6").animate({
    width: '100%'
  }, 2000);
});
$(".howard").click(function () {
  $(".box7").animate({
    width: '100%'
  }, 2000);
});
$(".enviro").click(function () {
  $(".box8").animate({
    width: '100%'
  }, 2000);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  });
});