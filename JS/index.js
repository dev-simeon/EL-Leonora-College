let body = document.querySelector("body");
let navbar = document.querySelector("nav");
let navLinks = document.querySelectorAll(".navlink-lg")
let backgroundImg = document.querySelector("#hero-page");
let changeNavbarPosition = backgroundImg.offsetHeight;


body.addEventListener("scroll",() => {
    ChangeNavbarAppearance();
});

function ChangeNavbarAppearance() {
    if (window.pageYOffset >= changeNavbarPosition) {
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