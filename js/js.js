const grid = document.querySelector('.grid1');
const container = document.querySelector('.project-container');

let mouseX = 0;
let mouseY = 0;
let gridX = 0;
let gridY = 0;

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  mouseX = (e.clientX / innerWidth - 0.5) * 2;
  mouseY = (e.clientY / innerHeight - 0.5) * 2;
});

function animate() {
  const containerRect = container.getBoundingClientRect();
  const gridRect = grid.getBoundingClientRect();

const maxOffsetX = Math.max(0, grid.scrollWidth - (container.clientWidth - parseFloat(getComputedStyle(container).paddingRight)));
const maxOffsetY = Math.max(0, grid.scrollHeight - (container.clientHeight - parseFloat(getComputedStyle(container).paddingBottom)));

  gridX += (mouseX * maxOffsetX - gridX) * 0.015;
  gridY += (mouseY * maxOffsetY - gridY) * 0.015;

  gridX = Math.min(Math.max(0, gridX), maxOffsetX);
  gridY = Math.min(Math.max(0, gridY), maxOffsetY);

  grid.style.transform = `translate(${-gridX}px, ${-gridY}px)`;

  requestAnimationFrame(animate);
}

animate();






