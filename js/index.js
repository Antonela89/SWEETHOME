// 1. Importamos la animación para las redes sociales desde su módulo
import { animationRedes } from "./barraRedes.js";
import { initMobileMenu } from "./mobileNav.js";
import { initContactButtonAnimation } from "./contactButton.js";
import { initHistorias } from "./historias.js";
import { initFormValidation } from "./formulario.js";

// 3. Esperamos a que todo el HTML esté cargado para evitar errores
document.addEventListener('DOMContentLoaded', () => {
    // Ejecutamos las funciones importadas para que todo se ponga en marcha
    animationRedes();
    initMobileMenu();
    initContactButtonAnimation();
    initHistorias();
    initFormValidation();
})