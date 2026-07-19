// Welcome Message
console.log("Welcome to Smita Powar Portfolio");

// Smooth Scrolling for Navigation
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Highlight Navigation Link
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#0d6efd";
    });

    link.addEventListener("mouseleave", () => {
        link.style.color = "white";
    });
});

// Footer Year
const footer = document.querySelector("footer p");
footer.innerHTML = `© ${new Date().getFullYear()} Smita Powar. All Rights Reserved.`;
