const imagenes = document.querySelectorAll('.imagen');

imagenes.forEach(element => {
    const textSibling = element.nextElementSibling;
    element.addEventListener ('mouseover', (e) => {
        textSibling.style.left = "-135px";
        textSibling.style.padding = "3px";
        textSibling.style.borderRadius = "5px";
        textSibling.style.backgroundColor= "rgba(196, 117, 13, 0.6)";
    })
})

imagenes.forEach(element => {
    const textSibling = element.nextElementSibling;
    element.addEventListener ('mouseout', (e) => {
        textSibling.style.left= "100px";
    })
})
