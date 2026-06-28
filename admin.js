import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    deleteDoc,
    doc
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
const totalMessages = document.getElementById("totalMessages");

async function loadMessages() {

    try {

        messagesDiv.innerHTML = "<p>Loading messages...</p>";

        const snapshot = await getDocs(collection(db, "messages"));

        messagesDiv.innerHTML = "";

        totalMessages.textContent = snapshot.docs.length;

        if (snapshot.empty) {
            messagesDiv.innerHTML = "<p>No messages found.</p>";
            return;
        }

        snapshot.forEach((document) => {

            const data = document.data();

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>👤 ${data.name}</h3>

                <p><strong>📧 Email:</strong> ${data.email}</p>

                <p><strong>📌 Subject:</strong> ${data.subject}</p>

                <p><strong>💬 Message:</strong></p>

                <p>${data.message}</p>

                <hr>

<button class="delete-btn" data-id="${document.id}">
    🗑 Delete Message
</button>
            `;

            messagesDiv.appendChild(card);

            card.querySelector(".delete-btn").addEventListener("click", async () => {

    const confirmDelete = confirm(
        "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "messages", card.querySelector(".delete-btn").dataset.id));

    loadMessages();

});

        });

    } catch (error) {

    console.error(error);

    messagesDiv.innerHTML = `
        <h3 style="color:red;">Error</h3>
        <p>${error.message}</p>
    `;

}

}

loadMessages();
