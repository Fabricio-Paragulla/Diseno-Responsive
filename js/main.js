document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionamos los elementos del DOM
    const navToggle = document.querySelector('.navbar__toggle');
    const navMenu = document.querySelector('.navbar__collapse');
    const navLinks = document.querySelectorAll('.navbar__link'); // Para cerrar al hacer click

    // Verificamos que los elementos existan para evitar errores
    if (navToggle && navMenu) {

        const toggleMenu = () => {
            // Alternar clase visual (CSS)
            navMenu.classList.toggle('is-active');

            const isOpened = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isOpened);
        };

        navToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita burbujeo inesperado
            toggleMenu();
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Solo cerramos si está abierto para no interferir con la lógica
                if (navMenu.classList.contains('is-active')) {
                    toggleMenu();
                }
            });
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
                toggleMenu();
                navToggle.focus(); // Devolver el foco al botón para navegación por teclado
            }
        });

        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('is-active') && 
                !navMenu.contains(e.target) && 
                !navToggle.contains(e.target)) {
                toggleMenu();
            }
        });
    }
});