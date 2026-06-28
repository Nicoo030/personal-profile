import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Configuration
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

const messagesDiv = document.getElementById("messages");

// Load Messages
async function loadMessages() {

    messagesDiv.innerHTML = "";

    const querySnapshot = await getDocs(collection(db, "messages"));

    if (querySnapshot.empty) {
        messagesDiv.innerHTML = "<p>No messages found.</p>";
        return;
    }

    document.getElementById("totalMessages").innerHTML =
querySnapshot.size;

querySnapshot.forEach((doc) => {

        const data = doc.data();

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>👤 ${data.name}</h3>

            <p><strong>Email:</strong> ${data.email}</p>

            <p><strong>Subject:</strong> ${data.subject}</p>

            <p><strong>Message:</strong></p>

            <p>${data.message}</p>

            <hr>
        `;

        messagesDiv.appendChild(card);

    });

}

loadMessages();
