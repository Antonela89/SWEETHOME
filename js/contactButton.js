export const initContactButtonAnimation = () => {
    const contactButton = document.getElementById("demo");

    if (contactButton) {
        contactButton.addEventListener("mouseover", () => {
            contactButton.style.color = "rgb(196, 117, 13)";
            contactButton.style.background = "white";
            contactButton.style.fontWeight = "bolder";
        });

        contactButton.addEventListener("mouseout", () => {
            contactButton.style.color = "white";
            contactButton.style.background = "rgb(196, 117, 13)";
        });
    }
};