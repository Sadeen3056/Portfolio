
// ================= MOBILE MENU =================

let menuBtn = document.querySelector(".menu-btn");

let navLinks = document.querySelector(".nav-links");


menuBtn.onclick = function () {

    navLinks.classList.toggle("active");

};



// ================= CLOSE MENU AFTER CLICK =================

let links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.onclick = function () {

        navLinks.classList.remove("active");

    };

});



// ================= CONTACT FORM =================

let form = document.querySelector("form");


form.onsubmit = function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

};
