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

});
