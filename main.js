$(document).ready(function() {
    $(".menu-icon").click(function() {
      $("nav ul").toggleClass("active");
    });
  });

const button = document.querySelector("#scroll-button");
const content = document.querySelector("#scroll-content");

button.addEventListener("click", () => {
  window.scrollTo({
    top: content.offsetTop,
    behavior: "smooth"
  });
});