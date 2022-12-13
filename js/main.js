const nav = document.getElementById("nav"),
    scrollToTop = document.getElementById("scroll-to-top"),
    navLinks = document.querySelectorAll("header .nav .links li"),
    footerLinks = document.querySelectorAll("footer .outro .links li"),
    about = document.getElementById("about"),
    discover = document.getElementById("discover"),
    fireRated = document.getElementById("fire-rated"),
    decoration = document.getElementById("decoration"),
    footer = document.getElementById("footer"),
    discoverBtn = document.getElementById("discover-btn"),
    navContact = document.getElementById("nav-contact"),
    decorContact = document.getElementById("decor-contact");

navLinks[1].addEventListener("click", () => {
    about.scrollIntoView();
});

navLinks[2].addEventListener("click", () => {
    fireRated.scrollIntoView();
});

navLinks[3].addEventListener("click", () => {
    decoration.scrollIntoView();
});

footerLinks[0].addEventListener("click", () => {
    nav.scrollIntoView();
});

footerLinks[1].addEventListener("click", () => {
    about.scrollIntoView();
});

footerLinks[2].addEventListener("click", () => {
    fireRated.scrollIntoView();
});

footerLinks[3].addEventListener("click", () => {
    decoration.scrollIntoView();
});

discoverBtn.addEventListener("click", () => {
    discover.scrollIntoView();
});

navContact.addEventListener("click", () => {
    footer.scrollIntoView();
});

decorContact.addEventListener("click", () => {
    footer.scrollIntoView();
});

function checkscroll() {
    if (document.documentElement.scrollTop > 800) {
        scrollToTop.classList.add("active");
    } else {
        scrollToTop.classList.remove("active");
    }
}

scrollToTop.addEventListener("click", () => {
    nav.scrollIntoView();
});

document.addEventListener("scroll", function () {
    checkscroll();
});
