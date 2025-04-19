document.addEventListener("DOMContentLoaded", function () {
    let navbarHeight = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbarHeight + "px";
  });