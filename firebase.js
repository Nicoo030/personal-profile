// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-yVKL8X9AyNXV3CjqcG6OlZPMMJCTg0c",
  authDomain: "nico-portfolio-67aa2.firebaseapp.com",
  projectId: "nico-portfolio-67aa2",
  storageBucket: "nico-portfolio-67aa2.firebasestorage.app",
  messagingSenderId: "957953095871",
  appId: "1:957953095871:web:723d21c5c59c2b818dee0a",
  measurementId: "G-FQS5LC69HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc };
