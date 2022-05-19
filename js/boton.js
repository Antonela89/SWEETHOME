const button = document.getElementById('');
console.log(button);

button.addEventListener('mousover', (e) => {
    e.target.style.color ="rgb(196, 117, 13)";
    e.target.style.backgroundColor = "white";
    e.target.style.fontWeight = "bold";
});


button.addEventListener('mouseut', (e) => {
    e.target.style.color = "white";
    e.target.style.backgroundColor = "rgb(196, 117, 13)";
});