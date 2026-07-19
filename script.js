// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkBtn.innerHTML="☀ Light Mode";
    }else{
        darkBtn.innerHTML="🌙 Dark Mode";
    }
};


// Scroll To Top Button

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

};

topBtn.onclick=function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};
// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();

    const email = form.querySelector('input[type="email"]').value.trim();

    const message = form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){
        alert("Please fill all fields.");
        return;
    }

    alert("Message Sent Successfully!");

    form.reset();

});
