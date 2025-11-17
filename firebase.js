import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBc_pQJ_vBdtVRYi1NVWBIhHxXSzeamhOU",
  authDomain: "fluencyforge-d6f5a.firebaseapp.com",
  projectId: "fluencyforge-d6f5a",
  storageBucket: "fluencyforge-d6f5a.firebasestorage.app",
  messagingSenderId: "77152092872",
  appId: "1:77152092872:web:303b42995ad73ef6269bfd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Named export for serverTimestamp
export { db, storage, serverTimestamp };
