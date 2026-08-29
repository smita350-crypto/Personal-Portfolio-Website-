const theme = document.getElementById("theme");

theme.onclick = function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        theme.innerHTML = "☀️";
    } else {
        theme.innerHTML = "🌙";
    }
};
