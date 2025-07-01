// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your Firebase config (fill with your details)
const firebaseConfig = {
  apiKey: "AIzaSyDZsj-cL_T_BuLtAz5bkqsw-edZXnumwe0",
  authDomain: "iot-web-58054.firebaseapp.com",
  databaseURL: "https://iot-web-58054-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-web-58054",
  storageBucket: "iot-web-58054.appspot.com",
  messagingSenderId: "949884902967",
  appId: "1:949884902967:web:d580b43eaf34040c4629b2",
  measurementId: "G-8NXYYY4ETV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login form handler
document.querySelector('.login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Swal.fire({
        icon: 'success',
        title: 'Logged in!',
        text: 'You have successfully logged in.',
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        window.location.href = "dashboard.html"; // Redirect to your dashboard or landing page
      });
    })
    .catch((error) => {
      let msg = error.message.replace("Firebase:", "");
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: msg,
        confirmButtonColor: '#1976d2'
      });
    });
});