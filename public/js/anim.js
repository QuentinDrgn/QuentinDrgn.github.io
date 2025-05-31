// Animate logo on card hover and revert on mouse leave
window.addEventListener("DOMContentLoaded", function () {
  var card = document.querySelector(".profil-professionnel .card");
  var logo = card ? card.querySelector(".logo") : null;
  if (!card || !logo) return;

  card.addEventListener("mouseenter", function () {
    logo.classList.add("logo-anim-end");
  });
  card.addEventListener("mouseleave", function () {
    logo.classList.remove("logo-anim-end");
  });
});

// Keep the original timeout animation for initial effect
setTimeout(function () {
  var logo = document.querySelector(".logo");
  if (logo) logo.classList.add("logo-anim-end");
}, 2000);
