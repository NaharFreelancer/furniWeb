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
let menuIcon = document.querySelector('.menuIcon')
let crossBtn = document.querySelector('.crossBtn')
// let crossBtn = document.getElementsByClassName('crossBtn')
let mobile__menu = document.querySelector('.mobile__menu')

menuIcon.addEventListener('click', function(){
    mobile__menu.classList.toggle('open')
})

crossBtn.addEventListener('click', function(){
    mobile__menu.classList.remove('open')
})








// function hideSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.display = 'none';
// }

// // Hide the sidebar when the window is loaded
// window.addEventListener('load', hideSidebar);

// // Function to toggle the sidebar's visibility
// function toggleSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     if (sidebar.style.display !== 'flex') {
//         sidebar.style.display = 'flex';
//     } else {
//         sidebar.style.display = 'none';
//     }
// }
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
// ========hero slider/=====/
// ========marquee loop js/=====/
// Retrieve the scrolling text content from local storage
var storedText = localStorage.getItem("scrollingText");

// Set the scrolling text content
if (storedText) {
  document.getElementById("scrollingText").innerHTML = storedText;
}

// Add an event listener to save the scrolling text content when it changes
document.getElementById("scrollingText").addEventListener("input", function () {
  var textContent = this.innerHTML;
  localStorage.setItem("scrollingText", textContent);
});
// ========marquee loop js/=====/
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
});
// ========feature week section slider end/=====/

// ========testimonial section slider start/=====/
$(".testimonial-slider").slick({
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
        slidesToShow: 3,
        slidesToScroll: 3,
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
// ========testimonial section slider end/=====/

///---- Scroll to Top start---///

document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
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

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

///---- Scroll to Top end---///
