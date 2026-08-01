const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML="☀️";
    }else{
        themeBtn.innerHTML="🌙";
    }

});
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {

    let count = 0;
    const counter = button.querySelector(".count");

    button.addEventListener("click", () => {

        count++;

        counter.style.display = "flex";
        counter.textContent = count;

    });

});
const reservationForm = document.querySelector("#reservation form");

const modal = document.getElementById("successModal");

const closeBtn = document.querySelector(".close-btn");

const okBtn = document.getElementById("okBtn");

reservationForm.addEventListener("submit", function(e){

    e.preventDefault();

    modal.style.display = "flex";

    reservationForm.reset();

});

closeBtn.addEventListener("click", function(){

    modal.style.display = "none";

});

okBtn.addEventListener("click", function(){

    modal.style.display = "none";

});

window.addEventListener("click", function(e){

    if(e.target === modal){

        modal.style.display = "none";

    }

});