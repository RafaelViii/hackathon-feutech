import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDZsj-cL_T_BuLtAz5bkqsw-edZXnumwe0",
  authDomain: "iot-web-58054.firebaseapp.com",
  databaseURL: "https://iot-web-58054-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-web-58054",
  storageBucket: "iot-web-58054.appspot.com",
  messagingSenderId: "949884902967",
  appId: "1:949884902967:web:6e7f78c7cd0fa1484629b2",
  measurementId: "G-5C79490N66"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const VISIBLE = 4;
const PAGES_PER_SECTION = 5;

let currentSection = 0;
let currentPage = 0;
let products = [];
let pages = [];
let sections = [];

// Loads all products from your database and uses the direct imageUrl property
async function loadAllProducts() {
  const productsSnap = await get(ref(db, "products"));
  if (!productsSnap.exists()) return [];
  const accounts = productsSnap.val();
  const allProducts = [];
  for (const accountNumber in accounts) {
    const prods = accounts[accountNumber];
    for (const prodId in prods) {
      const prod = prods[prodId];
      allProducts.push({
        imgURL: prod.imageUrl || "",
        label: prod.productName || "No Name",
        owner: prod.userName || ""
      });
    }
  }
  return allProducts;
}

function splitIntoPages(arr, pageSize) {
  const pages = [];
  let i = 0;
  while (i < arr.length) {
    pages.push(arr.slice(i, i + pageSize));
    i += pageSize;
  }
  return pages;
}

function splitIntoSections(pages, pagesPerSection) {
  const sections = [];
  for (let i = 0; i < pages.length; i += pagesPerSection) {
    sections.push(pages.slice(i, i + pagesPerSection));
  }
  return sections;
}

function renderCarouselPage() {
  const carousel = document.getElementById("carousel-images");
  carousel.innerHTML = "";
  const sectionPages = sections[currentSection] || [];
  const page = sectionPages[currentPage] || [];
  for (let i = 0; i < page.length; i++) {
    const item = page[i];
    const box = document.createElement("div");
    box.className = "carousel-img-box";

    if (item && item.imgURL) {
      const img = document.createElement("img");
      img.src = item.imgURL;
      img.alt = item.label || "business";
      img.onerror = () => { img.style.display = "none"; };
      box.appendChild(img);

      // Only show label overlay
      const label = document.createElement("span");
      label.className = "carousel-img-label";
      label.textContent = item.label;
      box.appendChild(label);
    } else {
      // Optionally: "Add business" card (if you want, uncomment below)
      // const empty = document.createElement("div");
      // empty.className = "carousel-no-img";
      // box.appendChild(empty);
      // const label = document.createElement("span");
      // label.className = "carousel-img-label";
      // label.textContent = "Add business";
      // box.appendChild(label);
      continue;
    }

    carousel.appendChild(box);
  }

  // Dots (pagination)
  const dots = document.getElementById("carousel-pagination");
  dots.innerHTML = "";
  for (let i = 0; i < sectionPages.length; i++) {
    const dot = document.createElement("span");
    dot.className = "carousel-page-dot";
    if (i === currentPage) dot.classList.add("active");
    dot.onclick = () => {
      currentPage = i;
      renderCarouselPage();
    };
    dots.appendChild(dot);
  }
}

function prevPage() {
  const sectionPages = sections[currentSection];
  currentPage = (currentPage - 1 + sectionPages.length) % sectionPages.length;
  renderCarouselPage();
}
function nextPage() {
  const sectionPages = sections[currentSection];
  currentPage = (currentPage + 1) % sectionPages.length;
  renderCarouselPage();
}

window.addEventListener("DOMContentLoaded", async () => {
  products = await loadAllProducts();
  pages = splitIntoPages(products, VISIBLE);
  sections = splitIntoSections(pages, PAGES_PER_SECTION);
  currentSection = 0;
  currentPage = 0;
  renderCarouselPage();

  document.getElementById("carousel-arrow-left").onclick = prevPage;
  document.getElementById("carousel-arrow-right").onclick = nextPage;
});