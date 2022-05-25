const data = {
    gato1: {
        urlImg: './img/historias/imagen_1/21.jpg',
        description: 'lorem50',
        name: 'nombre',
        icon: './img/historias/iconos/icons8-tren-de-comandos-de-mascotas-30.png',
        img1: './img/historias/imagen_1/15.jpg',
        img2: './img/historias/imagen_1/pexels-brigitte-miller-7527087.jpg',
        img3: './img/historias/imagen_1/pexels-hải-nguyễn-12010469.jpg',
        img4: './img/historias/imagen_1/17.jpg',
    },
    perro1: {
        urlImg: './img/historias/imagen_2/03.jpg',
        description: 'lorem50',
        name: 'Nombre',
        icon: './img/historias/iconos/icons8-corazon-de-perro-30.png',
        img1: './img/historias/imagen_2/02.jpg',
        img2: './img/historias/imagen_2/06.jfif',
        img3: './img/historias/imagen_2/05.jpg',
        img4: './img/historias/imagen_2/10.jpg',
    },
    perroYGato:{
        urlImg: './img/historias/imagen_3/AdobeStock_156100154.jpg',
        description: 'lorem50',
        name: 'Nombre',
        icon: './img/historias/iconos/icons8-corazon-de-perro-30.png',
        img1: './img/historias/imagen_3/01.jpg',
        img2: './img/historias/imagen_3/02.png',
        img3: './img/historias/imagen_3/03.jpg',
        img4: './img/historias/imagen_3/05.jfif',
    },
    gato2:{
        urlImg: './img/historias/imagen_4/18.jpg',
        description: 'lorem50',
        name: 'Nombre',
        icon: './img/historias/iconos/icons8-tren-de-comandos-de-mascotas-30.png',
        img1: './img/historias/imagen_4/13.jpg',
        img2: './img/historias/imagen_4/15.jpeg',
        img3: './img/historias/imagen_4/19.jpg',
        img4: './img/historias/imagen_4/14.jpeg',
    }
}

const imgs = document.querySelectorAll(".apuntar");
const galeriaImagen = document.querySelectorAll(".galeria");

const imgHistoria = document.getElementById('imgHistoria');
const iconHistoria = document.getElementById('iconHistoria');
const nombreHistoria = document.getElementById('nombreHistoria');
const descripcionHistoria = document.getElementById('descripcionHistoria');

nombreHistoria.innerText = data.gato1.name;
descripcionHistoria.innerText = data.gato1.description;

imgs.forEach(element =>
element.addEventListener('click', (e) => {

    imgHistoria.src = data[element.alt].urlImg;
    iconHistoria.src = data[element.alt].icon;
    nombreHistoria.innerText = data[element.alt].name;
    descripcionHistoria.innerText = data[element.alt].description;

    galeriaImagen.forEach((el, index) =>
        el.src = data[element.alt]['img'+(index+1)]);
    })
)