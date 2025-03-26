// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzk2Q8v1l6DNpRtxgfi567bjweXBwypUY",
  authDomain: "e-bus-4fd84.firebaseapp.com",
  projectId: "e-bus-4fd84",
  storageBucket: "e-bus-4fd84.firebasestorage.app",
  messagingSenderId: "313600716838",
  appId: "1:313600716838:web:064714dd98aff6694e36e7",
  measurementId: "G-R3R7KKLZJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);