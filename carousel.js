// Placeholder images and colors for carousel
const PLACEHOLDER_IMAGES = [
  { color: "#FF6B6B", label: "Box 1" },
  { color: "#FFD93D", label: "Box 2" },
  { color: "#6BCB77", label: "Box 3" },
  { color: "#4D96FF", label: "Box 4" },
  { color: "#F06595", label: "Box 5" },
  { color: "#A9DEF9", label: "Box 6" },
  { color: "#E4C1F9", label: "Box 7" },
  { color: "#F7B32B", label: "Box 8" },
  { color: "#43AA8B", label: "Box 9" },
  { color: "#3D5A80", label: "Box 10" },
];

const VISIBLE = 4;
let startIndex = 0;

function renderCarousel() {
  const carousel = document.getElementById('carousel-images');
  carousel.innerHTML = '';
  for (let i = 0; i < VISIBLE; i++) {
    const img = PLACEHOLDER_IMAGES[(startIndex + i) % PLACEHOLDER_IMAGES.length];
    const div = document.createElement('div');
    div.className = 'carousel-img-box';
    div.style.background = img.color;
    const span = document.createElement('span');
    span.className = 'carousel-img-label';
    span.textContent = img.label;
    div.appendChild(span);
    carousel.appendChild(div);
  }
}

function nextCarousel() {
  startIndex = (startIndex + VISIBLE) % PLACEHOLDER_IMAGES.length;
  renderCarousel();
}

window.addEventListener('DOMContentLoaded', () => {
  renderCarousel();
  setInterval(nextCarousel, 5000);
});