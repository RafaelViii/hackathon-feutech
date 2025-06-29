
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import {getFirestore,
  initializeFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDZsj-cL_T_BuLtAz5bkqsw-edZXnumwe0",
  authDomain: "iot-web-58054.firebaseapp.com",
  databaseURL: "https://iot-web-58054-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-web-58054",
  storageBucket: "iot-web-58054.firebasestorage.app",
  messagingSenderId: "949884902967",
  appId: "1:949884902967:web:3035acaed4bc89504629b2",
  measurementId: "G-LES0M8CZH0"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore(app);
const dbRef = collection(db, "database");
const storage = getStorage(app);

// REGISTER function
window.registerUser = async function () {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;
  const fakeEmail = `${username}@yourapp.com`;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, fakeEmail, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      username,
      createdAt: new Date()
    });

    alert("User registered: " + username);
  } catch (error) {
    alert("Registration failed: " + error.message);
  }
};

// LOGIN function
window.loginUser = async function () {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const fakeEmail = `${username}@yourapp.com`;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, fakeEmail, password);
    alert("Login successful: " + username);
    window.location.href = "adminhome.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};

window.createProduct = async () => {
  const name = document.getElementById("productname").value;
  const desc = document.getElementById("proddesc").value;
  const price = Number(document.getElementById("prodprice").value);
  const id = Number(document.getElementById("productid").value);
  const user = document.getElementById("productuser").value;
  const file = document.getElementById("prodimgfile").files[0];

  if (!name || !file) return alert("⛔️ Name and Image are required!");

  try {
    const imgRef = ref(storage, `product_images/${Date.now()}_${file.name}`);
    const snap = await uploadBytes(imgRef, file);
    const url = await getDownloadURL(snap.ref);

    // 🔍 Debug log
    console.log("Uploading product to Firestore with image URL:", url);

    await addDoc(dbRef, {
      prodname: name,
      proddesc: desc,
      prodprice: price,
      productid: id,
      productuser: user,
      prodimg: url
    });

    alert("✅ Product created!");
    document.querySelectorAll("input").forEach(i => i.value = "");
    document.getElementById("prodimgfile").value = "";
  } catch (error) {
    console.error("❌ Error saving to Firestore:", error);
    alert("❌ Failed to create product: " + error.message);
  }
};
