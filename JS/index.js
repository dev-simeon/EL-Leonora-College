let navbar = document.querySelector("nav");
let navLinks = document.querySelectorAll(".navlink-lg")
let backgroundImg = document.querySelector("#hero-page");
let changeNavbarPosition = backgroundImg.offsetHeight;


window.addEventListener("scroll",() => {
    ChangeNavbarAppearance();
});

function ChangeNavbarAppearance() {
    if (window.pageYOffset >= changeNavbarPosition) {
        navbar.classList.add("bg-white");
        navbar.classList.add("shadow-sm");
        navbar.classList.add("opacity-75");
        navLinks.forEach(element => {
            element.style.color = "#666D83";
        });
    } 
    else {
        navbar.classList.remove("bg-white");
        navbar.classList.remove("shadow-sm");
        navbar.classList.remove("opacity-75");
        navLinks.forEach(element => {
            element.style.color = "#FFFFFF";
        });
    }
};