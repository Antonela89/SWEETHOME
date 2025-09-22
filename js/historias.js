const data = {
    gato1: {
        urlImg: './img/historias/imagen_1/21.jpg',
        description: 'Mora fue encontrada en una fría noche de invierno, sola y asustada. Gracias al cuidado de nuestros voluntarios, hoy es una gata juguetona y cariñosa que solo busca un hogar donde dar y recibir mimos. Le encanta perseguir pelotitas de papel.',
        name: 'Mora',
        icon: './img/historias/iconos/icons8-tren-de-comandos-de-mascotas-30.png',
        img1: './img/historias/imagen_1/15.jpg',
        img2: './img/historias/imagen_1/pexels-brigitte-miller-7527087.jpg',
        img3: './img/historias/imagen_1/pexels-hải-nguyễn-12010469.jpg',
        img4: './img/historias/imagen_1/17.jpg',
    },
    perro1: {
        urlImg: './img/historias/imagen_2/03.jpg',
        description: 'Cheto es un perro leal y tranquilo. Fue rescatado de una situación de abandono, pero su espíritu noble sigue intacto. Es el compañero ideal para caminatas tranquilas y siestas en el sofá. Se lleva muy bien con otros perros.',
        name: 'Cheto',
        icon: './img/historias/iconos/icons8-corazon-de-perro-30.png',
        img1: './img/historias/imagen_2/02.jpg',
        img2: './img/historias/imagen_2/06.jfif',
        img3: './img/historias/imagen_2/05.jpg',
        img4: './img/historias/imagen_2/10.jpg',
    },
    perroYGato: {
        urlImg: './img/historias/imagen_3/AdobeStock_156100154.jpg',
        description: 'Luna y Sol son la prueba de que los perros y los gatos pueden ser los mejores amigos. Llegaron juntos al refugio y son inseparables. Buscan una familia que quiera adoptar a este dúo dinámico y llenar su hogar de doble amor.',
        name: 'Luna y Sol',
        icon: './img/historias/iconos/icons8-corazon-de-perro-30.png',
        img1: './img/historias/imagen_3/01.jpg',
        img2: './img/historias/imagen_3/02.png',
        img3: './img/historias/imagen_3/03.jpg',
        img4: './img/historias/imagen_3/05.jfif',
    },
    gato2: {
        urlImg: './img/historias/imagen_4/18.jpg',
        description: 'Nieve es una gata elegante y misteriosa. Disfruta de su independencia, pero también ama una buena sesión de caricias cuando entra en confianza. Es perfecta para una persona tranquila que respete su espacio.',
        name: 'Nieve',
        icon: './img/historias/iconos/icons8-tren-de-comandos-de-mascotas-30.png',
        img1: './img/historias/imagen_4/13.jpg',
        img2: './img/historias/imagen_4/15.jpeg',
        img3: './img/historias/imagen_4/19.jpg',
        img4: './img/historias/imagen_4/14.jpeg',
    }
}

export const initHistorias = () => {
    const thumbnails = document.querySelectorAll(".apuntar");
    const galeriaSecundaria = document.querySelectorAll(".galeria");

    const imgHistoria = document.getElementById('imgHistoria');
    const iconHistoria = document.getElementById('iconHistoria');
    const nombreHistoria = document.getElementById('nombreHistoria');
    const descripcionHistoria = document.getElementById('descripcionHistoria');

    if (thumbnails.length === 0 || !imgHistoria) {
        return;
    }

    const updateStoryContent = (storyKey) => {
        const storyData = data[storyKey];
        if (!storyData) return;

        imgHistoria.src = storyData.urlImg;
        iconHistoria.src = storyData.icon;
        nombreHistoria.innerText = storyData.name;
        descripcionHistoria.innerText = storyData.description;

        galeriaSecundaria.forEach((imgElement, index) => {
            imgElement.src = storyData['img' + (index + 1)];
        });
    };

    thumbnails.forEach(element => {
        element.addEventListener('click', (e) => {
            const storyKey = e.target.alt;
            updateStoryContent(storyKey);
            thumbnails.forEach(img => img.classList.remove('active-thumbnail'));
            element.classList.add('active-thumbnail');
        });
    });

    updateStoryContent('gato1');
    if (thumbnails[0]) {
        thumbnails[0].classList.add('active-thumbnail');
    }
}