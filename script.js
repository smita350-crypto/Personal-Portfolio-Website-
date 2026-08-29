// TYPING ANIMATION

const words = [
    "Web Developer",
    "UI/UX Designer",
    "Python Programmer",
    "Future Software Developer"
];

let i = 0;
let j = 0;
let deleting = false;

function typeEffect() {

    let word = words[i];

    if (!deleting) {
        document.getElementById("typing").textContent =
            word.substring(0, j++);

        if (j > word.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        document.getElementById("typing").textContent =
            word.substring(0, j--);

        if (j < 0) {
            deleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

function reveal() {

    reveals.forEach(item => {

        let position = item.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            item.classList.add("show");
        }

    });
}

window.addEventListener("scroll", reveal);
reveal();


// MOUSE GLOW

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// DARK MODE

const theme = document.getElementById("theme");

theme.onclick = function () {

    document.body.classList.toggle("dark");

    theme.textContent =
        document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
};


// AI BUTTON

function aiMessage() {

    alert(
        "🤖 Hi! I'm Smita's AI Portfolio Assistant!\n\n" +
        "✨ Explore her Skills\n" +
        "🚀 Check her Projects\n" +
        "📚 Learn about her Education"
    );

}
