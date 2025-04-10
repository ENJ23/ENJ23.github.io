document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.post');

    // Función para verificar si el elemento está en la vista
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para mostrar los artículos al hacer scroll
    function revealPosts() {
        posts.forEach(post => {
            if (isElementInViewport(post)) {
                post.classList.add('visible');
            }
        });
    }

    // Escuchar el evento de scroll
    window.addEventListener('scroll', revealPosts);
    // Llamar a la función al cargar la página
    revealPosts();
});