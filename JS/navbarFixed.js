window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("fixed"); // Agrega la clase si se ha hecho scroll
    } else {
        navbar.classList.remove("fixed"); // Quita la clase si no hay scroll
    }
};