const countdownDate = new Date("April 9, 2025 00:00:00").getTime();

// Function to Update Countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown-container").innerHTML = "<h2>Registration is closed!</h2>";
        document.querySelector(".register-btn-container").style.display = "none"; // Hide Register Button
        return;
    }

    // Convert Time to Days, Hours, Minutes, Seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update HTML
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Update Circular Progress
    updateCircle("days-ring", days, 30);
    updateCircle("hours-ring", hours, 24);
    updateCircle("minutes-ring", minutes, 60);
    updateCircle("seconds-ring", seconds, 60);

    // Add Glow Effect When Time is Running Low
    applyGlowEffect("seconds-ring", seconds);
}

// Function to Animate Circular Progress
function updateCircle(id, value, max) {
    const circle = document.getElementById(id);
    const circumference = 2 * Math.PI * 60;
    const progress = (value / max) * circumference;
    circle.style.strokeDashoffset = circumference - progress;
}

// Function to Apply Glow Effect
function applyGlowEffect(id, value) {
    const circle = document.getElementById(id);
    if (value <= 10) {
        circle.classList.add("glow");
    } else {
        circle.classList.remove("glow");
    }
}

// Update Countdown Every Second
setInterval(updateCountdown, 1000);
updateCountdown();
