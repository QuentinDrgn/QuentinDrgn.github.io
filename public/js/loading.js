const targetText = "CHARGEMENT...";
const element = document.getElementById("loading-text");

let iteration = 0;
const speed = 50; 

const interval = setInterval(() => {
  element.textContent = targetText
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return Math.random() > 0.5 ? "1" : "0";
    })
    .join("");

  if (iteration >= targetText.length) {
    clearInterval(interval);
  }

  iteration += 0.13; 
}, speed);

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loading = document.querySelector('.loading');
    const mainContent = document.getElementById('main-content');

    loading.style.display = 'none';
    mainContent.classList.remove('hidden');
  }, 1);
});
