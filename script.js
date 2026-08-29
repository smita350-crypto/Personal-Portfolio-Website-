/* TYPING EFFECT */

const words = [
    "Web Developer",
    "UI/UX Designer",
    "Python Programmer",
    "Creative Learner"
];

let word = 0;
let letter = 0;
let deleting = false;

function typingEffect() {

    const element = document.getElementById("typing");

    if (!element) return;

    const current = words[word];

    if (!deleting) {

        element.textContent =
            current.substring(0, letter);

        letter++;

        if (letter > current.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;
        }

    } else {

        element.textContent =
            current.substring(0, letter);

        letter--;

        if (letter < 0) {

            deleting = false;
            letter = 0;

            word++;

            if (word >= words.length)
                word = 0;
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}

typingEffect();


/* MOUSE GLOW */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
    "radial-gradient(circle,#00c6ff18,transparent 70%)";
glow.style.transform =
    "translate(-50%,-50%)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove", function(e) {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* DARK/LIGHT BUTTON */

const theme = document.getElementById("theme");

if (theme) {

    theme.onclick = function() {

        document.body.classList.toggle("light");

        if (
            document.body.classList.contains("light")
        ) {
            theme.textContent = "🌙";
        } else {
            theme.textContent = "☀️";
        }

    };
}
