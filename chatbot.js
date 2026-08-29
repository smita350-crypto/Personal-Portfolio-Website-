const input = document.getElementById("input");
const messages = document.getElementById("messages");

function send() {

    let text = input.value.trim();

    if (text === "") return;

    messages.innerHTML += `
        <div class="user">${text}</div>
    `;

    input.value = "";

    setTimeout(() => {

        messages.innerHTML += `
            <div class="bot">${reply(text.toLowerCase())}</div>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 500);
}

function reply(text) {

    if (text.includes("skill"))
        return "💻 HTML, CSS, JavaScript, PHP, Python and R Programming.";

    if (text.includes("project"))
        return "🚀 Smita has worked on Personal Portfolio, Hangman Game and BCA Study Hub.";

    if (text.includes("education") || text.includes("bca"))
        return "🎓 Smita is currently pursuing BCA.";

    if (text.includes("github"))
        return `
        🔗 <a href="https://github.com/smita350-crypto"
        target="_blank">Visit Smita's GitHub</a>
        `;

    if (text.includes("hello") || text.includes("hi"))
        return "👋 Hello! Ask me about Skills, Projects, Education or GitHub.";

    return "🤖 Try asking me about my skills, projects, education or GitHub.";
}

function closeChat() {
    window.parent.postMessage("closeChat", "*");
}
