import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Firebase config
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

async function loadProductsForCarousel() {
  const snapshot = await getDocs(collection(db, "database"));
  snapshot.forEach(doc => {
    const data = doc.data();
    PLACEHOLDER_IMAGES.push({
      imgURL: data.prodimg || "",
      label: data.prodname || "No Name",
      price: data.prodprice || 0,
      owner: data.productuser || "Unknown"
    });
  });
}

function renderCarousel() {
  const carousel = document.getElementById("carousel-images");
  carousel.innerHTML = "";

  for (let i = 0; i < VISIBLE; i++) {
    const item = PLACEHOLDER_IMAGES[(startIndex + i) % PLACEHOLDER_IMAGES.length];
    const div = document.createElement("div");
    div.className = "carousel-img-box";
    div.style.backgroundImage = `url(${item.imgURL})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";

    const hoverBox = document.createElement("div");
    hoverBox.className = "carousel-hover-box";
    hoverBox.innerHTML = `
      <div><strong>₱${item.price.toLocaleString()}</strong></div>
      <div>👤 ${item.owner}</div>
    `;

    const label = document.createElement("span");
    label.className = "carousel-img-label";
    label.textContent = item.label;

    div.appendChild(hoverBox);
    div.appendChild(label);
    carousel.appendChild(div);
  }
}

function nextCarousel() {
  startIndex = (startIndex + VISIBLE) % PLACEHOLDER_IMAGES.length;
  renderCarousel();
}

window.addEventListener("DOMContentLoaded", async () => {
  await loadProductsForCarousel();
  renderCarousel();
  setInterval(nextCarousel, 5000);
});
