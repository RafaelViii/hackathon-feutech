import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPbtdqBMd2uK4duSICkOd7vshfVKHL0sQ",
  authDomain: "scaleup2.firebaseapp.com",
  projectId: "scaleup2",
  storageBucket: "scaleup2.firebasestorage.app",
  messagingSenderId: "545731372745",
  appId: "1:545731372745:web:4dc02ef445fa8057c9cf18",
  measurementId: "G-MVQME30YMJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PLACEHOLDER_IMAGES = [];

const VISIBLE = 4;
let startIndex = 0;

function renderCarousel() {
  const carousel = document.getElementById('carousel-images');
  carousel.innerHTML = '';
  for (let i = 0; i < VISIBLE; i++) {
    const item = PLACEHOLDER_IMAGES[(startIndex + i) % PLACEHOLDER_IMAGES.length];
    const div = document.createElement('div');
    div.className = 'carousel-img-box';

    div.style.backgroundImage = `url(${item.imgURL})`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';

    const span = document.createElement('span');
    span.className = 'carousel-img-label';
    span.textContent = item.label;
    div.appendChild(span);
    carousel.appendChild(div);
  }
}

function nextCarousel() {
  startIndex = (startIndex + VISIBLE) % PLACEHOLDER_IMAGES.length;
  renderCarousel();
}

async function loadProductsForCarousel() {
  const snapshot = await getDocs(collection(db, "database"));
  PLACEHOLDER_IMAGES.length = 0;

  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.prodimg && data.prodname) {
      PLACEHOLDER_IMAGES.push({
        imgURL: data.prodimg,
        label: data.prodname
      });
    }
  });

  renderCarousel();
}

window.addEventListener('DOMContentLoaded', async () => {
  await loadProductsForCarousel();
  setInterval(nextCarousel, 5000);
});
