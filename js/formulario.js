const imputNombreYApellido = document.querySelectorAll('.texto');
const imputNombre = document.getElementById('nombre');
const imputApellido = document.getElementById('apellido');
const imputEdad = document.getElementById('Edad');
const imputTelefono = document.getElementById('Telefono');
const imputMail = document.getElementById ('Email');
const button = document.getElementById('enviar');
const form = document.getElementById('form');


const validarNombreYApellido = /^[a-z-]{3,16}$/i;
const validarEdad = /^[0-9_-]{1,2}$/;
const validarTelefono = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
const validarMail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

imputNombreYApellido.forEach(element => {
    element.addEventListener("keyup", (e)=> {
        console.log(e.target.value);
        console.log(validarNombreYApellido.test(e.target.value));

        if(validarNombreYApellido.test(e.target.value)) {
            e.target.style.borderBottom='2px solid green';
        } else {
            e.target.style.borderBottom='2px solid red';
        } 
    })
})

imputEdad.addEventListener ("keyup", (e)=> {
    console.log(e.target.value);
    console.log(validarEdad.test(e.target.value));

    if(validarEdad.test(e.target.value)) {
        e.target.style.borderBottom='2px solid green';
    } else {
        e.target.style.borderBottom='2px solid red';
    } 
})

imputTelefono.addEventListener ("keyup", (e)=> {
    console.log(e.target.value);
    console.log(validarTelefono.test(e.target.value));

    if(validarTelefono.test(e.target.value)) {
        e.target.style.borderBottom='2px solid green';
    } else {
        e.target.style.borderBottom='2px solid red';
    } 
})

imputMail.addEventListener ("keyup", (e)=> {
    console.log(e.target.value);
    console.log(validarMail.test(e.target.value));

    if(validarMail.test(e.target.value)) {
        e.target.style.borderBottom='2px solid green';
    } else {
        e.target.style.borderBottom='2x solid red';
    } 
})

button.addEventListener('click', (e) => {
    form.submit();

    if  ((validarNombreYApellido.test(e.target.value)) && (validarEdad.test(e.target.value)) &&
    (validarTelefono.test(e.target.value)) && (validarMail.test(e.target.value))) {
        const form = document.getElementById('form');
        form.submit();
    } else {
        alert('Complete correctamente los campos');
    }
});
