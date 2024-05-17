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

menuIcon.addEventListener("click", function () {
  mobile__menu.classList.toggle("open");
});

crossBtn.addEventListener("click", function () {
  mobile__menu.classList.remove("open");
});

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

$(document).ready(function () {
  // Add an event listener to save the scrolling text content when it changes
  $("#scrollingText").on("input", function () {
    var textContent = $(this).text(); // or .html() depending on the element type
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
  $("#scrollingText2").on("input", function () {
    var textContent = $(this).html(); // Use jQuery to get inner HTML
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
      breakpoint: 600,
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

// ========product section slider/=====/

$(".product-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  // centerPadding: "30px",

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
// ========product section slider/=====/

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};

// var MainImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("small-img");

for (var i = 0; i < smallimg.length; i++) {
  smallimg[i].onclick = function (event) {
    MainImg.src = event.target.src;

    // Remove border from all small-img elements
    for (var j = 0; j < smallimg.length; j++) {
      smallimg[j].classList.remove("selected");
    }

    // Add border to the clicked small-img
    this.classList.add("selected");
  };
}

// ========product section slider bottom content/=====/

// ========read more js code start/=====/
function showMore() {
  var moreText = document.getElementById("more");
  var moreLink = document.getElementById("read-more-link");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    moreLink.innerHTML = "Read Less...";
  } else {
    moreText.style.display = "none";
    moreLink.innerHTML = "Read More...";
  }
}
// ========read more js code end/=====/

// ========increment decrement js code start/=====/

document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("count");
  var increment = document.getElementById("plus");
  var decrement = document.getElementById("minus");

  // Initial counter value
  var count = 0;

  // Event listener for increment button
  increment.addEventListener("click", function () {
    count++;
    element.textContent = count;
  });

  // Event listener for decrement button
  decrement.addEventListener("click", function () {
    count--;
    element.textContent = count;
  });
});

// ========increment decrement js code end/=====/
// ========love react js code start/=====/

function toggleLove() {
  var heartIcon = document.getElementById("heartIcon");

  if (heartIcon.classList.contains("far")) {
    heartIcon.classList.remove("far");
    heartIcon.classList.add("fas"); // Change the icon to filled heart
  } else {
    heartIcon.classList.remove("fas");
    heartIcon.classList.add("far"); // Change the icon to hollow heart
  }
}
// ========love react js code end/=====/
// ========color change js code start/=====/

document.addEventListener("DOMContentLoaded", function () {
  var colorButtons = document.querySelectorAll(".color-select");

  colorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      colorButtons.forEach(function (btn) {
        btn.classList.remove("color-selected-active");
      });

      // Add active class to clicked button
      button.classList.add("color-selected-active");
    });
  });
});
// ========color change js code end/=====/

// ========related product section slider js start/=====/

$(".related-product-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  // centerPadding: "30px",

  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
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
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// ========related product section slider js end/=====/


