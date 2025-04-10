document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Muestra el spinner
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    // Simula un retraso para el envío del formulario
    setTimeout(() => {
        // Oculta el spinner
        spinner.style.display = 'none';

        // Muestra el modal de confirmación
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    }, 2000); // Simula un retraso de 2 segundos
});

// Cierra el modal al hacer clic en la "X"
document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});