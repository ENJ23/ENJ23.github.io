document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filters input');
    const classes = document.querySelectorAll('.clase');
    const tableRows = document.querySelectorAll('.tabla-horarios tbody tr');

    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            const category = filter.id.toLowerCase();

            // Filtrar las clases en la galería
            classes.forEach(clase => {
                if (category === 'all' || clase.dataset.category === category) {
                    clase.style.display = 'block';
                } else {
                    clase.style.display = 'none';
                }
            });

            // Filtrar las filas de la tabla
            tableRows.forEach(row => {
                const rowCategory = row.querySelector('td[data-label="Clase"]').textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (category === 'all' || rowCategory === category) {
                    row.style.display = 'table-row';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
});