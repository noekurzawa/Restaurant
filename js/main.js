const navShadow = document.querySelector(".navbar");
const hamburger = document.querySelector(".navbar-toggler");
const logo = document.querySelector(".navbar-brand");


hamburger.addEventListener("click", () => {
    logo.classList.toggle('hidden')
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");

  function addShadow() {
    if (window.scrollY >= 50) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  window.addEventListener("scroll", addShadow);
});

$(document).ready(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
});
