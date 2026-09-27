let carrito = [];
let idiomaActual = 'es';

const traducciones = {
    es: {
        subtitulo: "¡Horneadas con amor todos los días!",
        bienvenidaTitulo: "¡Bienvenidos a Cookie Heaven!",
        bienvenidaTexto: "Somos una pastelería artesanal dedicada a crear las galletas más frescas, crocantes y deliciosas de la ciudad. Usamos ingredientes de primera calidad para que cada bocado sea una experiencia única.",
        ubicacionTitulo: "📍 Nuestra Ubicación",
        ubicacionTexto: "Nos encontrás en Av. Principal 1234, Ciudad. ¡Vení a probarlas recién salidas del horno!",
        cookie1Titulo: "Choco Chips",
        cookie1Desc: "La clásica galleta con chispas de chocolate semiamargo.",
        cookie1Btn: "Agregar al carrito",
        cookie2Titulo: "Red Velvet",
        cookie2Desc: "Suave masa de red velvet rellena de crema de queso.",
        cookie2Btn: "Agregar al carrito",
        cookie3Titulo: "Manteca de Maní",
        cookie3Desc: "Cremosa y crocante con trozos de maní tostado.",
        cookie3Btn: "Agregar al carrito",
        carritoTitulo: "Tu Carrito",
        carritoVacio: "El carrito está vacío."
    },
    it: {
        subtitulo: "Infornate con amore ogni giorno!",
        bienvenidaTitulo: "Benvenuti da Cookie Heaven!",
        bienvenidaTexto: "Siamo una pasticceria artigianale dedicata a creare i biscotti più freschi, croccanti e deliziosi della città. Utilizziamo ingredienti di prima qualità affinché ogni morso sia un'esperienza unica.",
        ubicacionTitulo: "📍 La Nostra Posizione",
        ubicacionTexto: "Ci trovi in Av. Principal 1234, Città. Vieni a provarli appena sfornati!",
        cookie1Titulo: "Gocce di Cioccolato",
        cookie1Desc: "Il classico biscotto con gocce di cioccolato fondente.",
        cookie1Btn: "Aggiungi al carrello",
        cookie2Titulo: "Red Velvet",
        cookie2Desc: "Morbido impasto red velvet farcito con crema al formaggio.",
        cookie2Btn: "Aggiungi al carrello",
        cookie3Titulo: "Burro di Noccioline",
        cookie3Desc: "Cremoso e croccante con pezzi di arachidi tostate.",
        cookie3Btn: "Aggiungi al carrello",
        carritoTitulo: "Il Tuo Carrello",
        carritoVacio: "Il carrello è vuoto."
    }
};

function cambiarIdioma(nuevoIdioma) {
    idiomaActual = nuevoIdioma;
    const text = traducciones[idiomaActual];

    document.getElementById('subtitulo').textContent = text.subtitulo;
    document.getElementById('bienvenida-titulo').textContent = text.bienvenidaTitulo;
    document.getElementById('bienvenida-texto').textContent = text.bienvenidaTexto;
    document.getElementById('ubicacion-titulo').textContent = text.ubicacionTitulo;
    document.getElementById('ubicacion-texto').textContent = text.ubicacionTexto;
    
    document.getElementById('cookie1-titulo').textContent = text.cookie1Titulo;
    document.getElementById('cookie1-desc').textContent = text.cookie1Desc;
    document.getElementById('cookie1-btn').textContent = text.cookie1Btn;

    document.getElementById('cookie2-titulo').textContent = text.cookie2Titulo;
    document.getElementById('cookie2-desc').textContent = text.cookie2Desc;
    document.getElementById('cookie2-btn').textContent = text.cookie2Btn;

    document.getElementById('cookie3-titulo').textContent = text.cookie3Titulo;
    document.getElementById('cookie3-desc').textContent = text.cookie3Desc;
    document.getElementById('cookie3-btn').textContent = text.cookie3Btn;

    document.getElementById('carrito-titulo').textContent = text.carritoTitulo;

    const elemVacio = document.getElementById('carrito-vacio');
    if (elemVacio) {
        elemVacio.textContent = text.carritoVacio;
    }
}

function agregarAlCarrito(nombreGalleta) {
    carrito.push(nombreGalleta);
    actualizarCarrito();
}

function actualizarCarrito() {
    const contador = document.getElementById('contador');
    const lista = document.getElementById('lista-carrito');
    const text = traducciones[idiomaActual];
    
    contador.textContent = carrito.length;
    lista.innerHTML = '';
    
    if (carrito.length === 0) {
        lista.innerHTML = `<li class="vacio" id="carrito-vacio">${text.carritoVacio}</li>`;
        return;
    }

    carrito.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `🍪 ${item}`;
        lista.appendChild(li);
    });
}
