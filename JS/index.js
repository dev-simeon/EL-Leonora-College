let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navlink-lg")
let backgroundImg = document.querySelector("#hero-page");
let changeNavbarPosition = backgroundImg.offsetHeight;


window.addEventListener("scroll",() => {
    ChangeNavbarAppearance();
});

function ChangeNavbarAppearance() {
    if (window.pageYOffset >= changeNavbarPosition) {
        navbar.classList.add("bg-transparent");
        navbar.classList.add("shadow-sm");
        navLinks.forEach(element => {
            element.style.color = "#666D83";
        });
    } 
    else {
        navbar.classList.remove("bg-trasparent");
        navbar.classList.remove("shadow-sm");
        navLinks.forEach(element => {
            element.style.color = "#FFFFFF";
        });
    }
};