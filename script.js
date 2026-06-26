document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("theme-toggle");

    if (button) {
        button.addEventListener("click", function () {
            document.body.classList.toggle("dark");
        });
    }

    function updateClock() {
        const now = new Date();
        const clock = document.getElementById("datetime");

        if (clock) {
            clock.innerHTML = now.toLocaleString();
        }
    }

    updateClock();
    setInterval(updateClock, 1000);

});
