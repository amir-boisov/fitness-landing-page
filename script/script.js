/* Navigation variables */
const navigationLinks = document.getElementsByClassName("navigation-links")[0];
const openMenu = document.getElementsByClassName("bars")[0];
const closeMenu = document.getElementsByClassName("cross")[0];
/* Navigation variables end */

/* Navigation open-close */
openMenu.addEventListener("click", showM);
closeMenu.addEventListener("click", closeM);

function closeM() {
    navigationLinks.style.top = "-100%";
}

function showM() {
    navigationLinks.style.display = "flex";
    navigationLinks.style.top = "0";
}
/* Navigation open-close end */
