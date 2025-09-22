export const initMobileMenu = () => {
    const navToggle = document.querySelector(".nav__toggle");  
    const navLinks = document.querySelector(".nav__links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
};