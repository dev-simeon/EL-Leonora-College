let body = document.querySelector("body");
let navbar = document.querySelector("nav");
let backgroundImg = document.querySelector("#hero-page");
let changeNavbarPosition = backgroundImg.offsetHeight;

body.addEventListener("scroll",() => {
    if (window.scrollY >= changeNavbarPosition) {
        navbar.classList.add(".d-none")
    } 
    else {
        console.log("hey");
    }
});

console.log("hey");
console.log(changeNavbarPosition)
