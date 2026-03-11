// Animaciones minimalistas al hacer scroll (Intersection Observer)
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // El elemento se animará cuando el 15% sea visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Solo animar la primera vez
            }
        });
    }, observerOptions);

    // Observar todos los elementos que tengan la clase fade-in-up
    document.querySelectorAll('.fade-in-up').forEach((el) => {
        observer.observe(el);
    });
});

let index = 0;
const slides = document.querySelectorAll(".slide");

function cambiarSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length; // avanza y reinicia al final
    slides[index].classList.add("active");
}

setInterval(cambiarSlide, 3000); // cambia cada 3 segundos

function abrirMaps() {
    // Reemplaza con tu dirección real o coordenadas
    window.open("https://maps.app.goo.gl/jKF6hsTd9xk7dtDB6", "_blank");
}

function abrirWaze() {
    // Reemplaza con tu dirección o coordenadas
    window.open("https://waze.com/ul?q=TU_DIRECCION_AQUI&navigate=yes", "_blank");
}





