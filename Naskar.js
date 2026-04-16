// Naskar.js - Minimalist & Interactive Logic

document.addEventListener("DOMContentLoaded", function () {

    // 1. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with 'reveal' class
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for the fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 3. Map Functions
function abrirMaps() {
    // Taller Naskar location
    window.open("https://maps.app.goo.gl/jKF6hsTd9xk7dtDB6", "_blank");
}

function abrirWaze() {
    // Taller Naskar location for Waze
    window.open("https://waze.com/ul?ll=23.2532495,-106.4307833&navigate=yes", "_blank");
}
