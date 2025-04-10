document.getElementById('toggle-plan').addEventListener('change', function() {
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        // Obtener el precio mensual y anual desde los atributos data
        const monthlyPrice = price.getAttribute('data-monthly');
        const annualPrice = price.getAttribute('data-annual');

        // Cambiar el texto del precio según el estado del toggle
        if (this.checked) {
            price.textContent = annualPrice; // Mostrar precio anual
        } else {
            price.textContent = monthlyPrice; // Mostrar precio mensual
        }
    });
});