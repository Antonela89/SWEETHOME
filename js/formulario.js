const inputNombreYApellido = document.querySelectorAll('.textoForm');
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputEdad = document.getElementById('Edad');
const inputTelefono = document.getElementById('Telefono');
const inputMail = document.getElementById ('Email');
const button = document.getElementById('enviar');
const form = document.getElementById('form');

const validarNombreYApellido = /^[a-z-]{3,16}$/i;
const validarEdad = /^100|[1-9]?\d$/;
const validarTelefono = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
const validarMail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

console.log(inputNombreYApellido);

inputNombreYApellido.forEach(element => {
    element.addEventListener("keyup", (e)=> {
        if(validarNombreYApellido.test(e.target.value)) {
            e.target.style.borderBottom='2px solid green';
        } else {
            e.target.style.borderBottom='2px solid red';
        } 
    })
})


inputEdad.addEventListener("keyup", (e)=> {
    if(e.target.value > 18 && e.target.value < 200) {
        e.target.style.borderBottom='2px solid green';
    } else {
        e.target.style.borderBottom='2px solid red';
    } 
})

inputTelefono.addEventListener ("keyup", (e)=> {
    /*console.log(e.target.value);
    console.log(validarTelefono.test(e.target.value));*/

    if(validarTelefono.test(e.target.value)) {
        e.target.style.borderBottom='2px solid green';
    } else {
        e.target.style.borderBottom='2px solid red';
    } 
})

inputMail.addEventListener ("keyup", (e)=> {
    /*console.log(e.target.value);
    console.log(validarMail.test(e.target.value));*/

    if(validarMail.test(e.target.value)) {
        console.log(validarMail.test(e.target.value));
        e.target.style.borderBottom='2px solid green';
    } else {
        e.target.style.borderBottom='2x solid red';
    } 
})

button.addEventListener('click', (e) => {
    e.preventDefault();
    form.submit();

    if  ((validarNombreYApellido.test(e.target.value)) && (validarEdad.test(e.target.value)) &&
    (validarTelefono.test(e.target.value)) && (validarMail.test(e.target.value))) {
        const form = document.getElementById('form');
        form.submit();
    } else {
        alert('Complete correctamente los campos');
    }
})
