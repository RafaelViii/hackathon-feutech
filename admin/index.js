const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// initialize
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iot-web-58054-default-rtdb.asia-southeast1.firebasedatabase.app"
});

// delete user endpoint
app.post('/deleteUser', async (req, res) => {
  const { uid } = req.body;

  if (!uid) {
    return res.status(400).send("UID is required");
  }

  try {
    // delete from Authentication
    await admin.auth().deleteUser(uid);
    console.log(`Deleted user ${uid} from Auth`);

    // delete from Realtime Database
    await admin.database().ref(`users/${uid}`).remove();
    console.log(`Deleted user ${uid} from Database`);

    res.send("User fully deleted.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }
});

app.listen(port, () => {
  console.log(`Admin server running on http://localhost:${port}`);
});
