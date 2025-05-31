const mainDot = document.createElement("div");
mainDot.classList.add("dot-cursor");
document.body.appendChild(mainDot);

const trailCount = 5;
const trailDots = [];

for (let i = 0; i < trailCount; i++) {
  const trail = document.createElement("div");
  trail.classList.add("dot-trail");
  document.body.appendChild(trail);
  trailDots.push({ el: trail, x: 0, y: 0 });
}

let mouseX = 0,
  mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

let currentX = 0,
  currentY = 0;

function animate() {
  currentX += (mouseX - currentX) * 0.25;
  currentY += (mouseY - currentY) * 0.25;
  mainDot.style.left = `${currentX}px`;
  mainDot.style.top = `${currentY}px`;

  let prevX = currentX;
  let prevY = currentY;
  trailDots.forEach((dot, i) => {
    dot.x += (prevX - dot.x) * 0.4;
    dot.y += (prevY - dot.y) * 0.4;
    dot.el.style.left = `${dot.x}px`;
    dot.el.style.top = `${dot.y}px`;

    prevX = dot.x;
    prevY = dot.y;
  });

  requestAnimationFrame(animate);
}

animate();
