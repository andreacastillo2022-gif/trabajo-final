// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-productos-27c38.firebaseapp.com",
  projectId: "react-productos-27c38",
  storageBucket: "react-productos-27c38.firebasestorage.app",
  messagingSenderId: "817288977641",
  appId: "1:817288977641:web:fc21b59d7f4a9e5f266478"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;