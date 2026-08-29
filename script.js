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


// SCROLL ANIMATION

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

document.addEventListener("mousemove", function(e) {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// DARK MODE

const theme = document.getElementById("theme");

theme.onclick = function() {

    document.body.classList.toggle("dark");

    theme.textContent =
        document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
};


// OPEN CHATBOT

function openChat() {

    document.querySelector(".chatbot").style.display = "block";

}


// CLOSE CHATBOT

function closeChat() {

    document.querySelector(".chatbot").style.display = "none";

}


// CHATBOT

function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    let chat = document.getElementById("chatMessages");

    // USER MESSAGE

    chat.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    input.value = "";

    // BOT RESPONSE

    let reply = getReply(message.toLowerCase());

    setTimeout(function() {

        chat.innerHTML += `
            <div class="bot-message">
                ${reply}
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;

    }, 500);
}


// BOT ANSWERS

function getReply(message) {

    if (
        message.includes("skill") ||
        message.includes("skills")
    ) {

        return `
            💻 Smita's Skills:<br>
            🌐 HTML<br>
            🎨 CSS<br>
            ⚡ JavaScript<br>
            🐘 PHP<br>
            🐍 Python<br>
            📊 R Programming
        `;

    }

    if (
        message.includes("project") ||
        message.includes("projects")
    ) {

        return `
            🚀 Smita's Projects:<br>
            💼 Personal Portfolio<br>
            🎮 Hangman Game<br>
            📚 BCA Study Hub
        `;

    }

    if (
        message.includes("education") ||
        message.includes("study") ||
        message.includes("bca")
    ) {

        return `
            🎓 Smita is currently pursuing
            Bachelor of Computer Applications (BCA).
        `;

    }

    if (
        message.includes("github") ||
        message.includes("code")
    ) {

        return `
            🔗 You can visit Smita's GitHub here:<br>
            <a href="https://github.com/smita350-crypto"
            target="_blank">
            github.com/smita350-crypto
            </a>
        `;

    }

    if (
        message.includes("contact") ||
        message.includes("email")
    ) {

        return `
            📧 You can contact Smita through
            the email shown in the Contact section.
        `;

    }

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ) {

        return `
            👋 Hello! How can I help you?
            <br><br>
            Try asking:
            <br>
            • What are her skills?
            <br>
            • What projects has she made?
            <br>
            • Tell me about her education.
        `;

    }

    return `
        🤖 I'm still learning!
        <br><br>
        Try asking about:
        <br>
        💻 Skills
        <br>
        🚀 Projects
        <br>
        🎓 Education
        <br>
        🔗 GitHub
        <br>
        📧 Contact
    `;
}
