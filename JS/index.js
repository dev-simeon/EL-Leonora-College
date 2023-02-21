let body = document.querySelector("body");
let navbar = document.querySelector("nav");
let navLinks = document.querySelectorAll(".navlink-lg")
let backgroundImg = document.querySelector("#hero-page");
let changeNavbarPosition = backgroundImg.offsetHeight;


function ChangeNavbarAppearance() {
    if (window.pageYOffset >= changeNavbarPosition) {
        navbar.classList.add("bg-transparent");
        navbar.classList.add("shadow");
        navLinks.forEach(element => {
            element.style.color = "#666D83";
        });
        
    } 
    else {
        navbar.classList.remove("bg-transparent");
        navbar.classList.remove("shadow");
        navLinks.forEach(element => {
            element.style.color = "#FFFFFF";
        });
    }
};