// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9vo9OZ5EUmLZMFJ3eqQTnl4oldC-1dXc",
  authDomain: "noteslist-vue-82584.firebaseapp.com",
  projectId: "noteslist-vue-82584",
  storageBucket: "noteslist-vue-82584.appspot.com",
  messagingSenderId: "498166847361",
  appId: "1:498166847361:web:540bdc8c10916228253a80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
