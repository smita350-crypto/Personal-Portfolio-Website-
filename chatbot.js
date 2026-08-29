const input = document.getElementById("input");
const messages = document.getElementById("messages");


// SEND MESSAGE

function sendMessage() {

    let text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    input.value = "";

    showTyping();

    setTimeout(() => {

        removeTyping();

        addMessage(
            getReply(text.toLowerCase()),
            "bot"
        );

    }, 700);
}


// ADD MESSAGE

function addMessage(text, type) {

    const div = document.createElement("div");

    div.className = "message " + type;

    div.innerHTML = text;

    messages.appendChild(div);

    messages.scrollTop =
        messages.scrollHeight;
}


// QUICK BUTTON

function quickMessage(text) {

    input.value = text;

    sendMessage();
}


// TYPING

function showTyping() {

    const typing = document.createElement("div");

    typing.id = "typing";

    typing.className = "message bot";

    typing.innerHTML = "🤖 Typing...";

    messages.appendChild(typing);

    messages.scrollTop =
        messages.scrollHeight;
}


function removeTyping() {

    const typing =
        document.getElementById("typing");

    if (typing)
        typing.remove();
}


// AI RESPONSES

function getReply(text) {


    /* HELLO */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            👋 Hello!
            <br><br>
            I'm Smita's Portfolio Assistant.
            <br>
            What would you like to know?
        `;

    }


    /* ABOUT */

    if (
        text.includes("who") ||
        text.includes("about") ||
        text.includes("smita")
    ) {

        return `
            👩‍💻 <b>About Smita</b>
            <br><br>
            Smita Powar is a BCA student interested in
            Web Development, UI/UX Design and Technology.
            <br><br>
            She enjoys learning programming and creating
            creative digital projects.
        `;

    }


    /* SKILLS */

    if (
        text.includes("skill") ||
        text.includes("skills") ||
        text.includes("technology")
    ) {

        return `
            💻 <b>Smita's Skills</b>
            <br><br>
            🌐 HTML
            <br>
            🎨 CSS
            <br>
            ⚡ JavaScript
            <br>
            🐘 PHP
            <br>
            🐍 Python
            <br>
            📊 R Programming
        `;

    }


    /* PROJECTS */

    if (
        text.includes("project") ||
        text.includes("projects") ||
        text.includes("work")
    ) {

        return `
            🚀 <b>Smita's Projects</b>
            <br><br>
            💼 Personal Portfolio
            <br>
            🎮 Hangman Game
            <br>
            📚 BCA Study Hub
        `;

    }


    /* EDUCATION */

    if (
        text.includes("education") ||
        text.includes("study") ||
        text.includes("college") ||
        text.includes("bca")
    ) {

        return `
            🎓 <b>Education</b>
            <br><br>
            Bachelor of Computer Applications (BCA)
            <br><br>
            Currently pursuing BCA with interest in
            Web Development and UI/UX.
        `;

    }


    /* GITHUB */

    if (
        text.includes("github") ||
        text.includes("code") ||
        text.includes("repository")
    ) {

        return `
            🔗 <b>Smita's GitHub</b>
            <br><br>
            <a
                href="https://github.com/smita350-crypto"
                target="_blank"
                style="color:#00c6ff"
            >
                Visit GitHub →
            </a>
        `;

    }


    /* CONTACT */

    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("reach")
    ) {

        return `
            📧 <b>Contact Smita</b>
            <br><br>
            You can find the email address
            in the Contact section of this portfolio.
            <br><br>
            🔗 GitHub:
            <a
                href="https://github.com/smita350-crypto"
                target="_blank"
                style="color:#00c6ff"
            >
                smita350-crypto
            </a>
        `;

    }


    /* THANK YOU */

    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {

        return `
            😊 You're welcome!
            <br><br>
            Feel free to explore Smita's portfolio 🚀
        `;

    }


    /* DEFAULT */

    return `
        🤖 I'm still learning!
        <br><br>

        You can ask me:
        <br>
        💻 <b>What are her skills?</b>
        <br>
        🚀 <b>What are her projects?</b>
        <br>
        🎓 <b>What is her education?</b>
        <br>
        🔗 <b>What is her GitHub?</b>
        <br>
        👩‍💻 <b>Tell me about Smita</b>
    `;

}


// CLOSE CHAT

function closeChat() {

    window.parent.postMessage(
        "closeChat",
        "*"
    );

}
