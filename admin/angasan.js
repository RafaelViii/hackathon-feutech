
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
  apiKey: "AIzaSyBPbtdqBMd2uK4duSICkOd7vshfVKHL0sQ",
  authDomain: "scaleup2.firebaseapp.com",
  projectId: "scaleup2",
  storageBucket: "scaleup2.firebasestorage.app",
  messagingSenderId: "545731372745",
  appId: "1:545731372745:web:4dc02ef445fa8057c9cf18",
  measurementId: "G-MVQME30YMJ"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);             
const dbRef = collection(db, "database"); 
const storage = getStorage(app); // ✅ This is good
window.storage = storage; 


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

      const imgRef = ref(storage, `product_images/${Date.now()}_${file.name}`);
      const snap = await uploadBytes(imgRef, file);
      const url = await getDownloadURL(snap.ref);

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
    };

    const tableBody = document.getElementById("productTableBody");
    onSnapshot(dbRef, (snapshot) => {
      tableBody.innerHTML = "";
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><img src="${data.prodimg}" /></td>
          <td><input value="${data.prodname}" data-field="prodname" /></td>
          <td><input value="${data.proddesc}" data-field="proddesc" /></td>
          <td><input type="number" value="${data.prodprice}" data-field="prodprice" /></td>
          <td><input type="number" value="${data.productid}" data-field="productid" /></td>
          <td><input value="${data.productuser}" data-field="productuser" /></td>
          <td>
            <button class="btn update-btn" onclick="updateRow('${docSnap.id}', this)">✏️</button>
            <button class="btn delete-btn" onclick="deleteRow('${docSnap.id}', '${data.prodimg}')">🗑️</button>
          </td>
        `;
        tableBody.appendChild(tr);
      });
    });

    window.updateRow = async (id, btn) => {
      const row = btn.closest("tr");
      const inputs = row.querySelectorAll("input");
      const updateData = {};
      inputs.forEach(input => {
        const key = input.dataset.field;
        updateData[key] = input.type === "number" ? Number(input.value) : input.value;
      });
      await updateDoc(doc(db, "database", id), updateData);
      alert("✅ Product updated!");
    };

    window.deleteRow = async (id, imgUrl) => {
      if (!confirm("Delete this product?")) return;
      await deleteDoc(doc(db, "database", id));

      try {
        const imgRef = ref(storage, imgUrl);
        await deleteObject(imgRef);
      } catch (e) {
        console.warn("Image delete failed:", e.message);
      }

      alert("🗑️ Product deleted!");
    };