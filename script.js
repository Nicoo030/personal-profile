document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("theme-toggle");

    // Restore saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        if (button) {
            button.innerHTML = "☀️ Light Mode";
        }
    }

    // Theme toggle
    if (button) {
        button.addEventListener("click", function () {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                button.innerHTML = "☀️ Light Mode";
                localStorage.setItem("theme", "dark");
            } else {
                button.innerHTML = "🌙 Dark Mode";
                localStorage.setItem("theme", "light");
            }
        });
    }

    // Live Clock
    function updateClock() {
        const now = new Date();
        const clock = document.getElementById("datetime");

        if (clock) {
            clock.innerHTML = now.toLocaleString();
        }
    }

    updateClock();
    setInterval(updateClock, 1000);

    // Dynamic Greeting
    function updateGreeting() {
        const hour = new Date().getHours();
        const greeting = document.getElementById("greeting-text");

        if (!greeting) return;

        if (hour < 12) {
            greeting.innerHTML = "☀️ Good Morning!";
        } else if (hour < 18) {
            greeting.innerHTML = "🌤️ Good Afternoon!";
        } else {
            greeting.innerHTML = "🌙 Good Evening!";
        }
    }

    updateGreeting();

    // Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
    
// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("form-message");

        if (name === "" || email === "" || subject === "" || message === "") {

            formMessage.style.color = "red";
            formMessage.innerHTML = "❌ Please fill in all fields.";

            return;
        }

        formMessage.style.color = "green";
        formMessage.innerHTML =
"✅ Thank you, " + name + "! Your message has been submitted successfully.";
        contactForm.reset();

    });

}
    
});
