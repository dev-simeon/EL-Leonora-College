let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navlink-lg")
let heroSection = document.querySelector("#hero-page");

window.addEventListener("load",() => {
    ChangeNavbarAppearance();
});

window.addEventListener("scroll",() => {
    ChangeNavbarAppearance();
});

function ChangeNavbarAppearance() {
    if (heroSection.getBoundingClientRect().bottom <= 50) {
        navbar.classList.add("bg-white");
        navbar.classList.add("shadow-sm");
        navLinks.forEach(element => {
            element.style.color = "#666D83";
        });
    } 
    else {
        navbar.classList.remove("bg-white");
        navbar.classList.remove("shadow-sm");
        navLinks.forEach(element => {
            element.style.color = "#FFFFFF";
        });
    }
};