const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️ Light Mode";
    } else {
        themeBtn.innerHTML = "🌙 Dark Mode";
    }
});

function updateClock() {
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("datetime").innerHTML =
        now.toLocaleString("en-US", options);
}

updateClock();
setInterval(updateClock, 1000);
