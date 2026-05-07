document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded 🚀");
});

function showMessage() {
    const message = document.getElementById("message");

    message.innerHTML = "Thanks for visiting my portfolio 🚀";

    // Style احترافي
    message.style.color = "#c084fc";
    message.style.marginTop = "15px";
    message.style.fontSize = "18px";
    message.style.textShadow = "0 0 10px #a855f7";

    // Animation دخول ناعم
    message.style.opacity = "0";
    message.style.transform = "translateY(10px)";

    setTimeout(() => {
        message.style.transition = "0.5s ease";
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
    }, 50);
}