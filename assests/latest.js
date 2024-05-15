$(document).ready(function () {
  // ========responsive menu js code/=====/

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  // nav bar js
  let menuIcon = document.querySelector(".menuIcon");
  let crossBtn = document.querySelector(".crossBtn");
  // let crossBtn = document.getElementsByClassName('crossBtn')
  let mobile__menu = document.querySelector(".mobile__menu");

  // menuIcon.addEventListener("click", function () {
  //   mobile__menu.classList.toggle("open");
  // });

  $(".mobile__menu").click(function () {
    mobile__menu.classList.toggle("open");
  });
  $(".crossBtn").click(function () {
    mobile__menu.classList.remove("open");
  });

  // crossBtn.addEventListener("click", function () {
  //   mobile__menu.classList.remove("open");
  // });

  // ========responsive menu js code/=====/

  // ========hero slider/=====/
  $(".hero-slider-section").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// ========hero slider/=====/
// ========marquee loop js/=====/
// Retrieve the scrolling text content from local storage
var storedText = localStorage.getItem("scrollingText");

// Set the scrolling text content
if (storedText) {
  document.getElementById("scrollingText").innerHTML = storedText;
}

$(document).ready(function () {
  // Add an event listener to save the scrolling text content when it changes
  // document
  //   .getElementById("scrollingText")
  //   .addEventListener("input", function () {
  //     var textContent = this.innerHTML;
  //     localStorage.setItem("scrollingText", textContent);
  //   });

  $("#scrollingText").on("input", function () {
    var textContent = $(this).html();
    localStorage.setItem("scrollingText", textContent);
  });
});

// ========marquee loop js/=====/

// ========marquee loop js-2/=====/
// Retrieve the scrolling text content from local storage
var storedText = localStorage.getItem("scrollingText2");

// Set the scrolling text content
if (storedText) {
  document.getElementById("scrollingText2").innerHTML = storedText;
}

$(document).ready(function () {
  // Add an event listener to save the scrolling text content when it changes
  // document
  //   .getElementById("scrollingText2")
  //   .addEventListener("input", function () {
  //     var textContent = this.innerHTML;
  //     localStorage.setItem("scrollingText2", textContent);
  //   });

  $("#scrollingText2").on("input", function () {
    var textContent = $(this).html();
    localStorage.setItem("scrollingText2", textContent);
  });
});

// ========marquee loop js-2/=====/
// ========change section slider/=====/

$(".Change-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  centerPadding: "30px",

  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// ========change section slider/=====/
// ========feature week section slider start/=====/

$(".week-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // asNavFor: ".slider-for",
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// ========feature week section slider end/=====/

// ========testimonial section slider start/=====/
$(".testimonial-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  centerPadding: "30px",
  spaceBetween: 30,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// ========testimonial section slider end/=====/

// ========about section slider start/=====/
$(".about-hero-slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  centerPadding: "30px",
  spaceBetween: 30,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// ========about  section slider end/=====/

///---- counting animation start---///

const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      counterUp(el, {
        duration: 2000,
        delay: 16,
      });
      el.classList.add("is-visible");
    }
  });
};

// Select all elements with the class 'counter'
const elements = document.querySelectorAll(".counter");

// Create an IntersectionObserver for each element
const observers = [];
elements.forEach((el) => {
  const observer = new IntersectionObserver(callback, { threshold: 1 });
  observer.observe(el);
  observers.push(observer);
});

///---- counting animation end---///

///---- Scroll to Top start---///

$(document).ready(function () {
  //   // Get the button element
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  // Show or hide the button based on scroll position
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Get the button element
//   var scrollToTopBtn = document.getElementById("scrollToTopBtn");

//   // Show or hide the button based on scroll position
//   window.onscroll = function () {
//     if (
//       document.body.scrollTop > 20 ||
//       document.documentElement.scrollTop > 20
//     ) {
//       scrollToTopBtn.style.display = "block";
//     } else {
//       scrollToTopBtn.style.display = "none";
//     }
//   };
// });

$("#scrollToTopBtn").click(function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Scroll to the top when the button is clicked
// scrollToTopBtn.addEventListener("click", function () {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// });

///---- Scroll to Top end---///

// pagination js start///
// jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/

$(document).ready(function () {
  var items = $(".list-wrapper .list-item");
  var numItems = items.length;
  var perPage = 4;

  items.slice(perPage).hide();

  $("#pagination-container").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    },
  });
});
// pagination js end///
