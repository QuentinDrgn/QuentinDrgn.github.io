window.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("back-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
