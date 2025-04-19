//navbar sticky variables
navbar = document.getElementById("navbar");
hero = document.getElementById("top-content");
sticky = navbar.offsetTop + 1;

navLogo = document.getElementsByClassName("nav-logo")[0];
navLogo.style.cursor = "pointer";
navLogo.addEventListener("click", () => {
    window.location.href = "index.html";
})


//navbar sticky 
stickynav = () => {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
        hero.style.paddingTop = "60px";
    } else {
        navbar.classList.remove("sticky");
        hero.style.paddingTop = "0px";
    }
}
window.addEventListener("scroll", stickynav);









