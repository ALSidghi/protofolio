document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded 🚀");
});


function showMessage() {

    const message = document.getElementById("message");

    message.innerHTML = "Thanks for visiting my portfolio 🚀";

    message.style.opacity = "0";
    message.style.transform = "translateY(10px)";
    message.style.textShadow = "0 0 10px #a855f7";

    setTimeout(() => {
        message.style.transition = "0.5s ease";
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
    }, 50);
}