// 1. Envolvemos toda la lógica en una función que podamos exportar.
export const initFormValidation = () => {
    // 2. Seleccionamos los elementos una sola vez.
    const form = document.getElementById('form');
    // Si no hay formulario en la página, no hacemos nada.
    if (!form) {
        return;
    }

    const inputs = form.querySelectorAll('input[name]'); // Seleccionamos inputs que tengan un 'name'

    // 3. Centralizamos las reglas de validación en un objeto. ¡Mucho más limpio!
    const validationRules = {
        nombre: /^[a-zA-Z\s-]{3,16}$/,
        apellido: /^[a-zA-Z\s-]{3,16}$/,
        Edad: (value) => value > 18 && value < 100,
        Telefono: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
        Email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    };

    // 4. Creamos una función reutilizable para validar un campo.
    const validateField = (field) => {
        const rule = validationRules[field.name];
        let isValid = false;

        // Comprobamos si la regla es una Regex o una función
        if (typeof rule === 'function') {
            isValid = rule(field.value);
        } else {
            isValid = rule.test(field.value);
        }

        // 5. Cambiamos CLASES, no estilos. El CSS se encarga del resto.
        if (isValid) {
            field.classList.add('valid');
            field.classList.remove('invalid');
        } else {
            field.classList.add('invalid');
            field.classList.remove('valid');
        }
        return isValid;
    };

    // 6. Añadimos el listener 'keyup' a cada input.
    inputs.forEach(input => {
        // Solo añadimos validación en tiempo real a los inputs que tienen una regla
        if (validationRules[input.name]) {
            input.addEventListener('keyup', () => validateField(input));
        }
    });

    // 7. Manejamos el envío del formulario con el evento 'submit'.
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Siempre prevenimos el envío primero

        let isFormValid = true;
        // Validamos todos los campos una última vez antes de enviar
        inputs.forEach(input => {
            if (validationRules[input.name]) {
                if (!validateField(input)) {
                    isFormValid = false; // Si un solo campo es inválido, el formulario es inválido.
                }
            }
        });

        if (isFormValid) {
            alert('¡Formulario enviado con éxito!'); // Opcional: mostrar un mensaje de éxito
            // form.submit(); // Descomenta esta línea para enviar el formulario de verdad
        } else {
            alert('Por favor, corrige los campos en rojo.'); // O mostrar un mensaje de error en la página
        }
    });
};