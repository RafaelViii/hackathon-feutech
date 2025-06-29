// Import the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// REGISTER function
window.registerUser = async function () {
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;
  const fakeEmail = `${username}@yourapp.com`;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, fakeEmail, password);
    const user = userCredential.user;

    // Save username to Firestore
    await setDoc(doc(db, "users", user.uid), {
      username,
      createdAt: new Date()
    });

    alert("User registered: " + username);
  } catch (error) {
    console.error("Registration Error:", error.message);
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
    const user = userCredential.user;
    alert("Login successful: " + username);
    window.location.href = "adminhome.html";

  } catch (error) {
    console.error("Login Error:", error.message);
    alert("Login failed: " + error.message);
  }
};
