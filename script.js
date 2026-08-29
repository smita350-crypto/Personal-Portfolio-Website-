// 3D CARD EFFECT

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX =
            (y - rect.height / 2) / 15;

        const rotateY =
            (rect.width / 2 - x) / 15;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

});
const words = [
    "Web Developer",
    "UI/UX Designer",
    "Python Programmer",
    "Future Software Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    const word = words[wordIndex];

    if (!deleting) {
        typing.textContent = word.substring(0, charIndex);
        charIndex++;

        if (charIndex > word.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = word.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
